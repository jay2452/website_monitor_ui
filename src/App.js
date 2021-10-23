import { makeStyles } from '@mui/styles';
import React from 'react';
import { useDispatch } from 'react-redux';
import CardList from './Containers/CardList';
import { getAllURLs } from './Store/actionCreators/urlListActions';

const useStyles = makeStyles(theme => ({
  app: {
    maxWidth: 500,
    margin: "auto"
  }
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllURLs());
  }, []);
 
  return (
    <div className={classes.app}>
      <CardList />
    </div>
  );
}

export default App;
