import { UserContext } from "../../../context/user-context"
import { useContext } from 'react'
import StudentSettings from '../../../components/StudentSettings'

function Subjects() {
  const { state, dispatch } = useContext(UserContext)

  return (
    <div>
      <StudentSettings />
      <div className=' gap-2 mt-20 font-[600] w-full bg-secondary text-5xl text-left px-10 py-4'>
        Hello, {state.name}!
      </div>
      <div className='my-10 flex flex-col items-center gap-10'>
        <span className='w-[20rem] font-bold text-xl'>Pick all the topics you are interested in:</span>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold hover:text-accent">Psychology</div>
          <div className="bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold hover:text-accent">Maths</div>
          <div className="bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold hover:text-accent">Science</div>
          <div className="bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold hover:text-accent">Language</div>
          <div className="bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold hover:text-accent">Engineering</div>
          <div className="bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold hover:text-accent">Poetry</div>
          <div className="bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold hover:text-accent">Finance</div>
          <div className="bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold hover:text-accent">Geometry</div>
          <div className="bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold hover:text-accent">Accounting</div>
          <div className="bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold hover:text-accent">Data Science</div>
          <div className="bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold hover:text-accent">Programming</div>
          <div className="bg-secondary p-5 aspect-square w-28 rounded-xl ring-accent hover:ring-4 cursor-pointer inline-flex items-center justify-center font-bold hover:text-accent">Game Design</div>
        </div>
        <button className='p-2 bg-gray-300 text-lg font-bold px-10 rounded-xl hover:bg-gray-400 mt-6'>Next {'>'}</button>
      </div>
    </div>
  )
}

export default Subjects