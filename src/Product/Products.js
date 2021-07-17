import React, { Component } from "react";
import ProductItem from "./ProductItem";
import "../assets/scss/product.scss"
export default class Products extends Component {
  arrProduct = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },

    {
      maSP: 3,
      tenSP: "Sam Sung Note7",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 20000000,
      hinhAnh: "./img/sp_note7.png",
    },
    {
      maSP: 4,
      tenSP: "ViVo 850",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 8000000,
      hinhAnh: "./img/sp_vivo850.png",
    },
    {
      maSP: 5,
      tenSP: "Blackberry",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 12000000,
      hinhAnh: "./img/sp_blackberry.png",
    },
    {
      maSP: 6,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/iphoneX.png",
    },
  ];
  renderProduct = () => {
    return this.arrProduct.map((product, index) => {
      return (
        <div className="col-4 col4" key={index}>
          <ProductItem ProductItem={product} />
        </div>
      );
    });
  };
  render() {
    return (
      <>
      <div className="h4 text-center text" >Sản Phẩm</div>
      <div className="container d-flex text-center">
        <div className="row mt-5 boxShadow"> {this.renderProduct()}</div>
      </div>
      </>
    );
  }
}
