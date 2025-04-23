import { Button } from '@/components/ui/button';
import SectionDescription from '@/components/ui/sectionDescription';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import Link from 'next/link';

import Blocks from '../../../../public/icons/blocks';
import Book from '../../../../public/icons/book';
import Chalkboard from '../../../../public/icons/chalkboard';
import Kindergarden from '../../../../public/icons/kindergarden';
import CardOne from './cardOne';

const SuccessProjectOne = () => {
  return (
    <section className='pt-10 pb-10 lg:pt-15 lg:pb-15'>
      <div className='container'>
        <div className='grid xl:grid-cols-2 lg:grid-cols-[40%_auto] grid-cols-1 gap-7.5'>
          <div className='lg:max-w-[600px]'>
            <SectionName className={'text-primary-foreground'}>
              Number Talks
            </SectionName>
            <Title size={'3.5xl'} className={'lg:max-w-[410px] pb-5'}>
              Start Your Own Preschool
            </Title>
            <SectionDescription>
              Since its inception, Seekers Bay® has been recognized as one of
              the leading preschool chain in India with over 750 pre-schools
              across 150 cities having served more than 2,00,000 families till
              date. With its scientifically developed, award-winning Seven Petal
              curriculum and end to end support facilities, Seekers Bay®
              presents a profitable franchise opportunity that offers ultra high
              returns on investment and attractive franchise pricing. Interested
              to explore and start your own pre-school? Fill out your details in
              the form below and we will get in touch with you shortly.
            </SectionDescription>
            <Button asChild variant='' className='mt-10'>
              <Link href={'/contact-us'}>Get a quote</Link>
            </Button>
          </div>

          <div className='grid sm:grid-cols-2 grid-cols-1 gap-7.5'>
            <CardOne
              icon={<Kindergarden />}
              color={'bg-primary'}
              number={'20k'}
              title={'Running Students'}
            />
            <CardOne
              icon={<Book />}
              color={'bg-destructive'}
              number={'12K'}
              title={'Completed'}
            />
            <CardOne
              icon={<Blocks />}
              color={'bg-green'}
              number={'3K'}
              title={'Award Winning'}
            />
            <CardOne
              icon={<Chalkboard />}
              color={'bg-secondary'}
              number={'23K'}
              title={'Guardian Satishfaction'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessProjectOne;
