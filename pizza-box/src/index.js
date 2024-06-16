import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = function App() {
  // const pizzas = [];

  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

function Header() {
  return (
    <div className="header">
      <h1>Pizza House Co.</h1>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <div className="footer">
      {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online</p>
          <button className="btn">order</button>
        </div>
      )}
    </div>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <>
          <p>
            <i>
              Authentic Italian cuisine. 6 creative dishes to choose from. All
              from our stone oven, all organic, all delicious
            </i>
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} />
            ))}
          </ul>
          ) : (<p>We're still working on our menu. Please come back later:)</p>
        </>
      ) : null}
    </div>
  );
}

function Pizza(props) {
  // if (props.pizzaObj.soldOut) return null;
  return (
    <li className={`pizza  ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <p>{props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.price}</p>
      </div>
    </li>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
