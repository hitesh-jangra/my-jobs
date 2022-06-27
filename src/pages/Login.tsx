import React, { useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import { Button } from '../components/Button'
import { UserContext } from '../User'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [user, setUser] = useContext(UserContext);
    const submitHandler = async(e:any) =>{
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "email": email,
                    "password": password
                }
             )
        };
        const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, requestOptions);
        const data = await response.json();
        if(data.code === 200){
            setUser(data.data.token)
            navigate('/dashboard')
        }
        else{
            console.log(data.message)
        }
       
    }
    return (
        <>
            <div className="flex flex-col h-screen">
                <Navbar />
                <div className='h-2/5 bg-[#303F60] flex justify-center p-4'>
                    <div className='w-[30rem] h-[25rem] bg-white z-10 mt-14 rounded-2xl p-4'>
                        <h1 className='text-10 font-bold mb-6'>Login</h1>
                        <form onSubmit={submitHandler}>
                            <label className='block mb-3'>Email address</label>
                            <input className='block w-full border-2 border-[#C6C6C6] focus:border-[#43afff] mb-6 p-2 rounded' type="email" placeholder='Enter your email' name="email"
                            value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
                            <label className='block mb-3'>Password</label>
                            <input className='block w-full border-2 border-[#C6C6C6] focus:border-[#43afff] mb-6 p-2 rounded' type="password" placeholder='Enter your password' name="email"
                            value={password} onChange={(e)=>setPassword(e.target.value)} required />
                            <div className='w-full text-center'>
                            <Button label="Submit" />

                            </div>
                            </form>
                    </div>
                </div>
                <div className='h-full bg-[#EDF6FF] p-4'>
                </div>
            </div>
        </>
    )
}

export default Login