//https://randomuser.me/api/

import axios from 'axios';
const SEVER_Name = 'randomuser.me'
const urlGetUserDetail = 'https://randomuser.me/api'
const getUserDetail = async ()=>{
    try {
        // alert('You press getUserDetail')
        let response = await axios.get(urlGetUserDetail)
        if(response.status!=200){
            throw 'Failed Request'
        }
        if(response.data.results.length>0){
            let responeUser = response.data.results[0]
            let user = {}
            user.dateOfBirth = Date(responeUser.dob.date)
            user.email = responeUser.email??''
            user.gender = responeUser.gender??'male' //default value
            user.userId = `${responeUser.id.name}${responeUser.id.value}`
            user.address = `${responeUser.location.state},${responeUser.location.street.name}`
            user.username = responeUser.login.username??''
            user.url = responeUser.picture.large??''
            user.phone = responeUser.phone??''
            user.registeredDate = Date(responeUser.registered.date)
            return user
        }
        throw 'User not found'
    } catch (error) {
    
        throw error
    }
}

const login = ({email,password})=>{

}

//many other function

export default {getUserDetail,login,}