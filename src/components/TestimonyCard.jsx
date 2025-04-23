'use client';

import Link from 'next/link';
import YouTube from 'react-youtube';

export default function TestimonyCard({
  name,
  message,
  videoMessage,
  image,
  videoId,
}) {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className='bg-background shadow-3xl border-2 border-transparent hover:border-green transition-all duration-500 flex justify-center lg:p-10 p-7 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] max-w-[410px] mx-auto group/team'>
      <div>
        <div>
          <YouTube
            videoId={videoId}
            opts={opts}
            id={videoId}
            loading={'lazy'}
            iframeClassName={
              'rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] group-hover/team:rounded-tr-[50px] group-hover/team:rounded-bl-[50px] group-hover/team:rounded-tl-[10px] group-hover/team:rounded-br-[10px] transition-all duration-500 '
            }
            className='aspect-video'
          />
        </div>
        <div className='pt-7.5'>
          <h4 className='leading-[141%]'>
            <Link href='#' className='text-2xl font-medium'>
              {name}
            </Link>
          </h4>
          <p className='pt-1'>{message}</p>
        </div>
      </div>
    </div>
  );
}
