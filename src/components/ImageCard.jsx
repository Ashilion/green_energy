import React from 'react'

const ImageCard = ({image, roundedFull, taille}) => {
  console.log(image)
  return (
    <div className={`flex-auto rounded-3xl bg-cover bg-center bg-[url("assets/panneaux.jpg")] ${roundedFull && `rounded-full flex-none w-[${taille}px] h-[${taille}px] `}`}>
      
    </div>
  )
}

export default ImageCard