import { HW1 } from "./HW1";

export type AddressType = {
  street: string; // ПОДПРАВЛЯЕМ any
  city: string; // ПОДПРАВЛЯЕМ any
};

export type UserType = {
  id: number,
  name: string,
  age: number,
  address: AddressType,// ПРИДЕТСЯ САМОМУ)
};

export type UserListPropsType = {
  users: Array<UserType>; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id ={'hw01-users'}>
      <h2>User List:</h2>

       <ul>
      {props.users.map((user) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
      <li key={props.users[0].id} id={`hw01-user-${props.users[0].id}`}>
      <strong>{props.users[1].name}</strong> (Age: {props.users[2].age})<strong> Address:</strong>
      {props.users[3].address.street}, {props.users[3].address.city}
      </li>
      ))}
      </ul>
    </div>
  );
};