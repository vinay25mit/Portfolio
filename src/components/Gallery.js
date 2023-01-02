import React from 'react'

import "./GalleryStyle.css"
import GalleryCard from './GalleryCard'
import GalleryData from './GalleryData'

const Gallery = () => {
    return (
        <div className="Ach-container1">
            <h1 className="Achivement-heading1">GALLERY</h1>
            <div className="Achivement-container1">
                {
                    GalleryData.map((val,ind)=>{
                        return(
                            <GalleryCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Gallery

