import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  alignItems: "center",
  color: theme.palette.text.secondary,
}));

export default function Payment() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <Card sx={{ maxWidth: "auto", textAlign: "start" }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://bsmedia.business-standard.com/_media/bs/img/article/2020-08/13/full/1597309837-7212.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Razorpay
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    All in One- Payment gateway, links, invoices, subscription,
                    payouts, payment pages & more. Send, recieve, route & manage
                    all payments with Razorpay
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Edit API</Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Card sx={{ maxWidth: "auto", textAlign: "start" }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    PayPal
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    PayPal Holdings, Inc. is an American multinational financial
                    technology company operating an online payments system in
                    the majority of countries
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Edit API</Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Card sx={{ maxWidth: "auto", textAlign: "start" }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://www.sproutwired.com/wp-content/uploads/2021/07/Google-Pay-Save-Pay-Manage.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Google Pay
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Google Pay is a digital wallet platform and online payment system developed by Google to power in-app
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Edit API</Button>
                </CardActions>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
