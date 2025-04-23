import PageTitle from '@/components/sections/pageTitle';
import TestimonyCard from '@/components/TestimonyCard';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';

const testimonials = [
  {
    id: crypto.randomUUID(),
    name: "Aarav's father",
    message:
      'My child has excelled in developing their mathematical and advanced reading skills, demonstrating the ability to comprehend new sentences on first encounter. My participation in the Seekers Bay Forward Leap program has equipped me with a thorough understanding of various schools and boards, empowering me to make informed future educational choices.',
    image: '',
    videoMessage: 'https://youtu.be/MBzNiAp_LCU',
    videoId: 'MBzNiAp_LCU',
  },
  {
    id: crypto.randomUUID(),
    name: "MOKSHITH RAM'S FATHER",
    message:
      'My child has shown impressive progress in just six months, developing various skills. He can now recite rhymes and sing the alphabet in a fun, rhythmic way. He also demonstrates strong shape recognition and engages in active play, demonstrating his physical abilities. Seekers Bay offers a specialized Sports program to further nurture their love for movement and physical development.',
    image: '',
    videoMessage: 'https://youtu.be/3WXsUM8o9bU',
    videoId: '3WXsUM8o9bU',
  },
  {
    id: crypto.randomUUID(),
    name: "Vidyaram's Parents",
    message:
      'Our son developed strong communication and social skills, coupled with well-developed presentation abilities, making him a confident and articulate individual.',
    image: '',
    videoMessage: 'https://youtu.be/v0UjqaD4Uag',
    videoId: 'v0UjqaD4Uag',
  },
  {
    id: crypto.randomUUID(),
    name: "REAGEN's PARENTS",
    message:
      "We are incredibly satisfied with every aspect of Seekers Bay's approach to nurturing our child. From fostering positive behavior and character development to providing a strong academic foundation, they have provided exceptional care. Seekers Bay has played a vital role in shaping our child's promising future.",
    image: '',
    videoMessage: 'https://youtu.be/3ll43olN6jU',
    videoId: '3ll43olN6jU',
  },
  {
    id: crypto.randomUUID(),
    name: "SAMRUDDHI's FATHER",
    message:
      "My daughter enjoys starting her day at school, which is a testament to the positive learning environment Seekers Bay fosters. She independently completes her homework and demonstrates a strong understanding of concepts, thanks to the dedication and hard work of her teachers. I am truly grateful to the Seekers Bay management and teachers for their remarkable contribution to my daughter's education.",
    image: '',
    videoMessage: 'https://youtu.be/W6gBNDWiPSo',
    videoId: 'W6gBNDWiPSo',
  },
  {
    id: crypto.randomUUID(),
    name: "EBIN's MOTHER",
    message:
      "Ebin's transformation at Seekers Bay has been truly remarkable. Previously less communicative, he now thrives in a stimulating environment filled with engaging activities and high-quality study materials. His excitement to utilize these resources is indicative of his newfound curiosity and willingness to learn. Witnessing his ongoing development in confidence, communication (particularly English), and a love of learning makes us confident that Seekers Bay is fostering a bright future for Ebin.",
    image: '',
    videoMessage: 'https://youtu.be/ZGCBJp7TaQE',
    videoId: 'ZGCBJp7TaQE',
  },
  {
    id: crypto.randomUUID(),
    name: "Urvil's Parent",
    message:
      'Seeking a more personalized learning environment for our child, we transitioned him from a larger K-12 school to Seekers Bay. This decision has proven fruitful, with his social and communication skills demonstrating significant improvement. We are particularly impressed with the  Seekers Bay Forward Leap program that helps us make informed decisions for his future',
    image: '',
    videoMessage: 'https://youtu.be/pf-kEV6UiqI',
    videoId: 'pf-kEV6UiqI',
  },
  {
    id: crypto.randomUUID(),
    name: "VIRAJ's MOTHER",
    message:
      "Before joining the school, My son doesn't adjust well with others. Seekers Bay's  unique teaching methods have fostered his ability to collaborate respectfully with others, enhancing both his communication and academic skills. We are particularly impressed with the Seekers Bay teaching approach and the dedication of their teachers, which we wholeheartedly recommend. The Forward Leap program has also been invaluable in helping us explore educational options beyond traditional boards.",
    image: '',
    videoMessage: 'https://youtu.be/cDqF0jNXfSw',
    videoId: 'cDqF0jNXfSw',
  },
];

export default function ParentTestimonies({ params, searchParams }) {
  return (
    <main>
      <PageTitle
        pageName={'Parent Testimonies'}
        breadcrumbCurrent={'parent-testimonies'}
      />

      <section className='pt-10 pb-10 lg:pt-15 lg:pb-15'>
        <div className='container'>
          <div className='flex flex-col items-center text-center '>
            <SectionName>Parents Testimony</SectionName>
            <Title size={'3.5xl'} className={'lg:max-w-[520px]'}>
              Joyful Journeys Childcare and the Of a Education
            </Title>
          </div>
          <div className='pt-10 lg:pt-15'>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7.5'>
              {testimonials.map((item) => (
                <TestimonyCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
