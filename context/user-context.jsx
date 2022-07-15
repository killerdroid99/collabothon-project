import { createContext, useReducer } from "react"

export const UserContext = createContext()

const initialState = {
  name: "",
  // mentor or learner
  category: "",
  learningStage: "",
  subjects: [],
  email: ""
}

const reducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload }
    case "MENTOR":
      return { ...state, category: "mentor" }
    case "LEARNER":
      return { ...state, category: "learner" }
    case "EARLY":
      return { ...state, learningStage: "early" }
    case "ELEMENTARY":
      return { ...state, learningStage: "elementary" }
    case "SECONDARY":
      return { ...state, learningStage: "secondary" }
    case "POST_SEC":
      return { ...state, learningStage: "post-secondary" }
    case "ADD_SUBJECTS":
      return { ...state, subjects: [...state.subjects, action.payload] }
    case "REMOVE_SUBJECTS":
      return { ...state, subjects: state.subjects.filter(sub => sub !== action.payload) }
    default:
      return state;
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider
      value={
        {
          state, dispatch
        }
      }
    >{children}</UserContext.Provider>
  )
}

export default UserProvider