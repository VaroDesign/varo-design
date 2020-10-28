import React, { Component } from 'react'

export default class HeroBanner extends Component {
    render() {
        return (
            <div className="hero-banner">
                <div className="pre-video">
                <video autoPlay="autoplay" loop="loop" muted className="video">
                    <source src="https://varo.design/wp-content/uploads/2018/05/VaroDesign_LogoHeader.mp4" type="video/mp4"/>
                    kokot
                </video>
                </div>
            </div>
        )
    }
}
