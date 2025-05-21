'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import BorderIphoneImg from "@/public/assets/border-iphone.png";
import LatestNewsImg from "@/public/assets/paper.png";
import ImgBall from "@/public/assets/ball1-hero.png";

export default function LatestNewsSection() {
  return (
    <div className="pointssection py-32">
      <div className="container mx-auto">
        <div className="w-[80%] mx-auto">
          <div className="content flex flex-col w-full h-full items-center">
            <div className="box-phone relative w-full h-full">
              <Image
                src={ImgBall}
                alt="ball"
                fill
                className="!w-[120px] !h-[100px]"
                priority={false}
              />
              {/* Background Image */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: false }}
                className="relative w-full h-[1500px]"
              >
                <Image
                  src={BorderIphoneImg}
                  alt="Hero Background"
                  fill
                  className="w-full !h-[600px]"
                  priority={false}
                />

                {/* expand Paper Image */}
                <motion.div
                  className="overflow-hidden relative "
                  initial={{ height: 100, width: "100%" }}
                  whileInView={{ height: "100%", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                >
                  <div className="  absolute top-[10px] left-1/2 -translate-x-1/2 w-[80%] h-full" >
                    <Image
                      src={LatestNewsImg}
                      alt="Hero Background"
                      fill
                      className="w-full !h-full py-[50px] filter drop-shadow-2xl"
                      priority={false}
                    />
                  </div>
                  <h2 className="text-[100px]  w-[100%]  absolute top-[150px] left-1/2 transform -translate-x-1/3 z-50 text-black">
                  <a href="#" className="uppercase ">Latest News</a>
                  </h2>
                </motion.div>
              </motion.div>
            </div>

            <div className="box-text w-[80%] md:w-[50%] text-center space-y-6 pt-[180px]">
              <div className="flex justify-center">
                <motion.a
                  href="#"
                  rel="preload"
                  className="flex mt-3 p-3  bg-transparent text-black border border-black rounded-xl items-center justify-center hover:bg-white/10 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-left">
                    <div className="text-3xl font-bold leading-tight">
                      Upgrade Your Clinic
                    </div>
                    <div className="text-xl text-center font-semibold font-sans -mt-0.5"> BUY OUR CODE</div>
                  </div>
                </motion.a>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: false }}
                className="text-2xl md:text-3xl"
              >
                Loyalty built in: patients earn points with every visit,
                unlocking free procedures through gamified engagement.
              </motion.h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
