import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import "../sidebar/style.scss";

export default function Sidebar() {
  const [fullName, setFullName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setPhone] = useState("");
  const [Query, setQuery] = useState("");
  const [error, setError] = useState({
    fullName: "",
    email: "",
    phone: "",
    Query: "",
  });

  const handleSubmit = async (synthethicEvent) => {
    synthethicEvent.preventDefault();

    let validate = false;
    let err = { ...error };
    if (fullName.trim() === "") {
      err.fullName = "Please Enter Full Name";
      validate = true;
    }
    
    if (phone.trim() === "") {
      err.phone = "Please Enter phone number";
      validate = true;
    }

    setError(err);

    if (validate) {
      toast("Please Fill All Fields");
      return;
    } else {
      var templateParams = {
        to_name: "Mr. Alok Gupta",
        from_name: "Portfolio Website",
        message: `Dear Sir, you have a email from ${fullName} with following details \u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0 name : ${fullName} \u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0 email : ${email} \u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0 contact number : ${phone} \u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0  query : ${Query} `,
      };

      emailjs
        .send(
          "service_9qypjyo",
          "template_d7b3db4",
          templateParams,
          "-aBPnEkSVtiNAjA-0"
        )
        .then(
          function (response) {
            if (response.status === 200) {
              toast("We will connect with you very soon, Thanks for connecting")
              console.log("SUCCESS!", response.status, response.text);
              setFullName("");
              setemail("");
              setPhone("");
              setQuery("");
              setError({
                fullName: "",
                email: "",
                phone: "",
                Query: "",
              });
            }
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    }
  };

  return (
    <div className="container" id="backgroundSidebar" onSubmit={handleSubmit}>
      <br></br>
      <h5 id="textForSidebar">Please Share your details</h5>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
          input: { color: "grey" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            sx={{ input: { color: "black" } }}
            id="outlined-required"
            label="Full Name"
            onChange={(event) => {
              setFullName(event.target.value);
              setError({ ...error, fullName: "" });
            }}
            value={fullName}
            error={error.fullName ? true : false}
            helperText={error.fullName ? error.fullName : ""}
          />
          <TextField
            id="outlined-email-input"
            label="email"
            sx={{ input: { color: "black" } }}
            type="email"
            defaultValue="abc@gmail.com"
            onChange={(event) => {
              setemail(event.target.value);
              setError({ ...error, email: "" });
            }}
            value={email}
            error={error.email ? true : false}
            helperText={error.email ? error.email : ""}
          />
          <TextField
            required
            id="outlined-phone-input"
            label="phone"
            sx={{ input: { color: "black" } }}
            type="number"
            onChange={(event) => {
              setPhone(event.target.value);
              setError({ ...error, phone: "" });
            }}
            value={phone}
            error={error.phone ? true : false}
            helperText={error.phone ? error.phone : ""}
          />
          <TextField
            sx={{ input: { color: "black" } }}
            multiline
            id="outlined-query-input"
            label="Please Enter Your Query"
            type="text"
            onChange={(event) => {
              setQuery(event.target.value);
              setError({ ...error, Query: "" });
            }}
            value={Query}
            error={error.Query ? true : false}
            helperText={error.Query ? error.Query : ""}
          />
          <div>
            <Button
              className="button m-2"
              id="button"
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </div>
      </Box>
    </div>
  );
}
