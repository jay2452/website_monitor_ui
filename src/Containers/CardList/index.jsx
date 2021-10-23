import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

const CardList = (props) => {
  const urlLists = useSelector((state) => state.urlList.data);

  if (urlLists === null) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  return <div>List of URLS</div>;
};

export default CardList;
