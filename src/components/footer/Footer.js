import React from 'react'
import { Container, Row } from 'react-bootstrap'
import youtube from '../../images/youtube.png'
import vimeo from '../../images/vimeo.png'


export default function Footer() {
    return (
        <footer>
            <div className="d-md-flex justify-content-between mt-md-2">
                    <div className="text-center">
                        <img src={youtube} alt="youtube" className="footer__img" />
                        <img src={vimeo} alt="vimeo" className="footer__img" />
                    </div>
                    <div className="float-left mx-2">
                        <p>hello@yay.com</p>
                    </div>
                    <div className="float-right mx-2 mr-md-5">
                       <p>Copyright 2020</p>
                    </div>
            </div>
        </footer>
    )
}
