import { lstat } from "fs";
import { Person } from "./Person";
import { PersonList } from "./PersonList";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const name = {
    first: "Bruce",
    last: "Wayne",
  };
  const personList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Dianna",
    },
  ];
  return (
    <div>
      {props.isLoggedIn
        ? `Welcome ${props.name}! YOu have ${props.messageCount} unread messages.`
        : `Welcome guest`}
      <Person personName={name} />
      <PersonList nameList={personList} />
    </div>
  );
};
