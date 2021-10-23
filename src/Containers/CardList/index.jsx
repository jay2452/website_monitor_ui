import {
  Card,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  card: {
    margin: "10px 0",
    "&:first-child": {
        margin: "0px"
    }
  },
  url: {},
  status: {},
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const CardList = (props) => {
  const classes = useStyle();
  const urlLists = useSelector((state) => state.urlList.data);

  if (urlLists === null) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      {urlLists &&
        urlLists.map((item) => {
          return (
            <Card key={item.id} className={classes.card}>
              {/* <CardMedia
                component="img"
                alt={item.url}
                height="60"
                image="/static/images/cards/contemplative-reptile.jpg"
              /> */}
              <CardContent className={classes.cardContent}>
                <div className={classes.url}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.url}
                  </Typography>
                </div>
                <div className={classes.status}>
                    <Chip label={item.status ? "Up" : "Down"} variant="outlined" />
                </div>
              </CardContent>
            </Card>
          );
        })}
    </div>
  );
};

export default CardList;
