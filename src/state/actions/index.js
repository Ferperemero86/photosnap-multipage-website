export const asyncDispatch = (dispatch, action) => () => dispatch(action()); // Reusable async dispatch
