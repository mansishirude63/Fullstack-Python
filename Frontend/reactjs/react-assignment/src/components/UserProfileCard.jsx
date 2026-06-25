import React, { useState } from 'react'

const UserProfileCard = () => {

    const [player, setPlayer] = useState('{}')

    const virat = {
        name: "Virat Kohli",
        role: "Batsman",
        country: "India",
        bgColor:"red",
        textColor:"white"
    }
    const rohit = {
        name: "Rohit Sharma",
        role: "Batsman",
        country: "India",
        bgColor:"blue",
        textColor:"white"
    }
    const dhoni = {
        name: "MS Dhoni",
        role: "Wicket Keeper",
        country: "India",
        bgColor:"yellow",
        textColor:"black"
    }

    
    return (
        <>
            <div className="text-center">
                <h1>User Profile Card</h1>
                <button className="btn btn-danger me-2" onClick={() => setPlayer(virat)}>Virat Kohli</button>
                <button className="btn btn-primary me-2" onClick={() => setPlayer(rohit)}>Rohit Sharma</button>
                <button className="btn btn-warning me-2" onClick={() => setPlayer(dhoni)}>MS Dhoni</button>

                <div className="container justify-content-center mt-5 mb-5" style={{
                    border: '2px solid black',
                    width: '400px',
                    height: '170px',
                    borderRadius: '7px',
                    backgroundColor:player.bgColor,
                    color:player.textColor
                }}>
                    <h4 className='mt-4'>Name : <b>{player.name}</b></h4>
                    <h4>Role : <b>{player.role}</b></h4>
                    <h4>Country : <b>{player.country}</b></h4>
                </div>
            </div>
        </>
    )
}

export default UserProfileCard
