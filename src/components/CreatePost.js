import React, { useState } from 'react';
import { makePost } from '../ajax-requests';
import { Link } from 'react-router-dom';

function CreatePost({ token, getPosts }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  
  async function handleSubmit(event) {
    event.preventDefault();
    const post = {title, description, price, location}
    
    const results = await makePost(post, token)
    
    if (results.success) {
      getPosts();
      alert('Your post was successfully created!');
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Enter Title'
        value={title}
        onChange={(event) => {setTitle(event.target.value)}}
      />
      <input
        type='text'
        placeholder='Enter Description'
        value={description}
        onChange={(event) => {setDescription(event.target.value)}}
      />
      <input
        type='text'
        placeholder='Enter Price'
        value={price}
        onChange={({target: {value}}) => {setPrice(value)}}
      />
      <input 
        type='text'
        placeholder='Enter Location'
        value={location}
        onChange={({target: {value}}) => {setLocation(value)}}
      />  
      <button type='submit'>Create Post</button>
      <Link to='/'>Go Home</Link>
    </form>
  )
}

export default CreatePost;
