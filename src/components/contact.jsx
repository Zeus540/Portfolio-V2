import React, { Component, Fragment } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { TextField,MenuItem } from "@mui/material";
import { Formik } from 'formik';


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

margin-bottom: 15px!important;
width: 100%;
`;

const InputG = styled(TextField)`


width: calc(100% / 2 - 10px);

margin-bottom: 15px!important;
:nth-child(1){
  margin-right:15px!important;
}
`;
const InputGrp = styled.div`
display: flex;
width: 100% ;
justify-content: space-between;
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
`

const Contact = () => {

  let options =
  [
    {
      id:1,
      name:"I need a Website",
    },
    {
      id:2,
      name:"Agency",
    },
    {
      id:3,
      name:"I am a Recruiter",
    }
  ]

  return (
    <Container>
      <MainHeadingContainer>
        <MainHeading data-aos="slide-up">CONTACT ME</MainHeading>
      </MainHeadingContainer>

      <Formik
       initialValues={{ name: '', surname: '' , msg: '',type:''}}
      
       onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values, null, 2));
         setTimeout(() => {
          
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
          <InputG id="outlined-basic"     name="name" label="Name" variant="outlined"  onChange={handleChange}         onBlur={handleBlur}/>
          
          <InputG id="outlined-basic"     name="surname" label="Surname" variant="outlined"  onChange={handleChange}         onBlur={handleBlur}/>
          </InputGrp>
          <InputGrp>
      <Input id="outlined-basic"     name="email" label="Email" variant="outlined"  onChange={handleChange}         onBlur={handleBlur}/>
      </InputGrp>
      

      <Input
          id="outlined-select-currency"
          select
          label="Reason for enquiry"
          name="type"
          onChange={handleChange}
          onBlur={handleBlur}
        >
          {options.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </Input>

      <Input
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          name="msg"
          onChange={handleChange}         onBlur={handleBlur}
        />

           <Btn type="submit" disabled={isSubmitting}>
           <div>  Send Mail </div>
             <div>
             <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"/></Svg>
             </div>
           </Btn>
         </Form>
       )}
     </Formik>

    </Container>
  );
};

export default Contact;
