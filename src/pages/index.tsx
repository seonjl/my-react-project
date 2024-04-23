import BottomNavLayout from '@/shared/components/layout/BottomNavLayout'

export default function Home () {
  return (
    <div className="relative flex h-screen flex-col items-center pb-2 pt-12">
      <div className="absolute top-[7.5%] flex flex-col gap-y-4">
        <h1 className="font-title-medium-md font-medium text-white">
        Home
        </h1>
      </div>

      <article className="absolute bottom-[25%] flex flex-col items-center">
        <span className="font-body-regular-sm items-center rounded-full bg-gray-70 px-5 py-2.5 text-white">
        Home Page
        </span>
      </article>
    </div>
  )
}

Home.getLayout = function getLayout (page: React.ReactElement) {
  return <BottomNavLayout>{page}</BottomNavLayout>
}
