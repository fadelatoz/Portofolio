"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
    image: string;
    title: string;
    text: string;
}

const ProjectCard = ({ image, title, text }: Props) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip() {
        if (!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
    return (
        <div>
            <div className='flex flex-col gap-[1rem] py-3 z-[30] min-h-40'>
                <h1 className='text-whote text-[16px] font-semibold'>{title}</h1>
                <p className='text-gray-200 text-[14px] text-justify'>
                    {text}
                </p>
            </div>
            <div
                onClick={handleFlip}
                className='w-[100%] h-[280px] ml-5 rounded-md cursor-pointer'>
                <motion.div
                    className='flip-card-inner w-full h-full'
                    initial={false}
                    animate={{ rotateY: isFlipped ? 180 : 360 }}
                    transition={{ duration: 0.6, animationDirection: 'normal' }}
                    onAnimationComplete={() => setIsAnimating(false)}
                >
                    <div
                        style={{ backgroundImage: `url(${image})` }}
                        className='w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4'>

                    </div>
                </motion.div>
            </div>
        </div>

    )
}

export default ProjectCard