import { toast } from "react-toastify";
export function errorHook(err) {
  typeof err?.response?.data?.message === "object"
    ? err?.response?.data?.message?.map((msg, index) => {
        return toast.error(msg, { autoClose: 1000 * (index + 1) });
      })
    : toast.warn(err?.response?.data?.message);
}

export function successHook(res) {
  toast(res?.data?.message);
}
