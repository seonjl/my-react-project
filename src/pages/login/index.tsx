import BottomNavLayout from '@/shared/components/layout/BottomNavLayout'

export default function Login () {
  return (
    <div className="relative flex h-screen flex-col items-center pb-2 pt-12">
      <div className="absolute top-[7.5%] flex flex-col gap-y-4">
        <h1 className="font-title-medium-md font-medium text-black">
          타이틀
        </h1>
      </div>
      <script src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js" integrity="sha384-kDljxUXHaJ9xAb2AzRd59KxjrFjzHa5TAoFQ6GbYTCAG0bjM55XohjjDT7tDDC01" crossOrigin="anonymous"></script>
      <script>
      </script>
      <article className="absolute bottom-[15%] flex flex-col items-center">
        <KakaoLogin />
      </article>
    </div>
  )
}

Login.getLayout = function getLayout (page: React.ReactElement) {
  return <BottomNavLayout>{page}</BottomNavLayout>
}

function KakaoLogin () {
  const onClick = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    Kakao.init('b838fc9b5f31dd8fed3c6003508b12d9')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    Kakao.Auth.authorize({
      redirectUri: 'https://7fdojjp966.execute-api.ap-northeast-2.amazonaws.com/internal/callback/kakao'
    })
  }

  return (
    <button
      type="button"
      className='font-button-medium-sm flex h-[49px] w-[335px] items-center justify-center gap-2.5 rounded-md bg-[#FAE54D]'
      onClick={onClick}
    >
      <p>Hi</p>
    </button>
  )
}
