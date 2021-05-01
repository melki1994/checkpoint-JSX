import './App.css';
import './style.css';
import myImage from "./success.jpg";

function App() {
  return (
    <div className ="menu">
      <div style = {{border: "1px solid black", maxWidth: "100vw"}} className = "container">
        <h1 className = "title red">Perpetual optimism is a force multiplier !</h1>
        <br/>
        <img src = {myImage}   alt = 'push-your-self'  height = '450px'   width = '700px'/>
        <br/>
        <img src = "/self-confidence.jpg"  alt = "believe in your self"  height = "450px"   width = "700px"/>
      </div>
      <video width = "320"  height = "240"  controls>
        <source src = "/video.mp4"   type = "video/mp4" />
      </video>
    </div>
  );
}

export default App;
