"use client";
import { useState } from 'react';

export default function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');  // Updated from 'massage' to 'message'

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage(''); // Clear message before new submission

        if (!name) {
            setMessage('لطفا نام خود را وارد کنید');
            return;
        }
        if (!email) {
            setMessage('لطفا ایمیل خود را وارد کنید ');
            return;
        }
        if (!phone) {
            setMessage('لطفا شماره تماس خود را وارد کنید ');
            return;
        }
        if (!password) {
            setMessage('لطفا پسورد خود را وارد کنید ');
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('password', password);

        try {
            const res = await fetch('/api/users', {
                method: 'POST',
                body: formData,
            });

            if (res.status === 201) {
                setMessage('ثبت نام با موفقیت انجام شد');
                window.location.href = '/login';
            } else {
                setMessage('مشکلی در مراحل ثبت نام شما پیش آمده است لطفا با پشتیبانی تماس حاصل فرمایید');
            }
        } catch (err) {
            setMessage('مشکلی در مراحل ثبت نام شما پیش آمده است لطفا با پشتیبانی تماس حاصل فرمایید');
        }
    };

    return (
        <div className="flex h-screen items-center justify-center p-8 ">
            <div className="w-full max-w-md bg-white p-8 rounded-lg border-t shadow-md mt-8 p-8">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">ثبت نام</h1>
                
                {/* Display message here */}
                {message && (
                    <p className={`text-center mb-4 ${message.includes('موفقیت') ? 'text-green-500' : 'text-red-500'}`}>
                        {message}
                    </p>
                )}

                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="name">نام و نام خانوادگی</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">ایمیل</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="phone">شماره تماس</label>
                        <input
                            id="phone"
                            type="text"
                            value={phone}
                            onChange={handlePhoneChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2" htmlFor="password">رمز عبور</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-all"
                    >
                        ثبت نام
                    </button>
                </form>
                
                <p className="mt-6 text-gray-700 text-center">
                    حساب کاربری دارید? <a href="/login" className="text-orange-500 hover:underline">ورود</a>
                </p>
            </div>
        </div>
    );
}