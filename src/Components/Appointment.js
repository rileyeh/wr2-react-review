import React from 'react'

const Appointment = props => {
    console.log(props)
    return (
        <div className='appt-card'>
            <h2>{props.info.name}</h2>
            <h3>{props.info.day}</h3>
            <p>{props.info.reason}</p>
        </div>
    )
}

export default Appointment