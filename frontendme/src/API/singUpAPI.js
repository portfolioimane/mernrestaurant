import { POST } from "../utils/http";

async function singUpAPI({
  setIsFormLoading,
  setServerError,

  history,
  info,
}) {
  try {
    const { response, json } = await POST("/api/auth/signup", info);

    setIsFormLoading(false);

    if (json.email) {
      setServerError("");

      const { email } = json;

      localStorage.setItem("toConfirmUser", email);

      
        return history("/authentication/confirmation");
      
    }

    if (response.status === 400) {
      setServerError(json.message);
      return;
    }
  } catch (err) {
    console.log(err);
  }
}

export default singUpAPI;