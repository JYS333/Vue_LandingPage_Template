import { combineReducers } from "redux"; // 合并多个reducers


const initUser = {
    username: '',
    userType: '',
    msg: '', // 存放错误提示信息
    redirectTo: ''
};
// 产生user状态的reducer
function user(state = initUser, action) {

    // switch (action.type) {
    //     case AUTH_SUCCESS: // data是user
    //         const { userType, header } = action.data;
    //         // console.log("reducers里AUTH_SUCCESS的"+action.data)
    //         return { ...action.data, redirectTo: getDirectTo(userType, header) }; // 用action.data把以前的覆盖
    //     case ERROR_MSG: // data是msg
    //         return { ...state, msg: action.data }; // 先把原本状态解构，再用action.data把以前的覆盖
    //     case RECEIVE_USER: // data是user
    //         return action.data;
    //     case RESET_USER: // data是msg
    //         return { ...initUser, msg: action.data }; // 把user射程initial的
    //     default:
    //         return state;
    // }
    return state;
}

export default combineReducers({
    user,
})