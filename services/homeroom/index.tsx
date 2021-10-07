import axios from "axios";
import { IHomeroom } from "../../types";
import { config } from "../../config";

export const getHomerooms = async (): Promise<IHomeroom[]> => {
  const res = await axios({
    method: "GET",
    url: `${config.API_URL}/homeroom`,
    withCredentials: true,
  });

  const { homerooms } = res.data;
  return homerooms;
};

export const getHomeroom = async (readableId: string): Promise<IHomeroom> => {
  const res = await axios({
    method: "GET",
    url: `${config.API_URL}/homeroom/${readableId}`,
    withCredentials: true,
  });

  const { homeroom } = res.data;
  return homeroom;
};

export const postHomeroom = async ({
  name,
  description,
  code,
}: IHomeroom): Promise<IHomeroom> => {
  const res = await axios({
    method: "POST",
    url: `${config.API_URL}/homeroom`,
    withCredentials: true,
    data: {
      name,
      description,
      code,
    },
  });

  const { homeroom } = res.data;

  return homeroom;
};
