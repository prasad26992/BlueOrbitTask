import React, { useContext } from "react";
import { FormDataContext } from "./Context";

const Table = () => {
  const { formData } = useContext(FormDataContext);
  console.log(formData);
  return (
    <div>
      {/* <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Mobile</th>
            <th>Phone Number</th>
            <th>city</th>
            <th>State</th>
            <th>Country</th>
            <th>Pin Code</th>
            <th>Occupation</th>
          </tr>
        </thead>
        {formData.map((data,i)=>{
            return(
                <tbody>
          <tr>
            <td>{data?.fname}</td>
            <td>{data?.middleName}</td>
            <td>{data?.lastName}</td>
            <td>{data?.mobNo}</td>
            <td>{data?.phoneNo}</td>
            <td>{data?.city}</td>
            <td>{data?.state}</td>
            <td>{data?.country}</td>
            <td>{data?.pinCode}</td>
            <td>{data?.occupation}</td>
          </tr>
        </tbody>
            )
        })}
       
      </table> */}

      <table className="table my-3">
  <thead>
    <tr>
    <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            {/* <th> Name</th> */}
            <th>Mobile</th>
            <th>Phone Number</th>
            <th>city</th>
            <th>State</th>
            <th>Country</th>
            <th>Pin Code</th>
            <th>Occupation</th>
    </tr>
  </thead>
  {formData.map((data,i)=>{
            return(
                <tbody>
          <tr>
            <td>{data?.fname}</td>
            <td>{data?.middleName}</td>
            <td>{data?.lastName}</td>
            <td>{data?.mobNo}</td>
            <td>{data?.phoneNo}</td>
            <td>{data?.city}</td>
            <td>{data?.state}</td>
            <td>{data?.country}</td>
            <td>{data?.pinCode}</td>
            <td>{data?.occupation}</td>
          </tr>
        </tbody>
            )
        })}
</table>
    </div>
  );
};

export default Table;
