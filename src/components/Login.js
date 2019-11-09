import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
class NotFound extends Component {
	constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
        }
    }

    onChange = (event) =>{
      var target =event.target;
      var name =target.name;
      var type =target.type;
      var value =target.value;


      this.setState({
        [name] : value,
      });
    }

    onLogin = (e) =>{
    	e.preventDefault();
    	var { username, password } = this.state;
    	if ( username === 'admina' && password === 'admin') {
    		console.log('ok');
    		return this.props.history.push('/product-list')
    	}

    }

 render() {
 	var { username, password } = this.state;
  	return (
      <React.Fragment>
            <Header/>
  		<div className="panel panel-warning col-md-8 margin-left">
              <div className="panel-heading">
                <h3 className="panel-title mt-3 text-center">Trang Đăng Nhập
                </h3>
              </div>

              <div className="panel-body">
                <form onSubmit = {this.onLogin}>
                  <div className="form-group">
                    <label>Tên Đăng Nhập (admin) :</label>
                    <input type="text" name="username" value ={ this.state.username }   onChange ={this.onChange} className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Mật Khẩu (admin) :</label>
                    <input type="password" name="password" value ={ this.state.password }  onChange ={this.onChange} className="form-control" />
                  </div>
                  <br />
                  <div className="text-center">
                    <button type="submit"  className="btn btn-primary">Đăng Nhập</button>&nbsp;
                  </div>
                </form>
              </div>
            </div>
            <Footer/>
        </React.Fragment>
   		);
	}
}

export default NotFound;