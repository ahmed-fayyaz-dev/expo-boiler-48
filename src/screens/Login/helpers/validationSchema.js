import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  employeeId: yup.string().required('Employee ID is required'),
  password: yup.string().required('Password is required'),
  remember: yup.boolean().optional(),
});
