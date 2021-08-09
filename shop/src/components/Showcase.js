import ShowcaseItem from "./ShowcaseItem";
import { useSelector } from "react-redux";

const Showcase = ({guest}) => {
  const itemList = useSelector((state) => state.itemList.itemList);
  return (
    <div className="main__showcase">
      {itemList.map((item, index) => (
        <ShowcaseItem index={index} guest={guest} key={index}/>
      ))}
    </div>
  );
};

export default Showcase;
