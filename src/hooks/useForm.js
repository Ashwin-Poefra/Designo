import { useState } from "react";

const useForm = (validateForm) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(values));

    if (Object.keys(errors).length === 0 && errors.constructor === Object ) {
      setIsSubmitting(true);
      setValues({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setIsSubmitting(false);
    }
  };

  return { handleChange, handleSubmit, values, errors, isSubmitting };
};

export default useForm;
