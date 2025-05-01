// import AnnualDayCarousel from '@/components/AnnualDayCarousel';
import PageTitle from '@/components/sections/pageTitle';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import { readImages } from '@/lib/actions';
import Image from 'next/image';

export default async function AnnualDayPage({ params, searchParams }) {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate a delay
  const images = await readImages();

  return (
    <main>
      <PageTitle
        pageName={'Annual Day 2024'}
        breadcrumbCurrent={'annual-day-24'}
      />

      <div className='pb-10 lg:pb-15'>
        <div className='container px-4 space-y-12 xl:px-0'>
          <div className={''}>
            <SectionName>Annual day 2024</SectionName>
            <Title size={'3.5xl'} className={'pb-5'}>
              Seekers Bay Preschool Moments - A Gallery of Smiles and Fun
            </Title>
          </div>

          {/* <AnnualDayCarousel images={images} /> */}

          <div
            className={
              'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8'
            }>
            {images.map((image) => (
              <figure
                key={image.id}
                className={'relative overflow-hidden rounded-lg shadow-lg'}>
                <Image
                  src={image.path}
                  alt={`Annual Day Image ${image.id}`}
                  className={
                    'w-full h-full rounded-lg hover:scale-105 transition-transform duration-300 hover:cursor-pointer'
                  }
                  loading={'lazy'}
                  width={800}
                  height={800}
                  priority={false}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
