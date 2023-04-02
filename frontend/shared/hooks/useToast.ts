import toast from "react-hot-toast";
import { APIErrorMessage } from "../infra/services/api/APIErrorMessage";

export interface ShowToast {
  showSuccessToast: (message: string) => void;
  showErrorToast: (error: APIErrorMessage | string) => void;
}

export const useToast = (): ShowToast => {
  const showSuccessToast = (message: string): void => {
    toast.success(message);
  };

  const showErrorToast = (error: APIErrorMessage | string): void => {
    if (typeof error === "string") {
      toast.error(error);
      return;
    } else {
      console.log(error?.message);

      toast.error(error?.message ?? error.details);
    }
  };

  return {
    showSuccessToast,
    showErrorToast,
  };
};
