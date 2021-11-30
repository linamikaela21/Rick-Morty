import React from 'react'
import '../../../styles/Pagination.scss'

export const Pagination = ({ perPage, all, pages }) => {

  console.log(all)

  const pageNumbers = []

  for (let i = 0; i < Math.ceil(all?.length / perPage); i++) {
    pageNumbers.push(i + 1)
  }

  return (
<nav>
<ul className='pagination'>
      {pageNumbers && pageNumbers.map(number => (
        <li className='number' key={number}>
          <span className='numberA' key={number} 
          onClick={() => pages(number)}>{number}</span>
        </li>
      ))}
</ul>
</nav>
  )
}

    
