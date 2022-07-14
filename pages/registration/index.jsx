import React from 'react'
import Button from '../../components/Button'
import TextCard from '../../components/TextCard'

function Index() {
  return (
    <div className=''>
      <div className='flex justify-center items-center gap-2 mt-28 text-xl'>
        <strong>Hello, my name is </strong>
        <input type="text" placeholder='Sue?' className='w-36 px-2 border-[0.185rem] border-black placeholder:text-gray-600 placeholder:font-bold rounded-full text-left bg-inherit outline-none focus-visible:ring-2 ring-yellow-300' />
      </div>
      <div className='my-10 flex flex-col items-center gap-10'>
        <span className='w-[20rem] font-bold text-xl'>I am a...</span>

        <TextCard title="Mentor"
          desc="Mentors will provide the 
roadmap and share resources 
to facilitate the learning journey." />
        <TextCard title="Learner"
          desc="Learners seek to continue 
          learning with the advise and
          support from mentors"
        />
        <Button btnText="Let's Go!" />
      </div>
    </div>
  )
}

export default Index