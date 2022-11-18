import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStorage } from "../context/useStorage";
import accountConfirmationAPI from "../API/accountConfirmationAPI";

export default function useEmailConfirmationModal() {
  const { setIsSuccessfullySend } = useStorage();

  const history = useNavigate();

  const [isRequestLoading, setIsRequestLoading] = useState(false);

  const sendConfirmationEmail = async () => {
    console.log("succcess");
    await accountConfirmationAPI({
      setIsRequestLoading,
      setIsSuccessfullySend,
      history,
    });
  };
  return { isRequestLoading, sendConfirmationEmail };
}
