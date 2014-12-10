---
layout: post
title: "Linux学习与总结"
modified:
categories: blog
excerpt:
tags: [Linux]
image:
  feature: so-simple-sample-image-5.jpg
  credit: WeGraphics
  creditlink: http://wegraphics.net/downloads/free-ultimate-blurred-background-pack/
comments: true
share: true
date: 2014-12-10T10:00:00 +08:00
---

### linux基本思想和历史
    关于开源   free software --->  OSS(Open Source Software) 
    关于GNU
        目标：开发一个完全自由的unix操作系统 
        (https://www.gnu.org/home.zh-cn.html)
    关于GPL(General Public License):通用公共许可证
    linux发展史 (http://images.51cto.com/files/uploadimg/20081210/162406575.gif)
    unix like 系统的主要原则：  　
        1.区分大小写 　
        2.一切都是文件  /dev  --->设备文件 eg: sda  hda
                        /proc ---> 内核实时虚拟出来的(其实就是内存中的数据) 
        3.配置信息以文本形式保存
        4.避免不必要的用户交互，以参数来完成信息传递 　
        5.组合短小的程序完成复杂任务 　
　
## linux基本操作
    文本界面   /etc/inittab    id:3:initdefault: 
    图形界面   /etc/inittab    id:5:initdefault: 
        0 - halt (Do NOT set initdefault to this)
        1 - Single user mode 
        2 - Multiuser, without NFS (The same as 3, if you do not have networking    )
        3 - Full multiuser mode 　
        4 - unused  　
        5 - X11 　
        6 - reboot (Do NOT set initdefault to this) 　
　
        控制台 　
            默认有6个 (F1 ~ F6:文本界面) 
                       F7:图形界面  　
                图形界面下切换：control + alt + F1/F2/F3/F4/F5/F6/F7 
                文本界面下切换：alt + F1/F2/F3/F4/F5/F6 　
                对应的设备文件为：/dev/tty1   tty2 ...
        虚拟控制台(所有远程登陆和x-windows的shell使用/dev/pts/0 1 ....等设备文件)
                    pts/0 pts/1 .... 
        切换：  文本界面--->图形界面  startx   或者 alt+F7
                图形界面--->文本界面  control + alt + F1~F6  
    用户分类 
        UID:        0-65535 　
        系统用户(uid:1-499) 　
        超级用户(uid:0) 　
        普通用户(uid:500-65535) 　
        id命令：
    密码修改 
        passwd  　
    sudo 
       让一个普通用户tom变成只允许执行root特定命令的一个用户
    su  　
    su - 
　
## 基本命令和帮助获取
    帮助获取 
        help                可以用于查看shell的内部命令 
        info                文件的查找路径为/usr/share/info 　
        man                 文件的查找路径为/usr/share/man  　
            常用命令：
            man ls          查看ls的man手册  　
            man a ls        在全部的man手册中查找ls的信息
            man -f ls       查找ls 的man手册文件是哪个 
            man -k vsftpd   查看关键字为vsftpd的相关内容
            man 7 man
            在查找出来的内容中,可以使用/或者?来进行查找，n代表下一个,q表示退出 
        command -h/--help
     
        README  　
        howto
        doc 　
        g.cn 
　
    基本命令和帮助获取
        shell
            bash 
            csh 　
            ksh 　
            sh  　
        linux命令 　
            分类：内部命令   help  　
                  外部命令   
            命令   参数   选项 
        文件操作命令  　
            ls -lhdaA
            mv  　
            cp -rapv 
            rm -rf  　
            touch
            >
            >>  　
　
        目录操作命令  　
            pwd 　
            cd  　
            mkdir -p 
            rmdir
            rm -r
        文本显示命令  　
            echo -en 
            printf  　
            cat 　
            less 
            more 
            vi  　
            head 
            tail 
        关闭和离开系统 　
            exit            退出当前shell
            logout          退出登陆shell
            shutdown 
                    shutdown -h 0         关机 
                    shutdown -r now       重启 
            reboot          重启  　
            init 
                    init 0  关机  　
                    init 6  重启  　
            halt            关机  　
            control+alt+del 重启  　
　
            shutdown,init,halt的区别与关联:
                shutdown -h now 命令 将向所有连接在机器上的人发送将要关机的消息，然后调用init 0,而init 0 将关闭所有的服务，最后调用halt -p -f 关闭电源
        其他  　
            hostname 
            uname -ra
            id  　
            arch 
            free -m 　
            which
            uptime  　
            top 　
            w
            who 　
            whoami  　
            whois
            date 
            cal 　
            file 
## 用户/组/权限 　
    用户/组：
        命令： 　
            adduser 　
            useradd 　
            userdel 　
            id  　
            passwd  　
            groupadd 
            groupdel 
            usermod 　
        相关配置文件： 　
            /etc/passwd         用户帐号信息文件 
            /etc/shadow         用户密码文件  　
            /etc/group          用户组帐号信息文件
            /etc/gshadow        用户组帐号信息文件
            /etc/login.defs     在使用useradd的时候，一些用户信息的定义 　
    权限： 　
        rwx 　
        suid   是一种特殊权限,设置了suid的程序文件,在用户执行该程序时,用户的权限是该程序文件属主的权限 (eg: /usr/bin/passwd)
        sgid  与suid相似
        sticky bit /tmp 　
     
        eg1: 
        -rw-r--r--  1  root root  141 Mar 22 11:49 a.sh 　
        drwxr-xr-x  2 root root 4.0K Mar 22 15:51 tom
        lrwxrwxrwx. 1 root root 22 Mar 13  2013 /etc/grub.conf -> ../boot/grub/grub.conf 
        brw-rw----  1  root disk  8, 33 Mar 22 13:56 /dev/sdc1  　
        crw--w----  1 root tty       4,   1 Mar 22  2014 tty1
        srwxrwxrwx. 1  mysql mysql 0 Mar 31 02:52 mysql.sock 
        prw-r--r-- 1 root root 0 Mar 22 15:48 /tmp/Lee.pipe 　
        注：mkfifo  /tmp/class.pipe     创建一个命名管道文件 
     
        eg2: 
        -rwsr-xr-x. 1  root root  31K Feb 17  2012 /usr/bin/passwd  　
        drwxrwxrwt. 26 root root  4.0K Mar 22 15:20 /tmp/
        -rwsrwsrwt  1 root root  141 Mar 22 11:49 a.sh  　
        -rwxr-xr-T 1 root root 141 Mar 22 11:49 b.sh 
        -rwxr-Sr-x 1 root root 141 Mar 22 11:49 c.sh 
　
        chgrp
        chown
        chmod
　
## 磁盘/交换分区/文件系统/文件管理
    硬盘的识别
        ide接口：hda,hdb,hdc,.. 
        sata接口：sda,sdb,...  　
    硬盘相关命令： 　
        df  　
        du  　
        mount
        umount  　
        eject
        fdisk
    交换分区 
        swap 
　
    文件系统 
        ext2,ext3,ext4  　
    文件管理 
        文件名：   最多255个字符，第一个字符为.（点）的为隐藏文件 ,应尽量避免 / > < ? * : ' 空格  这些特殊字符 
　
shell基础 　
    shell基本语法
        $0      自身文件名
        $1      传入的第一个参数 
$2  　
        ${10}   传入的第一个参数 
        $#      传入参数的个数 　
        $?      上一条语句执行后返回的状态码，0表示执行成功，非0表示失败
         
        $*      表示这个脚本传入的所有参数(视为个体） 　
        $@      表示这个脚本传入的所有参数(视为一个整体)
        $$      表示当前脚本执行时的pid
        $!      表示上一条放在后台执行的命令的pid  　
　
        变量  　
            a=3 　
            echo $a 　
            echo ${a}
        变量叠加 
            a=3 　
            b=a 　
            我要想达到将变量b的值又当成变量，取出变量a的值 
            echo $$b            ??  　
            echo ${$b}          ??  　
　
            eval  echo \$$b     正确  　
        运算  　
　
            [ 3 -eq 3 ]            []是bash内嵌的命令，也是用于测试的。[[]]通用性更好些。      用于测试
            [[ 3 = 3 && 5 > 2 ]]   [[]]是关键字，里面可以用&&、||、<、>等类似Ｃ语言的语法；    用于测试 
            (( 7 > 5 ))            (())，用于计算表达式。                                      用于测试  　
            ( exit; )              ()可以把多个命令括起来，在一个子shell运行。 
            { exit; }              {}可以把多个命令括起来，在当前shell运行。 　
            $((1+1))               $(())算术表达式
            `pwd`  <==>  $(pwd)    ` `和$()等价,其实是要执行里面的命令然后用输出代替$()内容的。  　
            ${a}                   ${}，表示一个变量
　
            a=$((a+1))  　
            let a=a+1
            a=$(echo "$a+1"|bc) 　
            a=$(expr $a + 1) 
            常见的算数操作符 
                +
                -
                *
                /   除（取整)
                %   取余  　
                <<  左移位 　
                >>  右移位 　
                &   位与  　
                |   位或  　
                ^   位异或 　
            常见的关系操作符 
                <
                >
                <=  　
                >=  　
                ==  　
                !=  　
                &&  　
                ||  　
            测试关系运算  　
                test --> [ ] 
                -lt 小于  　
                -gt 大于  　
                -le 小于等于 
                -ge 大于等于 
                -eq 等于  　
                -ne 不等于 　
            test:
            [3 -gt 2]
            [ 3 -gt 2 ] 　
            [ 3 > 2 ]
            [ 1 > 2 ]
　
            [ $a = a ]  　
            [ x$a = xa ] 
            [ x$am = xam ]  　
            [ x${a}m = xam ] 
            [ "x${a}m" = xam ]  　
　
            [ "a" = a && "b" = b ]  　
            [ "a" = a -o "b" = b ]  　
            [[ "a" = a && "b" = b ]] 
            [ "a" = a ] && [ "b" = b ]  　
　
            [ $a -eq 0 ] 
            [ $? -eq 0 ] 
            (( $a > 7 )) 
            [[ $a > 7 ]] 
            [ $a -gt 7 ] 
        变量扩展 
            a=1234567.89 
            ${#a}               统计变量a的长度 
            ${a:=3}             如果变量a为空，把3赋值给a  　
            ${a:-4}             如果变量a为空，把4临时赋值给a(只是使用一次，执行后并没有把值赋给变量a）  　
            ${a:+3}             如果变量a不为空，把3赋值给a 　
            ${a:?}              如果变量a不为空，把3赋值给a 　
            ${a:3}              截取第3位到最后     (注：它的从第0位开始的,截取第3位到最后，其实是从字符里的第4位开始的)
            ${a:3:5}            截取第3位后面的5个字符  (不是截取第3到5位)
        条件判断语句  　
            格式： 　
            if COMMANDS; then COMMANDS; [ elif COMMANDS; then COMMANDS; ]... [ else COMMANDS; ] fi  　
            eg1: 
            if pwd; then 
                echo "ok"
            else 
                echo "failed"
            fi  　
　
            eg2: 
            if [ "3" -eq 3 ]; then  　
                echo "ok"
            else 
                echo "failed"
            fi  　
        循环语句 
        for 　
            格式：for NAME [in WORDS ... ] ; do COMMANDS; done 　
                  for (( exp1; exp2; exp3 )); do COMMANDS; done 　
　
            for ((i=1;i<=5;i++));do 　
                echo $i 　
            done 
         
            for i in 1 2 3 4 5; do  　
                echo $i 　
            done 
　
        while
            格式：while COMMANDS; do COMMANDS; done 
            条件为真才执行 　
            while :; do          
                date 
                sleep 1 　
            done 
　
        until
            格式：until COMMANDS; do COMMANDS; done 
            条件为假才执行 　
        其他流程控制  　
        case 
            格式：case WORD in [PATTERN [| PATTERN]...) COMMANDS ;;]... esac
　
            action=start 
            case $action in 　
                start)  　
                    echo start  　
                    ;;  　
                stop)
                    echo stop
                    ;;  　
                *)  　
                    echo usage  　
                    ;;  　
            esac 
        select  　
            格式：select NAME [in WORDS ... ;] do COMMANDS; done
        continue: 从for,while,until循环中跳到下一步（跳出本次循环),再继续执行循环，直到循环结束跳出 　
        break: 从for,while,until循环中退出 
        shift:参数位移  　
        函数  　
        格式：function name { COMMANDS ; } 　
              name () { COMMANDS ; } 
             
## 文本处理 
    head 
    tail 
    cat 　
    tac 　
    sed 　
    awk 　
    grep 
vim编辑器  　
    vim有三种工作模式, 用户可以自由切换 
    命令模式(Command): vi/vim的默认模式, 输入命令 
        –从其它模式切换到命令模式: <ESC>键
        –很多命令以冒号(:)开始, 命令后加叹号表示强制执行 　
    :set nonu
    :set nu 　
    :r /tmp/aa.txt  　
    插入模式(Insert): 插入文本  　
        –从命令模式, 通过命令 i I a A o O s S 等进入 
    i   当前光标 
    I   行首  　
    a   光标之后 
    A   行末  　
    o   在当前行下一行插入
    O   在当前行上一行插入
    s   删除光标所在字符后再插入 
    S   删除光标所在行后再插入 　
　
    普通模式(normal)或者可视模式(Visual): 高亮并选定正文 　
        –从命令模式, 通过命令v 切换 
    光标定位:
            k(上) 
        h(左)   l(右) 　
            j(下) 
    gg  文章首 　
    G   文章杯 　
    0   行首  　
    $   行末  　
    M   可显示页的中部 　
    L   可显示面的底部非空首字 　
　
    删除字符：
    dd  删除一行 
    3dd 删除包括当前行的以下三行 
    dw  删除一个单词  　
    dW  删除一个单词(将相连的特殊符号当成一个单词；(eg:  don't)  　
    dgg 删除当前光标行到第一行之间的所所有行（包括当前行)
    dG  删除当前光标行到最后一行之间的所所有行（包括当前行)  　
    ..  　
     
    复制/粘贴/撤销 
    yy  复制当前行
    3yy 复制包括当前行的以下三行 
    p   粘贴粘贴板的内容到当前行的下面 　
    3p  　
    P   粘贴粘贴板的内容到当前行的上面 　
    u   撤销上一次操作 　
    .   再做一次上一次的操作  　
    r   替换一个字符  　
    R   从光标当前位置进行覆盖替换
    ......  　
　
## 系统管理工具  　
　
## 进程管理 
    ps  　
    uptime  　
    top 　
    kill 
    killall 　
## 基本文件查找/处理
    find 
    which
    uniq 
    sort 
    tr  　
    awk 　
    sed 　
    grep 
    tail 
    head 
     
## 基本网络管理  　
    ifconfig 
    iwconfig 
    netstat 　
    ss  　
    ip  　
        ip addr add 172.16.1.12/255.255.255.0 broadcast 172.16.1.255 dev eth1
        ip addr del 172.16.1.12/255.255.255.0 broadcast 172.16.1.255 dev eth1
        ip link set eth1 up 　
        ip link set eth1 down
    route
    ping 
    mtr 　
     
## 软件包管理
    rpm 　
    1.安装  rpm -ivh vsftpd-2.2.2-6.el6_0.1.x86_64.rpm 
            rpm -ivh vsftpd-2.2.2-6.el6_0.1.x86_64.rpm --nodeps  ##不考虑依赖安装  　
            rpm -ivh vsftpd-2.2.2-6.el6_0.1.x86_64.rpm --nodeps --replacefiles --force  ##强制替换安装 
            rpm -ivvh       ##更详细的显示 
    2.删除  rpm -e vsftpd   ##只用名字就可以 　
　
    3.升级  rpm -Uvh vsftpd-2.2.2-6.el6_0.1.x86_64.rpm      #如果没有老版本，安装，如果有，升级 
            rpm -Fvh vsftpd-2.2.2-6.el6_0.1.x86_64.rpm      #如果没有老版本，不能升级,有，能升级 　
    4.查看  rpm -qip vsftpd-2.2.2-6.el6_0.1.x86_64.rpm      #查看这个包的信息 　
            rpm2cpio  vsftpd-2.2.2-6.el6_0.1.i686.rpm  |cpio -idm   #打开这个rpm 包  　
            rpm -ql vsftpd                                          #查看这个包的详细信息(已经安装）
            rpm -qlp vsftpd-2.2.2-6.el6_0.1.i686.rpm                #查看这个包的详细信息(没安装也可以） 　
            rpm -qa vsftpd                      #查看这个包是否安装（精确查找） 
            rpm -qa |grep vsftp                 #模糊查找
            rpm -qf /etc/vsftpd/vsftpd.conf     #查看这个文件来自哪个包,在/var/lib/rpm/[__db.*]里面有记录包和文件的对应关系
    5.校验  rpm -V vsftpd                       #只要修改了这个软件安装的任何文件,都要变化,如果变了，列出来
            rpm --import /public.key            ##导入公钥，gpgcheck=1的时候用
    yum 　
　
内核模块/参数 　
　
时间同步服务  　
　
计划/周期任务 　
    at  　
    at 23:45 03/20/14
　
    crontab 　
        crontab -e  　
        #    分钟 小时 日 月 周 
        #    * * * * * /bin/echo "xxxxxx" >>/root/tom01.tmp 　
        #    30 2 20-30 3-6 * /root/backup.sh   #每年3－6月 20－30号 2：30 备份  　
        #    30 2 * * 5,6    /root/backup.sh    #每周5.周6 02：30备份 　
        #    * 8-18/2 * * * /root/backup.sh     #每天08点－18点每2个小时备份一次 　
        #    1 10 28 * 2 /root/backup.sh        #每个月的28号10：01或每个月的星期2都执行 
        crontab -r  #删除所有的计划任务  　
     
## LANMP
    linux
    apache  　
    nginx
    mysql
    php/python/per  　
　
    windows +   iis             +   sql server  +   asp.net 　
    linux   +   apaceh/nginx    +   mysql       +   php/python/per  　
    unix    +   tomcat/jboss    +   oracle      +   jsp 　
## 虚拟化 　
　
　



