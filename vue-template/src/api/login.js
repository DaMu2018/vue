import {post} from '../provider/http-service'


/* 
    登录

*/

class LoginServe {
    login(params) {
        return post('/api/portal/login',params)
    }
}


export default new LoginServe() ;