import { push } from "connected-react-router";
import {
  alertActions,
  starListResponseAction
} from "../../actions";
import API from "../endpoints";
import { httpGETRequestWithToken } from "../httpRequestHandler";

export const starListService = (data, ...rest) => {
  const done = rest.length ? rest[0] : () => {};
  return (dispatch) => {
    dispatch(alertActions.clear());
    httpGETRequestWithToken(API.STAR_LIST, data)
      .then((reply) => {
        let res = reply.data;
        if (res && res.status === "success") {
          dispatch(starListResponseAction(res.data));
          done(null, res.data);
        } else {
          done("error");
          dispatch(starListResponseAction([]));
          dispatch(push("../error"));
        }
      })
      .catch((error) => {
        done(`error`);
        dispatch(push("../error"));
      });
  };
};
