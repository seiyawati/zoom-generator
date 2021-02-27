import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ color: "white", backgroundColor: "#0E5D5D" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Team Coffee
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
