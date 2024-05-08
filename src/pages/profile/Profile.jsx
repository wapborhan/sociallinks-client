import { useContext, useEffect, useState } from "react";
import ProfileHeader from "../home/header/ProfileHeader";
import Repositories from "./repo/Repositories";
import { AuthContex } from "../../provider/AuthProvider";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState();
  const [repos, setRepos] = useState();
  const { user } = useContext(AuthContex);
  const username = user?.reloadUserInfo?.screenName;

  useEffect(() => {
    // fetch user data
    axios
      .get(
        `https://api.github.com/users/${username}?clientId=${
          import.meta.env.VITE_clientID
        }&clientSecret=${import.meta.env.VITE_clientSecret}`
      )
      .then((response) => {
        setUserData(response.data);
      });
  }, [username]);

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${username}/repos?page=1&per_page=99&clientId=${
          import.meta.env.VITE_clientID
        }&clientSecret=${import.meta.env.VITE_clientSecret}`
      )
      .then((response) => {
        setRepos(response.data);
      });
  }, [username]);

  return (
    <>
      <ProfileHeader data={userData} />
      <Repositories repos={repos} data={userData} />
    </>
  );
};

export default Profile;
