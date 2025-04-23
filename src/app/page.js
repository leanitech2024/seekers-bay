import AboutOne from '@/components/sections/abouts/aboutOne';
import BlogsOne from '@/components/sections/blogs/blogsOne';
import FaqComp from '@/components/sections/faqComp';
import FooterOne from '@/components/sections/footers/footerOne';
import Gallery from '@/components/sections/gallery/gallery';
import HeaderOne from '@/components/sections/headers/headerOne';
import HeroOne from '@/components/sections/heros/heroOne';
import NewsletterOne from '@/components/sections/newsletters/newsletterOne';
import Programs from '@/components/sections/programs';
import ServicesOne from '@/components/sections/services/servicesOne';
import AgeOne from '@/components/sections/studentsAge/ageOne';
import SuccessProjectOne from '@/components/sections/successProjects/successProjectOne';
import Teams from '@/components/sections/teams/teams';
import Testimonial from '@/components/sections/testimonial';

export const metadata = {
  title: 'Seekers Bay Preschool',
  description:
    'Discover the benefits of early childhood learning at Seekers Bay Preschool. Enroll your child today for a bright future.',
};

const Home = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroOne />
        <SuccessProjectOne />
        <AboutOne isAboutpage={false} />
        <Programs />
        <Gallery />
        <ServicesOne />
        <FaqComp />
        <Teams />
        <AgeOne />
        <Testimonial />
        <BlogsOne />
        <NewsletterOne />
      </main>
      <FooterOne />
    </>
  );
};

export default Home;
