import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGitdata } from "../redux/reducers/gitdataReducer/gitdataReducer";
import { errorSelector, gitdataSelector, loadingSelector } from "../redux/reducers/gitdataReducer/selectors";

const Gitdata = () => {

  // const [ gitdata, setGitdata] = useState ([]);

  // useEffect(() => {
  //   fetch('https://api.github.com/gists/public')
  //     .then((respons) => respons.json())
  //     .then((data) => setGitdata(data))
  //     .catch((error) => console.log(error.toString()))
  // }, [])

  const gitdata = useSelector(gitdataSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  
  const dispatch = useDispatch();

  const loadGit = () => {
    dispatch(loadGitdata());
  }
  
  useEffect(() => {
    loadGit();
  }, []);

  if(loading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )
  } 

  if (error !== null) {
    return (
    <>
      <h3>Error</h3>
      <button onClick={loadGit}>Retry</button>
    </>
    );
  }
    
  
  return (
    <div>
      Data from Gitserver
      {
        gitdata.map((item) => (
          <div key={item.id}>
          <div>{item.url}</div>
        </div>
        ))
      }
    </div>
  );
};

export default Gitdata;