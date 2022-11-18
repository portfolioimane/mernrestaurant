import { POST } from "../utils/http";

async function accountConfirmationAPI({
  setIsSuccessfullySend,
  setIsRequestLoading,
  history,
}){
  setIsRequestLoading(true);

  const info =localStorage.getItem("toConfirmUser");
  console.log(info);

  try {
    const { response } = await POST("/api/auth/confirmation", { email: info });
    console.log("success");

    setIsRequestLoading(false);

    if (response.status === 200) {
      setIsSuccessfullySend(true);
      localStorage.removeItem("toConfirmUser");
      setTimeout(() => {
        setIsSuccessfullySend(false);
        history("/menu");
      }, 3000);
    }
  } catch (err) {
    console.log(err);
  }
};

export default accountConfirmationAPI;
