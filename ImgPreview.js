import {useState,useEffect} from 'react'


const ImgPreview = ({file}) => {
    const objectUrl = URL.createObjectURL(file)
    console.log("helllllllllllo test")
  return(
      <>
        <img src={objectUrl}/>
      </>
  )
}

export default ImgPreview