import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reducers/actualUserSlice";
import { editUser } from "../reducers/usersSlice";
import { v4 as uuidv4 } from "uuid";

const ShowcaseItem = ({ index, guest }) => {
  const [open, setOpen] = useState(false);
  const [itemSize, setItemSize] = useState("");

  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.itemList.itemList);
  const actualUser = useSelector((state) => state.actualUser.actualUser);

  const openHandler = () => {
    setOpen(!open);
  };
  const sizeHandler = ({ target }) => {
    setItemSize(target.value);
  };

  const addToCartHandler = () => {
    const cartObj = {
      title: itemList[index].title,
      img: itemList[index].img,
      coast: itemList[index].coast,
      size: itemSize,
      itemId: uuidv4(),
    };
    dispatch(addToCart(cartObj));
    const id = actualUser.uuid;
    dispatch(editUser({ id, actualUser }));
    setOpen(false);
  };

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
                  <input
                    type="radio"
                    name="size"
                    value={"XS"}
                    onClick={sizeHandler}
                  ></input>
                </label>
              </>
            ) : null}
            {itemList[index].sizes.s ? (
              <>
                <label>
                  S <br></br>
                  <input
                    type="radio"
                    name="size"
                    value={"S"}
                    onClick={sizeHandler}
                  ></input>
                </label>
              </>
            ) : null}
            {itemList[index].sizes.m ? (
              <>
                <label>
                  M <br></br>
                  <input
                    type="radio"
                    name="size"
                    value={"M"}
                    onClick={sizeHandler}
                  ></input>
                </label>
              </>
            ) : null}
            {itemList[index].sizes.l ? (
              <>
                <label>
                  L <br></br>
                  <input
                    type="radio"
                    name="size"
                    value={"L"}
                    onClick={sizeHandler}
                  ></input>
                </label>
              </>
            ) : null}
            {itemList[index].sizes.xl ? (
              <>
                <label>
                  XL <br></br>
                  <input
                    type="radio"
                    name="size"
                    value={"XL"}
                    onClick={sizeHandler}
                  ></input>
                </label>
              </>
            ) : null}
            {itemList[index].sizes.xxl ? (
              <>
                <label>
                  XXL <br></br>
                  <input
                    type="radio"
                    name="size"
                    value={"XXL"}
                    onClick={sizeHandler}
                  ></input>
                </label>
              </>
            ) : null}
          </form>
          {guest ? null : (
            <button className="item__add-btn" onClick={addToCartHandler}>
              Add to 🛒
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseItem;
