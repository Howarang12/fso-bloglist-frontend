import React, {useState} from 'react'

const BlogForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const addBlog = () => {
    console.log(`${title} by ${author}`)
    setTitle('')
    setAuthor('')
    setUrl('')
  }

	return (
		<div>
      <h1>add a blog</h1>
      <form onSubmit={addBlog}>
            <label htmlFor="title">title: </label>
            <input
              type='text'
              value={title}
              name='title'
              onChange={e => setTitle(e.target.value)}
            />
            <label htmlFor="author"> author: </label>
            <input
              type='text'
              value={author}
              name='title'
              onChange={e => setAuthor(e.target.value)}
            />
            <label htmlFor="url"> url: </label>
            <input
              type='text'
              value={url}
              name='title'
              onChange={e => setUrl(e.target.value)}
            />
            <button type="submit"> Add</button>
          </form>
    </div>
	)
}

export default BlogForm