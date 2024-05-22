import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSingleUser = (username) => {
  const axiosPublic = useAxiosPublic();

  const { data: singleUser = [], refetch } = useQuery({
    queryKey: ["singleUser"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/${username}`);
      return res.data;
    },
  });
  return [singleUser, refetch];
};

export default useSingleUser;
