import * as YUP from 'yup'

export function initalvalues(){
    return{
        nombre: "",
        precio: "",
        imagen: "",
        sabor: "",
    }
}

export function validationSchema(){
    return YUP.object({
        nombre:YUP.string(),
        precio:YUP.number(),
        imagen:YUP.string(),
        sabor:YUP.string(),
    })
}