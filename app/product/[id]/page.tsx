import React from 'react'

const ProductPage = ({params}:{params:{id:string}}) => {
  return (
    <div>{params.id}</div>
  )
}

export default ProductPage