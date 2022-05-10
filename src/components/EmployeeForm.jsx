import { React, useState } from "react";

// Data
import { states } from "../data/States";
import { departement } from "../data/Departement";

// Components

import FormSelectInput from "./Form/Form_Select";
import FormLabelInput from "./Form/Form_Input";
import FormDataPicker from "./Form/Form_DataPicker";

import modal_img from "../asset/wealth_health_logo.jpg";

/* import Modal from "./Modal"; */
import { Modal } from "p14_modal";

export default function EmployeeForm() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const employees = JSON.parse(localStorage.getItem("employees")) || [];

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    birthdate: "",
    startDate: "",
    department: "Sales",
    street: "",
    city: "",
    state: "AL",
    zipCode: "",
  });

  // Change Employee state when changing input
  const handleChange = (e) => {
    setEmployee((oldValues) => ({
      ...oldValues,
      [e.target.id]: e.target.value,
    }));
  };

  // Sumbit the Form
  const Submit = (event) => {
    event.preventDefault();
    setModalIsOpen(true);
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
  };

  return (
    <div className="main__employee">
      <form
        name="employee_form"
        action="#"
        id="create-employee"
        onSubmit={Submit}
      >
        <h3 className="form__title">Basic Info</h3>
        <div className="form__section basic__info">
          <FormLabelInput
            type="text"
            for="firstName"
            label="First Name"
            placeholder="Enter the firstname"
            onChange={handleChange}
          />
          <FormLabelInput
            type="text"
            for="lastName"
            label="Last Name"
            placeholder="Enter the lastname"
            onChange={handleChange}
          />
          <FormDataPicker
            for="birthdate"
            label="Date of Birth"
            placeholder="Select date"
            onChange={handleChange}
          />
        </div>
        <h3 className="form__title">Adress Info</h3>
        <div className="form__section adress_info">
          <FormLabelInput
            type="text"
            for="street"
            label="Street"
            placeholder="Enter the street"
            onChange={handleChange}
          />
          <FormLabelInput
            type="text"
            for="city"
            label="City"
            placeholder="Enter the city"
            onChange={handleChange}
          />
          <FormSelectInput
            for="state"
            label="State"
            list={states}
            placeholder="Select the state"
            onChange={handleChange}
          />
          <FormLabelInput
            type="number"
            for="zipCode"
            label="Zip Code"
            placeholder="Enter the zip code"
            onChange={handleChange}
          />
        </div>

        <h3 className="form__title">Departement Info</h3>
        <div className="form__section adress_info">
          <FormSelectInput
            for="department"
            label="Department"
            list={departement}
            placeholder="Select the departement"
            onChange={handleChange}
          />

          <FormDataPicker
            for="startDate"
            label="Start Date"
            placeholder="Select date"
            onChange={handleChange}
          />
        </div>
        <div className="btn__container">
          <button type="submit">Save</button>
        </div>
      </form>
      <div>
        {modalIsOpen && (
          <Modal
            show={modalIsOpen}
            setShow={setModalIsOpen}
            title="Success !"
            text="The new employee has been created"
            image={modal_img}
            btn="Retour"
          />
        )}
      </div>
    </div>
  );
}
