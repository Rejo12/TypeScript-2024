import { Name } from "./Person.type";

type PersonListProps = {
  nameList: Name[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.nameList.map((item, index) => (
        <h1 key={index}>
          {item.first} {item.last}
        </h1>
      ))}
    </div>
  );
};
