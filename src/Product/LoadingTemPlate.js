
import React, { Fragment, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Loader from "react-loader-spinner";
import { Route } from 'react-router-dom';

export default function LoadingTemplate(props) {
    const { isLoading } = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: "HIDE_LOADING" })
        }, 3000);
        
    },[])
    
    const renderLoading = () => {
        if (isLoading) {
            return (
            <>
                <Loader
                type="Oval"
                color="#00BFFF"
                height={80}
                width={100}
                timeout={3000} 
                />
            </>
            )
        }else{
            return "";
        }
    }
    return (
        <Fragment>
            <Route path={props.path} exact render={(propsRoute) => {
                return <Fragment>
                    {renderLoading()}
                    <props.component {...propsRoute} />
                </Fragment>
            }} />

        </Fragment>
    )
}
