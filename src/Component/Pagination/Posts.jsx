import React from 'react'
import './Posts.css'

const posts = ({posts, loading}) => {
    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <ul className='listGroup'>
            {
                posts.map(post => {
                    return <li key='post.id' className='listItem'>
                        {post.title}
                    </li>
                })
            }
            
        </ul>
    )
}

export default posts
