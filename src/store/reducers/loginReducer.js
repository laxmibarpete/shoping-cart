import { LOGIN, LOGOUT } from '../actionTypes/constants';
const InitialState = {
  loggedIn: false,
  userName: '',
  password: ''
}

export default function login(state = InitialState, action) {
  // const { email, password } = action.payload;;
  switch (action.type) {
    case LOGIN:
    debugger
      if (action.payload.email === 'laxmi' && action.payload.password === 'laxmi'){
        return {
            ...state,
            loggedIn: true, userName: action.payload.email
        }
      }
      return {
          ...state, loggedIn: false
      }
    case LOGOUT:
    debugger
      return {
        ...state,
        loggedIn: false, userName: '', password: ''
      }
    default:
      return state
  }
}
