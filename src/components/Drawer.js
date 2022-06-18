import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

// Icons
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import SubjectTwoToneIcon from "@mui/icons-material/SubjectTwoTone";
import AutoStoriesTwoToneIcon from "@mui/icons-material/AutoStoriesTwoTone";
import TipsAndUpdatesTwoToneIcon from "@mui/icons-material/TipsAndUpdatesTwoTone";
import FormatQuoteTwoToneIcon from "@mui/icons-material/FormatQuoteTwoTone";
import QuizTwoToneIcon from "@mui/icons-material/QuizTwoTone";
import CircleNotificationsTwoToneIcon from "@mui/icons-material/CircleNotificationsTwoTone";
import SubscriptionsTwoToneIcon from "@mui/icons-material/SubscriptionsTwoTone";
import PaymentTwoToneIcon from "@mui/icons-material/PaymentTwoTone";
import GradeIcon from '@mui/icons-material/Grade';

import {
  Link as RouterLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Students from "../pages/Students";
import Subject from "../pages/Subjects";
import Subscription from "../pages/Subscription";
import Chapters from "../pages/Chapters";
import Topics from "../pages/Topics";
import QuizResults from "../pages/QuizResults";
import Notifications from "../pages/Notifications";
import Payment from "../pages/PaymentGateway";
import ManageQAndA from "../pages/ManageQ&A";
import Grade from "../pages/Grade";
import Login from "../pages/Login";
import CreateQuiz from "../pages/CreateQuiz";

const drawerWidth = 250;

const datas = [
  {
    id: 1,
    text: "Dashboard",
    icon: <DashboardTwoToneIcon />,
    link: "/dashboard",
  },
  {
    id: 2,
    text: "Manage Students",
    icon: <AccountCircleTwoToneIcon />,
    link: "/manage-students",
  },
  {
    id: 22,
    text: "Manage Grade",
    icon: <GradeIcon />,
    link: "/manage-grade",
  },
  {
    id: 3,
    text: "Manage Subjects",
    icon: <SubjectTwoToneIcon />,
    link: "/manage-subjects",
  },
  {
    id: 4,
    text: "Manage Chapters",
    icon: <AutoStoriesTwoToneIcon />,
    link: "/manage-chapters",
  },
  {
    id: 5,
    text: "Manage Topics",
    icon: <TipsAndUpdatesTwoToneIcon />,
    link: "/manage-topics",
  },
  {
    id: 6,
    text: "Manage Q & A",
    icon: <FormatQuoteTwoToneIcon />,
    link: "/manage-q-and-a",
  },
  {
    id: 7,
    text: "Manage Quiz Results",
    icon: <QuizTwoToneIcon />,
    link: "/manage-quiz-results",
  },
  {
    id: 8,
    text: "Manage Notifications",
    icon: <CircleNotificationsTwoToneIcon />,
    link: "/manage-notifications",
  },
  {
    id: 9,
    text: "Manage subscription plans",
    icon: <SubscriptionsTwoToneIcon />,
    link: "/manage-subscription-plans",
  },
  {
    id: 10,
    text: "Payment gateway",
    icon: <PaymentTwoToneIcon />,
    link: "/manage-payment-gateway",
  },
];

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const location = useLocation();

  const drawer = (
    <div>
      <Toolbar
        sx={{
          height: "10px",
        }}
      ></Toolbar>
      <Divider />
      <List>
        {datas.map((value) => (
          <ListItem
            button
            key={value.id}
            sx={{
              justifyContent: "flex-start",
              backgroundColor: "transparent",
            }}
            component={RouterLink}
            to={value.link}
            className={location.pathname === value.link ? "active" : null}
          >
            <ListItemIcon sx={{ ml: 0, mr: 0 }}>{value.icon}</ListItemIcon>
            <Typography variant="body2" sx={{ padding: 0, margin: 0 }}>
              {value.text}
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        elevation={0}
        // backgroundColor="#333"
        background="#333"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "#333" }}
          >
            Dashboard
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <IconButton>
            <Avatar
              alt="Remy Sharp"
              src="https://i.pinimg.com/736x/f3/53/55/f353553805d7924c68bec227ed7d1af8.jpg"
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              padding: "0px",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* Main */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "100%",
          // background: "#F4F7FE",
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="manage-students" element={<Students />} />
          <Route path="manage-grade" element={<Grade />} />
          <Route path="manage-subjects" element={<Subject />} />
          <Route path="manage-subscription-plans" element={<Subscription />} />
          <Route path="manage-chapters" element={<Chapters />} />
          <Route path="manage-topics" element={<Topics />} />
          <Route path="manage-q-and-a" element={<ManageQAndA />} />
          <Route path="manage-quiz-results" element={<QuizResults />} />
          <Route path="manage-notifications" element={<Notifications />} />
          <Route path="manage-payment-gateway" element={<Payment />} />
          <Route path="quiz/create" element={<CreateQuiz />} />
        </Routes>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
