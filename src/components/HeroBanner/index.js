import React, { Component } from 'react'

export default class HeroBanner extends Component {
   
    render() {
        const viewportHeader = document.querySelector(".viewport-header");

        document.body.addEventListener("scroll", function(event) {
          var opacity = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
          var scale = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
          document.documentElement.style.setProperty('--headerOpacity', opacity);
          document.documentElement.style.setProperty('--headerScale', scale);
        });
        return (
            <div className="hero-banner">
                <div className="pre-video">
                <video autoPlay="autoplay" loop="loop" muted className="video">
                    <source src="https://varo.design/wp-content/uploads/2018/05/VaroDesign_LogoHeader.mp4" type="video/mp4"/>
                </video>
                </div>
            </div>
        )
    }
}
