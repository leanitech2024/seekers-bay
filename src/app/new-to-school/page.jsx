import PageTitle from '@/components/sections/pageTitle';

export default function NewToSchoolPage({ params, searchParams }) {
  return (
    <main>
      <PageTitle
        pageName={'New to School'}
        breadcrumbCurrent={'new-to-school'}
      />
    </main>
  );
}
