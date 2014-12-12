---
layout: post
title: "MySQL数据库的安装、修改密码，以及数据库备份与恢复"
modified:
categories: blog
excerpt:
tags: [Mysql,数据库,命令]
image:
comments: true
share: true
date: 2013-07-25T17:07:04 +08:00
---

### 一、MySQL的安装方法
        把 my-large.ini 复制一个出来，修改为 my.ini
        在 [mysqld] 下，增加2行
        basedir=D:/mysql
        datadir=D:/mysql/data
        找到  skip-locking 后，用下面的替换
        skip-locking
        skip-innodb
        skip-bdb
        skip-name-resolve
        DOS下进入d:mysql in 命令： mysqld-nt install 
        安装mysql服务 net start mysql 
        就可以启动了，root 默认无密码，localhost

### 二、MySQL修改密码
方法一:
        (适用于管理员或者有全局权限的用户重设其它用户的密码)
        进入命令行模式
        mysql -u root mysql 
        mysql> UPDATE user SET password=PASSWORD("new password") WHERE user='name'; 
        　　mysql> FLUSH PRIVILEGES; 
        　　mysql> QUIT
        
        
方法二: 
        (应用同上,只是方法不同)
         mysql -u root mysql 
        　　mysql> SET PASSWORD FOR name=PASSWORD('new password'); 
        　　mysql> QUIT
        (以上两种方法不常用,如果是管理员,我会用其它如phpmyadmin或者MYSQL-front 等工具来管理用户权限,比较直观又方便)
        最后必杀技:
        mysqladmin -u root "old password" "new password"
        解:以上有name的,请用你的用户名来替代.有new password请输入你想要设置的密码.


三、MySQL数据库备份与恢复 
方法一：
        1.导出整个数据库
        命令行进入到mysql安装目录的bin目录下
        假设装在D:/mysql/bin
        即：开始 运行 输入cmd
        d:
        cd mysql/bin
        然后执行下面语句
          mysqldump -u 用户名 -p 数据库名 > 导出的文件名 
        示例：mysqldump -u root -p sq_wcnc > d:wcnc.sql
2.恢复数据库
           常用source 命令
           进入mysql数据库控制台，
           如mysql -u root -p
           mysql>use 数据库
           然后使用source命令，后面参数为脚本文件（如.sql）
           mysql>source d:wcnc.sql
方法二：
        直接拷备MySQL安装目录下DATA目录的数据库即可
        
        
注：备份最好两个方法都做

