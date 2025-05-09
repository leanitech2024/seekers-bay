import { Button } from '@/components/ui/button';
import Input from '@/components/ui/input';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa6';

const NewsletterOne = () => {
  return (
    <section className='bg-[linear-gradient(180deg,_rgba(238,255,200,0.00)_0%,_#E9FFB6_100%)] overflow-x-hidden'>
      <div className='bg-bottom bg-no-repeat bg-contain bg-newsletter-banner'>
        <div className='container'>
          <div className='flex lg:flex-row flex-col lg:items-center justify-between gap-7.5'>
            <div className='max-w-[598px] w-full order-1 lg:order-0 animate-left-right'>
              <div className='bg-bottom bg-no-repeat bg-contain bg-newsletter-shap'>
                <Image
                  src={
                    'https://ascent-next-js.vercel.app/_next/image?url=%2Fimages%2Fnewsletter%2Fstudent.png&w=828&q=75'
                  }
                  width={396}
                  height={555}
                  alt='student-img'
                  className='mx-auto'
                />
              </div>
            </div>
            <div className='lg:max-w-[530px] order-0 lg:order-1'>
              <SectionName className={'text-muted-foreground'}>
                Get Connected
              </SectionName>
              <Title size={'3.5xl'}>
                Education That Sparks Imaginat Nurturing Curiosity Inspire
              </Title>
              <div className='relative mt-5 lg:mt-10'>
                <Input type={'email'} placeholder='Enter Your Email' />
                <Button className='absolute right-[10px] top-1/2 -translate-y-1/2 text-cream-foreground'>
                  Submit <FaArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterOne;
