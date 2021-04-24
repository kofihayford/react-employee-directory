import React, { useState, useEffect } from 'react'


// Will be pulling in name, email, age, phone, ID, date of birth, picture



export default function EmployeeLoading() {
    const [users, setUsers] = useState([])
    let URL = "https://randomuser.me/api/?results=10"
    useEffect(() => {
        fetch(URL)
            .then(res => {
                return res.json()
            })
            .then(results => setUsers(results.results))
            .catch(e => console.log(e))
    }, [])
    console.log(users, 'this is our state users')
    return (
        <div>
            <p className="name"> Name:
            </p>

            <p className="email"> Email:
            </p>

            <p className="phone"> Phone:
            </p>

            <p className="age"> Age:
            </p>

            <p className="id"> ID Number:
            </p>

            <p className="dob"> Date of Birth:
            </p>

            <p className="name"> Gender:
            </p>

            <img src="" className="image" alt="avatarimg" />
        </div>
    )
}

