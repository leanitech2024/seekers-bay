import PageTitle from '@/components/sections/pageTitle';
import { Button } from '@/components/ui/button';
import Input from '@/components/ui/input';
import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';
import {
  FaCalendarCheck,
  FaChild,
  FaEnvelope,
  FaMessage,
  FaPhone,
  FaUserCheck,
} from 'react-icons/fa6';

export default function EnquiryPage({ params, searchParams }) {
  return (
    <main>
      <PageTitle pageName={'Enquiry'} breadcrumbCurrent={'enquiry'} />

      <div className='pb-10 lg:pb-15'>
        <div className='container px-4 space-y-12 xl:px-0'>
          <div className='max-w-[546px] mx-auto text-center'>
            <SectionName>Annual day 2024</SectionName>
            <Title size={'3.5xl'} className={'pb-5'}>
              Enquiry Pre-school Admissions, Bengaluru
            </Title>
          </div>
          <EnquiryForm />
        </div>
      </div>
    </main>
  );
}

function EnquiryForm() {
  return (
    <div className='bg-background shadow-[0px_5px_60px_0px_rgba(0,0,0,0.05)] rounded-[10px] lg:p-10 p-5'>
      <h3 className='text-[28px] font-bold leading-[148%] font-nunito w-full'>
        Send a message
      </h3>
      <form action='#' className='mt-7'>
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-7.5'>
          <div className='relative'>
            <Input
              type={'text'}
              placeholder={'Parent Name'}
              id='parent-name'
              className={
                'text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5'
              }
            />
            <label
              htmlFor='parent-name'
              className='absolute -translate-y-1/2 right-5 top-1/2'>
              {' '}
              <FaUserCheck />
            </label>
          </div>
          <div className='relative'>
            <Input
              type={'text'}
              placeholder={'Child Name'}
              id='child-name'
              className={
                'text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5'
              }
            />
            <label
              htmlFor='child-name'
              className='absolute -translate-y-1/2 right-5 top-1/2'>
              {' '}
              <FaChild />
            </label>
          </div>
        </div>

        <div className='grid sm:grid-cols-2 grid-cols-1 gap-7.5'>
          <div className='relative mt-5'>
            <Input
              type={'text'}
              placeholder={'Child Age'}
              id='child-age'
              className={
                'text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5'
              }
            />
            <label
              htmlFor='child-age'
              className='absolute -translate-y-1/2 right-5 top-1/2'>
              <FaCalendarCheck />
            </label>
          </div>
          <div className='relative mt-5'>
            <Input
              type={'tel'}
              placeholder={'Phone Number'}
              id='phone-number'
              className={
                'text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5'
              }
            />
            <label
              htmlFor='phone-number'
              className='absolute -translate-y-1/2 right-5 top-1/2'>
              <FaPhone />
            </label>
          </div>
        </div>
        <div className='relative mt-5'>
          <Input
            type={'email'}
            placeholder={'Your Email'}
            id='email'
            className={
              'text-[#686868] placeholder:[#686868] border-[#F2F2F2] lg:py-[15px] px-5'
            }
          />
          <label
            htmlFor='email'
            className='absolute -translate-y-1/2 right-5 top-1/2'>
            {' '}
            <FaEnvelope />
          </label>
        </div>

        <div className='relative mt-5'>
          <textarea
            name='message'
            id='message'
            placeholder='Write your Message here'
            className='w-full min-h-36 rounded-[10px] border-2 text-[#686868] placeholder:[#686868] border-[#F2F2F2] px-5 py-[15px] outline-none'></textarea>
          <label htmlFor='address' className='absolute right-5 top-[15px]'>
            {' '}
            <FaMessage />
          </label>
        </div>
        <Button
          variant='pill'
          className='w-full mt-5 bg-primary border-primary hover:text-primary-foreground lg:mt-10'>
          Send Now
        </Button>
      </form>
    </div>
  );
}
