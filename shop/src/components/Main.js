import Showcase from './Showcase';
import { Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <div className="main__sort"></div>
      <Showcase />
    </div>
  );
};

export default Main;
