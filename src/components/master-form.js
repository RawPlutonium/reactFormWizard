import React from 'react';
import {StepOne} from './form';
import {StepTwo} from './form';
import {StepThree} from './form';
import { readdirSync } from 'fs';
import { throwStatement } from '@babel/types';


class MasterForm extends React.Component{
    _next = () =>{
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2 ? 3: currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }
    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep<= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }
    previousButton = () => {
        let currentStep = this.state.currentStep
        if(currentStep !==1){
            return(
                <button
                    className="btn button-secondary"
                    type="button"
                    onClick={this._prev}>
                        Previous
                    </button>
            )
        }
        return null;
    }
    nextButton(){
        let currentStep = this.state.currentStep;
        if(currentStep<3){
            return(
                <button
                    className="btn button-secondary"
                    type="button"
                    onClick={this._next}>
                        Next
                    </button>
            )
        }
        return null;
    }
    constructor(props){
        super(props)
        this.state = {
            currentStep: 1,
            email:'',
            username:'',
            password:''
        }
    }
    handleSubmit = event => {
        event.preventDefault()
        const {email, username, password} = this.state
        alert(`Your registration details: \n
            Email: ${email} \n
            Username:  ${username} \n
            Password: ${password}`
        )
    }
    render(){
        const {currentStep} = this.state;
        return(
            <React.Fragment>
                <h1> A React Form </h1>
                <p>Step {this.state.currentStep}</p>
                <form onSubmit={this.handleSubmit}>
                    <React.Fragment>
                        <React.Fragment>
                            {currentStep === 1 && (
                                <StepOne
                                currentStep={this.state.currentStep}
                                handleChange={this.handleChange}
                                email={this.state.email}
                            />
                            )}
                        </React.Fragment>
                        <React.Fragment>
                            {currentStep ===2 &&(
                                 <StepTwo
                                 currentStep={this.state.currentStep}
                                 handleChange={this.handleChange}
                                 username={this.state.username}
                             />
                            )}
                        </React.Fragment>
                        <React.Fragment>
                            {currentStep ===3 &&(
                                <StepThree
                                currentStep={this.state.currentStep}
                                handleChange={this.handleChange}
                                password={this.state.password}
                                />
                            )}
                        </React.Fragment>
                    </React.Fragment>
                        {this.previousButton()}
                        {this.nextButton()}
                </form>
            </React.Fragment>
        )
    }
}

export default MasterForm;