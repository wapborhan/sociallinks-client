import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";

const useSingleUser = (username) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContex);

  const { data: singleUser = [], refetch } = useQuery({
    queryKey: ["singleUser"],
    enabled: !!user,
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/${username}`);
      return res.data;
    },
  });
  return [singleUser, refetch];
};

export default useSingleUser;
