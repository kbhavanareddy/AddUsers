
//export --- to available to other componenets
export const DELETE_USER='DELETE_USER';

export function delete_user(username){
    return {

        type:DELETE_USER,
        username:username
    }
} 



export function create_user(userobj){
    
    
    return dispatch=>{
        fetch(`http://localhost:4000/createuser/${userobj.username}/${userobj.location}`)
        .then(resp=>resp.json())
        .then(respJSON=>{
            dispatch({
                type:CREATE_USER,
                data:respJSON
            });
        });
    };

}