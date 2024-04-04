"use client"
import Head from 'next/head'
import React from 'react'

const Page = () => {
    return (
        <div
            className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
            <Head>
                <title>PDF Viewer</title>
            </Head>
            <iframe className='w-[100%] h-full' src="/Fadel_Resume.pdf" height="800px"></iframe>
        </div>)
}

export default Page