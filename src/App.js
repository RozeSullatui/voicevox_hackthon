import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { TextInput } from "./TextInput.js";
import { MessageLeft, MessageRight } from "./Message.js";

const theme = createTheme({
    paper: {
      width: "80vw",
      height: "80vh",
      maxWidth: "500px",
      maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      primary: "blue",
      position: "relative"
    },
    paper2: {
      width: "80vw",
      maxWidth: "500px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      overflowY: "scroll",
      height: "calc( 100% - 80px )"
    }
  });

// const useStyles = makeStyles((theme: Theme) =>
  // createStyles({
  //   paper: {
  //     width: "80vw",
  //     height: "80vh",
  //     maxWidth: "500px",
  //     maxHeight: "700px",
  //     display: "flex",
  //     alignItems: "center",
  //     flexDirection: "column",
  //     position: "relative"
  //   },
  //   paper2: {
  //     width: "80vw",
  //     maxWidth: "500px",
  //     display: "flex",
  //     alignItems: "center",
  //     flexDirection: "column",
  //     position: "relative"
  //   },
  //   container: {
  //     width: "100vw",
  //     height: "100vh",
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent: "center"
  //   },
  //   messagesBody: {
  //     width: "calc( 100% - 20px )",
  //     margin: 10,
  //     overflowY: "scroll",
  //     height: "calc( 100% - 80px )"
  //   }
  // })
// );

export default function App() {
  // const classes = theme;
  <ThemeProvider theme={theme}></ThemeProvider>
  const classes = theme;
  return (
    <div className={classes.container}>
      <Paper className={classes.paper} zDepth={2}>
        <Paper id="style-1" className={classes.messagesBody}>
          <MessageLeft
            message="ずんだもん"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName=""
            avatarDisp={true}
          />
          <MessageLeft
            message="xxxxxhttps://yahoo.co.jp xxxxxxxxxあめんぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさぼあかいなあいうえおあいうえおかきくけこさいすせそ"
            timestamp="MM/DD 00:00"
            photoURL=""
            displayName="テスト"
            avatarDisp={false}
          />
          <MessageRight
            message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
            avatarDisp={true}
          />
          <MessageRight
            message="messageRあめんぼあかいなあいうえおあめんぼあかいなあいうえお"
            timestamp="MM/DD 00:00"
            photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
            displayName="まさりぶ"
            avatarDisp={false}
          />
        </Paper>
        <TextInput />
      </Paper>
    </div>
  );
}
