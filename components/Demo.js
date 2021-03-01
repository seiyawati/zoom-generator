import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [
  {
    name: "パターン1",
    image: "../static/Template1.png",
    description: "パターン1の説明です。",
  },
  {
    name: "パターン2",
    image: "../static/Template2.png",
    description: "パターン2の説明です。",
  },
  {
    name: "パターン3",
    image: "../static/Template3.png",
    description: "パターン3の説明です。",
  },
  {
    name: "パターン4",
    image: "../static/Template4.png",
    description: "パターン4の説明です。",
  },
];

export default function Demo() {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={5}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={card.image}
                title="Image title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.name}
                </Typography>
                <Typography>
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href="/generator">
                  <Button size="small" color="primary">
                    このパターンを選択
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
