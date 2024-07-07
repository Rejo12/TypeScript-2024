import { PersonProps } from "./Person.type";

export const Person = (props: PersonProps) => {
  return (
    <h1>
      {props.personName.first} {props.personName.last}
    </h1>
  );
};
