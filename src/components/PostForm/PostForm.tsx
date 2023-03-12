import React, { useState } from 'react'
import MyInput from '../../UI/MyInput/MyInput'
import MyButton from '../../UI/MyButton/MyButton'
import MyTextarea from '../../UI/MyTextarea/MyTextarea'
import styles from './PostForm.module.scss'
import { IPost } from '../../types/types'

interface IPostForm {
  addNewPost: (arg0: IPost) => void
}
const PostForm = ({ addNewPost }: IPostForm) => {
  const [post, setPost] = useState({ id: '', title: '', value: '', rating: 0 })

  const createNewPost = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now(),
    }
    addNewPost(newPost)
    setPost({ id: '', title: '', value: '', rating: 0 })
  }

  return (
    <form className={styles.form}>
      <div className={styles.form__wrapper}>
        <MyInput
          value={post.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPost({ ...post, title: e.target.value })
          }
          type='text'
          placeholder='Enter a title'
        />
        <MyInput
          rating={post.rating}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPost({ ...post, rating: Number(e.target.value) })
          }
          type='text'
          placeholder='Enter a rating'
        />
      </div>
      <MyTextarea
        value={post.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPost({ ...post, value: e.target.value })
        }
        type='text'
        placeholder='Enter a value'
      />
      <MyButton onClick={createNewPost}>Post</MyButton>
    </form>
  )
}

export default PostForm
