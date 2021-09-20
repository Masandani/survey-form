/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useLocalStorage } from "../useLocalStorage/useLocalStorage";

const useForm = (callback, validate) => {
  const [values, setValues] = useLocalStorage("signUpForm", {
    firstname: "",
    lastname: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors(validate(values));
    setIsSubmiting(true);
    
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmiting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
