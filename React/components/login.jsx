import React, { useState } from "react";
import { Typography, Button, Grid, Box, TextField, Alert } from "@mui/material";
import axios from "axios";
import Joi from "joi-browser";
const ariaLabel = { "aria-label": "description" };

const Login = (props) => {
  const [user, setUser] = useState({
    //loginId: "",
    userName: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    userName: "",
    password: "",
  });

  const schema = {
    userName: Joi.string(),
    password: Joi.string(),
  };
  //const [errMsg, setErrMsg] = useState("");

  const validate = () => {
    const errors = {};
    const result = Joi.validate(user, schema, { abortEarly: false });
    console.log(result);
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleChange = (event) => {
    console.log("HandleChange");
    const usr = { ...user };
    usr[event.target.name] = event.target.value;
    setUser(usr);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle submit");
    //const errors = validate();
    //console.log(errors);
    setErrors(validate());
    console.log(errors);
    //setErrMsg("Invalid Credentials");
    if (errors) return;
    axios
      .post("http://localhost:8080/lms/addLoginDetails", user)
      .then((res) => props.history.push("/author"));
  };
  return (
    <div>
      <Typography variant="h3">Login Page</Typography>
      <Grid container>
        <Grid item xs={4} style={{ marginLeft: "auto", marginRight: "auto" }}>
          <form
            onSubmit={handleSubmit}
            style={{
              border: "1px solid black",
              padding: "30px",
              marginTop: "10px",
            }}
          >
            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="username"
                variant="outlined"
                fullWidth
                label="username"
                value={user.userName}
                name="userName"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">{errors.userName}</Typography>
              )}
            </Box>
            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="password"
                variant="outlined"
                fullWidth
                label="password"
                value={user.password}
                name="password"
                onChange={handleChange}
              />
              {errors && (
                <Typography variant="caption">{errors.password}</Typography>
              )}
            </Box>
            <Box>
              <Button variant="contained" type="submit" fullWidth>
                Login
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;