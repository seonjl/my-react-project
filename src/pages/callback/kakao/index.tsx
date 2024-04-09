// rediect To main page
export default function Kakao () {
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
      </article>
    </div>
  )
}
