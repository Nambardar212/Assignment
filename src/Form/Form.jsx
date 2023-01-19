import React from 'react';
import { useState } from 'react';
import { useAlert } from 'react-alert';
import "./Form.css";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const alert = useAlert();

    const SubmitHandler = (e) => {
        e.preventDefault();
        if (name === "") {
            alert.error("Please Enter Name")
        }
        else if (email === "") {
            alert.error("Please Enter Email")
        }
        else if (phone === "") {
            alert.error("Please Enter Phone Number")
        }
        else if (phone.length !== 10) {
            alert.error("Enter valid Phone Number")
        }
        else {
            alert.success("Successfully Register")
        }
    }


    return (
        <>
            <div>
                <div className="contact1">
                    <div className="container-contact1">
                        <div className="contact1-text" data-tilt="">
                            <h3 className="title">
                                GET IN TOUCH
                            </h3>
                            <span>
                                Please complete the form an we will get back to you
                            </span>
                        </div>
                        <form className="contact1-form validate-form" onSubmit={SubmitHandler}>

                            <div className="wrap-input1">
                                <label className="label">Name</label><br />
                                <input
                                    className="input1"
                                    type="text"
                                    placeholder="Enter Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />

                            </div>
                            <div className="wrap-input1">
                                <label className="label">Email</label><br />
                                <input
                                    className="input1"
                                    type="email"
                                    placeholder="Enter Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                            </div>
                            <div className="wrap-input1">
                                <label className="label">Mobile</label><br />
                                <input
                                    className="input1"
                                    type="tel"
                                    placeholder="Enter Your Mobile Number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />

                            </div>
                            <div className="container-contact1-form-btn">
                                <button className="contact1-form-btn" type='submit'>
                                    Register Now!
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;