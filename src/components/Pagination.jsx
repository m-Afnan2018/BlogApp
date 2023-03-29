import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const {changePageHandler, currPage, totalPage} = useContext(AppContext);
  return (
    <div className='footer-section'>
      <div className='footer-content'>
        <div className='footer-buttons'>
          {currPage > 1 && <div className='previous-button' onClick={() => {changePageHandler(currPage-1)}}>
            Previous
          </div>}
          
          {currPage < totalPage && <div className='next-button' onClick={() => {changePageHandler(currPage+1)}}>
            Next
          </div>}
          
        </div>

        <div className='footer-pages'>
          <p>Page {currPage} of {totalPage} </p>
        </div>
      </div>
    </div>
  )
}

export default Pagination