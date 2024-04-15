import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useToasts = () => {
  const successToast = (sms) =>
    toast.success(sms, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

  const errorToast = (sms) =>
    toast.error(sms, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });

  return { successToast, errorToast };
};

export default useToasts;
