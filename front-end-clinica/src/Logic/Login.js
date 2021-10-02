import React, { useState } from "react";
import LoginPage from "../components/LoginPage";
import { useForm } from "../Hooks/useForm";
import Swal from "sweetalert2";
import axios from "axios";
import Citas from "./Citas";

const Login = () => {
  const [isLogIn, setIsLogIn] = useState(false);

  const [formValues, handleInputChange] = useForm({
    usuario: "",
    password: "",
  });

  const { usuario, password } = formValues;
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:8081/auth",
      data: {
        username: usuario,
        password: password,
      },
    }).then((res) => {
      if (res.data.username === usuario && res.data.password === password) {
        setIsLogIn(true);
        localStorage.setItem("token", JSON.stringify(res.data));
        localStorage.setItem("usuario", JSON.stringify({"auth": "true"}));
        window.location.href = "/meets/auth";
      } else {
        Swal.fire({
          title: "Error",
          text: "Usuario o contraseña incorrectos",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    });
  };

  return (
    <div>
      {!isLogIn ? (
        <LoginPage
          usuario={usuario}
          password={password}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      ) : (
        <Citas />
      )}
    </div>
  );
};

export default Login;
