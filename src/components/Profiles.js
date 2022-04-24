import React from 'react'

function Profiles({Leaderboard}) {
  return (
    <div id="entry">
        {Item(Leaderboard)}
    </div>
  )
}

function Item(data){
    return(
        <>
        {
          data.map((value,index)=>(
            <div className="flex" key={index}>
            <div className="item">
                <div className="info">
                    <h3 classname="name">{value.name}</h3>
                </div>
            </div>
            <div className="score">
                <span>{value.score}</span>
            </div>
            </div>
            )
          )
        }
        </>  
    )
}

export default Profiles