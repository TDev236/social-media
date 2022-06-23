import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
//Icons
import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'
//imports to conect Firebase Storage and Firestore
import { storage, db } from '../firebase'
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref,  uploadBytesResumable } from 'firebase/storage'

const InputBox = () => {
    const {data: session} = useSession();
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null)
    const [imagePreview, setImagePreview] =  useState(null)

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
            setImageToPost(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setImagePreview(readerEvent.target.result)
        }
    }

    const sendPost = (e) => {
        e.preventDefault();
        if(!inputRef.current.value) return;

        addDoc(collection(db, 'posts'), {
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            profileImage: session.user.image,
            timestamp : serverTimestamp(),
        }).then((document) => {
            if(!imageToPost) return;
            const storageRef = ref(storage, `posts/${document.id}`);
            const uploadImage = uploadBytesResumable(storageRef, imageToPost, 'data_url');
            removeImage();
            uploadImage.on('state-changed', null, error => console.log(error), () => {
                getDownloadURL(storageRef).then((url) => {
                    updateDoc(doc(db, 'posts', document.id), {
                        postImage: url,
                    }, {merge:true})
                })
            })
        })

        inputRef.current.value = "";
    }

    const removeImage = () => {
        setImageToPost(null);
        setImagePreview(null);
    }
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
        <div className='flex space-x-4 p-4 items-center'>
            <Image
                src={session.user.image}
                width={40}
                height={40}
                layout="fixed"
                alt=''
                className='rounded-full'
            />
            <form className='flex flex-1'>
                <input 
                    className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
                    type="text"
                    ref={inputRef}
                    placeholder={`Como estas ${session.user.name}`}
                />
                <button onClick={sendPost} type="submit" hidden></button>
            </form>
            {imageToPost && <div className='flex flex-col justify-center items-center cursor-pointer filter hover:brightness-120 '>
                    <img src={imagePreview} className="h-10 object-contain " alt="" />
                    <p onClick={removeImage} className='text-xs text-red-600 text-center'>Eliminar</p>
                </div>}
        </div>

        <div className='flex justify-evenly p-3 border-t'>
            {/**First Square */}
            <div className='inputIcon'>
                <VideoCameraIcon className='h-7 text-red-500'/>
                <p className='subText'>Live Video</p>
            </div>
            {/**Second Square */}
            <div onClick={() => filePickerRef.current.click()} className='inputIcon'>
                <CameraIcon className='h-7 text-green-500'/>
                <p className='subText'>Fotos</p>
                <input type="file" ref={filePickerRef} onChange={addImageToPost} hidden/>
            </div>
            {/**Thir Square */}
            <div className='inputIcon'>
                <EmojiHappyIcon className='h-7 text-yellow-500'/>
                <p className='subText'>Sentimiento/Actividad</p>
            </div>
        </div>
        
    </div>
  )
}

export default InputBox