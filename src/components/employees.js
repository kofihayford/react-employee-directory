import React from 'react'

export default function Employees(props) {
    return (
        <div className="employeeCard">
            <p className="name"> Name: {props.last} {props.first}
            </p>

            <p className="email"> Email: {props.email}
            </p>

            <p className="phone"> Phone: {props.phone}
            </p>

            <p className="age"> Age: {props.age}
            </p>

            <p className="id"> ID Number: {props.id}
            </p>

            <p className="dob"> Date of Birth: {props.dob}
            </p>

            <p className="gender"> Gender: {props.gender}
            </p>

            <img src={props.img} className="image" alt="avatarimg" />
        </div>
    )
}
