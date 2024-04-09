import BottomNavLayout from '@/shared/components/layout/BottomNavLayout'
import PostCard from '@/shared/components/postCard/PostCard'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Link from 'next/link'

export const usePosts = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => await getPosts()
  })
}

export const getPosts = async (): Promise<any> => {
  const response = await axios.get('/api/posts')
  return response.data
}

const shortContent = (content: string) => {
  if (content.length < 200) return content

  return content.slice(0, 200) + '...'
}

export default function Posts () {
  const { status, data, error, isFetching } = usePosts()

  return (
    <div>
      <main>
        <div>
          {data?.map((post: any, index: any) => (
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            <Link href={`/posts/${post._id}`} key={post._id}>
              <PostCard key={index} post={{ ...post, content: shortContent(post.content) }}
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

Posts.getLayout = function getLayout (page: React.ReactElement) {
  return <BottomNavLayout>{page}</BottomNavLayout>
}
