"use client";

import { GridContainer } from "./grid";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

import IconFile from "/public/icon-file.svg";
import IconHand from "/public/icon-hand.svg";
import IconHand02 from "/public/icon-hand-02.svg";
import IconMockup from "/public/mockup.svg";

export function SectionHero() {
  const textHeroRef = useRef(null);
  const mockupLeftRef = useRef(null);
  const mockupRightRef = useRef(null);

  useEffect(() => {
    const textHero = textHeroRef.current;
    const mLeft = mockupLeftRef.current;
    const mRight = mockupRightRef.current;

    gsap.fromTo(
      mLeft,
      {
        rotate: 0,
      },
      {
        rotate: -10,
        duration: 1,
      }
    );

    gsap.fromTo(
      mRight,
      {
        rotate: 0,
      },
      {
        rotate: 10,
        duration: 1,
      }
    );

    gsap.fromTo(
      textHero,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <section className="relative w-full h-[874px] bg-[url('/bg-hero.svg')] bg-no-repeat bg-top bg-green-900 border-t border-t-green-800 pt-16 overflow-hidden">
      <GridContainer className="flex flex-col items-center">
        <div
          className="w-full max-h-[1264px] text-center opacity-0"
          ref={textHeroRef}
        >
          <h3 className="text-xl font-medium text-green-700 mb-4">
            Novo curso focado em instagram
          </h3>
          <h1 className="text-white text-7xl/normal font-semibold mb-2">
            Destrave as suas habilidades
          </h1>
          <div className="flex items-center justify-center gap-10">
            <button className="flex items-center gap-2 cursor-pointer">
              <Image src={IconFile} alt="File Icon" />
              <span className="text-white font-medium">
                Assinar lista de espera
              </span>
            </button>
            <button className="py-4 px-5 bg-[#a8c053] rounded-full text-black font-bold cursor-pointer hover:bg-[#bed17b] hover:text-white">
              Começar agora
            </button>
          </div>
        </div>
        <div className="relative w-full max-w-[855px] h-28 mt-4">
          <Image
            src={IconHand}
            alt="Icon Hand"
            className="absolute left-0 bottom-0"
          />
          <Image
            src={IconHand02}
            alt="Icon Hand 02"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="absolute -bottom-44 w-full max-h-[957px] flex justify-between">
          <Image
            src={IconMockup}
            alt="Icon Mockup"
            className="relative top-[18px] left-[600px]"
            ref={mockupLeftRef}
          />
          <Image
            src={IconMockup}
            alt="Icon Mockup"
            className="relative top-[18px] left-[-600px]"
            ref={mockupRightRef}
          />
        </div>
      </GridContainer>
    </section>
  );
}
