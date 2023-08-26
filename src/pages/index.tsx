import BottomNavLayout from '@/shared/components/layout/BottomNavLayout';

export default function Home() {
  return (
    <main>
    </main>
  )
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <BottomNavLayout>{page}</BottomNavLayout>;
};
