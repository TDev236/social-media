import React from 'react'
import Feed from './Feed'
import InputBox from './InputBox'
import Stories from './Stories'


const FeedContainer = ({posts}) => {
  return (
    <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide'>
        <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
            {/** Stories */}
            <Stories/>
            {/** Input Box */}
            <InputBox/>
            {/** Feed */}
            <Feed posts={posts}/>
        </div>
    </div>
  )
}

export default FeedContainer