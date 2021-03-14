import React from 'react'

export default function Tags({tags,bold}) {
    return (
        <div>
            {
                (typeof tags==='object' && Object.keys(tags).length>0) && <div><span className={bold && 'bold'}>Tags:</span> {Object.keys(tags).join(", ")}</div>
            }
        </div>
    )
}
