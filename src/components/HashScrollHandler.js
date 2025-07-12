'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HashScrollHandler = () => {
  const router = useRouter();

  useEffect(() => {
    const scrollToHash = (hash) => {
      if (!hash) return;

      const id = hash.substring(1);
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }, 100);
      }
    };

    const handleHashChange = () => {
      scrollToHash(window.location.hash);
    };

    // Handle initial page load with hash
    if (typeof window !== 'undefined') {
      const initialHash = window.location.hash;
      if (initialHash) {
        setTimeout(() => {
          scrollToHash(initialHash);
        }, 500);
      }

      // Listen for hash changes
      window.addEventListener('hashchange', handleHashChange);

      // Listen for popstate events (browser back/forward)
      window.addEventListener('popstate', handleHashChange);

      // Cleanup event listeners
      return () => {
        window.removeEventListener('hashchange', handleHashChange);
        window.removeEventListener('popstate', handleHashChange);
      };
    }
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default HashScrollHandler; 