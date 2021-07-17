import React, { Component } from 'react';
import { connect } from 'react-redux';
import { history } from '../App';
import "../assets/scss/cart.scss"
 class Cart extends Component {
      renderCart =()=>{
        return this.props.cart.map((cart, index)=>{
            return <tr key={index}>
                <td>{cart.maSP}</td>
                <td>{cart.tenSP}</td>
                <td><img className="imgCart" src={cart.hinhAnh} alt={cart.tenSP} height="50px"/></td>
                <td>
                    <button onClick={()=>{this.props.tangGiamSoLuong(cart.maSP,1)}} className="btn btn-success p-0 mr-2" style={{width:"24px"}}>+</button>
                    {cart.soLuong}
                    <button onClick={()=>{this.props.tangGiamSoLuong(cart.maSP,-1)}}  className="btn btn-success p-0 ml-2" style={{width:"24px"}}>-</button>
                </td>
                <td>{(cart.giaBan).toLocaleString()}</td>
                <td>{(cart.soLuong*cart.giaBan).toLocaleString()}</td>
                <td><button onClick={()=>{this.props.handleDeleteCart(cart.maSP)}}  className="btn btn-danger"><i className="far fa-trash-alt"></i></button></td>
            </tr>
        })
     }
     handleClose=()=>{history.goBack()}
     onTongTien=()=>{
       return this.props.cart.reduce((tt,phone,index)=>{
       return  tt +=(phone.giaBan*phone.soLuong)
         },0)
     }
    render() {
        return (
            <div className="container">
                <div className="text-right mt-5"><button  className="btn btn-danger" onClick={this.handleClose}><i className="fas fa-backspace"></i></button></div>
                <div className="overLoad">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Mã Sản Phẩm</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Hình Ảnh</th>
                            <th>Số Lượng</th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCart()}
                    </tbody>
                </table>
                <div className="text-right w-100">  <h4 >Tổng tiền: {(this.onTongTien()).toLocaleString()}</h4></div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        cart:state.CartReducer.cart,
    };
};
const mapDispatchToProps=(dispatch)=>{
    return {
        handleDeleteCart:(maSP)=>{
            let action ={
                type:"XOA_GIO_HANG",
                maSP,
            };
            dispatch(action);
        },
        tangGiamSoLuong:(maSP,soLuong)=>{
            let action={
                type:"TANG_GIAM_SO_LUONG",
                maSP,
                soLuong,
            }
            dispatch(action);
        },
        
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Cart)