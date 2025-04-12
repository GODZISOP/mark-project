// animations/scrollVariants.js
export const scrollFadeSmooth = {
    hidden: {
      opacity: 0,
      y: 40,    // Reduced Y displacement for smoother transition
      scale: 0.98,  // Slightly reduced scale
      transition: { duration: 0.4 },  // Shorter transition time
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,  // Optimized for smoother but quick entrance
        ease: [0.22, 1, 0.36, 1], // Still keeping the cubic-bezier easing for smoothness
      },
    },
    exit: {
      opacity: 0,
      y: 220,  // Less y movement on exit
      scale: 0.98,  // Slightly smaller scale on exit
      transition: {
        duration: 0.4,  // Fast exit transition
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  