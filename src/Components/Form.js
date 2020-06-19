import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '', 
            day: '', 
            reason: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addAppt(this.state)
        this.setState({
            name: '', 
            day: '', 
            reason: ''
        })
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    placeholder='name'
                    name='name'
                    value={this.state.name}
                    onChange={this.handleChange}/>
                <input 
                    type='text'
                    placeholder='day'
                    name='day'
                    value={this.state.day}
                    onChange={this.handleChange}/>
                <input 
                    type='text'
                    placeholder='reason'
                    name='reason'
                    value={this.state.reason}
                    onChange={this.handleChange}/>
                <button>add appointment</button>
            </form>
        )
    }
}

export default Form