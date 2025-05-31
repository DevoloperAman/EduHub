

import React from 'react'
import logo from '../src/assets/footer_logo.png'
import { Link } from "react-router-dom"

function Footer() {
    return (
        <>
            {/* Main Footer Section */}
            <div className='flex flex-col lg:flex-row flex-wrap justify-center items-start gap-12 bg-indigo-600 text-white mt-20 px-6 py-12 md:px-16'>

                {/* Logo and Description */}
                <div className='flex flex-col items-center lg:items-start text-center lg:text-left max-w-sm'>
                    <img className='h-16 mb-4' src={logo} alt="EduHub logo" />
                    <h1 className='text-xl font-bold'>Fueling Future Engineers and Innovators</h1>
                </div>

                {/* Grid of Footer Links */}
                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center lg:text-left'>

                    {/* Quick Links */}
                    <div>
                        <h3 className='font-bold mb-2 text-lg'>Quick Links</h3>
                        <div className='flex flex-col space-y-1'>
                            <Link className='hover:font-bold hover:underline' to="/">Home</Link>
                            <Link className='hover:font-bold hover:underline' to="/project">Project</Link>
                            <Link className='hover:font-bold hover:underline' to="/jobprep">Job-prep</Link>
                        </div>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className='font-bold mb-2 text-lg'>Resources</h3>
                        <div className='flex flex-col space-y-1'>
                            <a className='hover:font-bold hover:underline' href="">Docs</a>
                            <a className='hover:font-bold hover:underline' href="">Blog</a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className='font-bold mb-2 text-lg'>Company</h3>
                        <div className='flex flex-col space-y-1'>
                            <Link className='hover:font-bold hover:underline' to="/about">About</Link>
                            <a className='hover:font-bold hover:underline' href="">Careers</a>
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className='font-bold mb-2 text-lg'>Social</h3>
                        <div className='flex flex-col space-y-1'>
                            <a className='hover:font-bold hover:underline' href="https://www.instagram.com/me.devoloper.aman/" target='_blank' rel="noopener noreferrer">Instagram</a>
                            <a className='hover:font-bold hover:underline' href="https://www.linkedin.com/in/developeramang/" target='_blank' rel="noopener noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className='bg-indigo-900 text-white p-4 flex items-center justify-center text-center'>
                <h1 className='text-sm md:text-lg font-extrabold'>
                    © 2025 All rights reserved || EduHub - Aman Gupta
                </h1>
            </div>
        </>
    )
}

export default Footer
