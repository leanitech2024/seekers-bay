'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import Image from 'next/image';
import { A11y, Autoplay } from 'swiper/modules';

export default function HeroCarousel({ images }) {
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
      lazyPreloadPrevNext={2}
      className='mySwiper aspect-video lg:aspect-[24/9]'>
      {images.map((image) => (
        <SwiperSlide key={image.id} className={'h-full w-full'}>
          <Image
            src={image.path}
            alt={`hero-section-${image.id}`}
            className='object-cover w-full h-full'
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
