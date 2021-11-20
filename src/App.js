// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios';
import Navbar from './components/Navbar';
import Usercard from './components/Usercard';
import Loader from './components/Loader';
  


function App() {

  const [isClicked, setisClicked] = useState(0);
  const [data, setData] = useState(null);
  const [isLoader, setisLoader] = useState(false);

  const getUsers = () => {

    setisLoader(true);
    axios.get("https://reqres.in/api/users?page=1").then((response) =>{
      console.log("api data recievd");
      setData(response.data.data);
      setisLoader(false);
    });
  };

  useEffect(() => {
    isClicked && getUsers();
  },[isClicked])

  return(
    <div className="App">
      <Navbar onSetIsClicked={setisClicked}/>{" "}
      <div className="row">
        {" "}

        {data &&
        data.map((val)=>{
          return(
            <Usercard
            first_name={val.first_name}
            last_name={val.last_name}
            email={val.email}
            avatar={val.avatar}
            />
          );
        })}{" "}


      </div>
      <Loader show={isLoader}/>{" "}


    </div>
  );
}

export default App;
