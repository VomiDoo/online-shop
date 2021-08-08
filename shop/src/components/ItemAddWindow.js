import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../reducers/itemListSlice";

const ItemAddWindow = () => {
  const [title, setTitle] = useState("");
  const [coast, setCoast] = useState("");
  const [material, setMaterial] = useState("");
  const [inform, setInform] = useState("");
  const [sizes, setSizes] = useState({
    xs: false,
    s: false,
    m: false,
    l: false,
    xl: false,
    xxl: false,
  });
  const [img, setImg] = useState("");
  const history = useHistory();

  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.itemList.itemList);

  const titleHandler = ({ target }) => {
    setTitle(target.value);
  };
  const coastHandler = ({ target }) => {
    setCoast(target.value);
  };
  const materialHandler = ({ target }) => {
    setMaterial(target.value);
  };
  const informHandler = ({ target }) => {
    setInform(target.value);
  };
  const sizesHandler = ({ target }) => {
    setSizes({ ...sizes, [target.value]: true });
  };
  const imgHandler = ({ target }) => {
    setImg(target.value);
  };

  const confirmHandler = () => {
    if (title && coast && material && inform && sizes) {
      if (itemList.some((item) => item.title === title)) {
        setTitle("");
      } else {
        const obj = {
          title: title,
          coast: coast,
          material: material,
          inform: inform,
          sizes: sizes,
          img: img,
        };
        dispatch(addItem(obj));
        history.push("/home");
      }
    }
  };

  return (
    <div className="add__wrap">
      <div className="add__title">Add your product</div>
      <p className="add__name">
        Title <br></br>
        <input
          type="text"
          className="add__input"
          maxLength={30}
          placeholder="Max length: 30"
          onChange={titleHandler}
          value={title}
        ></input>
      </p>
      <p className="add__name">
        Coast ($) <br></br>
        <input
          type="text"
          className="add__input"
          maxLength={5}
          onChange={coastHandler}
        ></input>
      </p>
      <p className="add__name">
        Material <br></br>
        <select className="add__select" onChange={materialHandler}>
          <option className="add__select-option">Cotton</option>
          <option className="add__select-option">
            Cellulosic fibres/viscose
          </option>
          <option className="add__select-option">Wool</option>
          <option className="add__select-option">Silk</option>
          <option className="add__select-option">Leather</option>
        </select>
      </p>
      <p className="add__name">
        Information <br></br>
        <textarea className="add__textarea" onChange={informHandler}></textarea>
      </p>
      <p className="add__name">
        Sizes <br></br>
        <form className="add__form">
          <label>
            XS <br></br>
            <input
              type="checkbox"
              name="XS"
              value="xs"
              onClick={sizesHandler}
            ></input>
          </label>
          <label>
            S <br></br>
            <input
              type="checkbox"
              name="S"
              value="s"
              onClick={sizesHandler}
            ></input>
          </label>
          <label>
            M <br></br>
            <input
              type="checkbox"
              name="M"
              value="m"
              onClick={sizesHandler}
            ></input>
          </label>
          <label>
            L <br></br>
            <input
              type="checkbox"
              name="L"
              value="l"
              onClick={sizesHandler}
            ></input>
          </label>
          <label>
            XL <br></br>
            <input
              type="checkbox"
              name="XL"
              value="xl"
              onClick={sizesHandler}
            ></input>
          </label>
          <label>
            XXL <br></br>
            <input
              type="checkbox"
              name="XXL"
              value="xxl"
              onClick={sizesHandler}
            ></input>
          </label>
        </form>
      </p>
      <p className="add__name">
        Link for img <br></br>
        <input type="text" className="add__input" onChange={imgHandler}></input>
      </p>
      <div className="add__btns">
        <button className="add__btn" onClick={confirmHandler}>
          Add product
        </button>
        <button
          className="add__btn"
          onClick={() => {
            history.push("/home");
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ItemAddWindow;
