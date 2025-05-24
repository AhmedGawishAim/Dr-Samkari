"use client";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import IphoneImg1 from "@/public/assets/iphone1.png";
import BallImg1 from "@/public/assets/ball1-hero.png";

export default function BookSection() {
    const containerRef = useRef(null);
    const controls = useAnimation();
    const [refTextBox, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const { scrollYProgress } = useScroll();
    // Smooth parallax effects for  book section
    const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "80%"], { clamp: false });
    const y2 = useTransform(scrollYProgress, [0, 1], ["-100%", "1000px"], { clamp: false });
    const y3 = useTransform(scrollYProgress, [0, 1], ["20%", "-120%"], { clamp: false });
    const leftBoxWidth = useTransform(scrollYProgress, [0, 0.1], ["20%", "100%"]);
    const leftBoxOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
    const BokkImgAnimation = useTransform(scrollYProgress, [0, 0.2, 1], ["-110%", "20%", "1%"], { clamp: false });
    const imageX = useTransform(scrollYProgress, [0, 0.3, 1], ["120%", "160%", "2%"]);
    const imageY = useTransform(scrollYProgress, [0, 0.6, 1], ["-10%", "-0%", "2%"]);
    // when user reach to the section that will animate run when leave off the animation
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);
    // animation text for book section text
    const textTopToBottom = {
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 1, ease: "easeOut", delay: 0.4 },
        },
        hidden: {
            opacity: 0,
            x: 0,
            y: -200,
        },
    };
    const textBottomToTop = {
        hidden: {
            opacity: 0,
            y: -20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut", delay: 1.2 },
        },
    };

    return (
        <div className="book-section pt-[230px]" ref={containerRef}>
            <div className="container hero-container mx-auto  block relative">
                <div className="w-[66%] mx-auto h-[500px]">
                    {/* balls section 1 for book section */}
                    <div className="absolute w-full h-full top-0 left-0">
                        <motion.div className="absolute bottom-4 right-[20px] top-[-300px] z-[2]"
                            style={{ y: y1 }}
                        >
                            <Image src={BallImg1} alt="Small Ball" width={330} height={0} priority />
                        </motion.div>

                        <motion.div className="absolute  right-[800px] top-[-30px] z-[-10] filter blur-xl"
                            style={{ y: y3 }}
                        >
                            <Image src={BallImg1} alt="Small Ball" width={330} height={0} priority />
                        </motion.div>

                        <motion.div className="absolute bottom-[100px] left-[300px] z-[20]"
                            style={{ y: y2 }}
                        >
                            <Image src={BallImg1} alt="Small Ball" width={80} height={0} priority />
                        </motion.div>

                    </div>
                    {/* this div parent for (left and right) box for book section*/}
                    <div className="relative mx-auto w-[100%] left-0 h-full">
                        {/* this overlay div for book section */}
                        <motion.div className="absolute right-0 bg-white/50 rounded-[68px] z-2 border-white/100 h-full"
                            initial={{ width: 0, borderWidth: 0 }}
                            whileInView={{ width: "100%", borderWidth: "1px" }}
                            viewport={{ once: false }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                        {/* this section for texts content for book section left */}
                        <motion.div className="box-righ w-[10%] z-[200] mx-auto absolute right-0 top-0 h-full flex flex-col justify-center text-white text-center md:text-left mt-6 md:mt-0"
                            style={{
                                width: leftBoxWidth,
                                opacity: leftBoxOpacity,
                            }}
                        >
                            <div className="content-box absolute top-[120px] left-[50px] z-[200] w-[60%] text-4xl overflow-hidden text-black">
                                <div ref={refTextBox}>
                                    <motion.div
                                        initial="hidden"
                                        animate={controls}
                                        variants={textTopToBottom}
                                    >
                                        <div className="text-5xl">Book <span className="text-6xl font-bold">Smarter,</span> </div>
                                        <div className="text-5xl">Operate Better</div>
                                    </motion.div>
                                    {/* The text that will animate from top to bottom */}
                                    <motion.div
                                        className="mt-5 text-3xl w-[80%]"
                                        initial="hidden"
                                        animate={controls}
                                        variants={textBottomToTop}
                                    >
                                        Let patients book their treatments through a
                                        seamless, clinic-branded app — anytime,
                                        anywhere.
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                        {/* this ihpone for book section right */}
                        <motion.div className={`box-left order-1 w-full h-full absolute top-0 left-0 z-50 transition-all duration-700`}
                            style={{
                                y: BokkImgAnimation,
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        >
                            <motion.div style={{ x: imageX, y: imageY }} className="w-[50%] top-[-100px] relative right-[-2%]">
                                <Image
                                    src={IphoneImg1}
                                    alt="Hero Image"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="absolute  !left-[-130px]  !w-[420px] !h-[580px]"
                                    priority={false}
                                />

                            </motion.div>

                            
                        </motion.div>

                        <motion.div className="absolute bottom-[-80px] right-[200px] z-[10]">
                                <Image src={BallImg1} alt="Small Ball" width={230} height={0} priority />
                            </motion.div>

                    </div>
                </div>
            </div>
        </div>
    );
}
