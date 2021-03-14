import Link from 'next/link'
import React from 'react'
import environment from '../environment'
import Categories from './Categories'
import Tags from './Tags'

export default function Featured({ID:id,title,content,date,categories,tags,featured_image}) {
    return (
        <div className="featured">
            <h1>Featured Post</h1>
            <div className="featured-post">
                <div className="featured-post-thumbnail">
                    <img src={featured_image || "https://picsum.photos/300/200"} alt={title || "Sample Image"} />
                </div>
                <div className="featured-post-content">
                    <div className="d-pc featured-post-date">{environment.changeFormat(date)}</div>
                    <div className="mt-1">
                    <Categories categories={categories} />

                    </div>
                    <div className="featured-post-title">
                        <Link href={environment.getPostPath(title,id)}>
                        <h2>{title}</h2>
                        </Link>
                    </div>
                    <div className="featured-post-body">
                        <article>{environment.stripHTML(content)}</article>
                    </div>
                    <div className="tags">
                        <Tags tags={tags}/>
                    </div>
                    <div className="d-mobile featured-post-date">{environment.changeFormat(date)}</div>
                </div>
            </div>
        </div>
    )
}
