import React, { useState } from 'react'
import styles from './PostRating.module.scss'
import MyButton from '../../UI/MyButton/MyButton'

interface PostStar {
  highlighted: boolean
}

interface PostRating {
  rating: number
  setRating: (arg0: number) => void
  starRating: number
}

function Star({ highlighted }: PostStar) {
  return (
    <svg className={highlighted ? styles.post_yellow : styles.post_black} height='48' width='48'>
      <path d='m16.15 37.75 7.85-4.7 7.85 4.75-2.1-8.9 6.9-6-9.1-.8L24 13.7l-3.55 8.35-9.1.8 6.9 6ZM11.65 44l3.25-14.05L4 20.5l14.4-1.25L24 6l5.6 13.25L44 20.5l-10.9 9.45L36.35 44 24 36.55ZM24 26.25Z' />
    </svg>
  )
}
function PostRating({ rating, setRating, starRating }: PostRating) {
  const [hoverIndex, setHoverIndex] = useState(starRating)
  function highligthedStar(index: number) {
    return index <= hoverIndex || index <= rating
  }

  return (
    <section className={styles.post__rating}>
      <ul className={styles.post__list}>
        {[1, 2, 3, 4, 5].map((index: number) => {
          return (
            <li
              className={styles.post__item}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(0)}
              onMouseDown={() => {
                starRating = 0
                setRating(index)
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Star highlighted={highligthedStar(index)} />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default PostRating
