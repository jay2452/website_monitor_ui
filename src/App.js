import { makeStyles } from "@mui/styles";
import React from "react";
import { useDispatch } from "react-redux";
import AddURLButton from "./Containers/AddURLButton";
import CardList from "./Containers/CardList";
import DenseAppBar from "./Containers/DenseAppBar";
import { getAllURLs } from "./Store/actionCreators/urlListActions";

const useStyles = makeStyles((theme) => ({
  app: {
    maxWidth: 500,
    margin: "auto",
    transform: "translateY(6%)",
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllURLs());
  }, []);

  return (
    <>
      <DenseAppBar />
      <AddURLButton />
      <div className={classes.app}>
        <CardList />
      </div>
    </>
  );
}

export default App;
