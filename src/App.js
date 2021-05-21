import React, {useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'
import Posts from './Component/Pagination/Posts'
import Pagination from './Component/Pagination/Pagination'

const App = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostPerPage] = useState(5)
  const [pageNumberLimit, setPageNumberLimit] = useState(5)
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

  useEffect(() => {
    const fetchPosts = async () => {
        setLoading(true)
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        setPosts(res.data)
        setLoading(false)
        // console.log(posts);
    }
    
    fetchPosts()
  }, [])

  // Get currentPage
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Chnage page
  const paginate = (pageNumber)=> setCurrentPage(pageNumber)

  return (
    <div className='container'>
      <h1 className='blogHeader'>My Story Titles</h1>
      <Posts posts={currentPosts} loading = {loading} />
      <Pagination currentPage={currentPage} postPerPage={postPerPage} totalPosts = {posts.length} paginate={paginate} maxPageNumberLimit={maxPageNumberLimit} minPageNumberLimit={minPageNumberLimit} setCurrentPage={setCurrentPage} setMaxPageNumberLimit={setMaxPageNumberLimit} pageNumberLimit={pageNumberLimit} minPageNumberLimit={minPageNumberLimit} setMinPageNumberLimit={setMinPageNumberLimit} setPostPerPage={setPostPerPage} />
    </div>
  )
}

export default App
