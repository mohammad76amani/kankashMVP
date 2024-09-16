import axios from "axios"

const UsersData = () => {
    axios.get('api/users').then(response => {
        console.log(response.data)
    }).catch(err=>console.log(err));
    return(
        <div>
            usres data
        </div>
    )
}
export default UsersData
