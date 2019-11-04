# Agile board cli（abc）开发扩展

## 小工具使用

### 命令行工具 cac

### 输入prompt

### 带颜色的输出 chalk

### 发送http请求 node-fetch

### json文件读写 jsonfile

## 涉及的部分领域对象

### 卡

- 在jira里面可能叫issue，在trello里面叫card

### 项目

- 在jira里面叫project，在trello叫dashboard

### 账户

- 在jira里面需要【用户名，api的密码， endpoint url】，在trello需要【api key，api token】

### 发布

- 在jira里面叫version， trello里面没有

### 卡的流动状态

- 在jira里面是transitions， trello里面是list

## 如何扩展feature

### 扩展基于领域对象feature 步骤

- 1. 在feature文件下新建文件夹，如trello
- 2. 在新建的文件夹（如trello）下，创建对某个特定对象操作的文件，包含各种操作的function，并exports function，e.g. 创建对card对象的操作文件card.js， 包含方法show， showStatus
- 3. 在feature/interface 对应的操作对象文件下的，require新增的操作对象，并在switch部分返回对应type的操作对象

### 扩展新的系统account 步骤

- 1. 在feature文件下新建文件夹，如trello
- 2. 在新建的文件夹（如trello）下，创建account.js，包含一个init方法，负责从用户的输入读取对应的信息，并存储到config文件夹下的json文件
- 3. 在feature/interface 对应的操作对象文件下的，require新增的account操作对象，并在switch部分返回

### 对不同的系统，扩展feature，实际就是对所有领域对象的操作，在一个新的系统全部实现一遍，但是实现的行为存在差异性

*XMind: ZEN - Trial Version*
