import React, { useState } from 'react'
import Post from '../Post/Post'
import { IPost } from '../../types/types'
import styles from './PostList.module.scss'

interface PostList {
  posts: IPost[]
  remove: any
}

const PostList = ({ posts, remove }: PostList) => {
  return (
    <div className={styles.postlist__wrapper}>
      {posts.map((post) => {
        return <Post key={post.id} post={post} remove={remove} />
      })}
    </div>
  )
}

export default PostList
