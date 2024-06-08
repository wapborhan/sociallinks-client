import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useGitProfileData = (username) => {
  const { user } = useAuth();

  const {
    data: gitProfileData = [],
    error,
    isError,
  } = useQuery({
    queryKey: ["gitProfileData"],
    enabled: !!user,
    queryFn: async () => {
      // const res = await axios.get(
      //   `https://api.github.com/users/${username}?clientId=${
      //     import.meta.env.VITE_clientID
      //   }&clientSecret=${import.meta.env.VITE_clientSecret}`,
      //   {
      //     auth: import.meta.env.VITE_GITHUB_USERNAME,
      //     password: import.meta.env.VITE_GITHUB_OLD_TOKEN,
      //   }
      // );
      // return res.data;
    },
  });
  return [gitProfileData, error, isError];
};

export default useGitProfileData;
