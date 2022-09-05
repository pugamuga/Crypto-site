import React from 'react'
import CalcForm from './CalcForm'
import { motion } from 'framer-motion'

const Calculate = () => {
  return (
    <section className='section'>
        <div className='container mx-auto'>
            <motion.div
            animate={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className=' text-center'>
                <h2 className=' section-title'>Check how much you can lose</h2>
                <p className='section-subtitle text-lg mb-16 max-w-[620px] mx-auto'>Let's check your hash rate to see how much you can lose today</p>
            </motion.div>
            <CalcForm/>
        </div>
    </section>
  )
}

export default Calculate