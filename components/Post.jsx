
import Image from "next/image"
//Icons Import
import { ChatAltIcon, ShareIcon, HeartIcon }  from '@heroicons/react/outline'
import { useRef, useState } from "react"
import { increment, updateDoc, collection, documentId, doc } from "firebase/firestore"
import { db } from "../firebase"
import { useSession } from "next-auth/react"

const Post = ({name, message, posts, timestamp, image, postImage}) => {
    const {data: session } = useSession();
    const [like, setLike] = useState(false)
    const [likeCount, setLikeCount] = useState(0)
    console.log(like)
    const postAcctionsToDb =  (e) => {
        e.preventDefault();
        setLike(!like)
        if(!like) return;
            setLikeCount(1)
            posts?.map((post) => {
                console.log(post.id)
            })
            

        }

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
                    {timestamp ? (
                        <p className="text-xs text-gray-400">
                        {new Date(timestamp?.toDate()).toLocaleString()}
                    </p>
                    ): (
                        <p className="text-xs text-gray-400">Cargando</p>
                    )}
                    
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
            <div onClick={postAcctionsToDb} className="inputIcon group">
                <HeartIcon  className={like > 0 ? `h-4 text-red-500` : 'h-4 text-gray-500'}/>
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