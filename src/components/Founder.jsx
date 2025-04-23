import SlideUp from '@/lib/animations/slideUp';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import SectionDescription from './ui/sectionDescription';
import SectionName from './ui/sectionName';
import Title from './ui/title';

export default function Founder() {
  return (
    <section className='pt-10 pb-10 lg:pt-15 lg:pb-15'>
      <div className='container'>
        <SlideUp>
          <div className={'grid grid-cols-2 gap-4 md:gap-6'}>
            <div>
              <Image
                src={'/owner.webp'}
                alt='owner'
                width={1000}
                height={1000}
                className={'w-full h-full object-cover rounded-lg'}
              />
            </div>
            <div className={' inline-grid content-center px-4'}>
              <SectionName>Founder</SectionName>
              <Title size={'3.5xl'} className={'pb-5'}>
                Unlocking Potential, One Child at a just Time in school
              </Title>
              <SectionDescription>
                Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies
                dictum facilisis sem. Imperdiet massa turpis sit proin metus
                volutpat loren ipsum Lorem ipsum dolor sit amet consectetur.
                Amet lectus mi ultricies dictum
              </SectionDescription>
              <div className='lg:mt-10 mt-7'>
                <Button asChild variant=''>
                  <Link href='/enquiry'>Connect with us</Link>
                </Button>
              </div>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
