import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router'
import Image from "next/image";
import logo from "../../../public/logo.png";

const index = () => {
    const router = useRouter();

    //user handle
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    //Fetch data
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "email": email,
          "password" : pass,
        })
      };

    const postLogin = async () => {
        await fetch('http://localhost:8080/auth/login', requestOptions)
          .then(response => {
            response.json()
                .then(data => {
                    if(data.token == null || data.token == undefined || data.token == " ") {
                        // setCookie('token', data.token);
                        // console.log(data.token) 
                        // console.log("Set Cookie!")
                    } else {
                        setCookie('token', data.token);
                        console.log(data.token) 
                        console.log("Set Cookie!")
                    }
                    console.log(data)
                    console.log(data.token)
                    console.log(data.first_name)
                    console.log(data.last_name)
                    console.log(data.nick_name)
                    console.log(data.phone)
                    console.log(data.classrooms)
                    console.log("Email = " + email)
                    console.log("Password = " + pass)
                    router.push('/')
                });
        })
        .catch (error => {
          console.error(error);
        }) 
      }
    //function loading
    
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
    if (isLoading) {
        postLogin().then(() => {
        setLoading(false);
        });
    }
    }, [isLoading]);

    const handleClick = () => {setLoading(true)};

    return (
        <>

        <main className="bg-white w-screen h-screen font-['Open_Sans']">
            <div className='flex h-screen'>
                <form className="m-auto md:w-2/6">
                    <div className='flex justify-center'>
                        <h1 className="mb-10"><Image src={logo} alt="" width={94} height={52} priority/></h1>
                    </div>

                    <div className="mb-1">
                        <label htmlFor="email" className="block mb-1 text-sm font-medium text-575757 dark:text-575757">อีเมล</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="bg-white border border-DCDCDC outline-none text-060D38 text-sm rounded-lg block w-full p-2.5" 
                            placeholder="อีเมลของคุณ"  
                            required 
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-1 text-sm font-medium text-575757 dark:text-575757">รหัสผ่าน</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="bg-white border border-DCDCDC outline-none text-060D38 text-sm rounded-lg block w-full p-2.5" 
                            placeholder="รหัสผ่านของคุณ"  
                            required 
                            onChange={e => setPass(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-start mb-6">
                        <div className="flex items-center md:h-8 h-6">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-DCDCDC rounded-lg bg-white" required /> 
                            <label className='text-575757 mx-2'>จดจำฉันไว้</label>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button 
                            type="submit" 
                            className="text-white bg-060D38 hover:bg-gray-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                            disabled={isLoading}
                            onClick={!isLoading ? handleClick : undefined}
                        >{isLoading ? 'Loading…' : 'เข้าสู่ระบบ'}</button>       
                    </div>
                    <div className='flex justify-center mt-40'>
                        <label className='text-575757'>หากยังไม่มีบัญชี ? <Link href={'/register'} className='text-060D38'>สร้างบัญชี</Link></label>
                    </div>
                </form>
            </div>
        </main>
        </>
  )
}

export default index