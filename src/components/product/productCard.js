import React from 'react';
import productData from '../../data/productData';

class ProductCard extends React.Component {
  state = {
    product: [],
  }

  getProductData = () => {
    productData.getProductByClosetId()
      .then((res) => this.setState({ product: res.data }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getProductData();
  }

  render() {
    const { product } = this.state;
    console.log(product);
    const products = product.map((singleProduct) => <div className="Product card">
        <div className="card-body">
          <h5 className="card-title">{singleProduct.product_name}</h5>
          <img className="car-img" src={singleProduct.image} alt={singleProduct.product_name}/>
          <p className="card-text">{singleProduct.price}</p>
          <p className="card-text">{singleProduct.color}</p>
        </div>
      </div>);
    return <>
        {products.length}
        </>;
  }
}

export default ProductCard;
