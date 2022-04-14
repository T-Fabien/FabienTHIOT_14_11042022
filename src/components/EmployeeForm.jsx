import { React, useState } from "react";

// Data
import { states } from "../data/States";
import { departement } from "../data/Departement";

// Components

import FormSelectInput from "./Form/Form_Select";
import FormLabelInput from "./Form/Form_Input";
import FormDataPicker from "./Form/Form_DataPicker";

import Modal from "./Modal";

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

  const Submit = (event) => {
    event.preventDefault();
    setModalIsOpen(true);
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
  };

  return (
    <div>
      <form
        name="employee_form"
        action="#"
        id="create-employee"
        onSubmit={Submit}
      >
        <FormLabelInput
          for="firstName"
          label="First Name"
          onChange={handleChange}
        />
        <FormLabelInput
          for="lastName"
          label="Last Name"
          onChange={handleChange}
        />
        <FormDataPicker
          for="birthdate"
          label="Date of Birth"
          onChange={handleChange}
        />
        <FormDataPicker
          for="startDate"
          label="Start Date"
          onChange={handleChange}
        />

        <fieldset className="address">
          <legend>Address</legend>
          <FormLabelInput for="street" label="Street" onChange={handleChange} />
          <FormLabelInput for="city" label="City" onChange={handleChange} />
          <FormSelectInput
            for="state"
            label="State"
            list={states}
            onChange={handleChange}
          />
          <FormLabelInput
            for="zipCode"
            label="Zip Code"
            onChange={handleChange}
          />
        </fieldset>

        <FormSelectInput
          for="department"
          label="Department"
          list={departement}
          onChange={handleChange}
        />
        <div className="btn__container">
          <button type="submit">Save</button>
        </div>
      </form>
      <div>{modalIsOpen && <Modal setModalIsOpen={setModalIsOpen} />}</div>
    </div>
  );
}
