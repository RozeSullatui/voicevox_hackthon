import React from 'react'
import TextField from '@mui/material/TextField';
import { createTheme } from "@mui/material/styles";
import SendIcon from '@mui/icons-material/Send';
// import SendIcon from '@mui/material/Send';
import { Button } from '@mui/material';
// import Button from '@mui/material/Button';

const theme = createTheme({
    wrapForm : {
        display: "flex",
        justifyContent: "center",
        width: "95%",
        margin: "100%"
    },
    wrapText  : {
        width: "100%"
    },
    button: {
        margin: "100px",
    },
  })


// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     wrapForm : {
//         display: "flex",
//         justifyContent: "center",
//         width: "95%",
//         margin: `${theme.spacing(0)} auto`
//     },
//     wrapText  : {
//         width: "100%"
//     },
//     button: {
//         //margin: theme.spacing(1),
//     },
//   })
// );


export const TextInput = () => {
    const classes = theme;
    return (
        <>
            <form className={classes.wrapForm}  noValidate autoComplete="off">
            <TextField
                id="standard-text"
                label="メッセージを入力"
                className={classes.wrapText}
                //margin="normal"
            />
            <Button variant="contained" color="primary" className={classes.button}>
                <SendIcon />
            </Button>
            </form>
        </>
    )
}