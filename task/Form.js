import React, { useContext, useState } from "react";
import { Context, FormDataContext } from "./Context";

const Form = () => {
  const { setFormData } = useContext(FormDataContext);
  const [data, setData] = useState({});

  //   console.log(setFormData);

  const handleInputChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    // setFormData(data);
    setFormData((prevFormData) => [...prevFormData, data]);
    setData({});
  };
  return (
    <>
    <div className="container">
      <div className="row">
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <label>First Name</label>
          <input
            className="form-control"
            type="text"
            name="fname"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>MiddleName</label>
          <input
            className="form-control"
            type="text"
            name="middleName"
            onChange={handleInputChange}
          />
        </div>
        <div className="my-3">
          <label>Last Name</label>

          <input
            className="form-control"
            type="text"
            name="lastName"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Mobile</label>

          <input
            className="form-control"
            type="number"
            name="mobNo"
            onChange={handleInputChange}
          />
        </div>

        <div className="my-3">
          <label>Phone Number</label>

          <input
            className="form-control"
            type="number"
            name="phoneNo"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>City</label>

          <input
            className="form-control"
            type="text"
            name="city"
            onChange={handleInputChange}
          />
        </div>

        <div className="my-3">
          <label>State</label>
          <input
            className="form-control"
            type="text"
            name="state"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Country</label>

          <input
            className="form-control"
            type="text"
            name="country"
            onChange={handleInputChange}
          />
        </div>

        <div className="my-3">
          <label>Pin Code</label>

          <input
            className="form-control"
            type="number"
            name="pinCode"
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Occupation</label>

          <input
            className="form-control"
            type="text"
            name="occupation"
            onChange={handleInputChange}
          />
        </div>

        <button className="btn btn-primary my-3" type="submit">Submit</button>
      </form>
      </div>
    </div>
      
    </>
  );
};

export default Form;
