import React, { useState, useEffect } from "react";
import PacientesPages from "../components/PacientesPages";
import axios from "axios";

const Pacientes = () => {
  const [dataPacientes, setDataPacientes] = useState([]);

  let url = "http://localhost:8081/pacientes/";

  useEffect(
    () =>
      axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          setDataPacientes(res.data);
        })
        .catch((err) => {
          console.error(err);
        }),
    [url]
  );

  const handleDelete = (id) => {
    axios
      .delete(url + id)
      .then((res) => {
        console.log(res);
        setDataPacientes(
          dataPacientes.filter((paciente) => paciente.id !== id)
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleEdit = (id) => {
    axios
      .get(url + id)
      .then((res) => {
        console.log(res);
        setDataPacientes(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <PacientesPages
        dataPacientes={dataPacientes}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default Pacientes;
