import React from "react";
import Box from "@mui/material/Box";
//import Card from '@mui/material/Card'
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/Card";
import Tabs from "@mui/material/Tabs";
import AppBar from "@mui/material/AppBar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Explore from "./Explore";
import Boards from "./Boards";
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import { createTheme, ThemeProvider } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));
const MainTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#ffffff"
    },
    info: {
      main: "#0041ff"
    },
    error: {
      main: "#f44336"
    },
    success: {
      main: "#377e0c"
    },
    text: {
      primary: "rgba(0,0,0,0.87)"
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },
  overrides: {
    MuiAppBar: {
      elevation: "0"
    }
  }
});

const Home = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { page } = params;
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    /* <Box sx={{ minWidth: 275, bgcolor:'blue' }}>  
           <Tabs value = {selectedTab} onChange={handleChange} >
             <Tab label= "Explore"/>
             <Tab label="Home"/>
           </Tabs> 
            </Box>
           */
    <ThemeProvider theme={MainTheme}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "primary",
          bgcolor: "white",
          border: "2px solid black"
        }}
      >
        <AppBar color="transparent" position="static" sx={{}}>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
          >
            <Tab
              label="Explore"
              textColor="#fffff"
              // disableRipple="true"
              // disableFocusRipple="true"
              sx={{ p: "0", color: "black" }}
            />
            <Tab
              label="Boards"
              //  textColor="secondary"
              // disableRipple="true"
            />
          </Tabs>
        </AppBar>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} sx={{ textAlign: "left", border: "0", mt: "10px" }}>
            <Typography variant="h4" sx={{ pl: "5px", pb: "5px" }}>
              TSS
            </Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right", border: "0", mt: "5px" }}>
            <Tooltip
              title="Material Design is an adaptable system—backed by open-source code—that helps teams ... Access five sets of stylized system icons, available in a range of ..."
              sx={{ pr: "10px", pt: "15px" }}
              arrow
              // disableRipple="true"
              // disableFocusRipple=true
            >
              <IconButton size="medium">
                <HelpOutlinedIcon opacity="0.1" />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "primary",
            bgcolor: "white",
            border: "2px solid black"
          }}
        >
          <CardContent>
            {selectedTab === 0 && <Explore />}
            {selectedTab === 1 && <Boards />}
          </CardContent>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
