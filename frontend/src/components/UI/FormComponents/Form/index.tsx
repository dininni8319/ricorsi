// import { string } from "yup";
import { useState } from "react";
import { useNavigate } from "react-router";
import { FormProps } from "../../../interfaces/interfaces";
import { baseURL } from "../../../Utilities/index";
import FormWrapper from "../FormWrapper";
import { FormContainer } from "./style";

const Form: React.FC<FormProps> = ({
  id,
  title,
  navPath,
  createPath,
  subMitBtn,
  children,
  data,
}) => {
  const navigate = useNavigate();

  const errorTag = (message: string) => {
    return <span className="text-red-600 text-sm">{message}</span>;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //post a ricorso
    fetch(`${baseURL}/api/cienneffe/${createPath}/${id ? id : ""}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          navigate(`/${navPath}/${data.id}`);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1>{title}</h1>
      {/* {errors && errorTag(errors?.message)} */}
      <section className="form-row">
        {children}
        <div className="flex justify-center items-center w-full">
          <button className="btn-send border-solid text-white mt-5 py-2 w-full">
            {subMitBtn}
          </button>
        </div>
      </section>
    </FormContainer>
  );
};

export default Form;
