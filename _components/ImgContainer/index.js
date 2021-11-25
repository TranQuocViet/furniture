import React from "react";
import Image from "next/image";

const ImgContainer = props => {
  const { width, height, src, className } = props
  return (
    <div style={{ width, height }} className="overflow-hidden hover:cursor-pointer">
      <Image
        src={src}
        className={className}
      />
    </div>
  )
}

export default ImgContainer