"use client";

import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "./Slider.css";
import { SliderComponentProps } from "./types";

interface ISliderComponent {
  data: any;
  isRedirectable?: boolean;
}
const SliderComponent = ({ data, isRedirectable = true }: ISliderComponent) => {
  const router = useRouter();

  const goToDetailsPage = (id: number) => {
    router.push(`/projects/${id}`);
  };

  return (
    <div className={"sliderContainer"}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={28}
        slidesPerView={"auto"}
        navigation
        autoHeight={false}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2.5,
          },
        }}
      >
        {data?.map((image: any, index: number) => {
          return (
            <SwiperSlide
              key={index}
              onClick={() => isRedirectable && goToDetailsPage(image.id)}
            >
              <img
                src={image.image_11 || image.image}
                alt={`Slide ${index}`}
                className={"slideImage"}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderComponent;
