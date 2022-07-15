import Link from "next/link"

function BackToHome() {
  return (
    <Link href="/">
      <div className="absolute top-6 right-6 flex gap-1 items-center cursor-pointer font-bold"
      >{"< "}Go To Home</div>
    </Link>
  )
}

export default BackToHome