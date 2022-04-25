import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Notifications() {
  return (
    <List
      sx={{
        width: "100%",
        width: "auto",
        bgcolor: "background.paper",
        boxShadow: "0px 0px 10px #00000029",
        borderRadius: 1,
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.nicepng.com/png/detail/38-385668_push-notifications-push-notification-icon-png.png" />
        </ListItemAvatar>
        <ListItemText
          primary="New course purchased (1)"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Basic
              </Typography>
              {
                " — Basic plan bought by Harsh Singh (BBA- Bachelor of Business Administration)"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.nicepng.com/png/detail/38-385668_push-notifications-push-notification-icon-png.png" />
        </ListItemAvatar>
        <ListItemText
          primary="New course purchased (2)"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Basic
              </Typography>
              {
                " — Basic plan bought by Harsh Singh (BBA- Bachelor of Business Administration)"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.nicepng.com/png/detail/38-385668_push-notifications-push-notification-icon-png.png" />
        </ListItemAvatar>
        <ListItemText
          primary="New course purchased (3)"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Basic
              </Typography>
              {
                " — Basic plan bought by Harsh Singh (BBA- Bachelor of Business Administration)"
              }
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
