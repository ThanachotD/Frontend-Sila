import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router'
import Image from "next/image";
import logo from "../../../public/logo.png";
import { TiTick } from "react-icons/ti";

const index = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");

    //function loading
    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }
    
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
    if (isLoading) {
        simulateNetworkRequest().then(() => {
        setLoading(false);
        });
    }
    }, [isLoading]);

    const handleClick = () => {setLoading(true)};

    const steps = ["อีเมลผู้ใช้", "ตั้งค่ารหัสผ่าน", "ข้อมูลส่วนตัว"];
    const [currentStep, setCurrentStep] = useState(1);
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        if(complete == true) {
            router.push('/home')
        }

    }, [complete])
    return (
        <>

        <main className='bg-white w-screen h-screen'>
            <div className='flex h-screen'>
                <form className="m-auto md:w-2/6">
                    <div className='flex justify-center'>
                        <h1 className="pb-10"><Image src={logo} alt="" width={94} height={52} priority/></h1>
                    </div>
                    <div className='flex justify-start'>
                        {!complete && (
                        <button
                        className="text-575757 font-medium rounded-lg pb-10 text-sm text-center"
                        onClick={() => {
                            currentStep === steps.length && currentStep != 3
                            ? setComplete(true)
                            : setCurrentStep((prev) => prev - 1);
                        }}
                        >
                        {currentStep === 1 ? undefined : "<-ย้อนกลับ"}
                        </button>
                        )}
                    </div>

                    <div className="flex justify-between">
                        {steps?.map((step, i) => (
                        <div
                            key={i}
                            className={`step-item ${currentStep === i + 1 && "active"} ${
                            (i + 1 < currentStep || complete) && "complete"
                            } `}
                        >
                            <div className="step">
                            {i + 1 < currentStep || complete ? <TiTick size={24} className='text-white'/> : i + 1}
                            </div>
                            <p className="text-gray-500">{step}</p>
                        </div>
                        ))}
                    </div>

                    <>
                        {
                            currentStep == 1
                            && <>

                                <label className='flex justify-start text-071320 text-2xl mt-6'>ยินดีต้อนรับ</label>
                                <label className='flex justify-start text-071320 text-sm mb-6'>แหล่งรวบรวมข้อมูลออนไลน์ที่เกี่ยวข้องกับอุตสาหกรรมบันเทิงของประเทศไทย</label>
                    
                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-575757 dark:text-575757">อีเมล</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        className="bg-white border border-DCDCDC outline-none text-060D38 text-sm rounded-lg block w-full p-2.5" 
                                        placeholder="กรอกอีเมลของคุณ" 
                                        required 
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                            </>
                        }
                        {
                            currentStep == 2
                            && <>
                                <label className='flex justify-start text-071320 text-2xl mt-6 mb-6'>ข้อมูลบัญชีผู้ใช้</label>
                    
                                <div className="mb-3">
                                    <label htmlFor="password" className="block mb-1 text-sm font-medium text-575757 dark:text-575757">รหัสผ่าน</label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        className="bg-white border border-DCDCDC outline-none text-060D38 text-sm rounded-lg block w-full p-2.5" 
                                        placeholder="รหัสต้องมีความยาวอย่างน้อย 8 ตัวอักษร" 
                                        required 
                                        onChange={undefined}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="password" className="block mb-1 text-sm font-medium text-575757 dark:text-575757">ยืนยันรหัสผ่าน</label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        className="bg-white border border-DCDCDC outline-none text-060D38 text-sm rounded-lg block w-full p-2.5" 
                                        placeholder="รหัสต้องมีความยาวอย่างน้อย 8 ตัวอักษร" 
                                        required 
                                        onChange={undefined}
                                    />
                                </div>
                            </>
                        }
                        {
                            currentStep == 3
                            && <>
                                <label className='flex justify-start text-071320 text-2xl mt-6 mb-6'>ข้อมูลส่วนตัว</label>
                                <div className="mb-3">
                                    <label htmlFor="first_name" className="block mb-1 text-sm font-medium text-575757 dark:text-575757">ชื่อ - นามสกุล</label>
                                    <input 
                                        type="text" 
                                        id="first_name" 
                                        className="bg-white border border-DCDCDC outline-none text-060D38 text-sm rounded-lg block w-full p-2.5" 
                                        placeholder="" 
                                        required 
                                        onChange={undefined}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="user_name" className="block mb-1 text-sm font-medium text-575757 dark:text-575757">ชื่อผู้ใช้</label>
                                    <input 
                                        type="text" 
                                        id="user_name" 
                                        className="bg-white border border-DCDCDC outline-none text-060D38 text-sm rounded-lg block w-full p-2.5" 
                                        placeholder="" 
                                        required 
                                        onChange={undefined}
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="phone" className="block mb-1 text-sm font-medium text-575757 dark:text-575757">เบอร์โทร</label>
                                    <input 
                                        type="text" 
                                        id="phone" 
                                        className="bg-white border border-DCDCDC outline-none text-060D38 text-sm rounded-lg block w-full p-2.5" 
                                        placeholder="" 
                                        required 
                                        onChange={undefined}
                                    />
                                </div>
                            </>
                        }
                    </>


                    {!complete && (
                        <button
                        className="text-white bg-060D38 hover:bg-gray-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                        onClick={() => {
                            currentStep === steps.length
                            ? setComplete(true)
                            : setCurrentStep((prev) => prev + 1);
                        }}
                        >
                        {currentStep === steps.length ? "เสร็จสิ้น" : "ดำเนินการต่อ"}
                        </button>
                    )}
                    
                    <div className='flex justify-center mt-40'>
                        <label className='text-575757'>หากมีบัญชีอยู่แล้ว ? <Link href={'/login'} className='text-060D38'>เข้าสู่ระบบ</Link></label>
                    </div>
                </form>
            </div>
        </main>
        </>
  )
}

export default index