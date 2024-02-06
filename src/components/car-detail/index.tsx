import React, { useState } from "react";
import OpeningHoursComponent from "../car-show/opening-hours";
import Image from "next/image";
import UnifiedInfoComponent from "../car-show/unified-info";
import { data } from "./dummy";
import ImageSlider from "./image-slider";
import { IoMdSpeedometer } from "react-icons/io";
import CarDescription from "./overview";
const CarDetailsComponent = () => {
  return (
    <>
      <div className="grid grid-cols-2 space-x-10">
        <div>
          <ImageSlider images={data.images} />
          <section className="flex flex-col space-y-3 mt-10 ">
            <span className="text-3xl font-bold">Overview</span>
            <span className="text-xl">{data.attentionGrabber}</span>
            <section className="flex flex-col">
              <CarDescription description={data.description} />
              <span className="mt-5 text-2xl font-bold">Description</span>
              <span>{data.summaryDescription}</span>
            </section>
          </section>
        </div>

        <div className="flex flex-col">
          <span className="text-3xl font-semibold">
            {data.titleAndSubtitle.title}
          </span>
          <span className="text-xl">{data.titleAndSubtitle.subtitle}</span>
          <section className="flex flex-wrap  ">
            {data.description.split("|").map((item: string) => (
              <div key={item} className="bg-white p-2 mr-4 mt-2 text-sm">
                {item}
              </div>
            ))}
          </section>
          <span className="my-3 text-3xl font-semibold">{data.price}</span>
          <div className="flex flex-wrap gap-5 mx-auto place-content-center">
            <UnifiedInfoComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetailsComponent;