import React from "react";
import { useState } from "react";
import "./Main.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [isName, setIsName] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [data, setdata] = useState([
    // {
    //   id: 1,
    //   isName: "Jack London",
    //   author: "KimO",
    //   price: 2000,
    // },
  ]);

  const check = {
    name: isName.trim().length === 0,
    author: author.trim().length === 0,
    price: price.trim().length === 0,
  };

  const addElement = () => {
    if (check.name || check.author || check.price) {
      toast.error("You do not fill all. Try again");
    } else {
      const item = {
        id: Date.now(),
        isName: isName,
        author: author,
        price: price,
      };
      setdata([...data, item]);
      setAuthor("");
      setIsName("");
      setPrice("");
      toast.success("Successfully");
    }
  };
  return (
    <div className="main">
      <div className="container">
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="main__hero card w-75 mx-auto card-item my-4 p-4">
          <input
            type="text"
            placeholder="Enter book name"
            className={"form-control w-75 p-3 m-2 mx-auto"}
            value={isName}
            onChange={(e) => setIsName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter book author"
            className={"form-control w-75 p-3 m-2 mx-auto"}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter book cost"
            className={"form-control w-75 p-3 m-2 mx-auto"}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button
            className="btn btn-success w-75 mx-auto "
            onClick={(e) => addElement()}
          >
            Add
          </button>
        </div>
        <div className="main__hero hero card w-75 mx-auto card-item my-4 p-4">
          <table className="table table-striped mx-auto">
            <thead>
              <tr>
                <th>ID</th>
                <th>Book name</th>
                <th>Book author</th>
                <th>Book price</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, idx) => {
                return (
                  <tr>
                    <td>{idx + 1}</td>
                    <td>{item.isName}</td>
                    <td>{item.author}</td>
                    <td>{item.price}</td>
                    <button className="btn button btn-danger">DELETE</button>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Main;
