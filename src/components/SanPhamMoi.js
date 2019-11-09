import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js';

class SanPhamMoi extends Component {
	 constructor(props){
        super(props)
        this.state = {
           products : [],
           keyword : '',
        }
    }    
    componentDidMount(){
      axios({
        method: 'GET',
        url :'http://localhost:3000/products',
        data : null
      }).then(res =>{
        console.log(res);
        this.setState({
          products :res.data
        });
      }).catch( err =>{
        console.log(err);
      });
    }

    onChange = (event) =>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name] : value
      });
    }

    render() {
    var { products,keyword } = this.state;
    let search = this.state.products.filter(
      (product) =>{
        return product.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1;
      }
    );  
  	return (
      <React.Fragment>
            <Header/>
  		<div className="text-center row"> 
      <div className="btn-group button_margin">
        
      </div> 
      <input className="form-control mr-sm-2 search" name="keyword" value={keyword} onChange ={ this.onChange} type="search" placeholder="Search" aria-label="Search" />
  						{search.map((product,index) => {
                                    if( product.name_category == 'sản phẩm mới' ){
                                        return < Item key={index} product={product} />
                                    }
                       	})}
      	</div>
        <Footer/>
        </React.Fragment>
   		);
	}
}

class Item extends Component {
    onClickThis(){
        alert('Cảm ơn đã đặt hàng');
    }
    render() {
        return (
          <div className="col-md-3">
          <div className="card" style={{width: '20rem'}}>
           <div className ="img-hover-zoom hinh">
              <img src={this.props.product.image} className="image" alt="..." />
            </div>
            <div className="card-body">
            <button type="col-md-6 button" onClick={this.onClickThis} className="btn btn-dark">Đặt hàng</button>
            <NavLink type="col-md-6 button" className="btn btn-info xemchitiet" to={`/products/${this.props.product.id}/productdetail`}>Xem chi tiết</NavLink>
            </div>
            <div className="card-body">
        		<h5 className="card-title">{this.props.product.name}</h5>
        		<span className="col-md-6 price"><p className="card-text text-center text-danger">{this.props.product.promotion} đ</p></span>
             	<span className="col-md-6 sale"><p className="card-text"><strike className="text-secondary">{this.props.product.price} đ</strike></p></span>
      		</div>
          </div> 
          </div> 

        );
    }
}
export default SanPhamMoi;