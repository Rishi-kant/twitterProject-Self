import React from 'react'
import {
    Button} from "@mui/material";
function Buttons(props) {
  return (
    <div>
       <Button
          sx={{
            width: 300,
            height: 40,
            border: "1px solid #dadce0",
            backgroundColor: "white",
            borderRadius: "50px",
            color: "black",
            fontFamily: "Google Sans arial,sans-serif",
            fontSize: 14,
            letterSpacing: 0.25,
            margin: 2,
            textTransform: "none",
          }}
          variant="outlined"

          startIcon={props.icon}
        >
          {/* <FcGoogle className="google" /> */}
          {/* Sign up with Google */}
          {props.texts}
        </Button>
    </div>
  )
}

export default Buttons
