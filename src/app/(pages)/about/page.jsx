"use client";

import React from "react";
import Image from "next/image";
import Img3 from "@/public/SVG/about-doctor.png";
import BallImg1 from "@/public/assets/ball1-hero.png";
import AboutPrize1 from "@/public/SVG/about-icon1.svg";
import AboutPrize2 from "@/public/SVG/about-icon2.svg";
import AboutPrize3 from "@/public/SVG/about-icon3.svg";

import AboutPrize3f from "@/public/assets/proceduers/about-doctor.png";

// import Img3 from "@/public/SVG/about-doctor.png";
// import BallImg1 from "@/public/assets/ball1-hero.png";
// import AboutPrize1 from "@/public/SVG/about-icon1.svg";
// import AboutPrize2 from "@/public/SVG/about-icon2.svg";
// import AboutPrize3 from "@/public/SVG/about-icon3.svg";

const aboutSectionsData = [
  {
    type: "heading",
    title: "Biography",
    subtitle: "Who is Dr.Samkari?",
    bold: true, // Heading will be bold
  },
  {
    type: "paragraph",
    text: `Dr. Zaid Samkari is a prominent Jordanian aesthetic doctor and cosmetic surgeon based in Amman, renowned for his expertise in non-surgical facial rejuvenation and advanced aesthetic techniques. (CRISALIX)`,
  },
  {
    type: "heading",
    title: "Professional Background",
    bold: false, // Heading will NOT be bold
  },
  {
    type: "paragraph",
    text: `Dr. Samkari earned his medical degree from the Jordan University of Science and Technology. Initially trained as a general surgeon, he later specialized in aesthetic medicine, focusing on non-invasive procedures. His early exposure to humanitarian medical missions, where he assisted in translating for European doctors performing free surgeries for children with congenital malformations, inspired his passion for aesthetic medicine.`,
  },
  {
    type: "paragraph",
    text: `Dr. Samkari is a fellow of the American Society of Aesthetic Medicine and serves as the media face and certified trainer for Pluryal Arabia. He is also a speaker at numerous international aesthetic medicine conferences dedicated to physicians.`,
  },
  {
    type: "paragraph",
    text: `He received a professional certification from the American Board as the Best Aesthetic Doctor in the Middle East for 2024.`,
  },
  {
    type: "awards",
    items: [
      {
        icon: AboutPrize1,
        text: "Dr. Samkari earned his medical degree from the Jordan University of Science and Tecnology",
      },
      {
        icon: AboutPrize2,
        text: "Dr. Samkari earned his medical degree from the Jordan University of Science and Tecnology",
      },
      {
        icon: AboutPrize3,
        text: "Dr. Samkari earned his medical degree from the Jordan University of Science and Tecnology",
      },
    ],
  },
];

const AboutPage = () => {
  return (
    <div className="about-page mt-[60px]">
      <div className="container mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="about-boxs flex flex-col lg:flex-row justify-between gap-15">
            {/* Left Image Box */}
            <div className="about-left-box h-[630px] w-[350px]">
              <div className="box-doctor relative h-full w-full top-[20px]">
                {/* Overlay */}
                <div className="box-ovrlay ">
                  <div className="about-overlay-img absolute top-[48px] inset-0 rounded-[28px] z-[-2] " />
                  <div className="about-overlay absolute top-[48px] inset-0 bg-black/40 rounded-[28px] !z-[5]" />
                </div>

                {/* Bubbles */}
                <div className="box-bubble-img">
                  <div className="absolute left-[-28px] top-[-30px] z-[2] w-[160px] h-[160px]">
                    <Image
                      src={BallImg1}
                      alt="Ball"
                      style={{ width: "100%", height: "100%" }}
                      priority
                    />
                  </div>

                  <div className="absolute left-[-30px] top-[140px] z-[20] w-[50px] h-[50px]">
                    <Image
                      src={BallImg1}
                      alt="Ball"
                      style={{ width: "100%", height: "100%" }}
                      priority
                    />
                  </div>
                </div>

                {/* Doctor Image */}
                <div className="about-box-image !z-[500]">
                  <Image
                    src={Img3}
                    alt="Doctor"
                    className="about-img-doctor absolute top-0 right-[-30px] !z-[400] !h-[630px] w-[200px]"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Right Content Section Text */}
            <div className="about-right-box flex-1 pt-[60px]">
              <div className="box-texts">
                {aboutSectionsData.map((section, index) => {
                  if (section.type === "heading") {
                    return (
                      <div key={index}>
                        {section.title && (
                          <h1
                         
                            className={`text-[44px] ${
                              section.bold ? "font-bold" : " italic"
                            }`}
                          >
                            {section.title}
                          </h1>
                        )}
                        {section.subtitle && (
                          <h2 className="text-[24px] italic">
                            {section.subtitle}
                          </h2>
                        )}
                      </div>
                    );
                  }

                  if (section.type === "paragraph") {
                    return (
                      <h2 className="text-[17px] pb-5 leading-[20px]">
                        {section.text}
                      </h2>
                    );
                  }

                  if (section.type === "awards") {
                    return (
                      <div
                        key={index}
                        className="w-[100%] flex justify-between gap-6 pt-8"
                      >
                        {section.items.map((award, i) => (
                          <div
                            key={i}
                            className="prize1 flex flex-col items-start gap-3 w-[30%]"
                          >
                            <div className="box-img-prize w-full flex justify-center flex-shrink-0">
                              <Image
                                src={award.icon}
                                alt="Prize"
                                className="h-[80px] w-[130px]"
                                priority
                              />
                            </div>
                            <h2 className="text-sm text-center leading-[20px]">
                              {award.text}
                            </h2>
                          </div>
                        ))}
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
