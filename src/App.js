import "./App.css";
import ResponsiveDrawer from "./components/Drawer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import * as React from "react";

function App() {
  const [data, setdata] = React.useState([]);

  //Fetch Request using async await
  async function fetchData() {
    const res = await fetch("http://localhost:5000/api/login/check");
    const data = await res.json();
    setdata(data);
  }

  React.useEffect(() => {
    fetchData();
  }, []);
  console.log(data.message);

  return (
    <div className="App" style={{
      // background: "#461A42"
    }}>
      {data.message != "Unauthorized" ? <Login /> : <ResponsiveDrawer />}
    </div>
  );
}

export default App;
