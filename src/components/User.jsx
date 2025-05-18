import react from "react";
const User = ({ name, age, email, children }) => {
  return (
    <>
      <p>name:{name}</p>
      <p>age:{age}</p>
      <p>email:{email}</p>
      {children}
    </>
  );
};
export default User;
