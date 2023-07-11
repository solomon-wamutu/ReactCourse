import { MouseEvent, useState } from "react";
function ListGroup() {
  let items = ["New York", "Nairobi", "Mombasa", "Nyeri", "Kisumu", "Eldoret"];

//   const HandleClick = (event: MouseEvent) => console.log(event.target);

  const [selectedIndex, setSelectedIndex] = useState(-1);
  //  items = [];

  // if(items.length === 0){
  //   return <><h1>List</h1><p>No items found</p></>;
  // }
  // const getMessage = () => {
  //   return items.length === 0 ? <p>No items found</p> :null;
  // }

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item active"
            onClick={() => {
              setSelectedIndex(index);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
