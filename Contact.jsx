import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import { Typography } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Contactcss.css';
import Reveal from 'react-reveal/Reveal';

export const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [value, onChange] = useState(new Date());
  const formSubmit = (data) => {
    console.log("data", data);
  };


  return (
   <Box>
                      <Reveal effect="fadeInUp" timeout="3000">

<div id="container">

  <div id="container-inside">

  <div className="container my-5" style={{paddingTop:"10vh"}}>
    
    <div className="row mt-4">
      <div className="col-xl-6 col-lg-6 col-12 m-auto">
        <form
          method="POST"
          onSubmit={handleSubmit(formSubmit)}
          autoComplete="off"
        >
          <div className="card shadow">
            <div className="card-header">
              <h5 className="card-title"> Form </h5>
            </div>

            <div className="card-body">
              <div className="form-group">
                <label htmlFor="name"> Name </label>
                <input
                  type="text"
                  name="name"
                  className={`form-control ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  placeholder="Name"
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "Name must be a valid string",
                    },
                    minLength: {
                      value: 3,
                      message: "Name should be greater than 3 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Name shouldn't be greater than 20 characters",
                    },
                  })}
                />
                <div className="invalid-feedback">
                  {errors?.name?.message}
                </div>
              </div>

              <div className="form-group my-3">
                <label htmlFor="email"> Email </label>
                <input
                  type="text"
                  name="email"
                  className={`form-control ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                      message: "Email must be a valid email address",
                    },
                  })}
                />
                <div className="invalid-feedback">
                  {errors?.email?.message}
                </div>
              </div>

              <div className="form-group my-3">
                <label htmlFor="password"> Password </label>
                <input
                  type="password"
                  name="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  } `}
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^[a-zA-Z]+[0-9]+$/,
                      message: "Password must be alpha numeric",
                    },
                    minLength: {
                      value: 5,
                      message: "Password must be atleast 5 characters",
                    },
                  })}
                />
                <div className="invalid-feedback">
                  {errors?.password?.message}
                </div>
              </div>

              <div className="form-group my-3">
                <label htmlFor="address"> Address </label>
                <textarea
                  name="address"
                  className={`form-control ${
                    errors.address ? "is-invalid" : ""
                  }`}
                  placeholder="Address"
                  {...register("address", {
                    required: "Address is required",
                    minLength: {
                      value: 4,
                      message: "Address is too short",
                    },
                    maxLength: {
                      value: 40,
                      message: "Address is too long",
                    },
                  })}
                ></textarea>
                <span className="text-danger">
                  {errors?.address?.message}
                </span>
              </div>

              <div className="form-group" style={{display:"flex",justifyContent:"center",alignitems:"center"}}>
              <Button type="submit" variant="contained" sx={{width:"40vh"}} size="medium" className="sub">Submit</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>




      <div id="circle-small"></div>
      <div id="circle-medium"></div>
      <div id="circle-large"></div>
      <div id="circle-xlarge"></div>
      <div id="circle-xxlarge"></div>
  </div>
</div>
</Reveal>
    <Typography variant="h4" style={{textAlign:"center",marginTop:"7vh",borderRadius:"15px"}}>
          My Home Town Location
        </Typography>
    <Grid container>
      <Grid xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"5vh"}}>
        
       
        <div style={{justifyContent:"center",alignItems:"center",justifyItems:"center"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7829.867699399246!2d76.96390237466264!3d11.118304668360228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f71c3c785e63%3A0xcc120051f305a232!2sIdikarai%2C%20Tamil%20Nadu%20641022!5e0!3m2!1sen!2sin!4v1656429935472!5m2!1sen!2sin"
         width="1460" height="600" 
         style={{border:"0",borderColor:"blue",borderStyle:"groove",borderRadius:"20px"}} 
         allowfullscreen="" loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
      </Grid>
    </Grid>
    <Typography variant="h3" style={{marginTop:"7vh",textAlign:"center"}}>
      Calender
    </Typography>
    <Grid Container>
      <Grid xs={12} sx={{display:"flex",alignItems:"center",justifyContent:"center",paddingTop:"5VH"}}>
      <Calendar onChange={onChange} value={value} />
      </Grid>
    </Grid>
    </Box>
      
  );
};
export default Contact