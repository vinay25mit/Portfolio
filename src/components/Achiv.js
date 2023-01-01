import React from 'react'

import "./AchivCardStyle.css"
import AchivCard from './AchivCard'
import AchivData from './AchivData'

const Achiv = () => {
    return (
        <div className="Ach-container">
            <h1 className="Achivement-heading">Achivement</h1>
            <div className="Achivement-container">
                {
                    AchivData.map((val,ind)=>{
                        return(
                            <AchivCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            text={val.text}
                            view={val.view}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Achiv

