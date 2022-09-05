// import { toast } from "react-toastify";
import { API } from "../config";
import { errorHook, successHook } from "../redux-hook";
import { toast } from "react-toastify";

// signup
export const maintainUserState = (user) => {
  return {
    type: "USER_DETAIL_MAINTAIN_STATE",
    payload: user,
  };
};

// get otp code
export const getOTPCode = (user) => async (dispatch) => {
  await API.post("phone-verification/getCode", user)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

// get otp code for email
export const getOTPCodeForEmail = (user) => async (dispatch) => {
  await API.get("phone-verification/getEmailotp/" + user.email)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

// sent otp
export const verifyOTPCode = (user) => async (dispatch) => {
  await API.post("phone-verification/verifyCode", user)
    .then((res) => {
      return dispatch({ type: "OTP_VERIFIED" });
    })
    .catch((err) => {
      errorHook(err);
    });
};
// verify email otp
export const verifyEmailOTPCode = (user) => async (dispatch) => {
  await API.post("phone-verification/verifyCode", user)
    .then((res) => {
      return dispatch({ type: "OTP_VERIFIED_EMAIL" });
    })
    .catch((err) => {
      errorHook(err);
    });
};

// signUp
export const signUp = (user) => async (dispatch) => {
  await API.post("user/signUp", user)
    .then((res) => successHook(res))
    .catch((err) => {
      errorHook(err);
    });
};

// signIn
export const signinAction = (user) => async (dispatch) => {
  await API.post("user/login", user)
    .then(async (res) => {
      await dispatch(GetOrdersListByUserId(res.data.user_id));
      return dispatch({
        type: "LOG_IN_SUCCESS",
      });
    })
    .catch((err) => {
      errorHook(err);
    });
};

// store/getAllStores
export const getAllStores = () => async (dispatch) => {
  await API.get("store/getAllStores")
    .then((res) => {
      dispatch(getAllStoresSuccessfully(res?.data));
    })
    .catch((err) => {
      errorHook(err);
    });
};
export const getAllStoresSuccessfully = (data) => {
  return {
    type: "GET_ALL_STORES_SUCCESSFULLY",
    payload: data,
  };
};

//-----------------GET Orders List by Id ---------------------------//

export const GetOrdersListByUserId = (payload) => async (dispatch) => {
  await API.get(`user/${payload}`)
    .then(({ data }) => {
      return dispatch({
        type: "GET_ORDERS_LIST_BY_ID_SUCCESSFULLY",
        payload: data,
      });
    })
    .catch((err) => {
      errorHook(err);
    });
};

export const GetOrdersListById = (payload) => async (dispatch) => {
  await API.get(`order-detail/${payload}`)
    .then(({ data }) => {
      return dispatch({
        type: "GET_ORDER_BY_ID",
        payload: data,
      });
    })
    .catch((err) => {
      errorHook(err);
    });
};
//-------------------------------- END -----------------------------------------//

// user card detail

export const getUserCardDetail = (user_id) => async (dispatch) => {
  await API.get(`checkout-card/getCard/${user_id}`)
    .then(({ data }) => {
      return dispatch({
        type: "GET_USER_CARD",
        payload: data,
      });
    })
    .catch((err) => {
      console.log("error of getUserCardDetail", err);
      errorHook(err);
    });
};

// add card user from nope

export const addUserCard = (card_detail) => async (dispatch) => {
  await API.post("checkout-card/addCard", card_detail)
    .then((res) => {
      console.log("res from addUserCard", res);
      return dispatch({
        type: "ADD_USER_CARD",
        payload: res?.data,
      });
    })
    .catch((err) => errorHook(err));
};

export const deleteUserCard = (payload) => async (dispatch) => {
  await API.delete(`checkout-card/removeCard/${payload}`)
    .then(() => {
      return dispatch({
        type: "DELETE_USER_CARD",
      });
    })
    .catch((err) => {
      errorHook(err);
    });
};
export const addUserCardNop = (card_detail) => async (dispatch) => {
  // await API.post("/checkout-card/paymentTest", card_detail)
  await API.post("/checkout-card/addCard", card_detail)
    .then(({ data }) => {
      console.log(data, "Number(card?.id)");
      sessionStorage.setItem("card_id_local", data?.cards?.id);
      return dispatch({
        type: "ADD_CARD",
        payload: data,
      });
    })
    .catch((err) => console.log(err, "errr"));
};

// installment payout

export const getRedirectUrlFrom3dsecure = (userinfo) => async (dispatch) => {
  await API.post("/checkout-card/payment3dSecure", userinfo)
    .then(({ data }) => {
      console.log(data.payment.redirectLink);
      return dispatch({
        type: "3D_SECURE",
        payload: data.payment.redirectLink,
      });
    })
    .catch((err) => {errorHook(err) ; toast.warn("Your card is not authorized to make this transaction")});
};

// installment payout

export const installmentPayout = (installment_detail) => async (dispatch) => {
  await API.post("/checkout-card/clearInstallment", installment_detail)
    .then((data) => {
      return dispatch({
        type: "INSTALLMENT_PAYOUT",
      });
    })
    .catch((err) => console.log(err, "errr"));
};

// is phone exist check on signup

export const isPhoneExist =
  (phone_number, element, btn) => async (dispatch) => {
    await API.get("/phone-verification/isPhoneExist/" + phone_number)
      .then((res) => {
        toast.warn("Phone number is already in use");
        btn.disabled = true;
      })
      .catch((err) => {
        btn.disabled = false;
      });
  };

// is email exist

export const isEmailExist = async (email, element, btn) => {
  await API.get("/account/isEmailExist/" + email)
    .then((res) => {
      console.log(res, "rrrrrrrrrrrrrrrrrr");
      // const parentNode = element.target.parentNode;
      const errorTag = document.createElement("div");
      errorTag.id = element.target.name;
      if (res.data !== "") {
        toast.warn("Email is already in use");
      }
      btn.disabled = false;
    })
    .catch((err) => {});
};

// forget password

export const forgetPasswordSentOTP = (body) => async (dispatch) => {
  await API.post("/forget-password/sendCode", body)
    .then((res) => {
      return dispatch({
        type: "EMAIL_OTP_SENT",
        payload: body.email,
      });
    })
    .catch((err) => {
      errorHook(err);
    });
};

// forget password email otp verification

export const forgetPasswordVerifyOTP = (body) => async (dispatch) => {
  await API.post("/forget-password/verifyCode", body)
    .then((res) => {
      toast("OTP verified successfully");
      return dispatch({
        type: "EMAIL_OTP_VERIFIED",
        payload: true,
      });
    })
    .catch((err) => {
      errorHook(err);
    });
};

// forget password email CHANGED PASSWORD

export const resetPassword = (body) => async (dispatch) => {
  await API.post("/forget-password/changePassword", body)
    .then((res) => {
      toast("Password has been reset successfully");
      return dispatch({
        type: "PASSWORD_CHANGED",
        payload: true,
      });
    })
    .catch((err) => {
      errorHook(err);
    });
};

// userLogout

export const userLogout = () => async (dispatch) => {
  return dispatch({
    type: "USER_LOGOUT",
  });
};

// send order confirmation email

export const orderConfirmationEmail = (data) => async (dispatch) => {
  await API.post("order-detail/confirmOrder", data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// send order confirmation sms

export const orderConfirmationSms = (data) => async (dispatch) => {
  await API.post("sms/orderdispatchedsms", data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// UPDATE PAYMENT STATUS
export const updatePaymentStatus = (data) => async (dispatch) => {
  try {
    await API.patch("checkout-card/updatePaymentStatus", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

// payment failure

export const paymentFailed = (data) => async (dispatch) => {
  try {
    await API.post("sms/transactionFailed", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
}

export const paymentFailedEmail= (email)=> async dispatch =>{
  try{
    await API.get('checkout-card/transactionfail/'+email)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
  }
  catch(err){
    console.log(err);
  }
}
