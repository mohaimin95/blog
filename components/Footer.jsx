import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="end-credit">Made with&nbsp;<i title="love"
                className="material-icons heart">favorite</i>&nbsp;by&nbsp;<abbr
                    title="N Abdul Mohaimin Creations">#nam_c</abbr></div>

            <div className="socials">
                <div className="social-item">
                    <a href="https://www.facebook.com/mohaimin95" target="_blank">
                        <i className="fa fa-facebook"></i>
                    </a>
                </div>

                <div className="social-item">
                    <a href="https://www.instagram.com/mohaimin95" target="_blank">
                        <i className="fa fa-instagram"></i>
                    </a>

                </div>

                <div className="social-item">
                    <a href="https://twitter.com/namohaimin" target="_blank">
                        <i className="fa fa-twitter"></i>
                    </a>

                </div>
                <div className="social-item">
                    <a href="https://www.linkedin.com/in/mohaimin95/" target="_blank">
                        <i className="fa fa-linkedin"></i>
                    </a>

                </div>

            </div>
        </footer>
    )
}
