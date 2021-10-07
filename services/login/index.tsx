import axios from "axios";
import { config } from "../../config";
import { IUser } from "../../types";
export const postLogin = async ({
  username,
  password,
}: IUser): Promise<IUser> => {
  const res = await axios({
    method: "POST",
    url: `${config.API_URL}/login`,
    data: {
      username,
      password,
    },
    withCredentials: true,
  });

  const { user } = res.data;

  return user;
};
