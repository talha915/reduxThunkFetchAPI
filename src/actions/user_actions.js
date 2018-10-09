export const FETCH_USER = 'FETCH_USER';

export const getAllUsers=()=>{
    return (dispatch)=>{
        fetch('http://jsonplaceholder.typicode.com/users')
            .then((res)=>res.json())
            .then((users)=>{
                dispatch({
                    type: FETCH_USER,
                    payload: users
                })
            })
    }
}