import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { Container } from "../../styledComponents/Modal-addTroca";


export const Requisicao = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const redirect = useNavigate();

  const FormSubmit = (data) => {};

  return (
    <Container>
      <form> 
        <input/>
        <input/>
      </form>
    </Container>
  );
};
