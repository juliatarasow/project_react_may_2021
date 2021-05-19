import React from 'react';
import './ImageSlider.css';
import slide1 from '../../images/porto-slide-1.jpg';
import slide2 from '../../images/porto-slide-2.jpg';
import slide3 from '../../images/porto-slide-3.jpg';


function ImageSlider() {
    // const counter = 1;
    // setInterval(function () {
    //     document.getElementById('radio' + counter).checked = true;
    //     counter++;

    //     if (counter > 4) {
    //         counter = 1;
    //     }
    // }, 5000)
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner my-carousel">
                <div className="carousel-item active">
                    <img src={slide1} className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                    <img src={slide2} className="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                    <img src={slide3} className="d-block w-100" alt="..." />
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>
    );
};

export default ImageSlider
