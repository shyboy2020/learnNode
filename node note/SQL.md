## SQL基础

> 启动mysql服务  net start mysql
>
> 在mysql根目录下bin中终端打开，出入mysql -u root -p登录
>
> show databases; 查看数据库
>
> show tables; 查看库中的表
>
> source  .sql的文件路径  导入数据库数据
>
> select version();   查询数据库版本号
>
> select database(); 查询当前使用的是哪个数据库
>
> mysql> show
>     ->
>     ->
>     ->
>     ->
>     ->
>     ->
>     ->
>     -> \c
> mysql>   \c用来终止







#### SQL 语句

**DQL**：数据查询语言（带有select关键字的）

​		select..

**DML**：数据操作语言（对表当中的数据进行增删改的）

​		insert delete update

**DDL**：数据定义语言（带有create、drop、alter关键字的）

​		操作的是表的结构，不是表中的数据

**TCL**:事务控制语言

​		事务提交commit

​		事务回滚rollback

**DCL**:数据控制语言

​		授权grant

​		撤销权限revoke





### 一些sql命令

**desc 表明** 查询表的结构



## 1.简单查询

#### 1.1查询一个字段

select 字段名 from 表名

#### 1.2查询多个字段

select 字段名,字段名 from 表名

#### 1.3查询所有

select * from 表名    //实际开发中不常用，可读性低效率低

#### 1.4给查询的列起别名

select 字段名 as 别名 from 表名

​		原表列名是不会改变的

## 2.条件查询

	>语法格式
	>
	>select
	>
	>​	字段1，字段2
	>
	>from
	>
	>​	表名
	>
	>where
	>
	>​	条件

条件有：=,!=,><,>=,<=,

​				between..and ..  两个值之间

​				is null  结果为null的

​				and，or   同时出现时，and优先级大于or。使用（）可以改变优先级

​				in 包含，相当于多个or

​				not not可以取非，主要用在is或in中

​				like 模糊查询，支持%或_匹配

​				%匹配任意个字符，_匹配一个字符  （\可以转义）

## 3.排序

#### 3.1按单个字段排序

select 字段名1 from 表名 order by 字段名2    //根据字段名2升序（默认）

select 字段名1 from 表名 order by 字段名2 desc //指定降序

select 字段名1 from 表名 order by 字段名2 asc //指定升序

#### 3.2多个字段排序

select 字段名1，字段名2 from 表名 order by 字段名1 asc ，字段名2 desc 

​			先按照字段名1升序，如果字段名中有一样的，再按照字段名2降序

#### 3.3按字段的位置排序

select 字段名1 from 表名 order by 2  //按照第二列排序，此方法不推荐

## 4.数据处理函数

> 又称单行处理函数
>
> 特点：一个输入对应一个输出
>
> 相对的，多行处理函数是多个输入对应一个输出

### 4.1常见单行处理函数

#### upper 转换大写

select upper(字段名1)  ...

#### lower转换小写

select lower(字段名1) ...

#### substr取子串(substr(被截取的字符串,起始下标,截取的长度))

起始下标从1开始，没有0

#### concat 字符串拼接

concat(字段1+字段2)

#### length取长度

length(字段名)

#### trim去空格

trim(‘带有空格的字符串’)

#### round四舍五入

round(数字,保留小数点位数)

#### rand()生成随机数

#### ifnull可以将null转换成一个具体值

> 在数据库中，有null参与的数学运算，结果都是null

select ename,(sal + comm) * 12 as yearsal from emp  -> 输出的结果有问题

ifnull用法:ifnull(数据，被当作哪个值)

select ename,(sal + ifnull(comm,0)) * 12 as yearsal from emp

#### case..when..then..when..then..else..end

​	当员工的岗位是manager时，工资上调10%，岗位时saleman时，上调50%

​	select ename,job,sal from emp;

​	select

​		ename,

​		job,

​		sal,

​		(case job when 'MANAGER' then sal * 1.1 when 'SALESMAN' then sal * 1.5 else sal end) as newsal       	

​	from  emp;

## 5.分组函数

> 多行处理函数，特点:输入多行，最终输出一行
>
> count 计数
>
> sum 求和
>
> avg平均值
>
> max 最大值
>
> min 最小值

分组函数使用前必须先进行分组，如果没有对数据进行分组，整张表默认为一组