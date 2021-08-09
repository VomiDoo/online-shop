import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemList: JSON.parse(localStorage.getItem("itemList")) || [
    {
      title: "Belgium Linen Dress",
      coast: "230",
      material: "Leather",
      inform:
        "We think linen is kind of a big deal. The Belgium has a fitted bodice with a relaxed skirt. This dress features a smocked back bodice and a high slit to give your legs some room to breathe.",
      sizes: {
        xs: true,
        s: true,
        m: true,
        l: true,
        xl: false,
        xxl: false,
      },
      img: "https://media.thereformation.com/image/upload/c_limit,f_auto,q_auto,t_super_zoom/v1/prod/product_images/belgium-dress/white/5ca7ddfd8858db51cb7dfaf8/original.jpg",
    },
    {
      title: "Kourtney Dress",
      coast: "320",
      material: "Cellulosic fibres/viscose",
      inform:
        "Wear the dress. The Kourtney is a midi length dress with a fitted bodice and center back smocking. It has a slim fitting faux wrap skirt with a high slit. The straps are adjustable so you can fit it to your liking.",
      sizes: {
        xs: false,
        s: true,
        m: false,
        l: true,
        xl: false,
        xxl: true,
      },
      img: "https://media.thereformation.com/image/upload/c_limit,f_auto,q_auto,t_super_zoom/v1/prod/product_images/kourtney-dress/frolic/602da03f0e412400175da85e/original.jpg",
    },
    {
      title: "Bust Puff Sleeve Mini Dress",
      coast: "50",
      material: "Cotton",
      inform:
        "This mini dress features a slim fit, a heart-shaped neckline, ruffled cup details, puffy short sleeves with button details at the cuffs and seams in rubber on the inside and a zipper and hook closure at the back. This mini dress comes in green.",
      sizes: {
        xs: true,
        s: true,
        m: true,
        l: true,
        xl: true,
        xxl: true,
      },
      img: "https://www.na-kd.com/globalassets/nakd_bust_buff_sleeve_minidress_1018-004672-8202_03j.jpg?ref=E1E375B510",
    },
    {
      title: "Black Stretch Crepe Midi Dress",
      coast: "360",
      material: "Cellulosic fibres/viscose",
      inform:
        "This stretch crepe midi dress is designed with a flattering sweetheart neckline and a gathered wrap bust detail. The skirt falls to a fitted silhouette finished with a side split.",
      sizes: {
        xs: true,
        s: true,
        m: true,
        l: false,
        xl: false,
        xxl: false,
      },
      img: "https://www.self-portrait-studio.com/media/catalog/product/cache/16042f25aba4b854efd141c928f6073e/p/f/pf21-031mg-1_1.jpg",
    },
    {
      title: "Winslow Dress",
      coast: "255",
      material: "Cellulosic fibres/viscose",
      inform:
        "For brides, bridesmaids, and those attending their 17th wedding this year. The Winslow is a functional wrap dress with an adjustable waist tie, so you can wear it tight or loose depending on your mood. This dress also features a high slight to give your legs some breathing room.",
      sizes: {
        xs: false,
        s: true,
        m: false,
        l: true,
        xl: false,
        xxl: true,
      },
      img: "https://media.thereformation.com/image/upload/f_auto,q_auto:eco/c_scale,w_auto:breakpoints_100_1668_9_20/v1/prod/product_images/winslow-dress/ivory/605547678de74359c93fee56/original.jpg",
    },
    {
      title: "Ebb Dress",
      coast: "150",
      material: "Cotton",
      inform:
        "This is a babydoll dress with flutter sleeves and a back tie detail. It’s made from lightweight organic cotton",
      sizes: {
        xs: true,
        s: true,
        m: false,
        l: false,
        xl: false,
        xxl: false,
      },
      img: "https://aritzia.scene7.com/is/image/Aritzia/hi-res/s20_02_a08_78153_1274_on_a.jpg",
    },
    {
      title: "Paiva Dress",
      coast: "340",
      material: "Cellulosic fibres/viscose",
      inform:
        "For brides, bridesmaids, and those attending their 17th wedding this year. The Winslow is a functional wrap dress with an adjustable waist tie, so you can wear it tight or loose depending on your mood. This dress also features a high slight to give your legs some breathing room.",
      sizes: {
        xs: true,
        s: false,
        m: false,
        l: false,
        xl: false,
        xxl: true,
      },
      img: "https://i8.amplience.net/i/nlyscandinavia/606839-0115_01/i-paiva-dress/?$categorypage_M$",
    },
  ],
};

const itemListSlice = createSlice({
  name: "itemList",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.itemList.unshift(action.payload);
      localStorage.setItem("itemList", JSON.stringify(state.itemList));
    },
  },
});

export const { addItem } = itemListSlice.actions;

export default itemListSlice.reducer;
