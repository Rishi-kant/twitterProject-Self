import React from 'react'
import { Button } from '@mui/material'
function NormalButton(props) {
  return (
    <div>
      <Button
          sx={{
            width: 300,
            height: 40,
            border: "1px solid #dadce0",
            backgroundColor: "black",
            borderRadius: "50px",
            color: "white",
            fontFamily: "Google Sans arial,sans-serif",
            fontSize: 14,
            letterSpacing: 0.25,
            margin: 2,

            "&:hover": {
              backgroundColor: "initial",
              color: "initial",
            },
          }}
          variant="outlined"
        >
          {props.name}
        </Button>
    </div>
  )
}

export default NormalButton
