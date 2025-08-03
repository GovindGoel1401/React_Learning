import React from "react";
import ReactDOM from "react-dom/client";

const obj2 = {
  background: "black",
  fontSize: "20px",
  color: "white",
  padding: "10px",
};

function Greet() {
  return <h1>Hello coder army</h1>;
}

const Meet = () => {
  return <h2>Meet me at the top</h2>;
};

function Sham(props) {
  return <h1>{props.name}</h1>;
}

const app = (
  <div>
    <h1 id="first" className="heading" style={obj2}>
      Hello coder army
    </h1>
    <h2 data-money={23} style={{ background: "red", color: "white" }}>
      Maja aya mujhe
    </h2>
    <Greet />
    <Meet />
  </div>
);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(app);

const root2 = ReactDOM.createRoot(document.getElementById("rm"));
root2.render(<Sham name="Sham" />);
