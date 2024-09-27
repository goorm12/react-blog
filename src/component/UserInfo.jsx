import { useAuth } from "../context/AuthContext";

const UserInfo = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default UserInfo;
