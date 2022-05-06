import axios from "axios";
import React, { useState } from "react";
const myFuction = () =>{
  alert("Patient added successfully!")
}
const AddPatient = () => {
  let [name, setName] = useState("");
  let [DateOfBirth, setDateOfBirth] = useState("");
  let [Gender, setGender] = useState("");
  let [PlaceOfBirth, setPlaceOfBirth] = useState("");
  let [BloodGroup, setBloodGroup] = useState("");
  let [Height, setHeight] = useState("");
  let [Weight, setWeight] = useState("");

  let handleSubmit = async e => {
    e.preventDefault();
    console.log({
      name,
      DateOfBirth,
      Gender,
      PlaceOfBirth,
      BloodGroup,
      Height,
      Weight,
    });
    try {
      let payload = {
        name,
        DateOfBirth,
        Gender,
        PlaceOfBirth,
        BloodGroup,
        Height,
        Weight,
      };
      await axios.post("http://localhost:9000/patient/creation", payload);
    } catch (error) {
      console.log(error);
    }
  };
  const myFuction = () =>{
    alert("Patient added successfully!")
  };

  return (
    <section id="formBlock">
      <article>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="DateOfBirth">DOB</label>
            <input
              type="date"
              name="DateOfBirth"
              id="DateOfBirth"
              onChange={e => setDateOfBirth(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Gender">Gender</label>
            <select
              name="Gender"
              id="Gender"
              onChange={e => setGender(e.target.value)}
            >
              <option value="-"> Select your Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="PlaceOfBirth">Birth Place</label>
            <input
              type="text"
              name="PlaceOfBirth"
              id="PlaceOfBirth"
              placeholder="Enter your Place of Birth"
              onChange={e => setPlaceOfBirth(e.target.value)}
            />
          </div>
          <div>
            <label for="BloodGroup">Blood Group </label>
            <select
              name="BloodGroup"
              id="BloodGroup"
              onChange={e => setBloodGroup(e.target.value)}
            >
              <option value="-">Select your Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
          <div>
            <label htmlFor="Height">Height </label>
            <input
              type="number"
              name="Height"
              id="Height"
              placeholder="Enter your height"
              onChange={e => setHeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Weight">Weight </label>
            <input
              type="number"
              name="Weight"
              id="weight"
              placeholder="Enter your weight"
              onChange={e => setWeight(e.target.value)}
            />
          </div>
          <br></br>
          <div>
          
            <button onClick={myFuction} >Submit</button><button type="button" >Cancel</button>
          </div>
          
        </form>
      </article>
    </section>
  );
};

export default AddPatient;