import Container from "./Container";
import {MdPlayArrow}from "react-icons/md";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import SingleFavourites from "./SingleFavourites";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function Favourites() {
    // const swiper=useSwiper();

    return (
        <div className="w-full text-black">
            <Container>
                <div className="favouritesWrp">
                    <h1 className="text-5xl text-center py-5 font-bold pCl">Our Favourites</h1>
                        <Swiper
                        // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={20}
                            // navigation
                            breakpoints={{
                                // when window width is >= 640px
                                640: {
                                  width: 640,
                                  slidesPerView: 1,
                                },
                                // when window width is >= 768px
                                768: {
                                  width: 768,
                                  slidesPerView: 2,
                                },
                                990: {
                                    width: 990,
                                    slidesPerView: 3,
                                  },
                              }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide>
                                <SingleFavourites/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SingleFavourites/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SingleFavourites/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SingleFavourites/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SingleFavourites/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SingleFavourites/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SingleFavourites/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <SingleFavourites/>
                            </SwiperSlide>
                        </Swiper>


                        <div className="flex justify-center items-center gap-8 m-5">
                            <div className="pBg rounded-md rotate-180 cursor-pointer">
                                <MdPlayArrow className="text-4xl text-white"/>
                            </div>
                            <div className="pBg rounded-md cursor-pointer">
                                <MdPlayArrow className="text-4xl text-white"/>
                            </div>
                        </div>
                </div>
            </Container>
        </div>
    )
}
