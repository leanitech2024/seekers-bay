'use client';

import dynamic from 'next/dynamic';

export const LazyAnnualGLightBox = dynamic(
  () => import('../AnnualGLightBox.jsx'),
  {
    ssr: false,
    loading: () => (
      <div className={'aspect-square lg:aspect-[24/9] h-full w-full'}>
        <div className='flex items-center justify-center w-full h-full'>
          <div className='border-b-2 border-gray-900 rounded-full size-20 animate-spin'></div>
        </div>
      </div>
    ),
  }
);
