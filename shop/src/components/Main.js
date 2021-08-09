import Showcase from "./Showcase";

const Main = ({ guest }) => {
  return (
    <div className="main">
      <div className="main__sort"></div>
      <Showcase guest={guest} />
    </div>
  );
};

export default Main;
