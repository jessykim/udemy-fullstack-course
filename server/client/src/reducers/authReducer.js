// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = {}, action) {
  console.log(action)
  switch (action.type) {
    default:
      return state
  }
}