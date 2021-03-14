import React from 'react'
import CategoryTooltip from './CategoryTooltip'

export default function Categories({ categories }) {
    return (
        <div>
            {typeof categories === 'object' && <div  className="categories-container">
                {
                    Object.keys(categories).map((category,i)=><CategoryTooltip key={i} category={category}/>)
                }
            </div>}
            <style jsx>{`
                .categories-container {
                    display:flex;
                }
            `}</style>
        </div>
    )
}
