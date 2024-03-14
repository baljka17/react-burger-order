import Toolbar from "../../components/Toolbar";
import BurgerBuilder from "../BurgerBuilder";
import styles from "./style.module.css";

function App() {
  return (
    <div className={styles.content}>
      <Toolbar />
      <div className="content">
        <BurgerBuilder />
      </div>
    </div>
  );
}

export default App;
