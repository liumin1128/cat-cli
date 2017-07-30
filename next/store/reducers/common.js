const initState = {
  scrollHeight: 0,
};
function common(state = initState, action) {
  switch (action.type) {
    case 'common/save':
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

export default common;
