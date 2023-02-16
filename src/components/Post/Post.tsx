import React, { useState } from 'react'
import styles from './Post.module.scss'
import { IPost } from '../../types/types'
import MyButton from '../../UI/MyButton/MyButton'
import Modal from '../../UI/Modal/Modal'
import StarRating from '../StarRating/StarRating'
import PostRating from '../PostRating/PostRating'

interface PostProps {
  post: IPost
  remove: any
}

const Post = (props: PostProps) => {
  const [active, setActive] = useState(false)
  const [rating, setRating] = useState(0)

  const activeModal = (activeState: boolean) => {
    setActive(activeState)
  }

  return (
    <>
      <div className={styles.post}>
        <p className={styles.post__title}>{props.post.title}</p>
        <PostRating
          rating={rating}
          setRating={setRating}
          starRating={props.post.rating}
        ></PostRating>
        <p className={styles.post__content}>{props.post.value}</p>
        <div className={styles.post__btns}>
          <MyButton
            onClick={() => {
              activeModal(true)
            }}
          >
            edit
          </MyButton>
          <MyButton onClick={() => props.remove(props.post)}>reset</MyButton>
        </div>
      </div>
      <Modal active={active} activeModal={activeModal}>
        <p>{props.post.title}</p>
        <p>{props.post.value}</p>
      </Modal>
    </>
  )
}

export default Post
