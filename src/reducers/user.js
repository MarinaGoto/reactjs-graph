export default function userReducer(state = {


                                        //mine
                                          showlist:false,
                                          showelse:false,
                                          population:500000,

                                      }, action) {

    switch (action.type) {

               // Show Chart
            case "SHOW_List":

                state = {...state, showlist : !state.showlist};
                break;

                // Else Chart
        case "ELSE_List":

            state = {...state, showelse : action.payload};
            break;

                //Second
case "OSLO_POPULATION":

    state = {...state, population: action.payload};
    break;

    }
    return state;
}