import { createContext } from "react"

export const UserContext = createContext()

const initialState = {
  name: "",
  category: "",
  learningStage: "",
  subjects: [],
  email: ""
}

function UserProvider({ children }) {





  return (
    <UserContext.Provider
    // value={ }
    >{children}</UserContext.Provider>
  )
}

export default UserProvider