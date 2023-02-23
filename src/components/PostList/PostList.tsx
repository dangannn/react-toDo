import React, { useState } from 'react'
import Post from '../Post/Post'
import { IPost } from '../../types/types'
import styles from './PostList.module.scss'

interface PostList {
  posts: IPost[]
  remove: (post: IPost) => void
  changePostRating: (rating: number, post: IPost) => void
}

const PostList = ({ posts, remove, changePostRating }: PostList) => {
  return (
    <div className={styles.postlist__wrapper}>
      {posts.map((post) => {
        return (
          <Post key={post.id} post={post} remove={remove} changePostRating={changePostRating} />
        )
      })}
    </div>
  )
}

export default PostList
