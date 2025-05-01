'use client';

import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';
import Image from 'next/image';
import { useEffect } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';

export default function AnnualGLightBox({ images }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lightbox = GLightbox({
        autoplayVideos: false,
        closeEffect: 'fade',
        closeButton: true,
        closeOnOutsideClick: true,
        descPosition: 'bottom',
        draggable: true,
        dragAutoSnap: true,
        keyboardNavigation: true,
        loop: true,
        openEffect: 'bounce', // fade, bounce, slide, none
        preload: false,
        selector: '.glightbox',
        slideEffect: 'slide',
        touchNavigation: true,
        touchFollowAxis: true,
        width: '100%',
        height: '100%',
        zoomable: true,
        // slideHTML: `
        //   <div class="gslide">
        //     <div class="gslide-inner-content">
        //       <div class="ginner-container">
        //         <div class="gslide-media">
        //           <video class="gvideo" controls>
        //             <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
        //             Your browser does not support the video tag.
        //           </video>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // `,
      });

      return () => {
        lightbox.destroy();
      };
    }
  }, []);

  return (
    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
      {images.map((image) => (
        <a
          key={image.id}
          href={image.path}
          className='relative glightbox glightbox-mobile'
          data-title={`Annual Day Image ${image.id}`}
          data-description={`Annual Day Image ${image.id}`}
          data-type='image'
          data-glightbox={'type: image'}>
          <Image
            src={image.path}
            alt={`Annual Day Image ${image.id}`}
            className='object-cover w-full h-full transition-transform duration-300 rounded-md hover:scale-105'
            width={500}
            height={500}
            // loading={'lazy'}
            priority={true}
          />
          <div
            className={
              'absolute w-full h-full flex items-center justify-center z-10 bg-black/50 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300 left-0 top-0'
            }>
            <FaMagnifyingGlass className='text-white size-8' />
          </div>
        </a>
      ))}
    </div>
  );
}
