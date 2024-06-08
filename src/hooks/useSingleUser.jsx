import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useSingleUser = (username) => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const {
    data: singleUser = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["singleUser"],
    enabled: !!user,
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/${username}`);
      return res.data;
    },
  });
  return [singleUser, refetch, isLoading];
};

export default useSingleUser;
