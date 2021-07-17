let initialState={
    cart:[],
    cartDetail:[],
}

export const CartReducer =(state=initialState,action)=>{
    switch(action.type) {
        case "THEM_GIO_HANG":{
           let cartUpdate=[...state.cart];
           let index = cartUpdate.findIndex((spGH)=>spGH.maSP===action.spGioHang.maSP);
             if(index !== -1){
                 cartUpdate[index].soLuong+=1;
             }else{
                 cartUpdate.push(action.spGioHang);
             }
             state.cart=cartUpdate;
             return {...state}
        }
        case "XOA_GIO_HANG":{
            let carUpdate=[...state.cart];
            let index=carUpdate.findIndex((spGH)=>spGH.maSP===action.maSP);
            if(index!==-1){
                carUpdate.splice(index,1)
            }
            state.cart=carUpdate;
            return {...state}
        }
        case "TANG_GIAM_SO_LUONG":{
            let cartUpdate=[...state.cart];
            let spGioHang=cartUpdate.find((spGH)=>spGH.maSP===action.maSP);
            if(spGioHang){
                spGioHang.soLuong+=action.soLuong;
            }
            if(spGioHang.soLuong<1){
                alert("số lượng tối thiểu là 1")
                spGioHang.soLuong-=action.soLuong;
                return {...state}
            }
            state.cart=cartUpdate;
            return {...state}
        }
        case "XEM_CHI_TIET":{
            state.cartDetail=action.spChiTiet;
            return{...state}
        }
        default:
            return {...state};
    }
}
