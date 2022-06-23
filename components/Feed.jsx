import { collection, query, orderBy } from 'firebase/firestore';
import React from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase';
import Post from './Post';

const Feed = () => {
  const [realtimePosts, loading, error] = useCollection(
    query(collection(db, 'posts/'), orderBy('timestamp', 'desc'))
  );
  console.log(realtimePosts)
  return (
    <div className='scrollbar-hide'>
      <p>{error && `error`}</p>
      {loading && <span>Cargando Publicaciones...</span>}
      {realtimePosts && (
        <div>
          {realtimePosts.docs.map((post) => (
            <Post
              key={post.id}
              name={post.data().name}
              message={post.data().message}
              image={post.data().profileImage}
              postImage={post?.data().postImage}
              timestamp={post.data().timestamp}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Feed