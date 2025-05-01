import AboutPreSchool from '@/components/AboutPreSchool';
import Founder from '@/components/Founder';
import HeroCarousel from '@/components/HeroCarousel';
import BlogsOne from '@/components/sections/blogs/blogsOne';
import FaqComp from '@/components/sections/faqComp';
import FooterOne from '@/components/sections/footers/footerOne';
import Gallery from '@/components/sections/gallery/gallery';
import HeaderOne from '@/components/sections/headers/headerOne';
// import HeroOne from '@/components/sections/heros/heroOne';
import NewsletterOne from '@/components/sections/newsletters/newsletterOne';
import Programs from '@/components/sections/programs';
import ServicesOne from '@/components/sections/services/servicesOne';
// import AgeOne from '@/components/sections/studentsAge/ageOne';
import SuccessProjectOne from '@/components/sections/successProjects/successProjectOne';
import Testimonial from '@/components/sections/testimonial';
import { readImages } from '@/lib/actions';

export const metadata = {
  title: 'Seekers Bay Preschool',
  description:
    'Discover the benefits of early childhood learning at Seekers Bay Preschool. Enroll your child today for a bright future.',
};

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate a delay
  const images = await readImages();

  return (
    <>
      <HeaderOne />
      <main>
        <HeroCarousel images={images} />
        <Programs />
        <AboutPreSchool />
        <Gallery />
        {/* <HeroOne /> */}
        <SuccessProjectOne />
        {/* <AboutOne isAboutpage={false} /> */}
        <ServicesOne />
        <FaqComp />
        {/* <Teams /> */}
        {/* <AgeOne /> */}
        <Founder />
        <Testimonial />
        <BlogsOne />
        <NewsletterOne />
      </main>
      <FooterOne />
    </>
  );
}
