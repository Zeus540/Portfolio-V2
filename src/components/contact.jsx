import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { TextField, MenuItem } from "@mui/material";
import { Formik } from "formik";
import { ObjectivesContext } from "../context/Objectives";
import axios from "axios";
import * as Yup from "yup";

const MainHeading = styled.h1`
font-size: 4vw;
color:#e3e2e2;
font-family:Pixel;
text-align:center;
font-weight:bolder;
overflow:hidden
margin: 40px 0vw;
@media (min-width: 1px) and (max-width: 426px) {
  font-size: 10vw;

   }
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Btn = styled.button`
  color: #e4e4e4;
  background: #125eac;
  border-radius: 10px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Form = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: #e4e4e4;
  border-radius: 10px;
  margin: 60px;
  margin-bottom: 0px;
  width: calc(100% / 2.5);
  align-items: baseline;
  @media (min-width: 1px) and (max-width: 426px) {
    margin: 15px 0vw;
    width: unset;
    padding: 10px;
  }
`;

const Input = styled(TextField)`
  margin-bottom: 10px !important;
  width: 100%;
`;

const InputG = styled(TextField)`
  margin-bottom: 10px !important;
  :nth-child(1) {
  }
`;
const InputGrp = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const InputItem = styled.div`
  width: calc(100% / 2 - 10px);
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;
const InputItemWhole = styled.div`
  width: calc(100% / 1);

  padding-bottom: 10px;
`;

const MainHeadingContainer = styled.div`
  overflow: hidden;

  @media (min-width: 1px) and (max-width: 426px) {
  }
`;

const Svg = styled.svg`
fill:#e4e4e4;
width:30px;
text-align:right,
cursor:pointer;
margin:0px 10px
`;

const Error = styled.p`
  color: #cc0e00;
`;

const Contact = () => {
  const { statMenu, setEmailSent } = useContext(ObjectivesContext);
  let options = [
    {
      id: 1,
      name: "I need a Website",
    },
    {
      id: 2,
      name: "Agency",
    },
    {
      id: 3,
      name: "I am a Recruiter",
    },
  ];

  const handleSubmit = (values) => {
    axios
      .post("https://api.sweetleaf.co.za/port", values)
      .then((response) => {
        console.log(response);
        if (response.data[0].statusCode == 202) {
          setEmailSent(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    surname: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),

    email: Yup.string().email("Invalid email").required("Required"),

    type: Yup.string().required("Select a reason for your enquiry"),

    msg: Yup.string().required("Required"),
  });

  return (
    <Container>
      <MainHeadingContainer>
        <MainHeading data-aos="slide-up">CONTACT ME</MainHeading>
      </MainHeadingContainer>

      <Formik
        initialValues={{ name: "", surname: "", email: "", msg: "", type: "" }}
        validationSchema={ValidationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            handleSubmit(values);
            resetForm();

            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <InputGrp>
              <InputItem>
                <InputG
                  id="outlined-basic"
                  name="name"
                  label="Name"
                  variant="outlined"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <Error>{errors.name}</Error>
                ) : null}
              </InputItem>
              <InputItem>
                <InputG
                  id="outlined-basic"
                  name="surname"
                  label="Surname"
                  variant="outlined"
                  value={values.surname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.surname && touched.surname ? (
                  <Error>{errors.surname}</Error>
                ) : null}
              </InputItem>
            </InputGrp>

            <InputGrp>
              <InputItemWhole>
                <Input
                  id="outlined-basic"
                  name="email"
                  label="Email"
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <Error>{errors.email}</Error>
                ) : null}
              </InputItemWhole>
            </InputGrp>
            <InputGrp>
              <InputItemWhole>
                <Input
                  id="outlined-select"
                  select
                  label="Reason for enquiry"
                  name="type"
                  value={values.type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {options.map((option) => (
                    <MenuItem key={option.id} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </Input>
                {errors.type && touched.type ? (
                  <Error>{errors.type}</Error>
                ) : null}
              </InputItemWhole>
            </InputGrp>

            <InputGrp>
              <InputItemWhole>
                <Input
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  name="msg"
                  value={values.msg}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.msg && touched.msg ? <Error>{errors.msg}</Error> : null}
              </InputItemWhole>
            </InputGrp>

            <Btn type="submit" disabled={isSubmitting}>
              <div> Send Mail </div>
              <div>
                <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z" />
                </Svg>
              </div>
            </Btn>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Contact;
