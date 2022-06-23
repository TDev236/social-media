
import Image from "next/image"
//Icons Import
import { ChatAltIcon, ShareIcon, ThumbUpIcon }  from '@heroicons/react/outline'

const Post = ({name, message, email, timestamp, image, postImage}) => {
  return (
    <div className="flex flex-col">
        <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
            <div className="flex items-center space-x-2">
                <img 
                    className="rounded-full"
                    src={image}
                    alt="" />
                <div className="flex flex-col">
                    <p
                        className="font-medium "
                    >{name}</p>
                    <p className="text-xs text-gray-400">
                        {new Date(timestamp?.toDate()).toLocaleString()}
                    </p>
                </div>
            </div>
            <p className="pt-4">{message}</p>
        </div>

        {postImage && (
            <div className="relative h-56 md:h-96 bg-white">
                <Image
                    src={`${postImage}`}
                    objectFit="cover"
                    layout="fill"
                />
            </div>
        )}
        {/**Pie Post Component */}
        <div className="flex justify-between rounded-b-2-xl bg-white shadow-md text-gray-400 border-t items-center">
            <div className="inputIcon group">
                <ChatAltIcon className="h-4 group-hover:text-green-500"/>
                <p className="subText">Comentar</p>
            </div>
            <div className="inputIcon group">
                <ThumbUpIcon className="h-4 group-hover:text-blue-500"/>
                <p className="subText">Me Gusta</p>
            </div>
            <div className="inputIcon group">
                <ShareIcon className="h-4 group-hover:text-yellow-400"/>
                <p className="subText group-hover:font-bold">Compartir</p>
            </div>
        </div>
    </div>
  )
}

export default Post