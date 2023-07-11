// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }
//import { Fragment } from "react";
// export default App

// function App() {
//   let items = ["New York", "Nairobi", "Mombasa", "Nyeri", "Kisumu", "Eldoret"];

//   const HandleClick = (event: MouseEvent) => console.log(event.target);
//   //  items = [];

//   // if(items.length === 0){
//   //   return <><h1>List</h1><p>No items found</p></>;
//   // }
//   // const getMessage = () => {
//   //   return items.length === 0 ? <p>No items found</p> :null;
//   // }

//   return (
//     <>
//       <h1>List Group</h1>
//       {items.length === 0 && <p>No items found</p>}
//       <ul className="list-group">
//         {items.map((item, index) => (
//           <li
//             className="list-group-item"
//             onClick={(e) => console.log(e)}
//             key={item}
//           >
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
import ListGroup from "./components/ListGroup";
import Tables from "./components/Tables";

function App() {
  return <div><ListGroup></ListGroup></div>
}
export default App;

// function ListGroup() {
//   return <h1>ListGroup</h1>;
// }
// export default ListGroup;
