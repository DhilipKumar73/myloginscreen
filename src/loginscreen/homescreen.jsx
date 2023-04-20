import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function HomeScreen(props) {
  const navigate = useNavigate();
  const Param = useParams();
  return (
    <div className="homescreen" style={{ textAlign: "center" }}>
      <h3>Home {Param.name}</h3>
      <button className="btn btn-success" onClick={() => navigate("/formlist")}>
        Add List
      </button>
    </div>
  );
}

export default HomeScreen;
