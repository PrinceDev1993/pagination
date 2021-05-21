import axios from 'axios';
import React, {useState, useEffect} from 'react'
import './FetchApi.css'

function FetchApi() {
    const [post, setPost] = useState([])
    const [q, setQ] = useState(1);

    useEffect(() => {
        const URL = `https://jsonplaceholder.typicode.com/posts/${q}`;
        axios.get(URL)
        .then(res => {
            setPost(res.data)
            //console.log(post)
            console.log(res.data)
        })
        
    }, [q])

    console.log(q)

    return (
       <div className='container'>
           <div>
               <div className='inputDiv'>
                   <input type="text" value={q} onChange = {(e) => setQ(e.target.value)} />
               </div>
               <div className='smallContainer'>
                   <p>{post.id}</p>
                   <p>{post.title}</p>
                  
               </div>
               <div className='smallContainer2'>
                   <p>{post.body}</p>
               </div>

           </div>
       </div>
    )
}

export default FetchApi



