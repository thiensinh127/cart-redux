import React, { Component } from "react";
import {connect} from "react-redux";
import {history} from "../App";
import { Link } from "react-router-dom";
import "../assets/scss/productItem.scss"
class ProductItem extends Component {

  render() {
    let {ProductItem} = this.props;

    return (
      <>
        <div className="cart">
          <Link to ="/detail"><img
          className=" cart-img-top imgProductItem"
            height="220px"
            width="200px"
            src={ProductItem.hinhAnh}
            alt={ProductItem.tenSP}
          /></Link>
          
          <div className="card-body p-0 mb-5">
             <div className="nameProduct">{ProductItem.tenSP}</div>
            <div className="priceProduct"> {(ProductItem.giaBan).toLocaleString()}</div> 
            <button  className="btn btn-success mr-4"  onClick={()=>{
             this.props.xemChiTiet(ProductItem)
            }}
            ><i className="fas fa-table"></i></button>
            <button className="btn btn-success " onClick={()=>{ this.props.themGioHang(ProductItem) }} ><i className="fas fa-shopping-cart"></i></button>
          </div>
        </div>
      </>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    themGioHang:(spClick)=>{
      const spGioHang={
        maSP: spClick.maSP,
        tenSP: spClick.tenSP,
        giaBan: spClick.giaBan,
        hinhAnh: spClick.hinhAnh,
        soLuong:1,
      };
      let action ={
        type:"THEM_GIO_HANG",
        spGioHang,
      };
      dispatch(action)  ;
      history.push('/cart')
    } ,
    xemChiTiet:(spClick)=>{
      const spChiTiet={
        maSP: spClick.maSP,
        tenSP: spClick.tenSP,
        manHinh: spClick.manHinh,
        heDieuHanh: spClick.heDieuHanh,
        cameraTruoc: spClick.cameraTruoc,
        cameraSau: spClick.cameraSau,
        ram: spClick.ram,
        rom:spClick.rom,
        giaBan:spClick.giaBan,
        hinhAnh:spClick.hinhAnh
      
      };
      let action ={
        type:"XEM_CHI_TIET",
        spChiTiet,
      };
      dispatch(action);
      history.push('/detail')
    } ,
}
}

export default connect(null, mapDispatchToProps)(ProductItem);
