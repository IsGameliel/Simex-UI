import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export class Register extends Component{
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    };

    onSubmit = e => {
        e.preventDefault();
        console.log('submit')
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });
    render(){
        const { username, email, password, password2 } = this.state;
        return(
            <div className="register_section">
                <Container>
                    <div className="register_card">
                        <Container>
                            <h1>Signup</h1>
                            <img src="static/img/linec.png" alt="circle" />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input className="form-control" name="username" onChange={this.onChange} value={username} placeholder="username" type={'text'}/>
                                </div>
    
                                <div className="form-group">
                                    <input className="form-control" name="email" onChange={this.onChange} value={email} placeholder="email" type={'email'}/>
                                </div>
    
                                <div className="form-group">
                                    <input className="form-control" name="password" onChange={this.onChange} value={password} placeholder="password" type={'password'}/>
                                </div>
    
                                <div className="form-group">
                                    <input className="form-control" name="password2" onChange={this.onChange} value={password2} placeholder="re-enter password" type={'password'}/>
                                </div>
    
                                <div className="form-group submit">
                                    <input className="btn btn-outline-success" value={'Register'} type={'submit'}/>
                                </div>
                            </form>
                            <img src="static/img/square.png" className="square" alt="circle" />
                            <div className="reg_notice">
                                <p>already have an account? <span className="register"><Link to="/login">Login</Link></span></p>
                            </div>
                        </Container>
                    </div>
                </Container>
                <div className="copywrite_login_bg">
                    <Container>
                        <p>2022 copywrite simvic all right reserved</p>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Register;