import Image from "next/image";
import image2 from "../public/image2.png"
import undraw from "../public/undraw.png"

export default function Home() {
  return <div>
    <span className="flex justify-center py-4 text-xl gap-4">Choose Language:
      <select id="lang" className="bg-inherit border-b-2 border-black w-40 text-center">
        <option value="english">English</option>
        <option value="burmese">Burmese</option>
        <option value="chinese">Chinese</option>
        <option value="polish">Polish</option>
      </select>
    </span>

    <div className="my-20 flex flex-col gap-10 items-center">
      <p className="text-center w-[24rem] text-xl">For children to continue learning
        through supportive relationships with
        mentors who care.
      </p>
      <p className="text-center w-[18rem] font-bold">There are 40 million refugee children around the world who have had their educations disrupted. XXX pairs students with life-long mentors to continue their learning journey.
      </p>

      <button className="bg-black text-white w-fit py-2 px-4 font-bold">Start here</button>
    </div>

    <div className="flex flex-col items-center gap-4">
      <h3 className="text-lg font-bold">Student in need of mentors</h3>
      <Image src={image2} alt=""></Image>
      <div className="flex gap-5">
        <button className="border-[0.2rem] font-bold border-black py-5 px-6 rounded-xl text-left flex flex-col">
          <span>Community</span>
          <span>Forum</span>
        </button>
        <button className="border-[0.2rem] font-bold border-black py-5 px-6 rounded-xl text-left flex flex-col">
          <span>Resource</span>
          <span>Library</span>
        </button>
      </div>
    </div>

    <div className="flex justify-center w-full">
      <Image src={undraw} alt=""></Image>
    </div>
  </div>;
}
