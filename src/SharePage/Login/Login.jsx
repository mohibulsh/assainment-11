import React from 'react';
import login from '../../assets/login.svg'
const Login = () => {
    return (
        <div className="pt-32 min-h-screen bg-base-200">
            <div className="hero-content lg:flex-row  items-center">
                <div className="text-center w-1/2">
                    <img className='w-2/3' src={login} alt="" />
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="ml-8 card-body text-left">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;