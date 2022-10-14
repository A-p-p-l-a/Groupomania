import React, { useEffect } from 'react';
import Routes from './components/Routes/index';
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";

const App = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => {
          if (res.data) dispatch(getUser(res.data));
        })
        .catch((err) => console.log("Pas de token"));
    };
    fetchToken();

    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    
      <Routes/>
    
  );
};

export default App;