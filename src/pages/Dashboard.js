import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";

// Icons
import ManTwoToneIcon from "@mui/icons-material/ManTwoTone";
import ManIcon from '@mui/icons-material/Man';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PaidIcon from '@mui/icons-material/Paid';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import InventoryIcon from '@mui/icons-material/Inventory';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SubjectIcon from '@mui/icons-material/Subject';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "start",
  color: theme.palette.text.secondary,
  boxShadow: "0px 0px 10px #00000029",
  borderRadius: 5,
}));

export default function Dashboard() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {dashboard.map((value, index) => (
            <Grid item xs>
              <Item>
                <Stack
                  spacing={3}
                  direction="row"
                  sx={{
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    aria-label="Example"
                    size="large"
                    color="success"
                    sx={{
                      color: "black",
                      width: "4rem",
                      height: "4rem",
                      border: "1px solid #6CA46F",
                    }}
                  >
                    {value.icon}
                  </IconButton>

                  <Stack spacing={1} direction="column">
                    <Typography variant="h5">{value.title}</Typography>
                    <Typography variant="body">{value.sub}</Typography>
                  </Stack>
                  <Chip label={value.chip} color="success" variant="outlined" />
                </Stack>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

const dashboard = [
  {
    id: 1,
    sx: 4,
    icon: <ManIcon />,
    title: "+65,000",
    sub: "Number of students",
    url: "/dashboard",
    chip: "New Students +5,000",
  },
  {
    id: 2,
    sx: 4,
    icon: <LockOpenIcon />,
    title: "+15,700",
    sub: "Students registered this month.",
    url: "/dashboard",
    chip: "Last month +5,000",
  },
  {
    id: 3,
    sx: 4,
    icon: <SubjectIcon />,
    title: "+1,970",
    sub: "Available Subjects",
    url: "/dashboard",
    chip: "New Subjects +500",
  },
  {
    id: 4,
    sx: 5,
    icon: <MenuBookIcon />,
    title: "+1,970",
    sub: "Chapters available in total",
    url: "/dashboard",
    chip: "Free Chapters +50",
  },
  {
    id: 5,
    sx: 3.5,
    icon: <ContactSupportIcon />,
    title: "+1,34,000",
    sub: "Total number of questions",
    url: "/dashboard",
    chip: "New +1,000",
  },
  {
    id: 6,
    sx: 3.5,
    icon: <SubscriptionsIcon />,
    title: "+31,000",
    sub: "Total subscription",
    url: "/dashboard",
    chip: "Increment +1,000",
  },
  {
    id: 7,
    sx: 4,
    icon: <ManIcon />,
    title: "+1,000",
    sub: "This month subscription",
    url: "/dashboard",
    chip: "Decrement -500",
  },
  {
    id: 8,
    sx: 4,
    icon: <PaidIcon />,
    title: "$51,000",
    sub: "This month payment received",
    url: "/dashboard",
    chip: "Last month +5,000",
  },
  {
    id: 9,
    sx: 4,
    icon: <CurrencyExchangeIcon />,
    title: "+1,34,000",
    sub: "Renewal subscription this month.",
    url: "/dashboard",
    chip: "+1,000",
  },
  {
    id: 10,
    sx: 12,
    icon: <InventoryIcon />,
    title: "+1,34,000",
    sub: "Total number of packages",
    url: "/dashboard",
    chip: "+10 packages added this month",
  },
];
