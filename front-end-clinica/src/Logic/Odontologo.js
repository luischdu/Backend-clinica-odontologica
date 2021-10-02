import React, { useState, useEffect } from "react";
import OdontologoPage from "../components/OdontologoPage";
import axios from "axios";
const Odontologo = () => {
  const [dataOdontologos, setDataOdontologos] = useState([]);

  let url = "http://localhost:8081/odontologos/";

  useEffect(
    () =>
      axios
        .get(url)
        .then((res) => {
          console.log(res.data);
          setDataOdontologos(res.data);
        })
        .catch((err) => {
          console.error(err);
        }),
    [url]
  );

  const handleDelete = async (id) => {
    console.log(url+id);
    axios
      .delete(url +id )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleEdit = (id) => {
    console.log(id);
  };

  return (
    <div>
      <OdontologoPage
        dataOdontologos={dataOdontologos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default Odontologo;
