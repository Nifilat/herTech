import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { ReactComponent as Audi } from "images/Audi.svg";
import { ReactComponent as Netflix } from "images/Netflix.svg";
import { ReactComponent as Maxar } from "images/Maxar.svg";
import { ReactComponent as SpaceX } from "images/SpaceX.svg";
import { ReactComponent as Netflix2 } from "images/netflix2.svg";
function Companies() {
    return (
        <div className="brands py-10 flex flex-col gap-8">
            <h2 className="text-center text-gray-700">COMPANIES HIRING ON HER TECH</h2>
            <div className="flex justify-between gap-2 ">
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={50}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={3000}
                    freeMode={true}
                    modules={[FreeMode, Autoplay]}
                >
                    <SwiperSlide>
                        <Audi opacity={0.5} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Netflix />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Maxar opacity={0.5} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Audi opacity={0.5} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SpaceX opacity={0.5} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Audi opacity={0.5} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Netflix2 opacity={0.5} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SpaceX opacity={0.5} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Companies;
