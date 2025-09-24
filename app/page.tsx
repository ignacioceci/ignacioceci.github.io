"use client";

import Image from "next/image";

import { Boldonse, Birthstone, Poppins } from "next/font/google";
import { useState } from "react";

const boldonse = Boldonse({
  weight: "400",
  subsets: ["latin"],
  // display: "swap",
  variable: "--font-boldonse",
});

const birthstone = Birthstone({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-birthstone",
});

const poppinsBold = Poppins({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-poppins-bold",
});

const poppinsThin = Poppins({
  weight: "200",
  subsets: ["latin"],
  variable: "--font-poppins-thin",
});

const SOCIAL_SIZE = 32;

const MENU_ITEMS_BY_YEAR = {
  1: [
    "Fotografía",
    "P.D.L.C",
    "Edición de Sonido I",
    "Prácticas de la Escritura",
  ],
  2: ["", "", "", ""],
  3: ["", "", "", ""],
};

export default function Home() {
  const [selectedYear, setSelectedYear] = useState(1);

  return (
    <main className="relative min-h-screen bg-cover bg-center text-white overflow-hidden">
      <Image
        className="-z-50 relative opacity-80"
        src="/inicio/fondo-inicio.webp"
        alt="Fondo inicio"
        objectFit="cover"
        fill
        priority
      />

      {/* Click to show UI again */}
      <div
        onClick={() => {
          const content = document.getElementById("content");
          if (content) {
            if (content.style.display === "none") {
              content.style.display = "flex";
              content.className += " animate-fade-in";
              setTimeout(() => {
                content.className = content.className.replace(
                  " animate-fade-in",
                  ""
                );
              }, 300);
            }
          }
        }}
        className="absolute inset-0 z-0"
      ></div>

      {/* Contenedor principal */}
      <div
        id="content"
        className="relative z-10 flex flex-col justify-between min-h-screen"
      >
        {/* Header con redes */}
        <div className="absolute top-0 right-0 p-8 flex justify-between items-center">
          <div className="flex justify-end gap-8 text-2xl">
            <a
              href="https://www.instagram.com/ignaciosinfiltro/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram ignaciosinfiltro"
              className="hover:scale-125 transition"
            >
              <Image
                src="/redes/instagram-png.png"
                alt="Instagram logo"
                width={SOCIAL_SIZE}
                height={SOCIAL_SIZE}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ignaciocecilucero/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn ignaciocecilucero"
              className="hover:scale-125 transition"
            >
              <Image
                src="/redes/linkedin-png.png"
                alt="LinkedIn logo"
                width={SOCIAL_SIZE}
                height={SOCIAL_SIZE}
              />
            </a>
            <a
              href="https://www.youtube.com/@ignaciosinfiltro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube ignaciosinfiltro"
              className="hover:scale-125 transition"
            >
              <Image
                src="/redes/youtube-png.png"
                alt="YouTube logo"
                width={SOCIAL_SIZE * 1.5}
                height={SOCIAL_SIZE}
              />
            </a>
          </div>
        </div>

        {/* Contenido principal */}
        <div className=" flex flex-row h-screen p-[100px] justify-between items-center">
          <div className="flex flex-col justify-between items-start h-full">
            {/* Título*/}
            <div className="flex flex-col">
              <h1
                className={
                  `text-6xl my-shadow text-center leading-10 ` +
                  boldonse.className
                }
              >
                Frame <br />
                <span className="text-3xl leading-12">x</span> <br />
                Frame
              </h1>
              <p className={`mt-4 my-shadow text-3xl ` + birthstone.className}>
                by Ignacio Ceci
              </p>
            </div>

            {/* Descripción */}
            <div className="max-w-lg flex flex-col justify-between">
              <p className="text-[1.4rem] leading-[2.5rem] my-shadow ">
                <span className={poppinsBold.className}>
                  Expositor de trabajos
                </span>{" "}
                realizados <br /> en la carrera de{" "}
                <span className={poppinsBold.className}>
                  Producción Audiovisual
                </span>
                <br /> de la{" "}
                <span className={poppinsBold.className}>
                  Escuela de Comunicación ETER
                </span>
                .
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between items-end h-full">
            <div
              className={
                `flex flex-col items-end gap-6 my-shadow text-5xl text-end pt-16 overflow-hidden ` +
                poppinsThin.className
              }
            >
              {selectedYear !== 0 &&
                MENU_ITEMS_BY_YEAR[selectedYear as 1 | 2 | 3].map((item) => (
                  <span
                    key={item}
                    data-year={selectedYear}
                    className="hover:scale-110 transition hover:-translate-x-6 cursor-pointer p-2 select-none animate-slide-in"
                  >
                    {item}
                  </span>
                ))}
            </div>

            <div
              className={
                `flex justify-between gap-16 text-white text-[2.75rem] select-none ` +
                poppinsBold.className
              }
            >
              <button
                className={
                  `px-2 my-shadow transition cursor-pointer` +
                  (selectedYear === 1
                    ? " scale-125 hover:scale-100 -translate-y-1/2"
                    : " hover:scale-125")
                }
                onClick={() => {
                  if (selectedYear !== 1) {
                    setSelectedYear(1);
                  } else {
                    const year1list =
                      document.querySelectorAll('[data-year="1"]');
                    year1list.forEach((year1) => {
                      if (year1) year1.className += " animate-slide-out";
                    });
                    setTimeout(() => setSelectedYear(0), 300);
                  }
                }}
              >
                1°
              </button>
              <button
                disabled
                className={
                  `px-2 my-shadow transition text-neutral-400 blur-[1px] cursor-not-allowed` +
                  (selectedYear === 2
                    ? " scale-125 hover:scale-100 -translate-y-1/2"
                    : " hover:scale-125")
                }
                onClick={() => {
                  if (selectedYear !== 2) {
                    setSelectedYear(2);
                  } else {
                    const year2list =
                      document.querySelectorAll('[data-year="2"]');
                    year2list.forEach((year2) => {
                      if (year2) year2.className += " animate-slide-out";
                    });
                    setTimeout(() => setSelectedYear(0), 300);
                  }
                }}
              >
                2°
              </button>
              <button
                disabled
                className={
                  `px-2 my-shadow transition text-neutral-400 blur-[1px] cursor-not-allowed` +
                  (selectedYear === 3
                    ? " scale-125 hover:scale-100 -translate-y-1/2"
                    : " hover:scale-125")
                }
                onClick={() => {
                  if (selectedYear !== 3) {
                    setSelectedYear(3);
                  } else {
                    const year3list =
                      document.querySelectorAll('[data-year="3"]');
                    year3list.forEach((year3) => {
                      if (year3) year3.className += " animate-slide-out";
                    });
                    setTimeout(() => setSelectedYear(0), 300);
                  }
                }}
              >
                3°
              </button>
            </div>
          </div>
        </div>

        {/* Boton flotante para ocultar UI */}
        <button
          onClick={() => {
            const content = document.getElementById("content");
            if (content) {
              if (content.style.display === "none") {
                content.style.display = "flex";
              } else {
                content.className += " animate-fade-out";
                setTimeout(() => {
                  content.style.display = "none";
                  content.className = content.className.replace(
                    " animate-fade-out",
                    ""
                  );
                }, 300);
              }
            }
          }}
          className="absolute bottom-4 left-1/2 p-2 bg-black opacity-30 hover:opacity-70 rounded-full cursor-pointer hover:bg-opacity-75 transition z-20"
        >
          <Image
            src="/icons/eye-slash-regular-full.svg"
            className="invert"
            alt="Ocultar UI"
            width={24}
            height={24}
          />
        </button>
      </div>
    </main>
  );
}

// text-neutral-400 blur-[1px] cursor-not-allowed
