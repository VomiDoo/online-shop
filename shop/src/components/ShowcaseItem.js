import React, { useState } from "react";
import { useSelector } from "react-redux";

const ShowcaseItem = ({ index }) => {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(!open);
  };
  const itemList = useSelector((state) => state.itemList.itemList);
  return (
    <div className="item">
      <div className={open ? "item--open" : "item--close"}>
        <div className="item__left">
          <div
            className="item__img"
            style={{
              background: `url(${itemList[index].img}) no-repeat center/cover`,
            }}
          ></div>
          <h3 className="item__title">{itemList[index].title}</h3>
          <div className="item__footer">
            <p className="item__coast">{itemList[index].coast}$</p>
            <button className="item__btn" onClick={openHandler}>
              {open ? "Close" : "More"}
            </button>
          </div>
        </div>
        <div className="item__description">
          <h2 className="item__description-title">Description</h2>
          <p className="item__material--title">Material</p>
          <span className="item__material">{itemList[index].material}</span>
          <p className="item__material--title">Information</p>
          <p className="item__inform">{itemList[index].inform}</p>
          <form className="item__size">
            {itemList[index].sizes.xs ? (
              <>
                <label>
                  XS <br></br>
                  <input type="radio" name="size"></input>
                </label>
              </>
            ) : null}
            {itemList[index].sizes.s ? (
              <>
                <label>
                  S <br></br>
                  <input type="radio" name="size"></input>
                </label>
              </>
            ) : null}
            {itemList[index].sizes.m ? (
              <>
                <label>
                  M <br></br>
                  <input type="radio" name="size"></input>
                </label>
              </>
            ) : null}
            {itemList[index].sizes.l ? (
              <>
                <label>
                  L <br></br>
                  <input type="radio" name="size"></input>
                </label>
              </>
            ) : null}
            {itemList[index].sizes.xl ? (
              <>
                <label>
                  XL <br></br>
                  <input type="radio" name="size"></input>
                </label>
              </>
            ) : null}
            {itemList[index].sizes.xxl ? (
              <>
                <label>
                  XXL <br></br>
                  <input type="radio" name="size"></input>
                </label>
              </>
            ) : null}
          </form>
          <button className="item__add-btn">Add to 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseItem;
