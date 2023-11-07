import React from "react";
import "./CorruptedComponent.css"; // Import a CSS file for styling

const dummyData = [
  {
    id: 1,
    name: "Item 1",
    description: "Description for Item 1",
    price: "$10.99"
  }
  // {
  //   id: 2,
  //   name: "Item 2",
  //   description: "Description for Item 2",
  //   price: "$12.99"
  // },
  // {
  //   id: 3,
  //   name: "Item 3",
  //   description: "Description for Item 3",
  //   price: "$9.99"
  // },
  // {
  //   id: 4,
  //   name: "Item 4",
  //   description: "Description for Item 4",
  //   price: "$14.99"
  // },
  // {
  //   id: 5,
  //   name: "Item 5",
  //   description: "Description for Item 5",
  //   price: "$8.99"
  // },
  // {
  //   id: 6,
  //   name: "Item 6",
  //   description: "Description for Item 6",
  //   price: "$11.99"
  // },
  // {
  //   id: 7,
  //   name: "Item 7",
  //   description: "Description for Item 7",
  //   price: "$13.99"
  // }
  // Add more dummy data items here as needed
];

const CorruptedComponent = () => {
  return (
    <div className="corrupted-component">
      <h2>Beautiful Component</h2>
      <ul>
        {dummyDatas.map((item) => (
          <li key={item.id}>
            <div className="item">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CorruptedComponent;
