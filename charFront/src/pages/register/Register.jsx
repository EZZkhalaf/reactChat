import React, { useState } from "react";
import { registerHook } from "../../Hooks/registerHook";
import Gender from "./Gender";
import './Register.css';

const Register = () => {

    const [inputs,setInputs] = useState({
        fullName:'ninio',
        userName:'',
        password:'',
        Cpassword:'',
        gender:''
    });

    const {loading , reg} = registerHook();


    const handleCheckBoxChange = (gender) =>{
        setInputs({...inputs , gender})
    }

    const handleSubmit = async(e) =>{
        e.preventDefault(); //for not refreshing everytime 
        await reg(inputs);
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
                <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                    <h1 className="text-3xl font-semibold text-center text-gray-300">
                        Register <span className="text-green-500"> Fatcat</span>
                    </h1>


                    <form onSubmit={handleSubmit}>
                        <label className="label p-2">
                            <span className="text-base label-text text-primary">Full Name</span>
                            <input type="text" 
                            placeholder="maybe ezz" 
                            className="w-full input input-bordered h-10" 
                            value={inputs.fullName}
                            onChange={(e) => setInputs({...inputs , fullName : e.target.value })}
                            />

                        </label>

                        <label className="label p-2">
                            <span className="text-base label-text text-primary">User Name</span>
                            <input type="text" 
                            placeholder="pick a unique one" 
                            className="w-full input input-bordered h-10" 
                            value={inputs.userName}
                            onChange={(e) => setInputs({...inputs , userName : e.target.value})}
                            />
                        </label>

                        <label className="label p-2">
                            <span className="text-base label-text text-primary">Password</span>
                            <input type="password" 
                            placeholder="fatcat" 
                            className="w-full input input-bordered h-10" 
                            value={inputs.password}
                            onChange={(e) => setInputs({...inputs , password : e.target.value })}
                            />
                        </label>

                        <label className="label p-2">
                            <span className="text-base label-text text-primary">confirm password</span>
                            <input type="password" 
                            placeholder="fatcat" 
                            className="w-full input input-bordered h-10" 
                            value={inputs.Cpassword}
                            onChange={(e) => setInputs({...inputs , Cpassword : e.target.value })}
                            />
                        </label>

                        <Gender onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

                        <a
                            className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
                            href='/login'>
                            Already have an account?
                        </a>

                        <div>
                            <button className='btn btn-block btn-sm mt-2 border border-slate-700'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
