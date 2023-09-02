import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
export const SlideFirstSectiont = () => {






    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}

            >
                <SwiperSlide>
                    <div className="slider_wrapper">
                        <div className="slide_top">
                            <div className="slide_top_first">
                                <picture >
                                    <img src="/img/game.jpg" alt='1' className='slide_top_img' />
                                </picture>
                            </div>
                            <div className="slide_top_two">
                                <picture >
                                    <img src="/img/game.jpg" alt="2" className='slide_top_img' />
                                </picture>
                            </div>
                        </div>
                        <div className="slide_bottom">
                            <div className="slide_bottom_first">
                                <section>
                                    <img src="/img/game.jpg" alt="3" className='slide_bottom_img' />
                                </section>
                            </div>
                            <div className="slide_bottom_second">
                                <picture>
                                    <img src="/img/game.jpg" alt='4' className='slide_bottom_img' />
                                </picture>
                            </div>
                            <div className="slide_bottom_third">
                                <picture>
                                    <img src="/img/game.jpg" alt='5' className='slide_bottom_img' />
                                </picture>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}