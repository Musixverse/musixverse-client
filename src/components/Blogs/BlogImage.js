import React from 'react'
import Image from 'next/image'

// @sparshsharma2510
//width - 768px (input)
// height - auto adjust according to image dimensions

const BlogImage = ({src,alt,width,height}) => {
  return (
    <div className='flex relative justify-center py-8 w-[768px]'>
        <Image src={src} alt={alt} layout={"fill"} objecfit={'contain'} />
    </div>
  )
}

export default BlogImage