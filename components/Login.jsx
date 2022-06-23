import Image from 'next/image'
import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <Image
            src="https://links.papareact.com/t4i"
            width={400}
            height={400}
            alt="Letbook"
            objectFit='contain'
        />
        <h1 
            onClick={signIn}
            className='cursor-pointer bg-blue-500 text-white rounded-xl py-2 px-6 shadow-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-blue-800 font-semibold hover:shadow-xl-blue'>Login With Facebook</h1>
    </div>
  )
}

export default Login