import React, { useContext, useEffect } from "react";
import MainContext from "../../../context/context";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const { data, setData } = useContext(MainContext);
  useEffect(() => {
    axios.get("http://localhost:3000/products/").then((res) => {
      setData([...res.data]);
    });
  }, []);
  return (
    <>
      <div className="main_Div">
        <div className="first_section">
          <div className="image">
            <img
              src="https://preview.colorlib.com/theme/shop/img/header-img.png.webp"
              alt=""
            />
          </div>
          <div className="text">
            <p>Flat 75%Off</p>
            <h2>
              IT'S HAPPENING <br /> THIS SEASON!
            </h2>
            <button>PURCHASE NOW</button>
          </div>
        </div>
      </div>
      <div className="container mt-5 cards">
        <div className="row">
          <h2>New realeased Products for Women</h2>
          <p>Who are in extremely love with eco friendly system.</p>
          {data.map((item) => (
            <div className="col-3 card" key={item.id}>
              <div className="card mb-5">
                <img
                  src={item.image}
                  className="card-img-top"
                  width="300px"
                  height="300px"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
