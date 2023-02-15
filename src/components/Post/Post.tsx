import React, { useState } from "react";
import styles from "./Post.module.scss";
import { IPost } from "../../types/types";
import MyButton from "../../UI/MyButton/MyButton";
import Modal from "../../UI/Modal/Modal";

interface PostProps {
  post: IPost;
  remove: any;
}

const Post = (props: PostProps) => {
  const [active, setActive] = useState(false);

  const activeModal = (activeState: boolean) => {
    setActive(activeState);
  };

  return (
    <>
      <div
        className={styles.post}
        onClick={() => {
          activeModal(true);
        }}
      >
        <p>{props.post.title}</p>
        <p>{props.post.value}</p>

        <MyButton onClick={() => props.remove(props.post)}>reset</MyButton>
      </div>
      <Modal active={active} activeModal={activeModal}>
        <p>{props.post.title}</p>
        <p>{props.post.value}</p>
      </Modal>
    </>
  );
};

export default Post;
