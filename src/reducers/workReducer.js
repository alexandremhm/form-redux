import { ADD_CURRICULO } from "../actions/actionCurriculo"
import { ADD_CARGO } from "../actions/actionCargo"
import { ADD_DESCRICAO } from "../actions/actionDescricao"

const INITIAL_STATE = {
  curriculo: '',
  cargo: '',
  descricao: ''
}

const workReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CURRICULO: 
      return { ...state, curriculo: action.payload };
    case ADD_CARGO: 
      return { ...state, cargo: action.payload };
    case ADD_DESCRICAO: 
      return { ...state, descricao: action.payload };
    default: 
      return state;
  }
}

export default workReducer;
