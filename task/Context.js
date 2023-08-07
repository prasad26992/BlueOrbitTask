import React, { createContext, useState } from "react";

const FormDataContext = createContext();
const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState([]);

  return (
    <div>
      <FormDataContext.Provider value={{ formData, setFormData }}>
        {children}
      </FormDataContext.Provider>
    </div>
  );
};

export { FormDataProvider, FormDataContext };
