// Duoshuo
var duoshuoQuery = {short_name:"ipaler"};
(function() {
	var ds = document.createElement('script');
	ds.type = 'text/javascript';ds.async = true;
	ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
	ds.charset = 'UTF-8';
	(document.getElementsByTagName('head')[0] 
	|| document.getElementsByTagName('body')[0]).appendChild(ds);
})();

// Baidu
window._bd_share_config = {
		"common" : {
			"bdSnsKey" : {},
			"bdText" : document.title,
			"bdMini" : "2",
			"bdMiniList" : false,
			"bdPic" : "document.description",
			"bdStyle" : "0",
			"bdSize" : "16"
		},
		"slide" : {
			"type" : "slide",
			"bdImg" : "1",
			"bdPos" : "right",
			"bdTop" : "130"
		},
		"image" : {
			"viewList" : [ "qzone", "tsina", "weixin", "tqq", "youdao" ],
			"viewText" : "猛戳这里：",
			"viewSize" : "16"
		}
	};
	with (document)
		0[(getElementsByTagName('head')[0] || body)
				.appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='
				+ ~(-new Date() / 36e5)];
