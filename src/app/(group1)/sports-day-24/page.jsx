import PageTitle from '@/components/sections/pageTitle';
import SportsDayCarousel from '@/components/SportsDayCarousel';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';

export default async function SportsDayPage({ params, searchParams }) {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate a delay

  return (
    <main>
      <PageTitle
        pageName={'Sports Day 2024'}
        breadcrumbCurrent={'sports-day-24'}
      />

      <div className='pb-10 lg:pb-15'>
        <div className='container px-4 xl:px-0'>
          <div className={'py-7.5'}>
            <SectionName>Sports day 2024</SectionName>
            <Title size={'3.5xl'} className={'pb-5'}>
              Seekers Bay Preschool Moments - A Gallery of Smiles and Fun
            </Title>
          </div>

          <SportsDayCarousel />
        </div>
      </div>
    </main>
  );
}
