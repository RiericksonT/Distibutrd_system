import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import styles from './slider.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
    return (
        <div className={styles.sliderContainer}>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}

            >
                <SwiperSlide>
                    <img src="/slider/sl1.png" alt="Slider 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/slider/sl1.png" alt="Slider 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/slider/sl1.png" alt="Slider 3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/slider/sl1.png" alt="Slider 4" />
                </SwiperSlide>
                ...
            </Swiper>
        </div>
    );
};