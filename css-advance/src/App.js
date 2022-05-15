import classes from "./App.module.css";
function App() {
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
      </div>
      <div className={classes.right}>
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
            <h3>Available</h3>
          </div>
        </div>
        <div className={classes.box}>
          <div className={classes.text}>
            <h3>Available</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
