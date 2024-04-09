import CommentCard from '@/shared/components/commentCard/CommentCard'
import BottomNavLayout from '@/shared/components/layout/BottomNavLayout'
import PostCard from '@/shared/components/postCard/PostCard'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/router'
import { IconChevronLeft } from '../../../../public/svgs'

export const usePost = (postId: string) => {
  return useQuery({
    queryKey: ['post', postId],
    queryFn: async () => await getPost(postId)
  })
}

export const getPost = async (postId: string): Promise<any> => {
  const response = await axios.get(`/api/posts/${postId}`)
  return response.data
}

export const usePostComment = (postId: string) => {
  return useQuery({
    queryKey: ['postComment', postId],
    queryFn: async () => await getPostComment(postId)
  })
}

export const getPostComment = async (postId: string): Promise<any> => {
  const response = await axios.get(`/api/posts/${postId}/comments`)
  return response.data
}

export default function Post () {
  const router = useRouter()
  const postId = router.query.postId as string
  // const PostQueryResult = usePost(postId);
  // const PostCommentQueryResult = usePostComment(postId);

  // if (PostQueryResult.status === "loading") {
  //   return <div>loading...</div>;
  // }

  // if (PostQueryResult.status === "error") {
  //   return <div>err</div>;
  // }

  // if (PostCommentQueryResult.status === "loading") {
  //   return <div>loading...</div>;
  // }

  // if (PostCommentQueryResult.status === "error") {
  //   return <div>err</div>;
  // }

  // const post = PostQueryResult.data;
  // const postComment = PostCommentQueryResult.data;

  const samplePost =
  {
    _id: '3ca9deb5fdc564bd11bd6abd',
    topic: 'Topic',
    author: {
      _id: '9e4a2b29fae45304d3fca5a6',
      name: 'Horace.Friesen98',
      company: 'Architect',
      avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1243.jpg',
      password: 'XbbFmBtxr4v_mun',
      birthdate: '1988-01-16T03:47:51.316Z',
      registeredAt: '2023-01-20T22:48:51.565Z'
    },
    post: '4b11bbddd6c31bfafbbebb39',
    comments: [
      {
        _id: 'cfd7df3cadda3e98ef1a2051',
        content: 'Saepe consequatur optio ratione modi provident. Accusamus error libero repellendus quas. Rerum atque mollitia amet accusantium sint.',
        author: {
          _id: '893bca12e20fbb6bdd453c0f',
          name: 'Ella76',
          email: 'Elroy.Grady@yahoo.com',
          avatar: 'https://avatars.githubusercontent.com/u/33434833',
          password: 'LCdE39ziiVNhh2S',
          birthdate: '1951-03-08T18:40:53.970Z',
          registeredAt: '2023-03-08T22:21:49.458Z'
        },
        createdAt: '2023-06-30T08:11:48.587Z'
      },
      {
        _id: 'da1f65c3edbfdacd7b0aaccf',
        content: 'Velit dicta adipisci delectus tempore unde doloremque temporibus occaecati. Vero tenetur nisi veniam provident. Pariatur commodi deserunt necessitatibus ad repellat rem nam nulla quis.',
        author: {
          _id: '53d9a30d2fbc37edccbce22f',
          name: 'Tiara.Durgan',
          email: 'Crystel.Kilback@yahoo.com',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/959.jpg',
          password: 'wECcaTVH0vRh8Hn',
          birthdate: '1997-02-18T13:45:34.816Z',
          registeredAt: '2023-04-29T07:16:28.415Z'
        },
        createdAt: '2022-10-08T04:37:58.949Z'
      },
      {
        _id: '8af0d0101bd5c0d2d20e23ee',
        content: 'Quasi quod autem illo quos non. Delectus ea ad incidunt dolorem. Fugit officiis laboriosam commodi harum numquam esse minima ea.',
        author: {
          _id: 'c03e2afbca5b455ea5188d6d',
          name: 'Kasey.Beahan55',
          email: 'Mac_Windler@hotmail.com',
          avatar: 'https://avatars.githubusercontent.com/u/76779273',
          password: '8kY_xuliKfUGGuT',
          birthdate: '1998-04-16T16:14:31.055Z',
          registeredAt: '2023-07-02T19:15:28.214Z'
        },
        createdAt: '2022-12-04T04:07:15.922Z'
      },
      {
        _id: '9d6f4fcaf0fea7eae0b46bbc',
        content: 'Officiis sed consectetur explicabo nulla. Nam reprehenderit recusandae eum quo quos. Cupiditate eius sit sint eaque placeat omnis in.',
        author: {
          _id: 'e0ffe54a1cfa3e689dcbaec9',
          name: 'Ebba_Terry',
          email: 'Bernardo.Kuhlman@gmail.com',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/683.jpg',
          password: 'MnpNDAYKrxkPRBF',
          birthdate: '2003-02-20T23:40:56.017Z',
          registeredAt: '2022-12-20T20:35:55.063Z'
        },
        createdAt: '2023-06-29T14:10:47.612Z'
      },
      {
        _id: '29444fc24db8011a98d7d502',
        content: 'Occaecati error ad molestiae aut est magni omnis dolore vel. Perferendis in odio odio veniam. Dignissimos voluptatem quo facere tempore eligendi minus molestias officia numquam.',
        author: {
          _id: 'c03e2afbca5b455ea5188d6d',
          name: 'Kasey.Beahan55',
          email: 'Mac_Windler@hotmail.com',
          avatar: 'https://avatars.githubusercontent.com/u/76779273',
          password: '8kY_xuliKfUGGuT',
          birthdate: '1998-04-16T16:14:31.055Z',
          registeredAt: '2023-07-02T19:15:28.214Z'
        },
        createdAt: '2022-12-18T02:08:01.896Z'
      },
      {
        _id: 'b3510ddd0a89d80ca4b09e6d',
        content: 'Quaerat vel non reprehenderit voluptatem illo quibusdam veritatis. Nesciunt blanditiis reiciendis impedit explicabo harum voluptatem nisi praesentium. Earum vitae error illo impedit exercitationem unde.',
        author: {
          _id: 'e0ffe54a1cfa3e689dcbaec9',
          name: 'Ebba_Terry',
          email: 'Bernardo.Kuhlman@gmail.com',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/683.jpg',
          password: 'MnpNDAYKrxkPRBF',
          birthdate: '2003-02-20T23:40:56.017Z',
          registeredAt: '2022-12-20T20:35:55.063Z'
        },
        createdAt: '2023-06-17T22:12:36.172Z'
      },
      {
        _id: 'c683ce97d6f2f7c916f04fbb',
        content: 'Ab ratione magni velit illo impedit delectus labore. Quo officia tenetur quam veniam. Iste dicta quasi unde dolorum labore quaerat.',
        author: {
          _id: '53d9a30d2fbc37edccbce22f',
          name: 'Tiara.Durgan',
          email: 'Crystel.Kilback@yahoo.com',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/959.jpg',
          password: 'wECcaTVH0vRh8Hn',
          birthdate: '1997-02-18T13:45:34.816Z',
          registeredAt: '2023-04-29T07:16:28.415Z'
        },
        createdAt: '2022-11-25T04:04:51.417Z'
      },
      {
        _id: 'db5f4e09da73ddfc5bc58874',
        content: 'Reprehenderit odio a. Magnam necessitatibus beatae qui veniam blanditiis iusto eligendi. Quae dolores odit debitis ullam.',
        author: {
          _id: '0ce61a4fe6aec9e61cbe2740',
          name: 'Damaris36',
          email: 'Queenie_Rogahn97@hotmail.com',
          avatar: 'https://avatars.githubusercontent.com/u/89744079',
          password: 'pysad_MqFcoJxFO',
          birthdate: '2001-04-02T07:11:28.032Z',
          registeredAt: '2023-06-16T23:28:22.585Z'
        },
        createdAt: '2023-01-03T19:27:50.585Z'
      },
      {
        _id: 'c428cfe1a07d8b8e18fcdbe7',
        content: 'Velit dolor quis excepturi adipisci. Vel voluptas ipsum odio architecto unde assumenda similique ipsa voluptatum. Et molestiae quo voluptatum reiciendis.',
        author: {
          _id: 'c03e2afbca5b455ea5188d6d',
          name: 'Kasey.Beahan55',
          email: 'Mac_Windler@hotmail.com',
          avatar: 'https://avatars.githubusercontent.com/u/76779273',
          password: '8kY_xuliKfUGGuT',
          birthdate: '1998-04-16T16:14:31.055Z',
          registeredAt: '2023-07-02T19:15:28.214Z'
        },
        createdAt: '2022-09-17T05:07:56.369Z'
      },
      {
        _id: '17c702c38e6ce48e8b0c7bbd',
        content: 'Harum quisquam vero modi exercitationem praesentium incidunt. Quas eaque est dolorum. Odio tempore incidunt asperiores.',
        author: {
          _id: 'e6fee01be3eb7daade9e8daf',
          name: 'Gus.Romaguera27',
          email: 'Bessie.Veum@gmail.com',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1209.jpg',
          password: 'HpTLsJ4YqbMaAMI',
          birthdate: '1981-08-05T09:07:52.415Z',
          registeredAt: '2023-04-13T14:25:50.548Z'
        },
        createdAt: '2023-07-30T21:15:57.251Z'
      }
    ],
    createdAt: '2023-07-30T21:15:57.251Z'
  }
  return (
    <div>
      <header className="border-b-gray20 relative flex h-12 items-center justify-center border-b-[1px] px-5">
        <button
          type="button"
          className="absolute left-4"
          onClick={() => { router.back() }}
        >
          <IconChevronLeft className="h-6 w-6" />
        </button>
        <h1></h1>
      </header>
      <main>
        <PostCard key={postId} post={samplePost} />
        {samplePost.comments?.map((comment: any, index: any) => (
          <CommentCard key={comment._id} comment={comment} />
        ))}
      </main>
    </div>
  )
}

Post.getLayout = function getLayout (page: React.ReactElement) {
  return <BottomNavLayout>{page}</BottomNavLayout>
}
