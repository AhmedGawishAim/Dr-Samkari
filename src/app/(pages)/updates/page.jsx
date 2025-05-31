"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";
import ProcedureImg2 from "@/public/assets/news/news44.png";
import ProcedureImg3 from "@/public/assets/news/news22.png";
import ProcedureImg4 from "@/public/assets/news/news33.png";
import ProcedureImg5 from "@/public/assets/news/news55.png";

import { IoIosArrowDown } from "react-icons/io";

export default function OurApp() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqsData = [
        {
            image: ProcedureImg2,
            question: "Dr. Samkari showcases his latest cosmetic techniques?",
            answer:
                "Dr. Samkari showcases his latest cosmetic techniques, marking a new era in aesthetic medicine where science meets artistry. " +
                "Renowned for his meticulous attention to detail and commitment to natural-looking results, Dr. Samkari continuously explores and develops advanced procedures. ",
            answerSpan: "His latest techniques incorporate state-of-the-art technologies and innovative, minimally invasive methods designed to rejuvenate the face and body with reduced downtime and greater precision.",

        },
        {
            image: ProcedureImg3,

            question: "Dr. Samkari showcases his latest cosmetic techniques?",
            answer:
                "Dr. Samkari showcases his latest cosmetic techniques, marking a new era in aesthetic medicine where science meets artistry. " +
                "Renowned for his meticulous attention to detail and commitment to natural-looking results, Dr. Samkari continuously explores and develops advanced procedures. " +
                "His latest techniques incorporate state-of-the-art technologies and innovative, minimally invasive methods designed to rejuvenate the face and body with reduced downtime and greater precision.",
            answerSpan: "His latest techniques incorporate state-of-the-art technologies and innovative, minimally invasive methods designed to rejuvenate the face and body with reduced downtime and greater precision.",

        },
        {
            image: ProcedureImg4,

            question: "Dr. Samkari showcases his latest cosmetic techniques?",
            answer:
                "Dr. Samkari showcases his latest cosmetic techniques, marking a new era in aesthetic medicine where science meets artistry. " +
                "Renowned for his meticulous attention to detail and commitment to natural-looking results, Dr. Samkari continuously explores and develops advanced procedures. ",
            answerSpan: "His latest techniques incorporate state-of-the-art technologies and innovative, minimally invasive methods designed to rejuvenate the face and body with reduced downtime and greater precision.",
        },
        {
            image: ProcedureImg2,

            question: "Dr. Samkari showcases his latest cosmetic techniques?",
            answer:
                "Dr. Samkari showcases his latest cosmetic techniques, marking a new era in aesthetic medicine where science meets artistry. " +
                "Renowned for his meticulous attention to detail and commitment to natural-looking results, Dr. Samkari continuously explores and develops advanced procedures. ",
            answerSpan: "His latest techniques incorporate state-of-the-art technologies and innovative, minimally invasive methods designed to rejuvenate the face and body with reduced downtime and greater precision.",
        },
    ];
    return (
        <div className="our-app-page">
            <div className="container mx-auto text-[30px] text-center">
                <div className="content md:w-[80%] mx-auto pt-[200px]">
                    <div className="box-procedure">
                        <div className="box-text ">
                            {faqsData.map((faq, index) => (
                                <div key={index} className=" overflow-hidden mb-[50px]">
                                    <div className="box-img bg-white rounded-xl">
                                        <Image
                                            src={faq.image}
                                            width={0}
                                            height={0}
                                            className=" w-full h-[300px] rounded-xl  "
                                            alt="new1"
                                        />
                                    </div>
                                    <button
                                        onClick={() => toggle(index)}
                                        className={`bg-white cursor-pointer ${openIndex === index ? "" : " duration-0 rounded-b-2xl"
                                            }  w-full px-6 pt-4 pb-2 text-left flex justify-between items-center focus:outline-none`}
                                    >
                                        <span className="font-medium">{faq.question}</span>
                                        <div className="arrow-icon">
                                            <IoIosArrowDown
                                                className={` cursor-pointer w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </div>
                                    </button>
                                    <div
                                        className={`px-6  bg-white rounded-b-2xl text-gray-700 transition-all duration-300 overflow-hidden ${openIndex === index ? "max-h-[450px] py-0" : "max-h-0"
                                            }`}
                                    >
                                        <p className="text-xl text-left  ">{faq.answer}</p>
                                        <p className="text-xl text-left pt-5 pb-5">
                                            {faq.answerSpan}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
