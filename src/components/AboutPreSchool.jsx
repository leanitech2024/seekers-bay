import SlideUp from '@/lib/animations/slideUp';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import CapDoll from '../../public/icons/cap-doll';
import Doll from '../../public/icons/doll';
import RingBell from '../../public/icons/ring-bell';
import SectionName from './ui/sectionName';
import Title from './ui/title';

import img_1 from '../../public/sports-day-24-pics/1.webp';
import img_2 from '../../public/sports-day-24-pics/2.webp';
import img_3 from '../../public/sports-day-24-pics/3.webp';

const preSchoolData = [
  {
    id: crypto.randomUUID(),
    title: 'Our History',
    src: img_1,
    icon: 'ring-bell',
    desc: 'Seekers Bay Preschool was founded in 2018 with the mission of providing high-quality early childhood education to the local community. Since then, we have grown and expanded to become one of the most respected preschools and kindergartens in the area.',
  },
  {
    id: crypto.randomUUID(),
    title: 'Our Curriculum',
    src: img_2,
    icon: 'cap-doll',
    desc: "Our preschool provides a comprehensive curriculum that lays a strong foundation for early childhood learning while fostering creativity and exploration. It emphasizes all facets of intelligence as outlined by Harvard's multiple intelligences theory, covering subjects such as math, science, language arts, and geography.",
  },
  {
    id: crypto.randomUUID(),
    title: 'Our Teachers',
    src: img_3,
    icon: 'doll',
    desc: "Our teachers are highly trained professionals in early education and are passionate about early childhood learning. They are dedicated to providing a warm and nurturing preschool environment that encourages your child's growth and development.",
  },
];

export default function AboutPreSchool() {
  return (
    <section className='relative pt-10 pb-10 lg:pt-15 lg:pb-15'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center'>
          <SectionName className={'text-primary-foreground'}>
            About us
          </SectionName>
          <Title size={'3.5xl'} className={'mt-2.5 text-center max-w-[514px]'}>
            About Seekers Bay Preschool
          </Title>
        </div>
        <div className='pt-10 lg:pt-15'>
          <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7.5'>
            {preSchoolData.map(({ desc, id, src, title, icon }) => (
              <Card
                key={id}
                id={id}
                desc={desc}
                title={title}
                src={src}
                icon={icon}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='absolute left-0 top-0 z-[-1] 2xl:w-auto w-96 hidden xl:block'>
        <Image
          src={'/images/shapes/class-j.png'}
          width={471}
          height={496}
          alt='img'
        />
      </div>
    </section>
  );
}

const Card = ({ title, desc, src, icon, id }) => {
  const renderIcon = (icon) => {
    switch (icon) {
      case 'ring-bell':
        return (
          <i className='opacity-50 text-border'>
            <RingBell />
          </i>
        );
      case 'cap-doll':
        return (
          <i className='opacity-50 text-border'>
            <CapDoll />
          </i>
        );
      case 'doll':
        return (
          <i className='opacity-50 text-border'>
            <Doll />
          </i>
        );

      default:
        break;
    }
  };

  return (
    <SlideUp delay={id}>
      <div className='border border-warm bg-background rounded-[10px] p-7.5 group/card layer-card'>
        <div className='relative overflow-hidden'>
          <Image
            src={src}
            width={344}
            height={210}
            sizes='100vw'
            alt='Tutoring Services'
            className='w-full'
          />
          <div className='absolute left-0 flex w-full h-full top-full'>
            <div
              className={`image-layer-hover`}
              style={{ backgroundImage: `url(${src.src})` }}></div>
            <div
              className={`image-layer-hover`}
              style={{ backgroundImage: `url(${src.src})` }}></div>
            <div
              className={`image-layer-hover`}
              style={{ backgroundImage: `url(${src.src})` }}></div>
            <div
              className={`image-layer-hover`}
              style={{ backgroundImage: `url(${src.src})` }}></div>
          </div>
        </div>
        <div className='pt-7.5'>
          <h4>
            <Link
              href='/service-details'
              className='lg:text-2xl text-xl font-semibold lg:leading-[140%] group-hover/card:text-primary-foreground transition-all duration-500'>
              {title}
            </Link>
          </h4>
          <p className='pt-2'>{desc}</p>
          <div className='lg:pt-7.5 pt-5 flex justify-between items-center'>
            <Link href='/service-details' className='flex items-center gap-2'>
              <span className='transition-all duration-500 group-hover/card:text-primary-foreground'>
                learn more
              </span>
              <FaArrowRight className='text-destructive-foreground' />
            </Link>
            {renderIcon(icon)}
          </div>
        </div>
      </div>
    </SlideUp>
  );
};
