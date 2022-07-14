import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../components/Button";
import undraw from "../public/undraw.png"

export default function Home() {
  const router = useRouter()

  return <div className="flex flex-col items-center">
    <div className="text-5xl font-bold text-center flex flex-col items-center mt-[10rem] mb-14 space-y-2">
      <h2>Welcome to</h2>
      <h2 className="text-[#F9A826]">MentorEd</h2>
    </div>
    <p className="text-2xl w-[14rem] text-center font-bold">start learning with the community</p>
    <div className="flex justify-center w-full mb-20">
      <Image src={undraw} alt=""></Image>
    </div>
    <Button btnText="Start here" handleClick={() => router.push("/about")} />
  </div >;
}
