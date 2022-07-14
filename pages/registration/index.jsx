import { useRouter } from 'next/router'
import { useContext } from 'react'
import Button from '../../components/Button'
import TextCard from '../../components/TextCard'
import { UserContext } from "../../context/user-context"

function Index() {
  const { state, dispatch } = useContext(UserContext)
  const router = useRouter()

  const handleClick = () => {
    if (state.name !== "" && state.category !== "") {
      state.category === "learner" && router.push("registration/learner/learning-stage")
      state.category === "mentor" && router.push("registration/mentor/")
    }
  }

  return (
    <div className=' px-14'>
      <div className='flex flex-col gap-2 mt-28 text-base items-center text-left'>
        <h2 className='text-3xl font-bold'>Hello!</h2>
        <strong>My name is </strong>
        <input
          type="text"
          placeholder='Sue?'
          className='w-full max-w-sm px-4 py-4 border-[0.185rem] border-black placeholder:text-gray-600 placeholder:font-bold rounded-3xl text-left bg-inherit outline-none focus-visible:ring-2 ring-accent'
          value={state.name}
          onChange={(e) => dispatch({ type: "NAME", payload: e.target.value })}
        />
      </div>
      <div className='my-10 flex flex-col items-center gap-10'>
        <span className='w-[20rem] font-bold text-xl'>I am a...</span>
        <div onClick={() => dispatch({ type: "MENTOR" })}>
          <TextCard title="Mentor"
            desc="Mentors will provide the 
roadmap and share resources 
to facilitate the learning journey." selected={state.category === "mentor"} />
        </div>

        <div onClick={() => dispatch({ type: "LEARNER" })}>
          <TextCard title="Learner"
            desc="Learners seek to continue 
          learning with the advices and
          support from mentors" selected={state.category === "learner"}
          />
        </div>
        <Button btnText="Let's Go!" handleClick={handleClick} />
      </div>
    </div>
  )
}

export default Index