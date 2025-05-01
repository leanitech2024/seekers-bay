'use client';

import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import SlideUp from '@/lib/animations/slideUp';
import { useState } from 'react';
import CardFive from './cardFive';
import CardFour from './cardFour';
import CardOne from './cardOne';
import CardSix from './cardSix';
import CardThree from './cardThree';
import CardTwo from './cardTwo';

const categoryList = [
  {
    id: 1,
    label: 'Toddler Program (1.5+)',
    data_target: 'toddler',
  },
  {
    id: 2,
    label: 'Play Group (2+)',
    data_target: 'play-group',
  },
  {
    id: 3,
    label: 'Nursery (3+)',
    data_target: 'nursery',
  },
  {
    id: 4,
    label: 'Jr KG (4+)',
    data_target: 'jr-kg',
  },
  {
    id: 5,
    label: 'Sr KG (5+)',
    data_target: 'sr-kg',
  },
  {
    id: 6,
    label: 'DAY CARE (1+)',
    data_target: 'day-care',
  },
];
const Gallery = () => {
  const [activeTab, setActiveTab] = useState('toddler');

  return (
    <section className='pt-10 pb-10 lg:pt-15 lg:pb-15 portfolio'>
      <div className='container'>
        <div className='flex flex-col items-center text-center'>
          <SectionName>Learning Hubs</SectionName>
          <Title size={'3.5xl'} className={'lg:max-w-[630px]'}>
            Exploring Minds Elementary School Education the only school
          </Title>
        </div>
        <div className='pt-10'>
          <ul className='flex items-center justify-center flex-wrap md:gap-7.5 gap-5'>
            {categoryList.map(({ data_target, id, label }) => {
              return (
                <li
                  key={id}
                  onClick={() => setActiveTab(data_target)}
                  className={`px-5 py-2.5 text-xl font-700 border border-[#F2F2F2] rounded-[10px] font-jost cursor-pointer hover:bg-primary hover:text-cream-foreground transition-all duration-500 ${
                    activeTab === data_target
                      ? 'bg-primary text-cream-foreground'
                      : ''
                  }`}>
                  {label}
                </li>
              );
            })}
          </ul>
          <SlideUp>
            <div className='mt-[64px] overflow-hidden relative '>
              <CardOne data_target={activeTab} />
              <CardTwo data_target={activeTab} />
              <CardThree data_target={activeTab} />
              <CardFour data_target={activeTab} />
              <CardFive data_target={activeTab} />
              <CardSix data_target={activeTab} />
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
