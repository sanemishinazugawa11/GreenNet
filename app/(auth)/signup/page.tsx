'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signup } from '@/Actions/actions'

function page() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)
        setError('')
        
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        // Basic validation
        if (!name || !email || !password) {
            setError('Please fill in all fields')
            setIsLoading(false)
            return
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long')
            setIsLoading(false)
            return
        }

        try {
           
           const response : boolean = await signup({
            name,email,password
           })
           console.log(response)
            if (response === true) {
                // Success - redirect to sign in or dashboard
                router.push('/Dashboard')
            } else {
                setError('Sign up failed please try again.')
                console.log(error)
            }
        } catch (error) {
            setError('An error occurred. Please try again.')
            console.error('Sign up error:', error)
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <div className='bg-bilbao-50 w-screen h-screen p-6 flex justify-center items-center'>
            <div className='w-[95%] mx-auto max-w-sm  p-6 bg-bilbao-100 border-[0.5px] border-x-bilbao-500/20 border-y-bilbao-500/20 rounded-lg shadow-md mt-20'>
                <h2 className='text-2xl font-bold font-Raleway text-center mb-4'>Sign Up</h2>
                
                {error && (
                    <div className='mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded'>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block font-Montserrat text-sm font-medium mb-2' htmlFor='name'>Full Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            className='w-full font-Montserrat px-3 py-2 border border-gray-300 bg-de-york-50/80 rounded-lg focus:outline-none focus:ring-1 focus:ring-de-york-500'
                            placeholder='Enter your full name'
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block font-Montserrat text-sm font-medium mb-2' htmlFor='email'>Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            className='w-full px-3 font-Montserrat py-2 border border-gray-300 bg-de-york-50/80 rounded-lg focus:outline-none focus:ring-1 focus:ring-de-york-500'
                            placeholder='Enter your email'
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block font-Montserrat text-sm font-medium mb-2' htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            className='w-full font-Montserrat  px-3 py-2 border border-gray-300 bg-de-york-50/80 rounded-lg focus:outline-none focus:ring-1 focus:ring-de-york-500'
                            placeholder='Enter your password (min 6 characters)'
                            required
                            disabled={isLoading}
                            minLength={6}
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full font-Montserrat bg-de-york-600 text-white font-semibold py-2 rounded-lg hover:bg-de-york-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                        disabled={isLoading}
                    >
                        {isLoading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>
                
                <div className='mt-4 text-center'>
                    <span className='text-sm font-Montserrat text-gray-600'>
                        Already have an account? 
                        <a href='/signin' className='text-blue-600 font-Montserrat font-semibold underline underline-offset-1 hover:underline ml-1'>
                            Sign In
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default page