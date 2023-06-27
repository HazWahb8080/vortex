export const logoImage = "/logo.png";
export const staggerVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3, // Add stagger effect with a delay of 0.2s between children
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
  },
};

export const childVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: 50,
  },
};
