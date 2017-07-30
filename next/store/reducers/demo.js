const initState = {
  list: [],
  detail: {},
};
function demo(state = initState, action) {
  switch (action.type) {
    case 'demo/save':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export default demo;
