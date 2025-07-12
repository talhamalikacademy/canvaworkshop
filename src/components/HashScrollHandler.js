'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HashScrollHandler = () => {
  const router = useRouter();

  const scrollToHash = (hash) => {
    if (!hash) return;

    // Remove the # from the hash
    const id = hash.substring(1);
    
    // Find the element with the matching ID
    const element = document.getElementById(id);
    
    if (element) {
      // Add a small delay to ensure the page is fully rendered
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

  useEffect(() => {
    // Handle initial page load with hash
    if (typeof window !== 'undefined') {
      const initialHash = window.location.hash;
      if (initialHash) {
        // Add a longer delay for initial load to ensure all components are rendered
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