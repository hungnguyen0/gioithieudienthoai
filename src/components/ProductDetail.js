import React, {Component} from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js';
class ProductDetail extends Component {
	constructor(props){
        super(props)
        this.state = {
           products : []
        }
    }    
    componentDidMount(){
      var {match} = this.props;
      if (match) {
      	var id = match.params.id;
      	axios({
        method: 'GET',
        url :`http://localhost:3000/products/${id}`,
        data : null
     	 }).then(res =>{
     	 	var data =res.data;
        	this.setState({
         	 products :res.data
        	});
      		}).catch( err =>{
        	console.log(err);
      		});
    	}
      }
 render() {

 	var {products} = this.state;
  	return (
      <React.Fragment>
            
            <div className="canh">
  		<div className="card nap mb-3" style={{maxWidth: 'auto'}}>
    	<div className="row">
      	<div className="col-md-4">
         <img src={this.state.products.image} className="card-img" />
      	</div>
      	<div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{this.state.products.name}</h5>
          <div className="col-md-12" >
            <div className="row">
              <p className="col-md-6 loaimay" style={{float:'left'}}>Loại sản phẩm : {this.state.products.name_category}</p>
              <p  className="col-md-6" style={{float:'right'}}>Tình trạng: {this.state.products.tinhtranghang === true ? 'Còn hàng' : 'Hết hàng'}</p>
            </div>
          </div>
          <p className="card-text price">Giá : {this.state.products.promotion}</p>
          <ul className="ul">
            <li>Loại Máy: {this.state.products.type}</li>
            <li>Cảm biến hình ảnh : {this.state.products.cambienhinhanh}</li>
            <li>Bộ Nhớ Trong: {this.state.products.khogiayscan} </li>
            <li>Tốc độ: {this.state.products.tocdoscan} </li>
          </ul>
        </div>
      	</div>
   		 </div>
  		  <NavLink className="navbar-brand" to="/"><button type="button" className="btn btn-primary">Trở về</button></NavLink>
      </div>

      </div>
      
        </React.Fragment>
   		);
	}
}

export default ProductDetail;