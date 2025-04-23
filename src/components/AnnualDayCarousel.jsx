'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import Image from 'next/image';
import { A11y, Autoplay } from 'swiper/modules';

export default function AnnualDayCarousel({ images }) {
  return (
    <Swiper
      pagination={true}
      modules={[Autoplay, A11y]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      rewind={true}
      grabCursor={true}
      className='mySwiper aspect-video lg:aspect-[26/9]'>
      {images.map((image) => (
        <SwiperSlide key={image.id} className={'h-full w-full'}>
          <Image
            src={image.path}
            alt={`annual-day-24-${image.id}`}
            className='object-cover w-full h-full rounded-lg'
            width={1920}
            height={1080}
            loading={'lazy'}
            priority={false}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
