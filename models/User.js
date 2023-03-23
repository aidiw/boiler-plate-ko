const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength : 50
    },
    email: {
        type: String,
        trim: true,
        //trim 은 공백을 없애주는 역할
        unique : 1
        // 중복안되게
        
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        // 관리자, 유저를 구분하기위한 넘버링
        default: 0
        // 넘버를 주지않으면 0을 디폴트로주겠다.
    },
    image: String,
    token : {
        type: String
        //토큰을 통해 유효성 관리를함
    },
    tokenExp: {
        type: Number
        // 토큰의 유효기간
    }


})

const User = mongoose.model('User', userSchema)
// 스키마를 모델로 감싸줌

module.exports = {User}
// 해당 모델(스키마)을 다른곳에서도 쓰기위해 exports를 해줌