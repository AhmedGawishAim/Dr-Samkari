'use client';

import { useState } from "react";
import Image from "next/image";
import ImgProced1 from "@/public/assets/procedures/proced-img-main.svg";
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
                <div className="content grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:w-[80%] mx-auto">
                    {/* image section proced  */}
                    <div className="flex-1 flex justify-center items-center flex-col h-full">
                        <Image
                            src={ImgProced1}
                            width={80}
                            height={240}
                            alt="Aesthetic procedure"
                            className="rounded-3xl object-cover object-right  w-[430px] h-[310px]"
                            quality={100}
                        />
                    </div>

                    {/* text section1 */}
                    <div className="flex-1 ml-[-20px]">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4 pt-[30px] lg:p-0">
                            Procedures
                        </h2>
                        <h3 className="text-xl font-semibold italic text-gray-900 mb-0">
                            How it Works?
                        </h3>
                        <p className="text-gray-800 mb-6 leading-[20px] lg:w-[90%]">
                            Dr. Zaid Samkari is a prominent Jordanian aesthetic doctor and
                            cosmetic surgeon based in Amman, renowned for his expertise in
                            non-surgical facial rejuvenation and advanced aesthetic
                            techniques.{" "}
                            CRISALIX
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
                    </div>




                </div>

                {/* supporters Logo section */}
                <div className="mt-12 lg:w-[80%] mx-auto">
                    <div className="supporter flex flex-wrap gap-x-6 gap-y-12 justify-center items-center">
                        {supporterImages.map((img, index) => (
                            <div
                                key={index}
                                className={`box-im w-[150px] flex justify-end sm:w-[180px] md:w-[185px]`}
                            >
                                <Image
                                    src={img}
                                    width={140}
                                    height={50}
                                    alt={`Supporter ${index + 1}`}
                                    className={`w-[100px] sm:w-[140px] ${index === 5 ? "!h-[65px]" : ""} h-[40px] cursor-pointer object-contain`}
                                    quality={100}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container lg:w-[90%] px-6 mx-auto">
                    {/* text footer */}
                    <div className="text-footer text-gray-700 pt-[80px] text-center">
                        Unlock a ready-made, fully functional app designed by a top plastic surgeon to simplify clinic management,
                        enhance patient experience, and boost retention. From smart bookings to loyalty rewards, this code is plug-and-play —
                        built with real clinic needs in mind. Invest once, and turn complexity into clarity for any aesthetic business. Scalable. Elegant. Proven.
                    </div>
                </div>

            </div>


        </section>
    );
}