export const SET_STAR_DATA = "SET_STAR_DATA"

// アクションクリエイター
const starDataSet = (data) =>  {

  return {
    type:SET_STAR_DATA,
    starData:data,
  }

}

export default starDataSet
