import React, { Component } from "react";
import {connect} from "react-redux";
import "../assets/scss/detail.scss"

 class Detail extends Component {
  render() {
    let {tenSP,hinhAnh,manHinh,heDieuHanh,cameraTruoc,cameraSau,ram,rom}=this.props.cartDetail;
      const handleClose =()=>{
      this.props.history.goBack("");
    }
    return (
      <div className="container">
        <div className="text-right mt-5"><button onClick={handleClose} className="btn btn-danger"><i className="fas fa-backspace"></i></button></div>
        <div className="row text-center detail">
          <div className="col-xs-12 col-md-5 flexDetail">
            <div className="display-4">{tenSP}</div>
            <div > <img className="imgDetail" src={hinhAnh} height="300px" alt={tenSP}/></div>
          </div>
          <div className="col-xs-12 col-md-7">
            <div className="display-4">Thông số kỹ thuật</div>
            <div className="row textLeft">
              <div className="col-4 font-weight-bold textLeft"> Màn hình</div>
              <div className="col-8 textLeft"> {manHinh}</div>
            </div>
            <div className="row">
              <div className="col-4 font-weight-bold textLeft"> Hệ điều hành</div>
              <div className="col-8 textLeft"> {heDieuHanh}</div>
            </div>
            <div className="row">
              <div className="col-4 textLeft font-weight-bold"> Camera trước</div>
              <div className="col-8 textLeft"> {cameraTruoc}</div>
            </div>
            <div className="row">
              <div className="col-4 textLeft font-weight-bold"> Camera sau</div>
              <div className="col-8 textLeft"> {cameraSau}</div>
            </div>
            <div className="row">
              <div className="col-4 textLeft font-weight-bold"> Ram</div>
              <div className="col-8 textLeft"> {ram}</div>
            </div>
            <div className="row">
              <div className="col-4 textLeft font-weight-bold"> Rom</div>
              <div className="col-8 textLeft"> {rom}</div>
            </div>
          </div>
        </div>
    </div>
    );
  };
};
const mapStateToProps=(state)=>{
  return {
    cartDetail:state.CartReducer.cartDetail
  };
};
export default connect(mapStateToProps,null)(Detail);