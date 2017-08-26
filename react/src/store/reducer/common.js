function common(state = {}, action) {
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
