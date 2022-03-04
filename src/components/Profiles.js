import React from 'react'

function Profiles({Leaderboard}) {
  return (
    <div id="profile">
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
                <img src={value.img} alt=""></img>
                <div className="info">
                    <h3 classnae="name">{value.name}</h3>
                    <span>{value.grade}</span>
                </div>
            </div>
            <div className="item">
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