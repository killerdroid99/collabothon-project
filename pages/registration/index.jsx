import { useState } from 'react'
import Button from '../../components/Button'
import TextCard from '../../components/TextCard'

function Index() {
  const [selected, setSelected] = useState("")

  return (
    <div className=' px-14'>
      <div className='flex flex-col gap-2 mt-28 text-base items-center text-left'>
        <h2 className='text-3xl font-bold'>Hello!</h2>
        <strong>My name is </strong>
        <input type="text" placeholder='Sue?' className='w-full max-w-sm px-4 py-4 border-[0.185rem] border-black placeholder:text-gray-600 placeholder:font-bold rounded-3xl text-left bg-inherit outline-none focus-visible:ring-2 ring-accent' />
      </div>
      <div className='my-10 flex flex-col items-center gap-10'>
        <span className='w-[20rem] font-bold text-xl'>I am a...</span>
        <div onClick={() => setSelected("mentor")}>
          <TextCard title="Mentor"
            desc="Mentors will provide the 
roadmap and share resources 
to facilitate the learning journey." selected={selected === "mentor"} />
        </div>

        <div onClick={() => setSelected("learner")}>
          <TextCard title="Learner"
            desc="Learners seek to continue 
          learning with the advise and
          support from mentors" selected={selected === "learner"}
          />
        </div>
        <Button btnText="Let's Go!" />
      </div>
    </div>
  )
}

export default Index