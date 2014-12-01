---
layout: post
title: "解决M2eclipse插件引起的Pom.Xml校验错误"
modified:
categories: blog
excerpt: "解决M2eclipse插件引起的Pom.Xml校验错误"
tags: [Java,eclipse,pom.xml,m2eclipse,maven,plugin]
image:
comments: true
share: true
date: 2013-11-06T12:30:49 +08:00
---


## Pom.Xml校验错误

遇到了相同的问题，但是不打算解决它，总结一下：

1.pom.xml文件报Plugin execution not covered by lifecycle configuration: org.apache.maven.plugins:maven-resources-plugin:2.2:resources (execution: default-resources, phase: process-resources) pom.xml /testMaven-common line 3 Maven Project Build Lifecycle Mapping Problem

2.导致此错误是m2eclipse插件0.12及之前的版本在Eclipse 内执行了一系列的生命周期引起冲突导致的，如果你的maven报此类错误，而又用到了maven-resources-plugin这个插件，那么请按你的项目pom.xml中加上

<plugin>
      <groupId>org.eclipse.m2e</groupId>
      <artifactId>lifecycle-mapping</artifactId>
      <version>1.0.0</version>
      <configuration>
        <lifecycleMappingMetadata>
          <pluginExecutions>
            <pluginExecution>
              <pluginExecutionFilter>
                <groupId>org.apache.maven.plugins</groupId>
       <artifactId>maven-resources-plugin</artifactId>
                <versionRange>[1.2,)</versionRange>
                <goals>
                <goal>resources</goal>
                 <goal>testResources</goal>
                </goals>
              </pluginExecutionFilter>
              <action>
                <ignore />
              </action>
            </pluginExecution>
          </pluginExecutions>
        </lifecycleMappingMetadata>
      </configuration>
    </plugin>
    
解决冲突，具体原因参看http://wiki.eclipse.org/M2E_plugin_execution_not_covered

