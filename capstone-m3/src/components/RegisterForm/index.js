import { ButtonRegister, Container, ErrorForm, Form, H1, InputForm } from "../../styledComponents/RegisterStyle"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"
import API from "../../services/api"
import { toast } from "react-toastify"

const RegisterForm = () => {
    const formSchema = yup.object().shape({
        name: yup.string().required("Campo Obrigatório"),
        email: yup.string().required("Campo Obrigatório").email("Email Incorreto"),
        password: yup.string()
        .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Senha Deve Conter 8 Caracteres e Um Caractere Especial."),
        passwordValid: yup.string().oneOf([yup.ref("password")],"Senha Não Coincide.")

    })
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })
    
    const redirect = useNavigate()

    const FormSubmit = (data) => {delete data["passwordValid"];API.post("/register",data)
    .then(()=>{toast.success("Cadastro Efetuado Com Sucesso");
    setTimeout(()=>{redirect("/login")},1000)})
    .catch((err)=>{toast.error("Algo deu Errado");console.log(err)})}
    
    return(
    <Container>
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo"/>
        <Form onSubmit={handleSubmit(FormSubmit)}>
        <H1>Cadastro</H1>
            <InputForm placeholder="Nome" {...register("name")}/>
            {errors.name && <ErrorForm>{errors.name.message}</ErrorForm>}
            <InputForm placeholder="Email" {...register("email")}/>
            {errors.email && <ErrorForm>{errors.email.message}</ErrorForm>}
            <InputForm placeholder="Senha" type="password" {...register("password")}/>
            {errors.password && <ErrorForm>{errors.password.message}</ErrorForm>}
            <InputForm placeholder="Confirmar Senha" type="password" {...register("passwordValid")}/>
            {errors.passwordValid && <ErrorForm>{errors.passwordValid.message}</ErrorForm>}
        <ButtonRegister type="submit">Cadastrar</ButtonRegister>
        </Form>
    </Container>
)
}

export default RegisterForm