function TextCard({ title, desc, selected }) {
  return (
    <div className={`flex flex-col items-center justify-center border-black border-4 p-6 rounded-xl max-w-[20rem] active:bg-yellow-300 cursor-pointer w-full ${selected && "bg-yellow-300"}`}>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 italic">{desc}</p>
    </div>
  )
}

export default TextCard