###1.为什么要学习git
如果使用人力去管理多个版本的文件，第一个比较费人力，繁琐。文件会越来越多。
人力去管理的时候，人的记忆力有限，不可能去记住所有的版本中的变化。

此时，就需要有一个东西代替人去记忆这些版本，git就可以帮助我们去记忆这些文件版本。

###2.安装git
安装完毕之后，随意在一个文件夹的空白处，右键鼠标，点击git bash here
输入命令：git --version 如果有版本号出现，说明git安装成功。

###3.git相关的工作流程
git软件版本控制有三个名词：工作区(工作目录),暂存区，本地仓库
工作区指的就是我们的项目文件夹，就是写代码的那个项目目录(文件夹)
当我们在工作区编写了代码之后，可以将代码保存到暂存区(临时的将文件保存的区域)。
然后再将代码保存到本地仓库，在本地仓库中记录代码的版本

###4.配置git基本信息
git config --global user.name 你的名字
git config --global user.email 你的邮箱

git config --list

###【重要】5.git常用命令
    A.如果想要让一个项目被git所管理，必须将项目文件夹进行git初始化，一个项目只需要初始化一次
        git init
    B.如果想要查看当前git仓库的状态，
        git status
    在命令执行之后，会出现状态结果，其中颜色非常重要
    (如果是红色的文件，说明这个文件没有被git管理，也就是说没有将文件添加到暂存区)
    (如果是绿色的文件，说明这个文件已经被添加到了暂存区)
    (nothing to commit, working directory clean,   没有东西可以提交了，工作区是干净的)

    C.如果想要把文件添加到暂存区，使用git add命令
        git add 文件名
        git add .   //小圆点的意思是当前文件夹中的所有文件以及子文件夹中的所有文件
    D.将暂存区中的内容提交到仓库，使用git commit 命令
        git commit -m '做好了页面的基本结构'
    
    E.可以使用git log命令去查看当前git仓库所管理的版本
        git log

课堂练习：
在你的项目文件夹中。创建一个readme.txt文件，将文件添加到暂存区
再将文件提交到仓库，并给出提示文字‘保存了readme’，使用git log命令查看仓库版本


###6.代码回退
A.将暂存区中正确的代码覆盖工作区中有错误的代码
git checkout 文件名
B.将暂存区的某个文件进行删除
git rm --cached 文件名

【重要】C.从git本地仓库进行版本回退
git reset --hard 提交版本id

###7.分支
分支可以理解为是代码的副本。
有的时候需要开发功能，写新的代码，就会使用分支功能将代码拷贝一份。
我们在分支上编写新的代码对原本的代码(主分支master)不会有任何的影响，当开发完成之后，可以将分支上的新代码合并到原本的代码(master)中去

公司的上线代码使用master分支中的代码去运营。
创建一个你自己的分支(huangwei),在这个自己的分支中按照项目经历的吩咐去开发代码。
一个礼拜以后，这个功能终于写好了，交给项目经理进行审核，项目经理会将huangwei分支的代码合并到master分支中去。

###【重要】8.分支相关的命令
A.查看当前所有的分支
    git branch
B.创建新的分支
    git branch 分支名称
C.切换分支，注意:切换分支之前一定要保证当前工作区是干净(nothing to commit, working directory clean)
    git checkout 分支名称
D.合并分支，注意：这个命令是将merge后面的这个分支合并到当前分支。
    git merge 分支名称
E.创建分支并切换到这个新创建的分支
    git checkout -b 分支名称
F.删除分支
    git branch -d 分支名称 //删除已经合并过的分支
    git branch -D 分支名称 //强制删除没有合并过的分支

课堂练习：
创建一个你自己名字的分支，在分支里面创建一个你自己名字的html文件，文件里面随意编写内容。
将创建的html文件提交到本地仓库(commit),提交完成之后再切换回master分支，再进行合并(将你自己名字的分支合并到master分支中)
1）创建一个你自己名字的分支
    git branch qiufengmin
2)在分支里面创建一个你自己名字的html文件  
    git checkout qiufengmin
    创建文件
3）将创建的html文件提交到本地仓库(commit)
    git add .
    git commit -m'创建了qiufengmin.html'
4)提交完成之后再切换回master分支
    git checkout master
5)再进行合并(将你自己名字的分支合并到master分支中)
    git merge qiufengmin

###9.临时保存分支中的改动
临时保存分支中的改动
git stash
获取分支中的改动内容
git stash pop

###10.多人协作开发
项目经理(组长)：先创建项目的基本机构，然后将创建好的项目文件夹推送到github网站中
A.将创建好的项目初始化成git仓库
    git init
B.在github网站中创建一个远程仓库(一定不要创建readme.md文件)
C.将本地git仓库代码推送到远程仓库
    git push 远程仓库的地址 需要推送的分支名称
    git push https://github.com/LeeJackies/test.git master

D.当我们去推送代码到远程仓库的时候，远程仓库的地址比较长，可以给远程仓库的地址取别名
    git remote add 别名 仓库地址
    git remote add origin https://github.com/LeeJackies/test.git
E.我们在进行推送的时候可以记录推送的仓库地址和分支，使用-u参数就可以记住了
那么下次一次推送代码的时候直接git push
    git push -u https://github.com/LeeJackies/test.git master
下一次推送代码的时候，直接：
    git push

F.克隆远程仓库代码，如果项目是第一次下载，必须使用git clone命令下载项目代码
    git clone 远程仓库地址
    git clone https://github.com/LeeJackies/test.git

**删除缓存区的所有文件命令：**  git rm -r --cached .   #主要这个点一定要写

**查看git的日志信息：**  git log

**查看本地添加了哪些远程分支地址：** git remote

**本地分支重命名：**  git branch -m <oldbranch> <newbranch> #重命名本地分支

**回退：git reset 选项 提交点(选项：--hard表示全恢复 提交点：可用ID或标签) **：git reset --hard v0.1

**pull 则是将远程主机的master分支最新内容拉下来后与当前本地分支直接合并 ：**  git pull origin master

注意：
如果是多人协同开发，开发的项目远程仓库都小组长创建在自己github中的一个仓库
作为小组的成员来说，默认情况下是没有权限去曹邹小组长的仓库。
需要小组长分配操作权限给小组成员，需要将小组成员添加到仓库项目组成员中，将项目的邀请链接发送给小组成员。

补充：
如果做推送代码的时候，报错情形如下：
failed to push some refs to ......
就是因为本地仓库太旧了，需要拉取最新的代码
git pull 

###11.设置忽略清单
如果有一些文件不需要保存在git仓库中，可以创建一个.gitignore文件，在文件中书写这种无需使用git管理的文件名称即可。
