import React from 'react'
import './Pagination.css'

    // let pageIncrementBtn = null;
    // let pageIncrementBtn = null;
const Pagination = ({postPerPage, totalPosts, paginate, currentPage, maxPageNumberLimit, minPageNumberLimit, setCurrentPage, setMaxPageNumberLimit, pageNumberLimit, setMinPageNumberLimit, setPostPerPage }) => {

    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
       pageNumber.push(i);
    }

    const handleNextBtn = () => {
        setCurrentPage(currentPage+1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
            
        }
    }

    const handlePrevBtn = () => {
        setCurrentPage(currentPage-1);

        if ((currentPage -1)%pageNumberLimit == 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit)
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
    }

    function pageIncrementBtn() {
        console.log("It working INCREASING!")
        handleNextBtn();
    }

    function pagesDecrementBtn () {
        console.log("It working DECREASING!")
        handlePrevBtn();
    }

    const lordmore = () => {
        setPostPerPage(postPerPage + 5)
    }

    const lordless = () =>{
        setPostPerPage(postPerPage - 5)
    }

  

    return (
        <nav>
            <ul className='pagination'>
                <li className='btn'>
                    <button onClick={handlePrevBtn}>Prev</button>
                </li>
               {/* <li className='dots'> {pageDecrementBtn}</li> */}
                {minPageNumberLimit >= 1 ? <li className='dots' onClick={pagesDecrementBtn}>...</li> : null}
                {
                    pageNumber.map(number => {
                        if (number < maxPageNumberLimit+1 && number>minPageNumberLimit) {
                            return <li key={number} className={currentPage == number ? 'active' : null}>
                            <a onClick={()=> paginate(number)} href="!#" >{number}</a>
                            </li>
                        }
                    })
                }
                {pageNumber.length > maxPageNumberLimit ? <li className='dots' onClick={pageIncrementBtn}>...</li> : null}
                <li className='btn'>
                    <button onClick={handleNextBtn}>Next</button>
                </li>
            </ul>

            <div className='loadBtns'>
                <button className='loadmore' onClick={lordmore}>Load more</button>
                <button disabled={postPerPage<=5 ? true : false} className='loadless' onClick={lordless}>Load less</button>
            </div>
        </nav>
    )
}

export default Pagination
