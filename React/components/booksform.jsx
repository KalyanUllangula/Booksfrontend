import React, { useState } from "react";
import {
    Grid,
    Typography,
    Button,
    Box,
    TextField,
    Select,
    InputLabel,
    FormControl,
    MenuItem,
  } from "@mui/material";
  import axios from "axios";
  import Joi from "joi-browser";
  import Alert from "@mui/material/Alert";

  const ariaLabel = { "aria-label": "description" };

    
 const BooksForm = (props) => {
     const [book,setUser] = useState({
        
        title:"",
        isbncode:"",
        subject:"",
        shelfdetails:"",
        publishedyear:"",
        quantity:"",
        bookcost:"",
        authorId:"",
        
    
          
     }
     
     );
     const [errors,setErrors]=useState({
        title:"",
        isbncode:"",
        subject:"",
        shelfdetails:"",
        publishedyear:"",
        quantity:"",
        bookcost:"",
        authorId:"",
        
     });
     const [errMsg, setErrMsg] = useState("");
     const schema = {
          title: Joi.string().required(),
          isbncode: Joi.string().required(),
          subject: Joi.string().required(),
          shelfdetails: Joi.string().required(),
          publishedyear:Joi.number().required(),
          quantity:Joi.number().required(),
          bookcost:Joi.number().required(),
          authorId:Joi.number().required(),
          //contactno:Joi.string().length(10).pattern(/^[0-9]+$/).required(),
          //role: Joi.string().required(),

      };

      const validate = () => {
        const errors = {};
        const result = Joi.validate(book, schema, { abortEarly: false });
        console.log(result);
        // setting error messages to error properties
        // ex: errors[username] = "username is required";
        // ex: errors[password] = "password is required";
        if (result.error != null)
          for (let item of result.error.details) {
            errors[item.path[0]] = item.message;
          }
        return Object.keys(errors).length === 0 ? null : errors;
      };

      const handleChange = (event) => {
        console.log("HandleChange");
        const usr = { ...book };
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
       if (errors) return;
        axios
          .post("http://localhost:8080/lms/addBooks", book)
          .then((res) => props.history.push("/book"))
          .catch((err) => {
            console.log(err.response.data.message);
            setErrMsg(err.response.data.message);
          });
      };
     return (  
       <div>
        <Typography variant="h3">Book Form</Typography>
        <Grid container>
          <Grid item xs={4} style={{ marginLeft: "auto", marginRight: "auto" }}>
          {errMsg && <Alert severity="error">{errMsg}</Alert>}
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{
                border: "1px solid blue",
                padding: "20px",
                marginTop: "10px",
              }}
            >
             <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="text"
                variant="outlined"
                fullWidth
                label="Title"
                value={book.title}
                name="title"
                onChange={handleChange}
              />
               {errors && (
                <Typography variant="caption">{errors.title}</Typography>
              )}
            </Box>

            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="text"
                variant="outlined"
                fullWidth
                label="ISBN Code"
                value={book.isbncode}
                name="isbncode"
                onChange={handleChange}
              />
               {errors && (
                <Typography variant="caption">{errors.isbncode}</Typography>
              )}
            </Box>

            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="text"
                variant="outlined"
                fullWidth
                label="Subject"
                value={book.subject}
                name="subject"
                onChange={handleChange}
              />
               {errors && (
                <Typography variant="caption">{errors.subject}</Typography>
              )}
            </Box>

            <Box mb={3}>
              <TextField
                inputProps={ariaLabel}
                type="text"
                variant="outlined"
                fullWidth
                label="ShelfDetails"
                value={book.shelfdetails}
                name="shelfdetails"
                onChange={handleChange}
              />
               {errors && (
                <Typography variant="caption">{errors.shelfdetails}</Typography>
              )}
            </Box>
            
              <Box mb={3}>
                <TextField
                  inputProps={ariaLabel}
                  type="tel"
                  variant="outlined"
                  fullWidth
                  label="Published Year"
                  value={book.publishedyear}
                  name="publishedyear"
                  onChange={handleChange}
                />
                 {errors && (
                <Typography variant="caption">{errors.publishedyear}</Typography>
              )}
              </Box>

              <Box mb={3}>
                <TextField
                  inputProps={ariaLabel}
                  type="tel"
                  variant="outlined"
                  fullWidth
                  label="Quantity"
                  value={book.quantity}
                  name="quantity"
                  onChange={handleChange}
                />
                 {errors && (
                <Typography variant="caption">{errors.quantity}</Typography>
              )}
              </Box>

              <Box mb={3}>
                <TextField
                  inputProps={ariaLabel}
                  type="tel"
                  variant="outlined"
                  fullWidth
                  label="BookCost"
                  value={book.bookcost}
                  name="bookcost"
                  onChange={handleChange}
                />
                 {errors && (
                <Typography variant="caption">{errors.bookcost}</Typography>
              )}
              </Box>
              
              <Box mb={3}>
                <TextField
                  inputProps={ariaLabel}
                  type="tel"
                  variant="outlined"
                  fullWidth
                  label="AuthorId"
                  value={book.authorId}
                  name="authorId"
                  onChange={handleChange}
                />
                 {errors && (
                <Typography variant="caption">{errors.bookcost}</Typography>
              )}
              </Box>

              <Box mt={3}>
                <Button variant="contained" type="submit" fullWidth>
                 Submit
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  };
  
  
 export default BooksForm;
