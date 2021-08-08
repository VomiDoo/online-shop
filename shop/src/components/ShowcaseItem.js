import React, { useState } from "react";

const ShowcaseItem = () => {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(!open);
  };
  const id = 12;
  return (
    <div className="item" id={id}>
      <div className={open ? "item--open" : "item--close"}>
        <div className="item__left">
          <div className="item__img"></div>
          <h3 className="item__title">55</h3>
          <div className="item__footer">
            <p className="item__coast">500$</p>
            <button className="item__btn" onClick={openHandler}>
              {open ? "Close" : "More"}
            </button>
          </div>
        </div>
        <div className="item__description">
          <h2 className="item__description-title">Description</h2>
          <p className="item__material--title">Material</p>
          <span className="item__material">{"Cotton"}</span>
          <p className="item__material--title">Information</p>
          <p className="item__inform">
            {
              "mmmmmmmmmmmmmmmmmmm mmmmmmm mmmmmmm mmmmmmmmm mmmmmm mmmmmmmm mmmmmmmm mmmmmmmmmmmm mmmmmmmmmmmmmmmm mmmmmmmmmmmmmmm"
            }
          </p>
            <form className="item__size">
              <label>
                XS <br></br>
                <input type="radio" name="size"></input>
              </label>
              <label>
                S <br></br>
                <input type="radio" name="size"></input>
              </label>
              <label>
                M <br></br>
                <input type="radio" name="size"></input>
              </label>
              <label>
                L <br></br>
                <input type="radio" name="size"></input>
              </label>
              <label>
                XL <br></br>
                <input type="radio" name="size"></input>
              </label>
              <label>
                XXL <br></br>
                <input type="radio" name="size"></input>
              </label>
            </form>
          <button className="item__add-btn">Add to 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseItem;
