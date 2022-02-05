import { push } from "connected-react-router";
import {
  alertActions,
  eventListResponseAction,
  eventsLoaderAction
} from "../../actions";
import API from "../endpoints";
import { httpGETRequestWithToken } from "../httpRequestHandler";

export const eventsListService = (data, ...rest) => {
  const done = rest.length ? rest[0] : () => {};
  return (dispatch) => {
    dispatch(alertActions.clear());
    httpGETRequestWithToken(API.EVENT_LIST, data)
      .then((reply) => {
        let res = reply.data;
        if (res && res.status === "success") {
          dispatch(eventListResponseAction(res.data));
          done(null, res.data);
        } else {
          done("error");
          dispatch(eventsLoaderAction(false));
          dispatch(eventListResponseAction([]));
          dispatch(push("../error"));
        }
      })
      .catch((error) => {
        done(`error`);
        dispatch(push("../error"));
      });
  };
};
