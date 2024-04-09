import { timeDifference } from '@/shared/utils/date/date'
import Image from 'next/image'
import { IconSpeechBox, IconThumbsUp } from '../../../../public/svgs'

const CommentCard = ({ comment }: any) => {
  return (
    <div className="border border-gray-50 m-1">
        <ul className="relative flex items-start gap-x-4 bg-gray-5 px-5 py-2">
          <Image
            src={comment.author.avatar}
            width={16}
            height={16}
            alt="item"
            className="aspect-square rounded-md"
            />
            {comment.author.name}
        </ul>
        <ul className="relative flex items-start bg-gray-5 px-5 py-2 font-body-regular-sm">
          {(comment.content)}
        </ul>
        <ul className="relative flex bg-gray-5 px-5 py-2 font-caption-medium-sm">
          <div className="flex flex-row items-baseline">
            {timeDifference(comment.createdAt)}
          </div>
          <div className="flex flex-row items-baseline">
              {/* thumbs up svg */}
              <IconThumbsUp className="h-[10px] w-[10px] mx-1"/>
              좋아요
          </div>
          <div className="flex flex-row items-baseline">
            <IconSpeechBox className="h-[10px] w-[10px] mx-1" />
            대댓글
          </div>
        </ul>
    </div>
  )
}

export default CommentCard
