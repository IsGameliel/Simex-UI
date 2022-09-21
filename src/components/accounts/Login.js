import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export class Login extends Component{
    state = {
        username: '',
        password: ''
    };
    
    onSubmit = e => {
        e.preventDefault();
        console.log('login submit')
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });
    render(){
        const { username, password } = this.setState;
        return(
            <div className="login_section">
                <Container>
                    <div className="login_card">
                        <Container>
                            <h1>Signin</h1>
                            <img src="static/img/linec.png" alt="circle" />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input className="form-control" name="username" onChange={this.onChange} value={username} placeholder="username" type={'text'}/>
                                </div>
    
                                <div className="form-group">
                                    <input className="form-control" name="password" onChange={this.onChange} value={password} placeholder="password" type={'password'}/>
                                </div>
    
                                <div className="form-group checkbox">
                                    <input  placeholder="password" type={'checkbox'}/>
                                    <label className="label">Remember me</label>
                                </div>
    
                                <div className="form-group submit">
                                    <input  placeholder="password" className="btn btn-outline-success" value={'Sign in'} type={'submit'}/>
                                </div>
                            </form>
                            <img src="static/img/square.png" className="square" alt="circle" />
                            <div className="reg_notice">
                                <p>Don't have an account? <span className="register"><Link to="/register">Register</Link></span></p>
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

export default Login;