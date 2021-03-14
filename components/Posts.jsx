import React from 'react'
import Post from './Post'

export default function Posts({isLoading=false,posts=[],totalPosts=0}) {
    return (
        <div className="posts">
            <h1 className="d-pc">All Posts</h1>
            {
                isLoading ? (
                    <p>Loading ...</p>
                ) : (
                    <div className="posts-container">
                        {
                            posts.map((post,i)=><Post key={i} {...post}/>)
                        }
                    </div>
                )
            }
        </div>
    )
}
