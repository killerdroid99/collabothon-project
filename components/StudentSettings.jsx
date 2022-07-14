import Image from "next/image"
import settings from "../public/settings1.png"

function StudentSettings() {
  return (
    <div className='absolute top-6 right-4 flex gap-1 items-center'>
      <div className='flex flex-col items-end'>
        <h4 className='font-bold text-md  border-black'>STUDENT</h4>
        <p className='text-xs'>Settings</p>
      </div>
      <div className='aspect-square row-span-1'>
        <Image src={settings} alt=""></Image>
      </div>
    </div>
  )
}

export default StudentSettings