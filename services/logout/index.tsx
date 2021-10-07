import axios from "axios";
import { config } from "../../config";

export const getLogout = async () => {
  await axios({
    method: "GET",
    url: `${config.API_URL}/logout`,
    withCredentials: true,
  });
};
