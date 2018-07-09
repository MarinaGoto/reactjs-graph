// This is mine Function ////
//////////////////////////////////////
export function showlist() {
  return dispatch => {
    dispatch({
      type: "SHOW_List",
      payload: true
    });
  };
}
export function hidelist() {
    return dispatch => {
        dispatch({
            type: "SHOW_List",
            payload: false
        });
    };
}

export function oslo_population(value) {
  return dispatch => {
    dispatch({
      type: "OSLO_POPULATION",
      payload: value
    });
  };
}
export function showelse() {
    return dispatch => {
        dispatch({
            type: "ELSE_List",
            payload: true
        });
    };
}
export function hideelse() {
    return dispatch => {
        dispatch({
            type: "ELSE_List",
            payload: false
        });
    };
}