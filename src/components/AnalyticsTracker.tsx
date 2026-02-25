import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../lib/firebase';

export default function AnalyticsTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_path: pathname,
        page_title: document.title,
      });
    }
  }, [pathname]);

  return null;
}
