import React, { Component } from 'react'
import './Questionnaire.css'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
export default class Questionnaire extends Component {
    constructor(props) {
        super(props)
        this.history = props.history
        this.state = { user: props.user }
    }
    render() {
        console.log(Cookies.get('access_token') );
        console.log(this.state.user+"#logged-in" == Cookies.get('access_token'));
        if (Cookies.get('access_token') == this.state.user + "#logged-in") {
            return (
                <div>
                    Questionnaire Page
                    {this.state.user}
                </div>
            )
        } else {
            setTimeout(() => {
                this.history.push("/login")
            }, 1000)
            return (
              <div>
                  Redirecting to login
                  
              </div>
            )
        }

    }
}
