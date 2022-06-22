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

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Link as RouterLink, useParams } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "0px 0px 0px #00000029",
}));

export default function QuizzQuestion() {
  const [question, setQuestion] = React.useState("");
  let { id } = useParams();

  const data = () => [
    {
      id: 1,
      answer: "",
      correct: false,
      color: "#2D70AE",
    },
    {
      id: 2,
      answer: "",
      correct: false,
      color: "#339DA6",
    },
    {
      id: 3,
      answer: "",
      correct: false,
      color: "#EFA928",
    },
    {
      id: 4,
      answer: "",
      correct: false,
      color: "#D5546D",
    },
  ];

  const [answers, setAnswers] = React.useState(data());

  //Add new answer
  const addAnswer = () => {
    //Generate random color
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    //Add new answer
    setAnswers([
      ...answers,
      { id: answers.length + 1, answer: "", correct: false, color },
    ]);
  };

  // console.log(answers);

  //Delete answer
  const deleteAnswer = (id) => {
    setAnswers(answers.filter((answer) => answer.id !== id));
  };

  //On change sent currect answer to the state
  const updateAnswer = (e, id) => {
    setAnswers(
      answers.map((answer) => {
        if (answer.id === id) {
          answer.answer = e;
        }
        return answer;
      })
    );
  };

  //On Click change background color to curect answer
  const changeColor = (id) => {
    setAnswers(
      answers.map((answer) => {
        if (answer.id === id) {
          return { ...answer, correct: !answer.correct };
        }
        return answer;
      })
    );
  };

  //Post Data to server using fech
  async function postData() {
    const res = await fetch(`http://localhost:5000/api/quizz/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: question,
        answers: answers,
      }),
    });
    console.log(res);
    if (res.status === 200) {
      alert("Data is added");
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
    <Box sx={{}}>
      <AppBar
        position="static"
        sx={{
          background: "#381535",
          boxShadow: "none",
        }}
      >
        <Toolbar variant="dense">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            component={RouterLink}
            to="/quizz"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Create Quiz
          </Typography>
          <Button color="inherit" onClick={postData}>
            Save
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          flexGrow: 1,
          boxShadow: "0px 0px 1px #d1d1d1",
          margin: "10px 50px 10px 50px",
          background: "#461A42",
          padding: 2,
          borderRadius: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={0.5}
            sx={{
              minWidth: "100px",
            }}
          >
            <Item
              sx={{
                backgroundColor: "#00000000",
              }}
            >
              <Stack
                spacing={2}
                sx={{
                  height: 280,
                  justifyContent: "space-between",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#0000004b",
                    borderRadius: 10,
                    color: "#fff",
                    padding: "10px 5px",
                    cursor: "pointer",
                  }}
                >
                  <IconButton
                    sx={{
                      height: 40,
                      width: 40,
                      color: "#fff",
                    }}
                  >
                    <ImageIcon />
                  </IconButton>
                  <Typography variant="body2">Image</Typography>
                </div>

                {/* Audio */}
                <div
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#0000004b",
                    borderRadius: 10,
                    color: "#fff",
                    padding: "10px 5px",
                    cursor: "pointer",
                  }}
                >
                  <IconButton
                    sx={{
                      height: 40,
                      width: 40,
                      color: "#fff",
                    }}
                  >
                    <KeyboardVoiceIcon />
                  </IconButton>
                  <Typography variant="body2">Voice</Typography>
                </div>

                {/* Video */}
                <div
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#0000004b",
                    borderRadius: 10,
                    color: "#fff",
                    padding: "10px 5px",
                    cursor: "pointer",
                  }}
                >
                  <IconButton
                    sx={{
                      height: 40,
                      width: 40,
                      color: "#fff",
                    }}
                  >
                    <VideocamIcon />
                  </IconButton>
                  <Typography variant="body2">Video</Typography>
                </div>
              </Stack>
            </Item>
          </Grid>
          <Grid item xs>
            <Item
              sx={{
                backgroundColor: "#00000000",
              }}
            >
              <TextField
                fullWidth
                multiline
                placeholder="Enter your question here..."
                rows={10}
                onChange={(e) => setQuestion(e.target.value)}
                hiddenLabel
                style={{
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  outline: "none",
                }}
                inputProps={{
                  style: {
                    textAlign: "center",
                    color: "#fff",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    alignItems: "center",
                    justifyContent: "center",
                    outline: "none",
                    "&:hover": {
                      border: "3px solid #d1d1d1",
                      outline: "none",
                    },
                  },
                }}
              />
            </Item>
          </Grid>
          <Grid item xs={11}>
            <Item
              sx={{
                backgroundColor: "#00000000",
              }}
            >
              <Stack spacing={1} direction="row">
                {answers.map((item) => (
                  <Grid item xs>
                    <Item
                      sx={{
                        width: "auto",
                        boxShadow: "0px 0px 10px #00000029",
                        backgroundColor: item.color,
                        borderRadius: 2,
                      }}
                    >
                      <Stack
                        spacing={2}
                        direction="column"
                        sx={{
                          padding: 1,
                        }}
                      >
                        <Stack
                          spacing={2}
                          direction="row"
                          sx={{
                            justifyContent: "space-between",
                          }}
                        >
                          <Stack direction="row" spacing={2}>
                            <IconButton
                              disabled={answers.length <= 2 ? true : false}
                              aria-label="delete"
                              size="small"
                              onClick={() => deleteAnswer(item.id)}
                              sx={{
                                width: 30,
                                height: 30,
                                backgroundColor:
                                  answers.length <= 2
                                    ? "#0000004b"
                                    : "#ffffff4b",
                                border:
                                  answers.length <= 2
                                    ? "2px solid #333333"
                                    : "2px solid #ffffff",
                              }}
                            >
                              <DeleteIcon
                                sx={{
                                  width: 20,
                                  height: 20,
                                  color:
                                    answers.length <= 2 ? "#333333" : "#ffffff",
                                }}
                              />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              size="small"
                              // onClick={() => deleteAnswer(item.id)}
                              sx={{
                                width: 30,
                                height: 30,
                                backgroundColor: "#ffffff4b",
                                border: "2px solid #fff",
                              }}
                            >
                              <ImageIcon
                                sx={{
                                  width: 20,
                                  height: 20,
                                  color: "#ffffff",
                                }}
                              />
                            </IconButton>
                          </Stack>
                          <IconButton
                            aria-label="delete"
                            size="small"
                            onClick={() => changeColor(item.id)}
                            sx={{
                              width: 30,
                              height: 30,
                              backgroundColor:
                                item.correct == true ? "green" : "#0000004b",
                              border: "2px solid #fff",
                            }}
                          >
                            <DoneIcon
                              sx={{
                                width: 20,
                                height: 20,
                                color: "#ffffff",
                              }}
                            />
                          </IconButton>
                        </Stack>
                        <TextField
                          hiddenLabel
                          multiline
                          rows={10}
                          placeholder="Type your answer here..."
                          onChange={(e) =>
                            updateAnswer(e.target.value, item.id)
                          }
                          value={item.answer}
                          sx={{
                            margin: 5,
                            width: "auto",
                            borderRadius: 15,
                            "&:focus": {
                              background: "#333",
                            },
                          }}
                          inputProps={{
                            style: {
                              display: "flex",
                              textAlign: "center",
                              color: "#ffffff",
                              fontSize: "1.5rem",
                              fontWeight: "bold",
                              alignItems: "center",
                              justifyContent: "center",
                              outline: "none",
                              "&:hover": {
                                outline: "none",
                              },
                              "&:focus": {
                                background: "#333",
                              },
                            },
                          }}
                        />
                      </Stack>
                    </Item>
                  </Grid>
                ))}
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={1}>
            <Item
              sx={{
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                height: 340,
                backgroundColor: "#00000000",
              }}
            >
              <IconButton
                aria-label="delete"
                size="small"
                onClick={addAnswer}
                disabled={answers.length >= 5}
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#ffffff4b",
                  "&:disabled": {
                    backgroundColor: "#0000004b",
                  },
                }}
              >
                <AddCircleOutlineTwoToneIcon
                  sx={{
                    color: answers.length >= 5 ? "#0000004b" : "#ffffff",
                  }}
                />
              </IconButton>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
