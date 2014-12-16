---
layout: post
title: "查看Tomcat版本的正确方法"
modified:
categories: blog
excerpt:
tags: [Tomcat]
image:
comments: true
share: true
date: 2014-12-16T14:55:00 +08:00
---


## 如何查看Tomcat的版本

查看Tomcat版本的方法有很多，有从日志中查找输出的，有从说明文件中查看版本信息的;

也可以直接看 lib\catalina.jar 里面的/org/apache/catalina/util/ServerInfo.properties 文件


其实这些方法都不是正确的方法。
 
最佳的方法应该是：
Tomcat本身提供了查看版本的脚本命令：version
就在Tomcat的安装目录的bin子目录下，有两个文件：
· version.bat -- Windows下的批处理脚本
· version.sh -- Linux下的Shell脚本
 
执行脚本就可以查看Tomcat的版本了。


有时会遇到打开version.bat文件会一闪而过的情况，导致无法看清内容就关闭了窗口，此时
编辑Version.bat文件 在最后一行写上pause保存后再双击运行Version.bat文件即可。
