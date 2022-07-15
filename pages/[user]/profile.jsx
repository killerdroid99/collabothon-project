import { UserContext } from "../../context/user-context"
import { useContext } from 'react'
import { useRouter } from "next/router"
import BackToHome from "../../components/BackToHome"
import Image from "next/image"
import profile from "../../public/profile-student.png"
import m1 from "../../public/Mentor1.png"
import m2 from "../../public/Mentor2.png"
import Menu from "../../components/Menu"

function Profile() {
  const { state } = useContext(UserContext)
  const router = useRouter()
  const handleClick = () => {
    if (state.email !== "" && state.email.includes("@")) {
      router.push(`/${state.name}/profile`)
    }
  }

  return (
    <div className="flex flex-col items-center gap-8 pb-5">
      <BackToHome />
      <Menu />
      <div className="flex items-center gap-4 mt-12">
        <div>
          <Image src={profile} alt=""></Image>
          <h3 className="font-bold text-xl">STUDENT, {state.name.toUpperCase()}</h3>
          <span className="text-xs">({state.category}, {state.learningStage})</span>
          <div className="p-1 text-sm cursor-pointer bg-black text-secondary rounded-full text-center">Edit Profile</div>
        </div>
        <button className="rounded-3xl border-2 py-4 px-6 border-black">Following <strong className="block">2</strong></button>
        <button className="rounded-3xl border-2 py-4 px-6 border-black">Followers <strong className="block">0</strong></button>
      </div>

      <section className="max-w-[24rem] text-md grid grid-cols-2 gap-4">
        <div>
          <span className="font-bold">Age :- </span>
          <p>??</p>
        </div>
        <div>
          <span className="font-bold">Location :- </span>
          <p>??</p>
        </div>
        <div className="col-span-2">
          <span className="font-bold">Bio :- </span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dicta perspiciatis ipsam repudiandae aut eligendi numquam odio corporis cumque. Aut incidunt dolores nemo laudantium ullam. Aliquid, eos. Optio, rem aperiam?</p>
        </div>
      </section>
      <div className="flex flex-col">
        <h3 className="font-bold text-xl text-center w-full">MY MENTORS</h3>
        <span className="flex gap-6 mt-4">
          <Image src={m1} alt=""></Image>
          <Image src={m2} alt=""></Image>
        </span>
      </div>
      <div className="space-y-3">
        <h3 className="font-bold text-xl text-center w-full">COURSES IN PROGRESS </h3>
        <div className="bg-secondary text-sm w-[26rem] rounded-xl overflow-hidden">
          <span className="flex justify-between bg-black text-secondary w-full px-6 py-1">
            <p>Lecture Name</p>
            <p>Lecturer</p>
          </span>
          <div className="px-8 py-4 relative">
            <p>Progress 0%</p>
            <span className="w-4/5 h-1 bg-white absolute top-10"> </span>
            <button className="bg-black text-secondary rounded-full py-1 px-4 mt-5 ml-64">Continue</button>
          </div>
        </div>
        <div className="bg-secondary text-sm w-[26rem] rounded-xl overflow-hidden">
          <span className="flex justify-between bg-black text-secondary w-full px-6 py-1">
            <p>Lecture Name</p>
            <p>Lecturer</p>
          </span>
          <div className="px-8 py-4 relative">
            <p>Progress 0%</p>
            <span className="w-4/5 h-1 bg-white absolute top-10"> </span>
            <button className="bg-black text-secondary rounded-full py-1 px-4 mt-5 ml-64">Continue</button>
          </div>
        </div>
        <div className="bg-secondary text-sm w-[26rem] rounded-xl overflow-hidden">
          <span className="flex justify-between bg-black text-secondary w-full px-6 py-1">
            <p>Lecture Name</p>
            <p>Lecturer</p>
          </span>
          <div className="px-8 py-4 relative">
            <p>Progress 0%</p>
            <span className="w-4/5 h-1 bg-white absolute top-10"> </span>
            <button className="bg-black text-secondary rounded-full py-1 px-4 mt-5 ml-64">Continue</button>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="font-bold text-xl text-center w-full">SUBJECTS CHOSEN</h3>
        {
          state.subjects.map(sub => (
            <div key={sub} className="py-1 px-2 bg-secondary border-2 border-black rounded-full text-center">{sub}</div>
          ))
        }
      </div>
    </div>
  )
}

export default Profile