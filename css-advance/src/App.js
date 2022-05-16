import { useState } from "react";
import classes from "./App.module.css";
import Animation from "./components/animation/Animation";
import NavBar from "./components/NavBAR/NavBar";
import PictureScale from "./components/PictureScale/PictureScale";
function App() {
  const [pageNumber, setPageNumber] = useState(2);
  if (pageNumber == 0) {
    return (
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.item}></div>
          <div className={classes.item}></div>
          <div className={classes.item}></div>
          <div className={classes.item}></div>
          <div className={classes.item}></div>
          <input className={classes.input}></input>
          <input className={classes.input}></input>
          <button
            style={{
              width: "auto",
              height: "auto",
              padding: "5px 10px",
              marginTop: "20px",
            }}
            onClick={() => setPageNumber(1)}
          >
            Click here for Next Page
          </button>
        </div>
        <div className={classes.right}>
          <div className={classes.box}>
            <div className={classes.text}>
              <h3>SOLD</h3>
            </div>
          </div>
          <div className={classes.box}>
            <div className={classes.text}>
              <h3>Available</h3>
            </div>
          </div>
          <div className={classes.box}>
            <div className={classes.text}>
              <h3>Available</h3>
            </div>
          </div>
          <div className={classes.box}>
            <div className={classes.text}>
              <h3>SOLD</h3>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (pageNumber == 1) {
    return (
      <PictureScale pageNumber={pageNumber} setPageNumber={setPageNumber} />
    );
  } else if (pageNumber == 2) {
    return <Animation pageNumber={pageNumber} setPageNumber={setPageNumber} />;
  } else if (pageNumber == 3) {
    return <NavBar pageNumber={pageNumber} setPageNumber={setPageNumber} />;
  }
}

export default App;
