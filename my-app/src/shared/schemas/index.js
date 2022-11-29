import { PASSWORD } from "shared/consts/regexp";
import * as yup from "yup";

const date = new Date();

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Required"),
  username: yup.string().required("Required"),
  day: yup
    .number()
    .positive()
    .max(31)
    .integer()
    .required("Required"),
  month: yup
    .number()
    .positive()
    .max(12)
    .integer()
    .required("Required"),
  year: yup
    .number()
    .positive()
    .max(date.getFullYear())
    .integer()
    .required("Required"),
  password: yup
    .string()
    .min(5, 'Password must be more than 5 characters')
    .matches(PASSWORD, "Please create a stronger password")
    .required("Required"),
});