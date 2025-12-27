import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  let btnstyle1 = {
      backgroundColor: "Green",
      color: "White",
      height: 25,
      width: 100,
      
    };
 
  let btnstyle2 = {
      backgroundColor: "Red",
      color: "White",
      height: 25,
      width: 100,
      
    }
 
  return (
    <>
      <h1 style={{color:"blue", textAlign:"center", textDecoration:"underline"}}>Login Form</h1> <hr />
      <Input text = "text" placeholder="Enter Your Name" /><br />
      <Input text = "email" placeholder="Enter Email" /><br />
      <Input text = "password" placeholder="Enter Password" /><br />

      <Button style={btnstyle1} label="Submit"/><br />
      <Button style={btnstyle2} label="Cancel"/><br />
    </>
  );
}

export default App;
