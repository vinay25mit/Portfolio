import React from 'react'

import "./DevStyle.css"
import DevCard from './DevCard'
import DevData from './DevData'

const Dev = () => {
    return (
        <div className="Devi-container">
            <h1 className="Dev-heading">Dev Team</h1>
            <div className="Dev-container">
                {
                    DevData.map((val,ind)=>{
                        return(
                            <DevCard
                            key={ind}
                            imgsrc={val.imgsrc}
                            text={val.text}
                             pink={val.pink}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Dev

