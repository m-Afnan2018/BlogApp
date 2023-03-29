import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Loader from './Loader';
import Null from './Null';

const Blogs = () => {

  const {loader, posts} = useContext(AppContext);

  return (
    <div className='blog-section'>
    {loader ? (<Loader/>) : (
      posts.length===0 ? (<Null/>): (
        (posts.map( (post) => (
          <div className='card'>
            <p className='card-title'>{post.title}</p>
            <p className='card-info'>By <span>{post.author}</span> on <span>{post.category}</span></p>
            <p className='card-date'>Posted On {post.date}</p>

            <p className='card-content'>{post.content}</p>

            <div className='card-tags'>
              {post.tags.map( (tags) => (
                <div className='card-tags'>#{tags}</div>
              ))}
            </div>

          </div>
        ) ))
      )
    )}
    </div>
  )
}

export default Blogs