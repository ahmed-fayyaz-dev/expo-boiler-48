import React from 'react';
import { Formik } from 'formik';
import { loginValidationSchema } from '../helpers/validationSchema';
import CustomInput from '../../../components/Input';

const Form = ({
  initialValues = {
    employeeId: '',
    password: '',
    remember: null,
  },
}) => {
  return (
    <Formik initialValues={initialValues} validationSchema={loginValidationSchema}>
      {() => {
        return (
          <>
            <CustomInput />
          </>
        );
      }}
    </Formik>
  );
};

export default Form;
