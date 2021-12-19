export function callActionWithDelay(dispatch, action, delay = 2500) {
  if (dispatch && action)
    setTimeout(() => {
      dispatch(action());
    }, [delay]);
}
