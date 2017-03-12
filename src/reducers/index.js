import { combineReducers } from "redux";
import auth from "./authReducer";
import polls from "./pollsReducer";

const rootReducer = combineReducers({
  auth,
  polls
});

export default rootReducer;
