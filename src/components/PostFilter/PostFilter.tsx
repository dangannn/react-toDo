import React from 'react'
import MySelect from '../../UI/MySelect/MySelect'
import styles from './PostFilter.module.scss'
interface IPostFilter {
  selectedSort: string
  sortPosts: (arg0: string) => void
}
const PostFilter = ({ selectedSort, sortPosts }: IPostFilter) => {
  return (
    <div className={styles.postfilter}>
      <MySelect
        defaultValue='sort by'
        options={[
          { value: 'title', name: 'sort by title' },
          { value: 'value', name: 'sort by value' },
          { value: 'rating', name: 'sort by rating' },
        ]}
        value={selectedSort}
        onChange={sortPosts}
      ></MySelect>
    </div>
  )
}

export default PostFilter
