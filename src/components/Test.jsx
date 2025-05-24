// "use client"
// import { useState, useRef, useLayoutEffect } from "react";
// import {
//   motion,
//   useViewportScroll,
//   useTransform,
//   useSpring,
//   useReducedMotion,
// } from "framer-motion";
// import Image from "next/image";
// import ImgIphone from "@/public/assets/iphone2.png";
// import ImgBall from "@/public/assets/ball1-hero.png";
// const ParallaxBox = () => {
//   const prefersReducedMotion = useReducedMotion();
//   const [elementTop, setElementTop] = useState(0);
//   const [clientHeight, setClientHeight] = useState(0);
//   const ref = useRef(null);
//   const offset = 50;

//   const { scrollY } = useViewportScroll();
//   const initial = elementTop - clientHeight+5000;
//   const final = elementTop + offset-20000;

//   const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
//   const y = useSpring(yRange, { stiffness: 400, damping: 90 });

//   useLayoutEffect(() => {
//     const element = ref.current;
//     const onResize = () => {
//       if (!element) return;
//       setElementTop(
//         element.getBoundingClientRect().top + window.scrollY ||
//         window.pageYOffset
//       );
//       setClientHeight(window.innerHeight);
//     };
//     onResize();
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   if (prefersReducedMotion) {
//     return (
//       <div>
//         {/* Static fallback (no parallax) */}
//         <Image src={ImgBall} alt="Sample" width={300} height={200} />
//       </div>
//     );
//   }

//   return (
//     <motion.div ref={ref} style={{ y }}>
//       {/* Example content (change this as needed) */}
//       <Image src={ ImgIphone} alt="Sample" width={300} height={200} />
//     </motion.div>
//   );
// };

// export default ParallaxBox;



