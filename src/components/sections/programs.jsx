import Image from 'next/image';
import SectionName from '../ui/sectionName';
import Title from '../ui/title';

import SlideUp from '@/lib/animations/slideUp';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';

const visionAndMissions = [
  {
    id: crypto.randomUUID(),
    title: 'Our Vision',
    content:
      "Embrace your child's uniqueness with us! We celebrate their strengths, needs, and interests like no other in our preschool",
  },
  {
    id: crypto.randomUUID(),
    title: 'Our Mission',
    content:
      'Step into a world of creativity, curiosity, and a whole lot of love for learning. Safety and inclusivity are our middle names!',
  },
];

const Programs = () => {
  return (
    <section className='relative pt-10 pb-10 lg:pt-15 lg:pb-15'>
      <div className='container'>
        <div className='flex flex-col items-center text-center'>
          <SectionName className={'text-primary-foreground'}>
            Our Vision & Mission
          </SectionName>
          <Title size={'3.5xl'} className={'lg:max-w-[630px]'}>
            Strong Foundation for Success For Nurturing Curiosityl
          </Title>
        </div>
        <div className='mt-10'>
          <p className={'text-center font-medium font-jost'}>
            Join us in nurturing your child's social, emotional, cognitive, and
            physical growth through our early childhood learning
          </p>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-y-7.5 lg:gap-x-[74px] gap-x-5 lg:pt-15 pt-10'>
            {/* {servicesDataTwo
              .slice(0, 4)
              .map(({ icon, id, service_details, service_name }) => (
                <ServiceCardTwo
                  key={id}
                  icon={icon}
                  service_name={service_name}
                  service_details={service_details}
                />
              ))} */}

            {visionAndMissions.map((items) => (
              <VisionAndMission key={items.id} {...items} />
            ))}
          </div>
        </div>
      </div>

      <div className='absolute top-15 right-11 z-[-1] lg:max-w-full max-w-36 md:block hidden animate-left-right'>
        <Image
          src={'/images/shapes/pencil-rocket.png'}
          width={341}
          height={247}
          alt='pencil'
          className='w-full h-auto'
        />
      </div>
    </section>
  );
};

export default Programs;

function VisionAndMission({ title, content }) {
  return (
    <SlideUp delay={2}>
      <div className='relative rounded-[10px] bg-background border-2 border-[#F2F2F2] lg:p-10 p-4 transition-all duration-500 hover:shadow-3xl hover:border-transparent group/card'>
        {/* <div className='md:max-w-[88px] max-w-[70px] w-full max-h-[88px] flex justify-center items-center rounded-[10px] border border-[#F2F2F2] bg-background sm:p-[14px] p-2.5 static lg:absolute -left-11 top-1/2 lg:-translate-y-1/2 transition-all duration-500 text-green-foreground group-hover/card:bg-green group-hover/card:text-cream-foreground'>
          <RenderComponent item={icon} />
        </div> */}
        <div className='mt-4 lg:pl-11 lg:mt-0'>
          <h4>
            <Link
              href='/service-details'
              className='text-xl font-semibold transition-all duration-500 lg:text-2xl group-hover/card:text-secondary-foreground'>
              {title}
            </Link>
          </h4>
          <p className='mt-3 lg:mt-4'>{content}</p>
          <Link
            href='/contact-us'
            className='inline-flex items-center gap-2.5 lg:mt-7.5 mt-4 group/btn'>
            <span className='transition-all duration-500 group-hover/btn:text-secondary-foreground'>
              Read More
            </span>
            <span className='transition-all duration-500 group-hover/btn:ml-1 group-hover/btn:text-secondary-foreground'>
              {' '}
              <FaArrowRight />{' '}
            </span>
          </Link>
        </div>
      </div>
    </SlideUp>
  );
}
