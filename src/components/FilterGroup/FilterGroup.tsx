import React from 'react'
import PostSearch from '../PostSearch/PostSearch'
import PostFilter from '../PostFilter/PostFilter'
import styles from './FilterGroup.module.scss'

interface IFilterGroup {
  searchQuery: string
  selectedSort: string
  setSearchQuery: (arg0: string) => void
  sortPosts: (arg0: string) => void
}
const FilterGroup = (props: IFilterGroup) => {
  return (
    <div className={styles.filterGroup}>
      <PostSearch searchQuery={props.searchQuery} setSearchQuery={props.setSearchQuery} />
      <PostFilter selectedSort={props.selectedSort} sortPosts={props.sortPosts} />
    </div>
  )
}

export default FilterGroup
