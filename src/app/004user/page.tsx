import { userRepository } from "@/repository/user/user-repository";

const Page = () => {
  const user = userRepository.getFirstUser();

  const { id, name } = user;

  return (
    <ul>
      <li>id: {id}</li>
      <li>name: {name}</li>
    </ul>
  );
};

export default Page;
