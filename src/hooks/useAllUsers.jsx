import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";

const useAllUsers = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContex);

  const {
    data: allUsers = [],
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ["allUsers"],
    enabled: !!user,
    queryFn: async () => {
      const res = await axiosPublic.get(`/users`);
      return res.data;
    },
  });

  return [allUsers, isLoading, isPending];
};

export default useAllUsers;
