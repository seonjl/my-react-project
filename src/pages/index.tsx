import Image from 'next/image'
import { Inter } from 'next/font/google'
import BottomNavLayout from '@/shared/components/layout/BottomNavLayout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    </main>
  )
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <BottomNavLayout>{page}</BottomNavLayout>;
};
