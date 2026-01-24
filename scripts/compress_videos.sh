#!/bin/bash

# Video Compression Script for Landing Page
# Converts MP4 videos to WebM format with web and mobile variants
# Uses VP9 codec for maximum compression with good quality

# Configuration
INPUT_DIR="$(dirname "$0")"
OUTPUT_DIR="${INPUT_DIR}/compressed"
WEB_DIR="${OUTPUT_DIR}/web"
MOBILE_DIR="${OUTPUT_DIR}/mobile"

# Quality settings (CRF: lower = better quality, higher file size)
# VP9 CRF range: 0-63, recommended 15-35
WEB_CRF=30          # Good balance for web
MOBILE_CRF=33       # Slightly more compression for mobile

# Resolution settings
WEB_MAX_HEIGHT=1080   # Full HD for web
MOBILE_MAX_HEIGHT=720 # 720p for mobile (good for most mobile screens)

# Bitrate limits (prevents excessive file sizes)
WEB_MAX_BITRATE="2M"
MOBILE_MAX_BITRATE="1M"

# Audio settings
AUDIO_BITRATE="128k"
MOBILE_AUDIO_BITRATE="96k"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Create output directories
mkdir -p "$WEB_DIR" "$MOBILE_DIR"

# Function to get file size in human readable format
get_file_size() {
    local file="$1"
    if [[ "$OSTYPE" == "darwin"* ]]; then
        stat -f%z "$file" 2>/dev/null | awk '{
            if ($1 >= 1073741824) printf "%.2f GB", $1/1073741824
            else if ($1 >= 1048576) printf "%.2f MB", $1/1048576
            else if ($1 >= 1024) printf "%.2f KB", $1/1024
            else printf "%d B", $1
        }'
    else
        stat --printf="%s" "$file" 2>/dev/null | awk '{
            if ($1 >= 1073741824) printf "%.2f GB", $1/1073741824
            else if ($1 >= 1048576) printf "%.2f MB", $1/1048576
            else if ($1 >= 1024) printf "%.2f KB", $1/1024
            else printf "%d B", $1
        }'
    fi
}

# Function to get video dimensions
get_video_height() {
    ffprobe -v error -select_streams v:0 -show_entries stream=height -of csv=p=0 "$1" 2>/dev/null
}

# Function to compress video for web
compress_web() {
    local input="$1"
    local filename=$(basename "$input" .mp4)
    local output="${WEB_DIR}/${filename}.webm"
    local height=$(get_video_height "$input")
    
    echo -e "${BLUE}[WEB]${NC} Processing: ${filename}.mp4"
    
    # Scale filter: only downscale if larger than max height, maintain aspect ratio
    local scale_filter=""
    if [ "$height" -gt "$WEB_MAX_HEIGHT" ]; then
        scale_filter="-vf scale=-2:${WEB_MAX_HEIGHT}"
    fi
    
    ffmpeg -i "$input" \
        -c:v libvpx-vp9 \
        -crf $WEB_CRF \
        -b:v $WEB_MAX_BITRATE \
        $scale_filter \
        -c:a libopus \
        -b:a $AUDIO_BITRATE \
        -deadline good \
        -cpu-used 2 \
        -row-mt 1 \
        -y \
        "$output" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        local orig_size=$(get_file_size "$input")
        local new_size=$(get_file_size "$output")
        echo -e "${GREEN}  ✓${NC} ${filename}.webm - Original: ${orig_size} → Compressed: ${new_size}"
    else
        echo -e "${RED}  ✗${NC} Failed to compress ${filename}.mp4"
    fi
}

# Function to compress video for mobile
compress_mobile() {
    local input="$1"
    local filename=$(basename "$input" .mp4)
    local output="${MOBILE_DIR}/${filename}.webm"
    
    echo -e "${YELLOW}[MOBILE]${NC} Processing: ${filename}.mp4"
    
    ffmpeg -i "$input" \
        -c:v libvpx-vp9 \
        -crf $MOBILE_CRF \
        -b:v $MOBILE_MAX_BITRATE \
        -vf "scale=-2:${MOBILE_MAX_HEIGHT}" \
        -c:a libopus \
        -b:a $MOBILE_AUDIO_BITRATE \
        -deadline good \
        -cpu-used 2 \
        -row-mt 1 \
        -y \
        "$output" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        local orig_size=$(get_file_size "$input")
        local new_size=$(get_file_size "$output")
        echo -e "${GREEN}  ✓${NC} ${filename}.webm - Original: ${orig_size} → Compressed: ${new_size}"
    else
        echo -e "${RED}  ✗${NC} Failed to compress ${filename}.mp4"
    fi
}

# Main execution
echo ""
echo "=================================================="
echo "   Video Compression Script for Landing Page"
echo "   Converting MP4 → WebM (VP9 + Opus)"
echo "=================================================="
echo ""
echo "Configuration:"
echo "  Web:    CRF=${WEB_CRF}, Max Height=${WEB_MAX_HEIGHT}p, Max Bitrate=${WEB_MAX_BITRATE}"
echo "  Mobile: CRF=${MOBILE_CRF}, Max Height=${MOBILE_MAX_HEIGHT}p, Max Bitrate=${MOBILE_MAX_BITRATE}"
echo ""

# Count MP4 files
mp4_count=$(find "$INPUT_DIR" -maxdepth 1 -name "*.mp4" | wc -l | tr -d ' ')

if [ "$mp4_count" -eq 0 ]; then
    echo -e "${RED}No MP4 files found in ${INPUT_DIR}${NC}"
    exit 1
fi

echo "Found ${mp4_count} MP4 files to process"
echo ""

# Process each MP4 file
for video in "$INPUT_DIR"/*.mp4; do
    if [ -f "$video" ]; then
        compress_web "$video"
        compress_mobile "$video"
        echo ""
    fi
done

# Summary
echo "=================================================="
echo "                    Summary"
echo "=================================================="

# Calculate total sizes
orig_total=0
web_total=0
mobile_total=0

for video in "$INPUT_DIR"/*.mp4; do
    if [ -f "$video" ]; then
        if [[ "$OSTYPE" == "darwin"* ]]; then
            orig_total=$((orig_total + $(stat -f%z "$video" 2>/dev/null || echo 0)))
        else
            orig_total=$((orig_total + $(stat --printf="%s" "$video" 2>/dev/null || echo 0)))
        fi
    fi
done

for video in "$WEB_DIR"/*.webm; do
    if [ -f "$video" ]; then
        if [[ "$OSTYPE" == "darwin"* ]]; then
            web_total=$((web_total + $(stat -f%z "$video" 2>/dev/null || echo 0)))
        else
            web_total=$((web_total + $(stat --printf="%s" "$video" 2>/dev/null || echo 0)))
        fi
    fi
done

for video in "$MOBILE_DIR"/*.webm; do
    if [ -f "$video" ]; then
        if [[ "$OSTYPE" == "darwin"* ]]; then
            mobile_total=$((mobile_total + $(stat -f%z "$video" 2>/dev/null || echo 0)))
        else
            mobile_total=$((mobile_total + $(stat --printf="%s" "$video" 2>/dev/null || echo 0)))
        fi
    fi
done

# Format totals
format_size() {
    local size=$1
    if [ $size -ge 1073741824 ]; then
        echo "$(echo "scale=2; $size/1073741824" | bc) GB"
    elif [ $size -ge 1048576 ]; then
        echo "$(echo "scale=2; $size/1048576" | bc) MB"
    elif [ $size -ge 1024 ]; then
        echo "$(echo "scale=2; $size/1024" | bc) KB"
    else
        echo "$size B"
    fi
}

echo ""
echo "Original total:     $(format_size $orig_total)"
echo "Web version total:  $(format_size $web_total)"
echo "Mobile version total: $(format_size $mobile_total)"
echo ""

if [ $orig_total -gt 0 ]; then
    web_savings=$(echo "scale=1; (1 - $web_total/$orig_total) * 100" | bc)
    mobile_savings=$(echo "scale=1; (1 - $mobile_total/$orig_total) * 100" | bc)
    echo "Web compression:    ${web_savings}% smaller"
    echo "Mobile compression: ${mobile_savings}% smaller"
fi

echo ""
echo "Output directories:"
echo "  Web:    ${WEB_DIR}"
echo "  Mobile: ${MOBILE_DIR}"
echo ""
echo -e "${GREEN}Done!${NC}"
