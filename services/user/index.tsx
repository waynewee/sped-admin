import axios from "axios";
import { config } from "../../config";

export const getUser = async () => {
  const res = await axios({
    method: "GET",
    url: `${config.API_URL}/user`,
    withCredentials: true,
  });

  const { user } = res.data;

  return user;
};
