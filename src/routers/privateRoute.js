// import { useSelector } from 'react-redux';

export  function privateRoute() { 
    // const isAuthenticat = useSelector(state => state.authReducer);
    // console.log(isAuthenticat)
    return(
        !!window.localStorage.getItem('token')
    )
}
