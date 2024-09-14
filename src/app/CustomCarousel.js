// src/app/CustomCarousel.js
"use client";
import React, { useState, useEffect } from "react";
import styles from "./CustomCarousel.module.css";
import Image from "next/image";

const images = [
  "/images/image-1.jpg",
  "/images/image-2.jpg",
  "/images/image-3.jpg",
];

const CustomCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className={styles.carousel}>
      <button className={styles.leftArrow} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={styles.rightArrow} onClick={nextSlide}>
        &#10095;
      </button>
      {images.map((image, index) => (
        <div
          className={index === current ? styles.slideActive : styles.slide}
          key={index}
        >
          {index === current && (
            <Image
              src={image}
              alt={`Slide ${index}`}
              width={500}
              height={500}
              className={styles.image}
            />
          )}
        </div>
      ))}
    </section>
  );
};

export default CustomCarousel;
