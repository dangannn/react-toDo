import React, { useMemo, useState } from 'react'
import './Reset.scss'
import './App.scss'
import PostList from './components/PostList/PostList'
import { IPost } from './types/types'
import PostFilter from './components/PostFilter/PostFilter'
import PostSearch from './components/PostSearch/PostSearch'
import NoteMaker from './components/NoteMaker/NoteMaker'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Post 1', value: 'info 4', rating: 3 },
    { id: 2, title: 'Post 2', value: 'info 3', rating: 2 },
    { id: 3, title: 'Post 3', value: 'info 2', rating: 1 },
    { id: 4, title: 'Post 4', value: 'info 1', rating: 4 },
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    if (selectedSort && selectedSort === 'rating') {
      return [...posts].sort((a, b) => b.rating - a.rating)
    }
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.value.toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [searchQuery, sortedPosts])

  const addNewPost = (newPost: IPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post: IPost) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const changePostRating = (rating: number, post: IPost) => {
    post.rating = rating
    const newPosts: Array<IPost> = []
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].id !== post.id) {
        newPosts.push(posts[i])
      } else {
        post.rating = rating
        newPosts.push(post)
      }
    }
    setPosts([...newPosts])
  }

  const sortPosts = (sort: string) => {
    setSelectedSort(sort)
  }

  return (
    <div className='App'>
      <h1>Todos</h1>
      <NoteMaker addNewPost={addNewPost}>+ make note</NoteMaker>
      <PostSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PostFilter selectedSort={selectedSort} sortPosts={sortPosts} />
      {sortedAndSearchedPosts.length !== 0 ? (
        <PostList
          posts={sortedAndSearchedPosts}
          remove={removePost}
          changePostRating={changePostRating}
        />
      ) : (
        <div className='warning-text'>no posts here</div>
      )}
    </div>
  )
}

export default App
