export const UPDATE_COLOR = "UPDATE_COLOR"
export const myReducer = (state = {}, action) => {
  switch(action.type) {
    case 'addA':
      return {
        ...state,
        name: 'addA'
      }
    case 'addB':
      return {
        ...state,
        name: 'addB'
      }
    default:
      return {
        ...state,
        name: 'no'
      }
  }
}