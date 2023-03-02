import React from 'react';
import { Formik } from 'formik';
import CustomInput from 'src/components/Input';
import { loginValidationSchema } from 'src/screens/Login/helpers/validationSchema';

function Form({
  initialValues = {
    employeeId: '',
    password: '',
    remember: null,
  },
}) {
  return (
    <Formik initialValues={initialValues} validationSchema={loginValidationSchema}>
      {() => (
        <CustomInput />
      )}
    </Formik>
  );
}

export default Form;
