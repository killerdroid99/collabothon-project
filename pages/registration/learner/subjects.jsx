import { UserContext } from "../../../context/user-context"
import { useContext } from 'react'
import BackToHome from '../../../components/BackToHome'
import { useRouter } from "next/router"

function Subjects() {
  const { state, dispatch } = useContext(UserContext)
  const router = useRouter()

  const handleSelect = (string) => {
    if (state.subjects.includes(string)) {
      console.log("includes", string);
      dispatch({ type: "REMOVE_SUBJECTS", payload: string })
    } else {
      dispatch({ type: "ADD_SUBJECTS", payload: string })
    }
  }

  const handleClick = () => {
    if (state.subjects.length !== 0) {
      router.push("/registration/learner/email")
    }
  }
  return (
    <div>
      <BackToHome />
      <div className=' gap-2 mt-20 font-[600] w-full bg-secondary text-5xl text-left px-10 py-4'>
        Hello, {state.name}!
      </div>
      <div className='my-10 flex flex-col items-center gap-10 relative'>
        <span className='w-[20rem] font-bold text-xl'>Pick all the topics you are interested in:</span>
        {state.subjects.length === 0 && <span className='absolute top-14 text-red-500'>Select atleast one</span>}
        <div className="grid grid-cols-3 gap-4">
          <div
            className={`bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold ${state.subjects.includes("Psychology") && "bg-emerald-500 text-primary hover:ring-red-500"}`}
            onClick={() => handleSelect("Psychology")}
          >Psychology</div>
          <div
            className={`bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold ${state.subjects.includes("Maths") && "bg-emerald-500 text-primary hover:ring-red-500"}`}
            onClick={() => handleSelect("Maths")}
          >Maths</div>
          <div
            className={`bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold ${state.subjects.includes("Science") && "bg-emerald-500 text-primary hover:ring-red-500"}`}
            onClick={() => handleSelect("Science")}
          >Science</div>
          <div
            className={`bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold ${state.subjects.includes("Language") && "bg-emerald-500 text-primary hover:ring-red-500"}`}
            onClick={() => handleSelect("Language")}
          >Language</div>
          <div
            className={`bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold ${state.subjects.includes("Engineering") && "bg-emerald-500 text-primary hover:ring-red-500"}`}
            onClick={() => handleSelect("Engineering")}
          >Engineering</div>
          <div
            className={`bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold ${state.subjects.includes("Poetry") && "bg-emerald-500 text-primary hover:ring-red-500"}`}
            onClick={() => handleSelect("Poetry")}
          >Poetry</div>
          <div
            className={`bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold ${state.subjects.includes("Finance") && "bg-emerald-500 text-primary hover:ring-red-500"}`}
            onClick={() => handleSelect("Finance")}
          >Finance</div>
          <div
            className={`bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold ${state.subjects.includes("Geometry") && "bg-emerald-500 text-primary hover:ring-red-500"}`}
            onClick={() => handleSelect("Geometry")}
          >Geometry</div>
          <div
            className={`bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold ${state.subjects.includes("Accounting") && "bg-emerald-500 text-primary hover:ring-red-500"}`}
            onClick={() => handleSelect("Accounting")}
          >Accounting</div>
          <div
            className={`bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold ${state.subjects.includes("Data Science") && "bg-emerald-500 text-primary hover:ring-red-500"}`}
            onClick={() => handleSelect("Data Science")}
          >Data Science</div>
          <div
            className={`bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold ${state.subjects.includes("Programming") && "bg-emerald-500 text-primary hover:ring-red-500"}`}
            onClick={() => handleSelect("Programming")}
          >Programming</div>
          <div
            className={`bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold ${state.subjects.includes("Game Design") && "bg-emerald-500 text-primary hover:ring-red-500"}`}
            onClick={() => handleSelect("Game Design")}
          >Game Design</div>
        </div>
        <button className='p-2 bg-gray-300 text-lg font-bold px-10 rounded-xl hover:bg-gray-400 mt-6' onClick={handleClick}>Next {'>'}</button>
      </div>
    </div>
  )
}

export default Subjects