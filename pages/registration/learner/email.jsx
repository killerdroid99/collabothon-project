import { UserContext } from "../../../context/user-context"
import { useContext } from 'react'
import { useRouter } from "next/router"
import BackToHome from "../../../components/BackToHome"
import Button from "../../../components/Button"

function Email() {
  const { state, dispatch } = useContext(UserContext)
  const router = useRouter()
  const handleClick = () => {
    if (state.email !== "" && state.email.includes("@")) {
      router.push(`/${state.name}/profile`)
    }
  }

  return (
    <div>
      <BackToHome />
      <div className=' gap-2 mt-20 font-[600] w-full bg-secondary text-5xl text-left px-10 py-4'>
        Hello, {state.name}!
      </div>
      <div className='my-10 flex flex-col items-center gap-10 relative'>
        <span className='w-[20rem] font-bold text-xl'>Please provide your email address:</span>
        <input type="email" className="w-full max-w-sm px-4 py-4 border-[0.185rem] border-black placeholder:text-gray-600 placeholder:font-bold rounded-3xl text-left bg-inherit outline-none focus-visible:ring-2 ring-accent" placeholder="Enter here..." value={state.email} onChange={(e) => dispatch({ type: "EMAIL", payload: e.target.value })} />
        <Button btnText="Complete Registration!" handleClick={handleClick} />
      </div>
    </div>
  )
}

export default Email