import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx';

const GroceryArr = [
        {id: 1, quantity: 5, description: "frozen pizza"},
        {id: 2, quantity: 10, description: "greek yogurt"},
        {id: 3, quantity: 2, description: "wine"},
        {id: 4, quantity: 1, description: "iced coffee"}
      ];
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      itemQueryStr: '',
      qtyQueryStr: '',
    }
    // Not necessary
    // this.itemChangeHandler = this.itemChangeHandler.bind(this);
    // this.qtyChangeHandler = this.qtyChangeHandler.bind(this);
    // this.handleAddToCartBtn = this.handleAddToCartBtn.bind(this);
  }

  componentDidMount() {
    this.setState({ list: GroceryArr });
  }

  itemChangeHandler(item) {
    this.setState({ itemQueryStr: item });
  }

  qtyChangeHandler(qty) {
    this.setState({ qtyQueryStr: qty });
  }

  handleAddToCartBtn() {
    if (this.state.itemQueryStr.length !== 0 && this.state.qtyQueryStr.length !== 0) {
      const updatedArr = [...this.state.list];
      updatedArr.push({id: this.state.list.length + 1, quantity: Number(this.state.qtyQueryStr), description: this.state.itemQueryStr});
      this.setState({ 
        list: updatedArr,
         itemQueryStr: '',
          qtyQueryStr: '' 
        });
      console.log(this.state.list)
    }
  }

  render () {

    return (
      <div>
        <GroceryList 
        GroceryDetails={this.state.list}
        />
        <AddGrocery 
        handleItemChange={(item) => this.itemChangeHandler(item)}
        handleQtyChange={(qty) => this.qtyChangeHandler(qty)}
        addToCartBtn={() => this.handleAddToCartBtn()}
        itemVal={this.state.itemQueryStr}
        qtyVal={this.state.qtyQueryStr}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

