import axios from "axios";
import { config } from "../../config";
import { IUser } from "../../types";

export const getUser = async (): Promise<IUser> => {
  const res = await axios({
    method: "GET",
    url: `${config.API_URL}/user`,
    withCredentials: true,
  });

  const { user } = res.data;

  return user;
};

export const getUsersByHomeroomId = async (
  homeroomId: string
): Promise<IUser[]> => {
  const res = await axios({
    method: "GET",
    url: `${config.API_URL}/user/query?homeroomId=${homeroomId}`,
    withCredentials: true,
  });

  const { users } = res.data;

  return users;
};
