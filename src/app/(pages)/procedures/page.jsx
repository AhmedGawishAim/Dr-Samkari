"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ImgProced1 from "@/public/assets/doctor5.jpg";
import ImgProced2 from "@/public/assets/botx1.png";
// supporter company imgs
import ImgSupporter1 from "@/public/assets/procedures/Precedures-icon1.svg";
import ImgSupporter2 from "@/public/assets/procedures/Precedures-icon2.svg";
import ImgSupporter3 from "@/public/assets/procedures/Precedures-icon3.svg";
import ImgSupporter4 from "@/public/assets/procedures/Precedures-icon4.svg";
import ImgSupporter5 from "@/public/assets/procedures/Precedures-icon5.svg";
import ImgSupporter6 from "@/public/assets/procedures/Precedures-icon6.svg";
import ImgSupporter7 from "@/public/assets/procedures/Precedures-icon7.svg";
import ImgSupporter8 from "@/public/assets/procedures/Precedures-icon8.svg";
import ImgSupporter9 from "@/public/assets/procedures/Precedures-icon9.svg";
import ImgSupporter10 from "@/public/assets/procedures/Precedures-icon10.svg";
import ImgSupporter11 from "@/public/assets/procedures/Precedures-icon11.svg";
import ImgSupporter12 from "@/public/assets/procedures/Precedures-icon12.svg";
import ImgSupporter13 from "@/public/assets/procedures/Precedures-icon13.svg";

// imgs before and after
import ImgBefore1 from "@/public/assets/procedures/img-before1.jpg";
import ImgBefore2 from "@/public/assets/procedures/img-before2.jpg";
import ImgBefore3 from "@/public/assets/procedures/img-before3.jpg";
import ImgBefore4 from "@/public/assets/procedures/img-before4.jpg";
import ImgBefore5 from "@/public/assets/procedures/img-before5.jpg";
import ImgBefore6 from "@/public/assets/procedures/img-before6.jpg";
import ImgAfter1 from "@/public/assets/procedures/img-after1.jpg";
import ImgAfter2 from "@/public/assets/procedures/img-after2.jpg";
import ImgAfter3 from "@/public/assets/procedures/img-after3.jpg";
import ImgAfter4 from "@/public/assets/procedures/img-after4.jpg";
import ImgAfter5 from "@/public/assets/procedures/img-after5.jpg";
import ImgAfter6 from "@/public/assets/procedures/img-after6.jpg";


export default function ProceduresSection() {
    // images for company supporter    
    const supporterImages = [
        ImgSupporter1,
        ImgSupporter2,
        ImgSupporter3,
        ImgSupporter4,
        ImgSupporter5,
        ImgSupporter6,
        ImgSupporter7,
        ImgSupporter8,
        ImgSupporter9,
        ImgSupporter10,
        ImgSupporter11,
        ImgSupporter12,
        ImgSupporter13,
    ];
    // images before and after
    const proceduresImages = [
        { before: ImgBefore1, after: ImgAfter1 },
        { before: ImgBefore2, after: ImgAfter2 },
        { before: ImgBefore3, after: ImgAfter3 },
        { before: ImgBefore4, after: ImgAfter4 },
        { before: ImgBefore5, after: ImgAfter5 },
        { before: ImgBefore6, after: ImgAfter6 },
    ];
    return (
        <section className="proceduers-page px-3 py-12">
            <div className="container px-6 md:px-0 mx-auto">
                <div className="content lg:grid grid-cols-2 gap-12.5 lg:w-[85%] mx-auto">
                    {/* image section proced  */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col lg:justify-end lg:items-end w-full h-full"
                    >
                        <Image
                            src={ImgProced1}
                            width={380}
                            height={340}
                            alt="Aesthetic procedure"
                            className="rounded-3xl object-cover object-top w-[380px] h-[340px]"
                            quality={100}
                        />
                    </motion.div>

                    {/* text section1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 pt-[30px] lg:p-0">
                            Procedures
                        </h2>
                        <h3 className="text-xl font-semibold italic text-gray-900 mb-0">
                            How it Works?
                        </h3>
                        <p className="text-gray-800 mb-6 leading-[20px]">
                            Dr. Zaid Samkari is a prominent Jordanian aesthetic doctor and
                            cosmetic surgeon based in Amman, renowned for his expertise in
                            non-surgical facial rejuvenation and advanced aesthetic
                            techniques.{" "}
                            <a href="#" className="text-blue-600 underline">
                                (CRISALIX)
                            </a>
                        </p>
                        <h3 className="text-xl font-semibold text-gray-900 mb-0">
                            Results
                        </h3>
                        <p className="text-gray-800 leading-[20px]">
                            Dr. Samkari earned his medical degree from the Jordan University
                            of Science and Technology. Initially trained as a general surgeon,
                            he later specialized in aesthetic medicine, focusing on
                            non-invasive procedures. His early exposure to humanitarian
                            medical missions, where he assisted in translating for European
                            doctors performing free surgeries for children with congenital
                            malformations, inspired his passion for aesthetic medicine.
                        </p>
                    </motion.div>
                </div>

                {/* supporters Logo section */}
                <div className="mt-12 lg:w-[85%] mx-auto">
                    <div className="supporter lg:w-[90%] mx-auto flex justify-evenly">
                        <div className="flex flex-wrap gap-y-12 gap-x-6 md:items-center justify-center">
                            {supporterImages.map((img, index) => (
                                <motion.div
                                    key={index}
                                    className="box-im w-[100px] sm:w-[140px] md:w-[160px]"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <Image
                                        src={img}
                                        width={140}
                                        height={50}
                                        alt={`Supporter ${index + 1}`}
                                        className={`w-[100px] sm:w-[140px] ${index} ${index == 5 ? "!h-[65px]" : ""}   h-[40px] cursor-pointer`}
                                        quality={100}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Before and After section for proced */}
                <div className="before-imgs px-5 lg:px-0 pt-[100px] relative flex flex-wrap md:flex-nowrap justify-center items-center gap-4">
                    {proceduresImages.map((pair, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            className="relative flex md:flex-col items-center gap-8 cursor-pointer"
                        >
                            {index === 0 && (
                                <div className="text-gray-700 text-xl before-text hidden md:block absolute top-[60px] left-[-50px] transform rotate-[-452deg]">
                                    Before
                                </div>
                            )}

                            <Image
                                src={pair.before}
                                alt={`img-before`}
                                width={200}
                                height={200}
                                className="w-[180px] sm:w-[120px] md:w-[160px] h-[160px] filter brightness-50 hover:brightness-100 focus:brightness-100 active:brightness-100 transition"
                            />


                            {index === 0 && (
                                <div className="text-gray-700 text-xl before-text hidden md:block absolute bottom-[60px] left-[-50px] transform rotate-[-452deg]">
                                    After
                                </div>
                            )}

                            <Image
                                src={pair.after}
                                alt={`img-after`}
                                width={200}
                                height={200}
                                className="w-[180px] sm:w-[120px] md:w-[160px] h-[160px] filter brightness-50 hover:brightness-100 focus:brightness-100 active:brightness-100 transition"
                            />
                        </motion.div>
                    ))}
                </div>
                {/* text footer */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                    className="text-footer text-gray-700 pt-[80px] text-center">
                    Unlock a ready-made, fully functional app designed by a top plastic surgeon to simplify clinic management,
                    enhance patient experience, and boost retention. From smart bookings to loyalty rewards, this code is plug-and-play —
                    built with real clinic needs in mind. Invest once, and turn complexity into clarity for any aesthetic business. Scalable. Elegant. Proven.
                </motion.div>

            </div>
        </section>
    );
}
