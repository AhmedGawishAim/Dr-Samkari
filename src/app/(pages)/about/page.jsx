'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Img3 from '@/public/SVG/about-doctor.png';
import BallImg1 from '@/public/assets/ball1-hero.png';
import AboutPrize1 from '@/public/SVG/about-icon1.svg';
import AboutPrize2 from '@/public/SVG/about-icon2.svg';
import AboutPrize3 from '@/public/SVG/about-icon3.svg';

const aboutSectionsData = [
  {
    type: 'heading',
    title: 'Biography',
    subtitle: 'Who is Dr.Samkari?',
  },
  {
    type: 'paragraph',
    text: `Dr. Zaid Samkari is a prominent Jordanian aesthetic doctor and cosmetic surgeon based in Amman, renowned for his expertise in non-surgical facial rejuvenation and advanced aesthetic techniques. (CRISALIX)`
  },
  {
    type: 'heading',
    title: 'Professional Background',
  },
  {
    type: 'paragraph',
    text: `Dr. Samkari earned his medical degree from the Jordan University of Science and Technology. Initially trained as a general surgeon, he later specialized in aesthetic medicine, focusing on non-invasive procedures. His early exposure to humanitarian medical missions, where he assisted in translating for European doctors performing free surgeries for children with congenital malformations, inspired his passion for aesthetic medicine.`
  },
  {
    type: 'paragraph',
    text: `Dr. Samkari is a fellow of the American Society of Aesthetic Medicine and serves as the media face and certified trainer for Pluryal Arabia. He is also a speaker at numerous international aesthetic medicine conferences dedicated to physicians.`
  },
  {
    type: 'paragraph',
    text: `He received a professional certification from the American Board as the Best Aesthetic Doctor in the Middle East for 2024.`
  },
  {
    type: 'awards',
    items: [
      {
        icon: AboutPrize1,
        text: 'Dr. Samkari earned his medical degree from the Jordan University...',
      },
      {
        icon: AboutPrize2,
        text: 'Certified trainer for Pluryal Arabia...',
      },
      {
        icon: AboutPrize3,
        text: 'Best Aesthetic Doctor 2024...',
      },
    ]
  }
];

const AboutPage = () => {
  return (
    <div className="about-page mt-[20px]">
      <div className="container mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="about-boxs flex flex-col lg:flex-row justify-between gap-10">

            {/* Left Image Box */}
            <div className="about-left-box h-[580px] w-[350px]">
              <div className="box-doctor relative h-full w-full top-[20px]">
                {/* Overlay */}
                <div className="box-ovrlay">
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    className="about-overlay-img absolute top-[48px] inset-0  rounded-[10px] z-[-2]" />

                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    className="about-overlay absolute top-[48px] inset-0 bg-black/40 rounded-[10px] !z-[5]" />
                </div>

                {/* Bubbles */}
                <div className="box-bubble-img">
                  <motion.div
                    initial={{ width: 0, height: 0, opacity: 0 }}
                    animate={{ width: 120, height: 120, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 900, damping: 300, duration: 2, delay: 0.6 }}
                    className="absolute left-[-30px] top-[-10px] z-[2]"
                  >
                    <Image src={BallImg1} alt="Ball" style={{ width: '100%', height: '100%' }} priority />
                  </motion.div>

                  <motion.div
                    initial={{ width: 0, height: 0, opacity: 0 }}
                    animate={{ width: 50, height: 50, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 900, damping: 250, duration: 2, delay: 0.8 }}
                    className="absolute left-[-30px] top-[160px] z-[20]"
                  >
                    <Image src={BallImg1} alt="Ball" style={{ width: '100%', height: '100%' }} priority />
                  </motion.div>
                </div>

                {/* Doctor Image */}
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="about-box-image !z-[500]"
                >
                  <Image
                    src={Img3}
                    alt="Doctor"
                    className="about-img-doctor absolute top-0 right-[-30px] !z-[400] h-[800px] w-[200px]"
                    priority
                  />
                </motion.div>
              </div>
            </div>

            {/* Right  Content section text */}
            <motion.div className="about-right-box flex-1 pt-[60px]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="box-texts">
                {aboutSectionsData.map((section, index) => {
                  if (section.type === 'heading') {
                    return (
                      <React.Fragment key={index}>
                        {section.title && (
                          <motion.h1
                            className="text-[44px] font-semibold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            {section.title}
                          </motion.h1>
                        )}
                        {section.subtitle && (
                          <h2 className="text-[22px] font-semibold italic">{section.subtitle}</h2>
                        )}
                      </React.Fragment>
                    );
                  }

                  if (section.type === 'paragraph') {
                    return (
                      <p key={index} className="text-gray leading-[19px] pb-4">
                        {section.text}
                      </p>
                    );
                  }

                  if (section.type === 'awards') {
                    return (
                      <div key={index} className="w-[90%] flex justify-between gap-6 pt-8">
                        {section.items.map((award, i) => (
                          <motion.div
                            key={i}
                            className="prize1 flex flex-col items-start gap-3 w-[30%]"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }}
                          >
                            <div className="box-img-prize w-full flex justify-center flex-shrink-0">
                              <Image
                                src={award.icon}
                                alt="Prize"
                                className="h-[80px] w-[130px]"
                                priority
                              />
                            </div>
                            <h2 className="text-sm text-center leading-[20px]">{award.text}</h2>
                          </motion.div>
                        ))}
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
