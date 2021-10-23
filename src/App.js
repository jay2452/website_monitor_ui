import React from 'react';
import { useDispatch } from 'react-redux';
import CardList from './Containers/CardList';
import { getAllURLs } from './Store/actionCreators/urlListActions';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllURLs());
  }, []);
 
  return (
    <div className="App">
      <CardList />
    </div>
  );
}

export default App;
