import React, { useState } from 'react'
import Modal from '../../UI/Modal/Modal'
import PostForm from '../PostForm/PostForm'
import { IPost } from '../../types/types'

interface INoteMaker {
  children: string
  addNewPost: (newPost: IPost) => void
}
const NoteMaker = ({ children, addNewPost }: INoteMaker) => {
  const [active, setActive] = useState(false)
  const activeModal = (activeState: boolean) => {
    setActive(activeState)
  }

  return (
    <div>
      <span
        className='note'
        onClick={() => {
          activeModal(true)
        }}
      >
        {children}
      </span>
      <Modal active={active} activeModal={activeModal}>
        <PostForm addNewPost={addNewPost} />
      </Modal>
    </div>
  )
}

export default NoteMaker
