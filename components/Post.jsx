import React from 'react'
import environment from '../environment'
import Categories from './Categories'
import Link from 'next/link'
export default function Post({ ID:id,title, content, date, categories,featured_image }) {
    let postPath = environment.getPostPath(title,id);
    return (
        <Link href={postPath} as={postPath}>
            <div className="post">
                <div className="post-thumbnail">
                    <img src={featured_image || "https://picsum.photos/300/200"} alt={title || "Sample Image"} />
                </div>
                <div className="post-content">
                    <div className="category">
                        <Categories categories={categories} />
                    </div>
                    <div className="post-title">
                        <h2>{title}</h2>
                    </div>
                    <div className="post-body">
                        <article>{environment.stripHTML(content)}</article>
                    </div>
                    <div className="post-date">{environment.changeFormat(date)}</div>
                </div>
            </div>
        </Link>
    )
}
