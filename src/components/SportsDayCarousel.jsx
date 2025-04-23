'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import Image from 'next/image';
import { A11y, Autoplay, Pagination } from 'swiper/modules';

const images = [
  {
    id: crypto.randomUUID(),
    path: '/sports-day-24-pics/1.webp',
  },
  {
    id: crypto.randomUUID(),
    path: '/sports-day-24-pics/2.webp',
  },
  {
    id: crypto.randomUUID(),
    path: '/sports-day-24-pics/3.webp',
  },
  {
    id: crypto.randomUUID(),
    path: '/sports-day-24-pics/4.webp',
  },
  {
    id: crypto.randomUUID(),
    path: '/sports-day-24-pics/5.webp',
  },
  {
    id: crypto.randomUUID(),
    path: '/sports-day-24-pics/6.webp',
  },
];

const dobleImages = images.concat(images);
const imagesWithId = dobleImages.map((image) => {
  return {
    ...image,
    id: crypto.randomUUID(),
  };
});

export default function SportsDayCarousel() {
  return (
    <Swiper
      pagination={true}
      modules={[Autoplay, A11y, Pagination]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      rewind={true}
      grabCursor={true}
      className='mySwiper aspect-video lg:aspect-[26/9]'>
      {imagesWithId.map((image) => (
        <>
          <SwiperSlide key={image.id} className={'h-full w-full'}>
            <Image
              src={image.path}
              alt='sports-day-24'
              className='object-cover w-full h-full rounded-lg'
              width={1920}
              height={1080}
            />
          </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
}
