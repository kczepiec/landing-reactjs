import React, { Component } from 'react'
import axios from 'axios'
import './Form.css'
import Fields from './Fields';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clients: [],
            countries: [],
            formSucceed: false
        }
        // this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }

    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all').then(response => {
            // console.log(response.data)
            this.setState({ countries: response.data })
        }).catch(function (error) {
            console.log(error);
        });
    }

    formSubmitHandler = (e) => {
        // e.preventDefault();
        axios.post('http://api.krzysztofczepiec.pl/api/clients/', {
            firstName: e.firstName,
            lastName: e.lastName,
            email: e.email,
            company: e.company,
            phone: e.phone,
            country: e.country,
        }).then(response => {
            console.log(response.data)
            this.setState({ clients: response.data, loading: false, formSucceed: true });
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        if (this.state.formSucceed === false) {
            return (
                <div className="form-wrapper" id="register">
                    <h1 className="h1">Register and <span>read</span></h1>
                    <Fields countries={this.state.countries} submit={this.formSubmitHandler}/>
                </div>
            )
        } else {
            const heading = {
                textAlign: 'center',
                fontWeight: '400',
                marginBottom: '0'
            }
            const lead = {
                textAlign: 'center',
                fontWeight: '200'
            }
            const button = {
                textAlign: 'center',
                fontWeight: '600',
                height: '60px',
                border: '0',
                backgroundColor: '#F7323F',
                color: '#ffffff',
                fontSize: '12pt',
                marginTop: '30px',
                borderRadius: '6px'
            }
            const returnFormHandler = () => {
                this.setState({
                    formSucceed: false
                })
            }
            return (
                <div className="form-wrapper" id="register">
                    <div className="card">
                        <h1 style={heading}>Thanks for registering!</h1>
                        <p style={lead}>We've send an email to you with newset asset.</p>
                        <button style={button} onClick={returnFormHandler}>Return to the form</button>
                    </div>
                </div>
            )
        }
    }
}

export default Form
