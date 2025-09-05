 'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signin } from '@/Actions/actions'

function page() {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)
        setError('')
        
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        if (!email || !password) {
            setError('Please fill in all fields')
            setIsLoading(false)
            return
        }

        try {
            
            const response : boolean = await signin({email,password});
            

            if (response) {
                // Success - redirect to dashboard or home
                router.push('/Dashboard')
            } else {
                setError( 'Sign in failed , please try again.')
            }
        } catch (error) {
            setError('An error occurred. Please try again.')
            console.error('Sign in error:', error)
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <div className='bg- w-screen h-screen flex items-center bg-de-york-50 justify-center'>
            <div className='w-[95%] mx-auto max-w-sm p-6 h-auto bg-bilbao-100 border-[0.5px] border-x-bilbao-500/20 border-y-bilbao-500/20 rounded-lg shadow-md '>
                <h2 className='text-2xl font-Raleway text-center font-bold mb-4'>Sign In</h2>
                
                {error && (
                    <div className='mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded'>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label className='block text-sm font-Montserrat font-semibold mb-2' htmlFor='email'>Email</label>
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
                        <label className='block text-sm font-Montserrat font-semibold  mb-2' htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            className='w-full font-Montserrat  px-3 py-2 border border-gray-300 bg-de-york-50/80 rounded-lg focus:outline-none focus:ring-1 focus:ring-de-york-500'
                            placeholder='Enter your password'
                            required
                            disabled={isLoading}
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full font-Montserrat bg-de-york-600 text-white font-semibold py-2 rounded-lg hover:bg-de-york-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                        disabled={isLoading}
                    >
                        {isLoading ? 'Signing In...' : 'Sign In'}
                    </button>
                    <div className='mt-4 text-center'>
                    <span className='text-sm font-Montserrat text-gray-600'>
                        Dont have an account? 
                        <a href='/signup' className='text-blue-600 font-Montserrat font-semibold underline underline-offset-1 hover:underline ml-1'>
                            Sign Up
                        </a>
                    </span>
                </div>
                </form>
            </div>
        </div>
    )
}

export default page