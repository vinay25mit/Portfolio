import React from 'react'
import './GalleryStyle.css'
const GalleryCard = (props) => {
    return (
        <div className="Achivement-card1">
        <div className='img-cont1'>
        <img className='img-cont2' src={props.imgsrc} alt='Achivement' />
        </div>

    </div>
    )
}

export default GalleryCard