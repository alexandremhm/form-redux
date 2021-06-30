import { ADD_MORADIA } from "../actions/actionMoradia"
import { ADD_NAME } from "../actions/actionName"
import { ADD_CPF } from "../actions/actionCpf"
import { ADD_EMAIL } from "../actions/actionEmail"
import { ADD_ADDRESS } from "../actions/actionAddress"
import { ADD_CITY } from "../actions/actionCity"
import { ADD_STATE } from "../actions/actionState"

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  moradia: '',
}

const personalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NAME: 
      return { ...state, name: action.payload };
    case ADD_CPF: 
      return { ...state, cpf: action.payload };
      case ADD_EMAIL: 
      return { ...state, email: action.payload };
      case ADD_ADDRESS: 
      return { ...state, address: action.payload };
      case ADD_CITY: 
      return { ...state, city: action.payload };
      case ADD_MORADIA: 
      return { ...state, moradia: action.payload };
      case ADD_STATE: 
      return { ...state, state: action.payload };
    default: 
      return state;
  }
}

export default personalReducer;
