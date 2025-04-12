'use client'; // Required to use AOS in the layout

import { useEffect } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    // Initialize AOS with once: false to allow re-triggering on scroll back
    AOS.init({
      duration: 800,      // Duration of animation
      once: false,        // Set to false to allow re-triggering on scroll back
      offset: 100,        // Trigger the animation 100px into the viewport
    });

    // Function to manually refresh AOS on scroll to ensure re-triggering
    const handleScroll = () => {
      AOS.refresh();  // Refresh AOS on scroll to trigger animations again
    };

    // Throttling the scroll event to improve performance
    let timeoutId;
    const throttledScrollHandler = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 100); // Delay refresh to improve performance
    };

    // Add event listener to trigger AOS refresh on scroll
    window.addEventListener('scroll', throttledScrollHandler);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      clearTimeout(timeoutId); // Clear the timeout on unmount
    };
  }, []);  // Empty dependency array ensures this runs only on mount

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
