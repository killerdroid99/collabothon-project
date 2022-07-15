function Button({ btnText, handleClick }) {
  return (
    <button className="bg-black text-white w-fit py-3 px-24 text-md rounded-full font-bold hover:bg-primary hover:text-black ring-black hover:ring-4 ring-inset transition-all ease-in-out" onClick={handleClick}>{btnText}</button>
  )
}

export default Button