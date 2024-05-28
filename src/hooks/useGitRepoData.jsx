import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";

const useGitRepoData = () => {
  const { user } = useContext(AuthContex);

  const {
    data: gitRepoData = [],
    error,
    isError,
  } = useQuery({
    queryKey: ["gitRepoData"],
    enabled: !!user,
    queryFn: async () => {
      const res = await axios.get(
        `https://api.github.com/users/${
          user?.reloadUserInfo?.screenName
        }/repos?page=1&per_page=99&clientId=${
          import.meta.env.VITE_clientID
        }&clientSecret=${import.meta.env.VITE_clientSecret}`,
        {
          auth: import.meta.env.VITE_GITHUB_USERNAME,
          password: import.meta.env.VITE_GITHUB_OLD_TOKEN,
        }
      );
      return res.data;
    },
    onError: (err) => {
      console.error("Error fetching GitHub repositories:", err);
      // You can also implement other error handling logic here
    },
  });

  return [gitRepoData, error, isError];
};

export default useGitRepoData;
