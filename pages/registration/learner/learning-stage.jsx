import { UserContext } from "../../../context/user-context"
import { useContext } from 'react'
import TextCard from '../../../components/TextCard'
import { useRouter } from "next/router"
import BackToHome from "../../../components/BackToHome"

function LearningStage() {
  const { state, dispatch } = useContext(UserContext)
  const router = useRouter()
  const handleClick = () => {
    if (state.learningStage !== "") {
      router.push("/registration/learner/subjects")
    }
  }

  return (
    <div>
      <BackToHome />
      <div className=' gap-2 mt-20 font-[600] w-full bg-secondary text-5xl text-left px-10 py-4'>
        Hello, {state.name}!
      </div>
      <div className='my-10 flex flex-col items-center gap-10 relative'>
        {state.learningStage === "" && <span className='absolute top-8 text-red-500'>Select one</span>}
        <span className='w-[20rem] font-bold text-xl'>Select your learning stage</span>

        <div onClick={() => dispatch({ type: "EARLY" })} className="w-full flex justify-center">
          <TextCard title="Early Childhood"
            desc="(preschool / kindergarten)" selected={state.learningStage === "early"} />
        </div>
        <div onClick={() => dispatch({ type: "ELEMENTARY" })} className="w-full flex justify-center">
          <TextCard title="Elementary"
            desc="(grades 1-5)" selected={state.learningStage === "elementary"} />
        </div>
        <div onClick={() => dispatch({ type: "SECONDARY" })} className="w-full flex justify-center">
          <TextCard title="Secondary"
            desc="(grade 6-9)" selected={state.learningStage === "secondary"} />
        </div>
        <div onClick={() => dispatch({ type: "POST_SEC" })} className="w-full flex justify-center">
          <TextCard title="Post-Secondary"
            desc="(grade 10 and beyond)" selected={state.learningStage === "post-secondary"} />
        </div>
        <button className='p-2 bg-gray-300 text-lg font-bold px-10 rounded-xl hover:bg-gray-400 mt-6' onClick={handleClick}>Next {'>'}</button>
      </div>
    </div>
  )
}

export default LearningStage