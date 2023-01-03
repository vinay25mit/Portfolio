import React from 'react'

import "./TeamCardStyle.css"
import TeamCard from './TeamCard'
import TeamData from './TeamData'

const Team = () => {
    return (
        <div className="Ach-container">
            <h1 className="Team-heading">TEAM</h1>
            <div className="Team-container">
                {
                    TeamData.map((val,ind)=>{
                        return(
                            <TeamCard
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

export default Team

