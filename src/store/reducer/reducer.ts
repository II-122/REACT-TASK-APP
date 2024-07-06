import { boardsReducer } from "../slices/boardsSlice";
import { loggerReducer } from "../slices/loggerSlice";
import { modalReducer } from "../slices/modalSlice";
import { userReducer } from "../slices/userSlice";

const reducer = {
    logger : loggerReducer,
    boards : boardsReducer,
    modal : modalReducer,
    user: userReducer,
}

// default 는 모듈 이름 상관 없이 import 가능
export default reducer;