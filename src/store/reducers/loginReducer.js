import { LOGIN, LOGOUT } from '../actionTypes/constants';
const InitialState = {
  loggedIn: false,
  errorMessage: '',
  userName: '',
  password: '',
  userDetails: {
    name: "Amit Mundra",
    age: 22,
    industry: 'IT',
    mobile: 6360951002,
    email: 'amit.mundra52@gmail.com',
  }
}

const login = (state = InitialState, action) => {
  switch (action.type) {
    case LOGIN:
    debugger
      if (action.payload.email === 'amit' && action.payload.password === 'amit'){
        return {
            ...state,
            loggedIn: true, userName: 'Amit Mundra', errorMessage: ''
        }
      }
      return {
          ...state, loggedIn: false, errorMessage: 'Invalid Credential'
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

export default login;
