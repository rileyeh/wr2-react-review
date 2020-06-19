import React, { Component } from 'react'
import './App.css'
import Appointment from './Components/Appointment'
import Form from './Components/Form'

class App extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            appointments: [
                {
                    name: 'Alex', 
                    day: 'Wednesday', 
                    reason: 'check up'
                }, 
                {
                    name: 'Ezra', 
                    day: 'Thursday', 
                    reason: 'sore throat'
                }
            ]
        }
    }

    addAppt = info => {
        let newAppts = [...this.state.appointments]
        newAppts.push(info)
        this.setState({
            appointments: newAppts
        })
    }

    render() {
        const mappedAppts = this.state.appointments.map((info, i) => {
            return <Appointment key={i} info={info}/>
        })
        return (
            <div className='app'>
                <h1>Appointment Tracker</h1>
                <section className='body'>
                    <div className='appt-container'>
                        {mappedAppts}
                    </div>
                    <Form addAppt={this.addAppt}/>
                </section>
            </div>
        )
    }
}

export default App
