import React from "react";
import Image from "next/image";

const ImgContainer = props => {
  const { width, height, src, className, key } = props
  return (
    <div style={{ width, height }} className="overflow-hidden" key={key}>
      <Image
        src={src}
        className={className}
      />
    </div>
  )
}

export default Image