import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink, Navigate } from "react-router-dom";
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

export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState("");

  //Post Request using fetch
  async function postData() {
    const res = await fetch("https://dauswap.com/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: fullname,
        email: email,
        phone_number: phone,
        password: password,
      }),
    });
    const response = await res.json();
    console.log(response);
    setMessage(response.message);
    setStatus(response.status);
    setOpen(true);
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
      <Box
        sx={{
          maxWidth: 450,
          minWidth: 350,
          height: "80vh",
          ml: "50%",
          transform: "translateX(-50%)",
          padding: "1rem",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
          borderRadius: "5px",
          mt: "2%",
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
                Create Account
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="text"
                  placeholder="Full Name"
                  size="small"
                  hiddenLabel
                  name="text"
                  autoComplete="text"
                  autoFocus
                  onChange={(e) => setFullname(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="phone"
                  placeholder="Phone Number"
                  size="small"
                  hiddenLabel
                  name="number"
                  autoComplete="number"
                  autoFocus
                  onChange={(e) => setPhone(e.target.value)}
                />

                <TextField
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

                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  size="small"
                  sx={{ mt: 3, mb: 2, mt: 10 }}
                  onClick={postData}
                >
                  Create Account
                </Button>
                <Grid container>
                  {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                  <Grid item>
                    <Link
                      component={RouterLink}
                      to="./../login"
                      variant="body2"
                    >
                      {"Don't have an account? Log in"}
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
