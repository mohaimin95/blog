import React from 'react'

export default function CategoryTooltip({category}) {
    return (
        <div className="tooltip-container">
            <span>{category}</span>
            <style jsx>{`
                .tooltip-container {
                    background-color:var(--secondary-color);
                    width:max-content;
                    padding:1.5px .7rem;
                    font-size:10px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    color:#fff;
                    border-radius:4rem;
                    margin:2px 4px 2px 0;
                }
            
            `}</style>
        </div>
    )
}
