import React from 'react'
import news1 from '../../images/news-1.jpg'
import news2 from '../../images/news-2.jpg'
import news3 from '../../images/news-3.jpg'
import news4 from '../../images/news-4.jpg'
import news5 from '../../images/news-5.jpg'
import news6 from '../../images/news-6.jpg'
import news7 from '../../images/news-7.jpg'
import news8 from '../../images/news-8.jpg'


export default function Cards() {
    return (
        <div className="d-block d-md-flex flex-md-wrap">
            <div className="card news__card">
                <img src={news1} className="card-img-top" alt="old TV on a desk with a lamp"/>
                <div className="card-body">
                    <h5 className="card-title newscard__h4">Nunc porttitor vel</h5>
                    <p className="card-text">Nunc malesuada eget est fringilla dapibus.</p>
                    <a href="#" className="btn btn-primary newscard__btn">More</a>
                </div>
            </div>

            <div className="card news__card">
                <img src={news2} className="card-img-top" alt="old photocamera"/>
                <div className="card-body">
                    <h5 className="card-title newscard__h4">Nunc porttitor vel</h5>
                    <p className="card-text">Nunc malesuada eget est fringilla dapibus.</p>
                    <a href="#" className="btn btn-primary newscard__btn">More</a>
                </div>
            </div>

            <div className="card news__card">
                <img src={news3} className="card-img-top" alt="old TV"/>
                <div className="card-body">
                    <h5 className="card-title newscard__h4">Nunc porttitor vel</h5>
                    <p className="card-text">Nunc malesuada eget est fringilla dapibus.</p>
                    <a href="#" className="btn btn-primary newscard__btn">More</a>
                </div>
            </div>
                
            <div className="card news__card">
                <img src={news4} className="card-img-top" alt="old photocamera"/>
                <div className="card-body">
                    <h5 className="card-title newscard__h4">Nunc porttitor vel</h5>
                    <p className="card-text">Nunc malesuada eget est fringilla dapibus.</p>
                    <a href="#" className="btn btn-primary newscard__btn">More</a>
                </div>
            </div>

            <div className="card news__card">
                <img src={news5} class="card-img-top" alt="old TV not in function"/>
                <div class="card-body">
                    <h5 class="card-title newscard__h4">Nunc porttitor vel</h5>
                    <p class="card-text">Nunc malesuada eget est fringilla dapibus.</p>
                    <a href="#" class="btn btn-primary newscard__btn">More</a>
                </div>
            </div>

            <div className="card news__card">
                <img src={news6} className="card-img-top" alt="old polaroid camera"/>
                <div className="card-body">
                    <h5 className="card-title newscard__h4">Nunc porttitor vel</h5>
                    <p className="card-text">Nunc malesuada eget est fringilla dapibus.</p>
                    <a href="#" className="btn btn-primary newscard__btn">More</a>
                </div>
            </div>

            <div className="card news__card">
                <img src={news7} className="card-img-top" alt="old videoplayer"/>
                <div className="card-body">
                    <h5 className="card-title newscard__h4">Nunc porttitor vel</h5>
                    <p className="card-text">Nunc malesuada eget est fringilla dapibus.</p>
                    <a href="#" className="btn btn-primary newscard__btn">More</a>
                </div>
            </div>

            <div className="card news__card">
                <img src={news8} className="card-img-top" alt="vinyl"/>
                <div className="card-body">
                    <h5 className="card-title newscard__h4">Nunc porttitor vel</h5>
                    <p className="card-text">Nunc malesuada eget est fringilla dapibus.</p>
                    <a href="#" className="btn btn-primary newscard__btn">More</a>
                </div>
            </div>
        </div>
    )
}
