import React from 'react'
import Image from 'next/image'

const BlogImage = ({src,alt,width,height}) => {
  return (
    <div className='flex justify-center py-8'>
        <Image src={src} alt={alt} width={width} height={height} objecfit={'contain'} />
    </div>
  )
}

export default BlogImage