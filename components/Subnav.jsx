import Link from 'next/link'
import React from 'react'
import DarkModeButton from './DarkModeButton'

export default function Subnav() {
    return (
        <div className="subnav">
            <div className="subnav-back">
                <Link href="/">
                    <span>

                        <i className="material-icons">navigate_before</i>&nbsp;All posts
                    </span>
                </Link>
            </div>
            <div>
            </div>
        </div>
    )
}
