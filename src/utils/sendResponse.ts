import type { ErrorResponse } from "@/types";
import { toast } from "sonner";

export const sendResponse = async <T>(
  fn: () => { unwrap: { (): Promise<T> } },
  message: string,
  navigate?: () => void
) => {
  const toastId = toast.loading(message + " in progress");
  try {
    await fn().unwrap();
    toast.success(message + " successfull", { id: toastId });
    if(navigate) {
      navigate();
    }
  } catch (error: unknown) {
    const err = error as ErrorResponse;
    if (import.meta.env.DEV) {
      console.log(error);
    }
    toast.error(err.data.message || `Failed to ${message}`, { id: toastId });
  }
};
