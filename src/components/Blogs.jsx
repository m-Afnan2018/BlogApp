import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Loader from './Loader';
import Null from './Null';

const Blogs = () => {

  const {loader, posts, currPage, totalPage, changePageHandler} = useContext(AppContext);

  return (
    <div>
    {loader ? (<Loader/>) : (
      posts.length===0 ? (<Null/>): (
        (posts.map( (post) => (
          <div>
            <p className='card-title'>{post.title}</p>
            <p className='card-info'>By {post.author} on {post.category}</p>
            <p className='card-date'>Posted on {post.date}</p>

            <p className='card-content'>{post.content}</p>

            {post.tags.map( (tags) => (
              <div className='card-tags'>`#${tags}`</div>
            ))}

          </div>
        ) ))
      )
    )}
    </div>
  )
}

export default Blogs