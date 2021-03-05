import React from 'react'

const Banner = () => {
    return(
    <div className="main-banner img-container" id="main-banner">
        <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
            <img className="main-banner__img" src="https://http2.mlstatic.com/D_NQ_NP_917896-MEC44619738435_012021-O.webp"/>
            <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Título del banner</p>
            <p> Subtítulo del banner</p>
            <a href="#" className="button">Botón del banner</a>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Banner