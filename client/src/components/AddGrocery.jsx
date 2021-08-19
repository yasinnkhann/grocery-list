import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  render () {
    return (
    <div>
      <input
      type="text"
      placeholder="Enter item name.."
      onChange={(e) => this.props.handleItemChange(e.target.value)}
      value={this.props.itemVal}
      />
      <br />
      <input
      type="text"
      placeholder="Enter the quantity.."
      onChange={(e) => this.props.handleQtyChange(e.target.value)}
      value={this.props.qtyVal}
      />
      <br />
      <button onClick={() => this.props.addToCartBtn()}>
        Add to cart!
      </button>
    </div>
    );
  }
}

export default AddGrocery;

