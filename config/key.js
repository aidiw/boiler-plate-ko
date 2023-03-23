// 환경변수 로컬환경과 배포환경에서 다르게 대처할수있도록
if(process.env.NODE_ENV ==='production'){
    module.exports = require('./prod');
}else {
    module.exports = require('./dev');
}
