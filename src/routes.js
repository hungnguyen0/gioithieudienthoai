import React from 'react';
import SanPhamHot from './components/SanPhamHot.js';
import SanPhamKhuyenMai from './components/SanPhamKhuyenMai.js';
import SanPhamMoi from './components/SanPhamMoi.js';
import Add from './components/Add.js';
import AllProduct from './components/AllProduct.js';
import ProductDetail from './components/ProductDetail.js';
import NotFound from './components/NotFound.js';
import Login from './components/Login.js';
import Sidebar from './components/Sidebar.js';
import ProductList from './components/ProductList.js';


const routes = [
	{
		path : '/add',
		exact : true,
		main : ({history})=> <Add history={history} />
	},
	{
		path : '/',
		exact : true,
		main : ()=> <AllProduct />
	},
	{
		path : '/products/:id/productdetail',
		exact : true,
		main : ({match})=> <ProductDetail  match ={match}/>
	},
	{
		path : '/products/:id/edit',
		exact : true,
		main : ({match , history})=> <Add  match ={match} history={history}/>
	},
	{
		path : '/sanphamhot',
		exact : true,
		main : ({match})=> <SanPhamHot match ={match}/>
	},
	{
		path : '/sidebar',
		exact : true,
		main : ({match})=> <Sidebar match ={match}/>
	},
	{
		path : '/sanphamkhuyenmai',
		exact : true,
		main : ({match})=> <SanPhamKhuyenMai match ={match}/>
	},
	{
		path : '/sanphammoi',
		exact : true,
		main : ({match})=> <SanPhamMoi match ={match}/>
	},
	{
		path : '/login',
		exact : true,
		main : ({history})=> <Login history={history} />
	},
	{
		path : '/product-list',
		exact : true,
		main : ()=> <ProductList  />
	},
	{
		path : '',
		exact : false,
		main : ()=> <NotFound />
	},
];

export default routes;