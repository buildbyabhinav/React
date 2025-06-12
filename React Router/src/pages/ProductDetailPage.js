import { Link, useParams } from "react-router-dom"

const ProductDetailPage = () => {
    const params = useParams()

  return (
    <div>
      {params.productId}
      <p><Link to='..' relative="path">Back</Link></p> {/*This relative path is resolved wrt to router in appjs file not one step back in products but if we use relative prop set to path it will take to products which is one step back on currently active route*/}
    </div>
  )
}

export default ProductDetailPage
