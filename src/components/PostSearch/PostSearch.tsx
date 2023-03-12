import React from 'react'
import MyInput from '../../UI/MyInput/MyInput'

interface IPostSearch {
  searchQuery: string
  setSearchQuery: (arg0: string) => void
}

const PostSearch = ({ searchQuery, setSearchQuery }: IPostSearch) => {
  return (
    <div>
      <MyInput
        placeholder='Search...'
        value={searchQuery}
        onChange={(event: { target: { value: string } }) => setSearchQuery(event.target.value)}
      />
    </div>
  )
}

export default PostSearch
