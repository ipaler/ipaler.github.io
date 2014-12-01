---
layout: post
title: "Hibernate @Temporal的使用"
modified:
categories: blog
excerpt:
tags: [Hibernate,JavaEE]
image:
comments: true
share: true
date: 2013-11-07T09:21:00 +08:00
---


## Hibernate @Temporal的使用

### hibernate标注用到@Temporal标注时，该属性的值不会被自动赋值。

### @Temporal标签的作用：
    (1) 如果在某类中有Date类型的属性，数据库中存储可能是'yyyy-MM-dd hh:MM:ss'要在查询时获得年月日，在该属性上标注@Temporal(TemporalType.DATE) 会得到形如'yyyy-MM-dd' 格式的日期。

    (2)如果在某类中有Date类型的属性，数据库中存储可能是'yyyy-MM-dd hh:MM:ss'要获得时分秒，在该属性上标注 @Temporal(TemporalType.TIME) 会得到形如'HH:MM:SS' 格式的日期。

    (3)如果在某类中有Date类型的属性，数据库中存储可能是'yyyy-MM-dd hh:MM:ss'要获得'是'yyyy-MM-dd hh:MM:ss'，在该属性上标注 @Temporal(TemporalType.TIMESTAMP) 会得到形如'HH:MM:SS' 格式的日期。


