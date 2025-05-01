'use client';
import Link from 'next/link';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@/components/ui/button';
import SectionDescription from '@/components/ui/sectionDescription';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

const urls = [
  {
    id: crypto.randomUUID(),
    src: 'https://www.littlemillennium.com/assets/img/program/new-p1.webp',
    href: '#',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://www.littlemillennium.com/assets/img/program/new-p2.webp',
    href: '#',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://www.littlemillennium.com/assets/img/program/new-p3.webp',
    href: '#',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://www.littlemillennium.com/assets/img/program/new-p4.webp',
    href: '#',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://www.littlemillennium.com/assets/img/program/new-p1.webp',
    href: '#',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://www.littlemillennium.com/assets/img/program/new-p2.webp',
    href: '#',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://www.littlemillennium.com/assets/img/program/new-p3.webp',
    href: '#',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://www.littlemillennium.com/assets/img/program/new-p4.webp',
    href: '#',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://www.littlemillennium.com/assets/img/program/new-p1.webp',
    href: '#',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://www.littlemillennium.com/assets/img/program/new-p2.webp',
    href: '#',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://www.littlemillennium.com/assets/img/program/new-p3.webp',
    href: '#',
  },
  {
    id: crypto.randomUUID(),
    src: 'https://www.littlemillennium.com/assets/img/program/new-p4.webp',
    href: '#',
  },
];

const ServicesOne = () => {
  const pagination = {
    clickable: true,
    el: '.service-pagination',
  };
  return (
    <section className='relative pt-15 pb-15 bg-warm lg:bg-transparent services'>
      <div className='container'>
        <div className='relative after:absolute after:right-0 after:top-0 after:lg:bg-warm after:bg-transparent after:w-[calc(100%-279px)] after:h-[calc(100%-120px)] after:rounded-[10px] after:z-[-1]'>
          <div className='flex flex-col justify-between lg:flex-row lg:items-center'>
            <div className='flex-shrink-0 flex-grow-0 basis-auto lg:w-[30%]'>
              <SectionName>Latest Service</SectionName>
              <Title size={'3.5xl'}>Our Programs</Title>
            </div>
            <div className='flex-shrink-0 flex-grow-0 basis-auto lg:w-[50%] py-6'>
              <SectionDescription>
                Little Millennium’s Preschool Program levels have been
                strategically designed to ensure holistic development of your
                child. Explore our preschool programs to understand why Little
                Millennium® is indeed, the best play school for kids in India.
              </SectionDescription>
            </div>
          </div>
          <div className='justify-between lg:flex'>
            <div className='flex-shrink-0 flex-grow-0 basis-auto lg:w-[25%]'>
              <div className='relative lg:mt-7.5 mt-5'>
                <div className='service-pagination'></div>
                <div className='mt-5 lg:mt-10'>
                  <Button
                    asChild
                    variant='outline'
                    className='text-foreground border-secondary'>
                    <Link href='/services'>
                      Read More{' '}
                      <FaArrowRight className='transition-all duration-300 text-secondary-foreground group-hover:text-cream-foreground' />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className='flex-shrink-0 flex-grow-0 basis-auto lg:w-[70%] mt-6 lg:mt-0'>
              <div>
                <Swiper
                  spaceBetween={2}
                  pagination={pagination}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                  }}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    576: {
                      slidesPerView: 2,
                    },
                    10240: {
                      slidesPerView: 3,
                    },
                    1290: {
                      slidesPerView: 3,
                    },
                  }}
                  modules={[Pagination, Autoplay]}
                  wrapperClass='[&_.swiper-slide-active>.service-card]:bg-background [&_.swiper-slide-active_.card-footer]:opacity-100 [&_.swiper-slide-active_.card-footer]:visible '>
                  {/* {servicesDataOne.map(
                    ({ id, service_details, service_name, src }) => (
                      <SwiperSlide key={id}>
                        <ServiceCardOne
                          service_details={service_details}
                          service_name={service_name}
                          src={src}
                        />
                      </SwiperSlide>
                    )
                  )} */}
                  {urls.map(({ id, src, href }) => (
                    <SwiperSlide key={id}>
                      <Image
                        src={src}
                        alt='img'
                        width={500}
                        height={500}
                        className='w-full h-full'
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- shap start --> */}
      <div className='absolute hidden left-4 bottom-3 animate-left-right sm:block'>
        <img
          src={'/images/shapes/man.png'}
          width={138}
          height={221}
          alt='img'
        />
      </div>
      {/* <!-- shap end --> */}
    </section>
  );
};

export default ServicesOne;

function Card() {
  return (
    <div className='service-card rounded-[10px] px-7.5 py-9 bg-transparent hover:bg-background transition-all duration-500 hover:shadow-3xl m-2.5 group/card'>
      <i className='text-green-foreground'>{renderIcon(src)}</i>
      <h4 className='lg:max-w-[176px] mt-5'>
        <Link
          href={'/service-details'}
          className='lg:text-2xl text-xl font-semibold leading-[141%] group-hover/card:text-green-foreground transition-all duration-500 '>
          {service_name}
        </Link>
      </h4>
      <div className='invisible transition-all duration-500 opacity-0 card-footer group-hover/card:opacity-100 group-hover/card:visible'>
        <p className='mt-[15px] lg:max-w-[223px]'>{service_details}</p>
        <Link
          href={'/service-details'}
          className='inline-flex items-center gap-2.5 lg:mt-7.5 mt-4 group/btn'>
          <span className='transition-all duration-500 group-hover/btn:text-green-foreground'>
            Read More
          </span>
          <span className='transition-all duration-500 group-hover/btn:ml-1 text-green-foreground'>
            {' '}
            <FaArrowRight />{' '}
          </span>
        </Link>
      </div>
    </div>
  );
}

// base-url=	https://www.littlemillennium.com
