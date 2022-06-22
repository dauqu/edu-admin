import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import DeleteIcon from "@mui/icons-material/Delete";
import ImageIcon from "@mui/icons-material/Image";
import { Typography } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import DoneIcon from "@mui/icons-material/Done";
import MenuIcon from "@mui/icons-material/Menu";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Link as RouterLink, Outlet, useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "0px 0px 0px #00000029",
}));

export default function CreateQuiz() {
  const [question, setQuestion] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const navigate = useNavigate();
  console.log(question);

  //Post Data to server using fech
  async function postData() {
    const res = await fetch("http://localhost:5000/api/quizz/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quizz_name: question,
        questions: {},
      }),
    });
    if (res.status === 200) {
      console.log(res);
      setOpen(true);
      setMessage("Done ...");
      navigate("./../quizz-question/id");
    }
  }

  const [sdata, ssetdata] = React.useState([]);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        ssetdata(data);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      sx={{
        width: "auto",
        height: "80vh",
        background: "#00000030",
        // padding: "2%",
        borderRadius: "5px",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <AppBar
        position="static"
        sx={{
          boxShadow: 0,
        }}
      >
        <Toolbar
          variant="dense"
          sx={{
            background: "#333",
            boxShadow: 0,
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
            component={RouterLink}
            to="./../"
          >
            <ArrowBackIcon />
          </IconButton>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>

      <Snackbar
        anchorOrigin={{
          horizontal: "right",
          vertical: "middle",
        }}
        open={open}
        message={message}
      />

      <Stack
        spacing={2}
        direction="column"
        sx={{
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <TextField
          id="outlined-basic"
          variant="filled"
          focused
          hiddenLabel
          size="small"
          onChange={(e) => setQuestion(e.target.value)}
          value={question}
          placeholder="Quizz name"
          sx={{
            width: "50%",
          }}
        />

        <Button
          variant="contained"
          onClick={postData}
          sx={{
            boxShadow: 1,
            borderRadius: "2px",
            width: "20%",
            background: "#461A42",
          }}
        >
          Create
        </Button>
      </Stack>
    </Box>
  );
}
