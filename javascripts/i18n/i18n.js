$(document).ready(function(){
//国际化加载属性文件
       jQuery.i18n.properties({
           name:'lang',
           path:'/javascripts/i18n/properties/',
           mode:'map',
           language:'zh-CN',
           callback: function() {// 加载成功后设置显示内容
                // 顶部导航
                $('#nav_label_blog').html($.i18n.prop('nav_label_blog')); 
                $('#nav_label_archives').html($.i18n.prop('nav_label_archives')); 
                $('#nav_label_about').html($.i18n.prop('nav_label_about')); 

                // 首页最下面的上下页导航
                $('.pag_older_label').html($.i18n.prop('pag_older_label'));      
                $('.pag_newer_label').html($.i18n.prop('pag_newer_label'));   
                $('#label_blog_archives').html($.i18n.prop('y'));      
                                                                               
           }
       });
});