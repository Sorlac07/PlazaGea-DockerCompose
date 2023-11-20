import React from "react";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }

  handleActive(index) {
    this.setState({
      activeIndex: index,
    });
  }

  renderProduct(products) {
    return (
      <ul className="list-group">
        {products.map((product, i) => (
          <img 
            className="list-group-item cursor-pointer " 
            key={i}
            src={product.imgURL}
          ></img>
        ))}
      </ul>
    );
  }

  render() {
    let { products } = this.props;
    return products.length > 0 ? (
      this.renderProduct(products)
    ) : (
      <div className="alert alert-primary" role="alert">
        No Products to display
      </div>
    );
  }
}
