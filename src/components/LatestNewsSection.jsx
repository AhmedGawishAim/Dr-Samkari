"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BorderIphoneImg from "@/public/assets/border-iphone.png";
import LatestNewsImg from "@/public/assets/paper.png";
import ImgBall from "@/public/assets/ball1-hero.png";

export default function LatestNewsSection() {
  return (
    <div className="pointssection py-5">
      <div className="container mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="content flex flex-col w-full h-full items-center">
            <div className="box-phone relative w-[90%] h-full">
              {/* balls of newssection */}
              <div className="balls">
       
                <div className=" absolute left-[90px] top-[100px]  !w-[120px] !h-[100px] z-[-2]">
                  <Image
                    src={ImgBall}
                    alt="ball"
                    fill
                    className="!w-[120px] !h-[100px] filter blur-[5px]"
                    priority={false}
                  />
                </div>

                <div className=" absolute right-5 top-[60px] z-10 !w-[120px] !h-[100px]">
                  <Image
                    src={ImgBall}
                    alt="ball"
                    fill
                    className="!w-[50px] !h-[50px]"
                    priority={false}
                  />
                </div>
                <div className=" absolute left-2 top-[200px] z-10 !w-[120px] !h-[100px]">
                  <Image
                    src={ImgBall}
                    alt="ball"
                    fill
                    className="!w-[70px] !h-[70px]"
                    priority={false}
                  />
                </div>
                <div className=" absolute right-15 top-[250px] z-10 !w-[120px] !h-[100px]">
                  <Image
                    src={ImgBall}
                    alt="ball"
                    fill
                    className="!w-[100px] !h-[100px] filter blur-[3px] "
                    priority={false}
                  />
                </div>
                 <div className=" absolute left-[90px] top-[500px]  !w-[120px] !h-[100px] z-[-2]">
                  <Image
                    src={ImgBall}
                    alt="ball"
                    fill
                    className="!w-[120px] !h-[100px] filter blur-[2px]"
                    priority={false}
                  />
                </div>
                  <div className=" absolute right-[90px] top-[500px]  !w-[120px] !h-[100px] z-[-2]">
                  <Image
                    src={ImgBall}
                    alt="ball"
                    fill
                    className="!w-[190px] !h-[130px] filter blur-[2px]"
                    priority={false}
                  />
                </div>
                <div className=" absolute right-[-150px] top-[580px]  !w-[120px] !h-[100px] z-[-2]">
                  <Image
                    src={ImgBall}
                    alt="ball"
                    fill
                    className="!w-[190px] !h-[130px] filter blur-[8px]"
                    priority={false}
                  />
                </div>
              </div>

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
                  className="w-full !h-[550px]"
                  priority={false}
                />

                {/* expand Paper Image */}
                <motion.div
                  className="overflow-hidden relative "
                  initial={{ height: 100, width: "100%" }}
                  whileInView={{ height: "80%", opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                >
                  <div className="  absolute top-[1px] left-1/2 -translate-x-1/2 w-[70%] h-full">
                    <Image
                      src={LatestNewsImg}
                      alt="Hero Background"
                      fill
                      className="w-full !h-full py-[50px] filter drop-shadow-2xl"
                      priority={false}
                    />
                  </div>

                  <h2 className="text-[100px] !text-8xl  w-[100%]  absolute top-[130px] left-[52%] transform -translate-x-1/3 z-50 text-black">
                    <a href="#" className="uppercase ">
                      Latest News
                    </a>
                  </h2>
                </motion.div>
              </motion.div>
            </div>

            <div className="box-text w-[80%] md:w-[50%] text-center space-y-6 mt-[-230px]">
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
                    <div className="text-xl text-center font-semibold font-sans -mt-0.5">
                      {" "}
                      BUY OUR CODE
                    </div>
                  </div>
                </motion.a>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
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
