import React from 'react'
import { Loading } from 'notiflix/build/notiflix-loading-aio';

function Load({isShow}) {
    if(isShow){
        Loading.standard();
    }else{
        Loading.remove();
    }
    return (
        <div>Loading</div>
    )
}

export default Load