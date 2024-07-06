import * as yup from "yup"

export const HelpSchema = yup.object().shape({
    phone: yup
        .number()
        .typeError(`El campo es obligatorio y deben ser solo números`)
        .required(`El campo teléfono es obligatorio`),
    comment: yup
        .string()
        .min(4, `Debe ingresa un mensaje de mas de 4 letras`)
        .max(250, `El campo no debe superar 250 caracteres`)
        .required(`El campo es obligatorio`)
})