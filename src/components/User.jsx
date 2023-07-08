import useUser from '../hooks/useUser';

const User = () => {
  const { user, handler } = useUser();
  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.name.first}</h1>
      <img src={user.picture.medium} alt="" />
      <button onClick={handler}>New User</button>
    </div>
  );
};

export default User;
