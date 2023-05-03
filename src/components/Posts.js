import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { deletePost } from '../ajax-requests';
function Posts({ posts }) {
  // console.log('from Posts component', posts)
 
  
  return (

    
    <>
    
      {
        posts && posts.map((post) => {
          return (
            <Fragment key={post._id}>
              {
                post.isAuthor ? (
                  <>
                    <p>{post.title}, {post.location}</p>
                   <Link to={`/deletePost/${post._id}`}><button>Delete</button></Link>
                    <Link to={`/update-post/${post._id}`} ><button>Edit Post</button></Link>
                  </>
                ) : (
                  <>
                    <p>{post.title}, {post.location}</p>
                    <button>Message</button>
                  </>
                )
              }
            </Fragment>
          )
        })
      }
    </>
  );
}

export default Posts;