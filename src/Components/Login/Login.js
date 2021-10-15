import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const { LoginWithGoogle, userInfo, error } = useAuth();


    return (
        <div>
            <h1 className="text-center text-info mb-5">Please log in</h1>
            <form className="mx-auto w-75 ">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" className="btn btn-primary mb-3">Login</button>
                <br />
                <NavLink to="/register">New user ?</NavLink>
            </form>

            <div>
                <h1 className="text-center">Or,</h1>
            </div>

            <hr className="w-50 mx-auto mt-3"></hr>
            <div className="w-50 mx-auto d-flex justify-content-center  align-items-center">
                <button type="button" className="btn btn-outline-primary" onClick={LoginWithGoogle}>Log in with Google</button>
            </div>
            <h1 className="text-center">{error}</h1>
        </div>
    );
};

export default Login;