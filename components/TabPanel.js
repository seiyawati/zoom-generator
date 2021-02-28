import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="手順１" {...a11yProps(0)} />
        <Tab label="手順２" {...a11yProps(1)} />
        <Tab label="手順３" {...a11yProps(2)} />
        <Tab label="手順４" {...a11yProps(3)} />
        <Tab label="手順５" {...a11yProps(4)} />
        <Tab label="手順６" {...a11yProps(5)} />
        <Tab label="手順７" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        ・パターンの選択
        <br />
        Topページにある4つのレイアウトの内お好きなやつを洗濯して「このパターンを選択」をクリックしてください！
        <br />
        <br />
        ・パターン1
        <br />
        <img
          src="../static/example.png"
          style={{ width: "300px", height: "200px" }}
        />
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standar
        <br />
        <br />
        ・パターン2
        <br />
        <img
          src="../static/example.png"
          style={{ width: "300px", height: "200px" }}
        />
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standar
        <br />
        <br />
        ・パターン3
        <br />
        <img
          src="../static/example.png"
          style={{ width: "300px", height: "200px" }}
        />
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standar
        <br />
        <br />
        ・パターン4
        <br />
        <img
          src="../static/example.png"
          style={{ width: "300px", height: "200px" }}
        />
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standar
      </TabPanel>
      <TabPanel value={value} index={1}>
        ・プロフィール情報を入力する
        <br />
        Profile, Skills, Socialsにしたがってプロフィール情報を入力する。
        <br />
        <br />
        ここから自分の基本情報を入力する↓
        <br />{" "}
        <img
          src="../static/Profile.png"
          style={{ width: "300px", height: "400px" }}
        />
        <br />
        <br />
        ここから自分のスキルを選択する↓
        <br />{" "}
        <img
          src="../static/Skills.png"
          style={{ width: "300px", height: "150px" }}
        />
        <br />
        以下のモダールが表示されるので選択↓
        <br />{" "}
        <img
          src="../static/Skills_list.png"
          style={{ width: "300px", height: "250px" }}
        />
        <br />
        <br />
        ここから自分の基本情報を入力する↓
        <br />{" "}
        <img
          src="../static/Socials.png"
          style={{ width: "300px", height: "150px" }}
        />
        <br />
        <br />
        以下のモダールが表示されるので選択↓
        <br />{" "}
        <img
          src="../static/Socials.png"
          style={{ width: "300px", height: "150px" }}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        手順３
      </TabPanel>
      <TabPanel value={value} index={3}>
        手順４
      </TabPanel>
      <TabPanel value={value} index={4}>
        手順５
      </TabPanel>
      <TabPanel value={value} index={5}>
        手順６
      </TabPanel>
      <TabPanel value={value} index={6}>
        手順７
      </TabPanel>
    </div>
  );
}
