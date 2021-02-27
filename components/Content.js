import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function Content() {
  const classes = useStyles();

  return (
    <Container maxWidth="" component="main" className={classes.heroContent}>
      <Typography component="h1" variant="h2" align="center" gutterBottom>
        Site Name
      </Typography>
      <Typography variant="h5" align="center" component="p">
        オリジナルのバーチャル背景を作成して懇親会に参加しよう！学生同士のコミュニケーションを活性化する!
      </Typography>
    </Container>
  );
}
