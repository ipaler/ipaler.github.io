// var browser={
//     versions:function(){ 
//            var u = navigator.userAgent, app = navigator.appVersion; 
//            return {//移动终端浏览器版本信息 
//                 mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端
//                 android: u.indexOf('Android') > -1, //android终端或者uc浏览器
//                 iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
//             };
//          }(),
//          language:(navigator.browserLanguage || navigator.language).toLowerCase()
// } 

// if((browser.versions.android)|| (browser.versions.iPhone )) {
// 	redirect();
// }

// function redirect(){
// 	location.replace("blog");
// }