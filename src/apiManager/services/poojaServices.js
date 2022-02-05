import { push } from "connected-react-router";
import { alertActions,poojaListResponseAction, poojasLoaderAction } from "../../actions";
import API from "../endpoints";
import { httpGETRequestWithToken } from "../httpRequestHandler";

export const poojaListService = (data, ...rest) => {
  const done = rest.length ? rest[0] : () => {};

  return (dispatch) => {
    dispatch(alertActions.clear());
    httpGETRequestWithToken(API.POOJA_LIST, data)
      .then((reply) => {
        let res = reply.data;
        if (res && res.status === "success") {
          dispatch(poojaListResponseAction(res.data));
          done(null, res.data);
        } else {
          done("error");
          dispatch(poojasLoaderAction(false));
          dispatch(poojaListResponseAction([]));
          dispatch(push("/error"));
        }
      })
      .catch((error) => {
        done(`error`);
        dispatch(push("/error"));
      });
  };
};
