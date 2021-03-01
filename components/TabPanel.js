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
          src="../static/Template1.png"
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
          src="../static/Template2.png"
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
          src="../static/Template3.png"
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
          src="../static/Template4.png"
          style={{ width: "300px", height: "200px" }}
        />
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standar
      </TabPanel>
      <TabPanel value={value} index={1}>
        ・プロフィール情報を入力する
        <br />
        名前、学校名、自己紹介、一言コメントを入力する！
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
        背景に反映後↓
        <br />{" "}
        <img
          src="../static/Profile2.png"
          style={{ width: "1200px", height: "500px" }}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        ・スキルを選択する。
        <br />
        自分のスキルを選択して、習熟度レベルを設定しよう！
        <br />
        <br />
        ここからスキルを選択する↓
        <br />{" "}
        <img
          src="../static/Skills.png"
          style={{ width: "500px", height: "300px" }}
        />
        <br />
        <br />
        スキルレベルを設定しよう↓
        <br />{" "}
        <img
          src="../static/Skills2.png"
          style={{ width: "400px", height: "500px" }}
        />
        <br />
        <br />
        背景に反映後↓
        <br />{" "}
        <img
          src="../static/Skills3.png"
          style={{ width: "1200px", height: "500px" }}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        ・SNSアカウントを設定しよう。
        <br />
        GitHubやTwitterなどのSNSアカウントを登録しよう！
        <br />
        <br />
        ここからアカウントを選択する↓
        <br />{" "}
        <img
          src="../static/Socials.png"
          style={{ width: "500px", height: "300px" }}
        />
        <br />
        <br />
        各アカウント名を入力する↓
        <br />{" "}
        <img
          src="../static/Socials2.png"
          style={{ width: "400px", height: "500px" }}
        />
        <br />
        <br />
        背景に反映後↓
        <br />{" "}
        <img
          src="../static/Socials3.png"
          style={{ width: "1200px", height: "500px" }}
        />
      </TabPanel>
      <TabPanel value={value} index={4}>
        ・SNSアカウントを設定しよう。
        <br />
        GitHubやTwitterなどのSNSアカウントを登録しよう！
        <br />
        <br />
        ここから好きな背景色を選択する↓
        <br />{" "}
        <img
          src="../static/Styles.png"
          style={{ width: "500px", height: "300px" }}
        />
        <br />
        <br />
        背景に反映後↓
        <br />{" "}
        <img
          src="../static/Styles2.png"
          style={{ width: "1200px", height: "500px" }}
        />
      </TabPanel>
      <TabPanel value={value} index={5}>
        ・完成形はこんな感じになります↓。
        <br />
        <br />{" "}
        <img
          src="../static/Complete.png"
          style={{ width: "1500px", height: "800px" }}
        />
      </TabPanel>
    </div>
  );
}
