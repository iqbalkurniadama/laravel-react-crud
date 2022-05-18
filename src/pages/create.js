import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../http";

export default function Create() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const submitForm = () => {
    // console.log(inputs);
    http.post("/users", inputs).then((res) => {
      navigate("/");
    });
  };
  return (
    <div>
      <h2>Tambah Data</h2>
      <div className="row">
        <div className="col-sm-6 justify-content-center">
          <label>name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={inputs.name || ""}
            onChange={handleChange}
          />
          <label>email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={inputs.email || ""}
            onChange={handleChange}
          />
          <label>password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={inputs.password || ""}
            onChange={handleChange}
          />

          <button
            type="button"
            onClick={submitForm}
            className="btn btn-info mt-2"
          >
            create
          </button>
        </div>
      </div>
    </div>
  );
}
