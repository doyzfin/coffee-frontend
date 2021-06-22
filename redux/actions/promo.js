import axiosApiIntances from "../../utils/axios";

export const getPromo = (token, limit, page) => {
  return {
    type: "GET_PROMO",
    payload: axiosApiIntances.get(`promo?limit=${limit}&page=${page}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    }),
  };
};
