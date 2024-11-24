import {useEffect, useState} from 'react';
const Home = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = () =>{
        
    }
    return (
        <div className="flex justify-around gap-x-0" >
            <div className="w-1/2 border-2 font-semibold flex flex-col items-center justify-center pt-24 h-screen text-center space-y-4">
                <div 
                    className=" px-5 py-2 w-72 cursor-pointer bg-amber-500">
                    <h1>Login as a customer</h1>
                </div>
                <div 
                    className=" px-5 py-2 w-72 cursor-pointer bg-amber-500">
                    <h1>Login as a restaurant owner</h1>
                </div>
            </div>
            <div className="w-1/2 border-2 font-semibold flex flex-col items-center justify-center pt-24 h-screen text-center space-y-4">
                <div 
                    className=" px-5 py-2 w-72 cursor-pointer bg-amber-500">
                    <h1>Create your account</h1>
                </div>
                <form className='flex flex-col gap-y-2' onSubmit={handleSubmit}>
                    <label  >Enter your name: 
                        <input className='border-2' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label>Enter you email id: 
                        <input className='border-2' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Home;