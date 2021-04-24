import React, { useState, useEffect } from 'react'
import Employees from "./employees"

// Will be pulling in name, email, age, phone, ID, date of birth, picture



export default function EmployeeLoading() {
    const [users, setUsers] = useState([])
    let sortByAge = () => {
        let ageSort = users.sort((a, b) => {
            return a.dob.age - b.dob.age
        })
        setUsers([...ageSort])
    }
    let genderFilter = () => {
        let female = users.filter(user => user.gender.toLowerCase() === 'female')
        setUsers([...female])
    }
    let URL = "https://randomuser.me/api/?results=10&?nat=us"
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(URL);
            const json = await res.json();
            setUsers(json.results)
        }
        fetchData();
    }, [setUsers])
    console.log(users, 'this is our state users')

    return (
        <div>
            <div><button className="button" onClick={() => sortByAge()}> Sort by Age </button>
                <button className="button" onClick={() => genderFilter()}> Filter by Gender </button> </div>
            {users && users.map((index, key) => {
                return (
                    <div className="cardDisplay" key={key}>
                        <Employees
                            last={index.name.last}
                            first={index.name.first}
                            email={index.email}
                            phone={index.phone}
                            dob={index.dob.date}
                            age={index.dob.age}
                            gender={index.gender}
                            id={index.id.value}
                            img={index.picture.large}
                        />
                    </div>
                )
            })}
        </div>
    )
}

