import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../components/Button";
import image2 from "../public/image2.png"

export default function About() {
  const router = useRouter()

  return <div>
    <span className="flex justify-center py-4 text-xl gap-4">Choose Language:
      <select id="lang" className="bg-inherit border-b-2 border-black w-40 text-center">
        <option value="english">English</option>
        <option value="burmese">Burmese</option>
        <option value="chinese">Chinese</option>
        <option value="polish">Polish</option>
      </select>
    </span>

    <div className="mt-20 mb-5 flex flex-col gap-10 items-center">
      <p className="text-center w-[24rem] text-xl">For children to continue learning
        through supportive relationships with
        mentors who care.
      </p>
      <p className="text-center w-[18rem] font-bold">There are 40 million refugee children around the world who have had their educations disrupted. <span className="text-accent">MentorEd</span> pairs students with life-long mentors to continue their learning journey.
      </p>

      <Button btnText="Continue" handleClick={() => router.push("/registration")} />
    </div>

    <div className="flex flex-col items-center gap-4">
      <h3 className="text-lg font-bold">Student in need of mentors</h3>
      <Image src={image2} alt=""></Image>
    </div>

    <div className="mt-20 mb-5 flex flex-col gap-10 items-center">
      <p className="text-center w-[24rem] text-xl">MentorEd is an online platform to foster connections between the mentors and students by providing a platform to share.
      </p>
      <div className="flex gap-5">
        <button className="border-[0.2rem] font-bold border-black py-6 px-5 rounded-xl text-left flex flex-col active:bg-yellow-300 ring-accent hover:ring-2">
          <span>Community</span>
          <span>Forum</span>
        </button>
        <button className="border-[0.2rem] font-bold border-black py-6 px-5 rounded-xl text-left flex flex-col active:bg-yellow-300 ring-accent hover:ring-2">
          <span>Resource</span>
          <span>Library</span>
        </button>
      </div>
      <p className="text-center w-[18rem] font-bold text-xl">
        Explore the App Features
      </p>
    </div>
  </div>;
}
