import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink, Routes, Route } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://eruditeadda.com/">
        eruditeadda.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [email, setEmail] = React.useState([]);
  const [password, setPassword] = React.useState([]);

  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState("");

  //Post Request using fetch
  async function postData() {
    const res = await fetch("https://dauswap.com/api/login", {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "success") {
      setStatus("success");
      setMessage(data.message);
      setOpen(true);
    } else {
      setStatus("error");
      setMessage(data.message);
      setOpen(true);
    }
  }

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={1} ref={ref} variant="filled" {...props} />;
  });

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000} //6 seconds
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Alert severity={status} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
      {/* Mian Box */}
      <Box
        sx={{
          maxWidth: 450,
          minWidth: 350,
          height: "100vh",
          ml: "50%",
          transform: "translateX(-50%)",
          padding: "1rem",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
          borderRadius: "5px",
          // mt: "2%",
          background: "#fff",
          pt: "4%",
        }}
      >
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  focused
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  placeholder="Email Address"
                  size="small"
                  hiddenLabel
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  focused
                  variant="filled"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  placeholder="Password"
                  size="small"
                  hiddenLabel
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  size="small"
                  sx={{ mt: 3, mb: 2, mt: 10 }}
                  onClick={postData}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link
                      component={RouterLink}
                      to="./../register"
                      variant="body2"
                    >
                      {"Don't have an account? Create New Account"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      </Box>
    </>
  );
}
