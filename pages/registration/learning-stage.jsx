import Image from 'next/image'
import React from 'react'
import StudentSettings from '../../components/StudentSettings'
import TextCard from '../../components/TextCard'

function LearningStage() {
  return (
    <div>
      <StudentSettings />
      <div className='flex justify-center items-center gap-2 mt-28 text-xl'>
        <strong>Hello, </strong>
        <span className='bg-black px-8 py-1 font-bold rounded-full text-white'>Sue</span>
      </div>
      <div className='my-10 flex flex-col items-center gap-10'>
        <span className='w-[20rem] font-bold text-xl'>Select your learning stage</span>

        <TextCard title="Early Childhood"
          desc="(preschool / kindergarten)" />
        <TextCard title="Elementary"
          desc="(grades 1-5)" />
        <TextCard title="Post-Secondary"
          desc="(grade 10 and beyond)" />
        <button className='p-2 bg-gray-300 text-lg font-bold px-10 rounded-xl hover:bg-gray-400 mt-20'>Next {'>'}</button>
      </div>
    </div>
  )
}

export default LearningStage