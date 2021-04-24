import React, { useState, useEffect } from 'react'


// Will be pulling in name, email, age, phone, ID, date of birth, picture



export default function EmployeeLoading() {
    let URL = "https://randomuser.me/api/?results=50"
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .catch(e => console.log(e))
    })
    return (
        <div>
            <p className="name">
            </p>

            <p className="email">
            </p>

            <p className="phone">
            </p>

            <p className="age">
            </p>

            <p className="id">
            </p>

            <p className="dob">
            </p>


            <img src="" className="image" alt="avatarimg" />
        </div>
    )
}

