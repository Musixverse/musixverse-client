import React from 'react'

const BlogHeader = ({children}) => {
  return (
    <div className="font-tertiary text-5xl font-bold py-8">
        {children}
    </div>
  )
}

export default BlogHeader