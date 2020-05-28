import React, { Component } from 'react';
import classes from './Contact.css';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import Backdrop from '../../components/UI/Backdrop/Backdrop';

class Contact extends Component {
    state = {
        orderForm: {
            name: {
                eleType: "input",
                eleConfig: {
                    type: "text",
                    placeholder: "Your Name"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorMsg: "Please enter a value!",
            },
            email: {
                eleType: "input",
                eleConfig: {
                    type: "email",
                    placeholder: "Your email"
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorMsg: "Please enter a valid email!",
            },
            message: {
                eleType: "textarea",
                eleConfig: {
                    placeholder:"Type your message here...",
                    cols: 20,
                    rows: 5
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                errorMsg: "Please enter a value!",
            },
        },
        formIsValid: false,
        loading: false,
    }

    orderHandler = (event) => {
        console.log("submitted");
        this.props.history.push('/');
        // event.preventDefault(); // prevent reload when form submitted
        // this.setState({loading: true});
        // const formData = {};
        // for (let formEle in this.state.orderForm) {
        //     formData[formEle] = this.state.orderForm[formEle].value;
        // }
        // const data = {
        //     ingredients: this.props.ingredients,
        //     price: this.props.price,
        //     orderData: formData
        // }
        // axios.post("/orders.json", data)
        //     .then(response => { 
        //         console.log(response);
        //         this.setState({loading: false});
        //         this.props.history.push('/');

        //     })
        //     .catch(error => { 
        //         console.log(error);
        //         this.setState({loading: false});
        //     })
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        return isValid;
    }

    inputChangeHandler = (event, inputID) => {
        const updatedForm = {...this.state.orderForm};
        const updatedFormEle = {...updatedForm[inputID]};

        updatedFormEle.value = event.target.value;
        updatedFormEle.valid = this.checkValidity(updatedFormEle.value, updatedFormEle.validation);
        updatedFormEle.touched = true;
        updatedForm[inputID] = updatedFormEle;

        let formIsValid = true;
        for (let id in updatedForm) {
            formIsValid = updatedForm[id].valid && formIsValid;
        }

        this.setState({
            orderForm: updatedForm, 
            formIsValid: formIsValid
        });
    }

    render () {
        const formEleArray = [];
        for (let key in this.state.orderForm) {
            formEleArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formEleArray.map(formEle => (
                    <Input 
                        key={formEle.id}
                        eleType={formEle.config.eleType}
                        eleConfig={formEle.config.eleConfig}
                        value={formEle.config.value}
                        invalid={!formEle.config.valid}
                        shouldValidate={formEle.config.validation}
                        touched={formEle.config.touched}
                        errorMsg={formEle.config.errorMsg}
                        changed={(event) => {this.inputChangeHandler(event, formEle.id)}}
                    />
                ))}
                <button 
                    className={classes.Button}
                    buttonType="Success" 
                    disabled={!this.state.formIsValid}
                >Submit</button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <Backdrop>
                <div className={classes.Container}>
                    <div className={classes.Contact}>
                        <h1>Contact Us</h1>
                        {form}
                    </div>
                    <div>
                        {/* PICTURE OF LIZARD HERE */}
                    </div>
                </div>
            </Backdrop>
        );
    }
}

export default Contact;