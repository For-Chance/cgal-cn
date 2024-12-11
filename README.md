![CGAL](Installation/doc_html/images/cgal_2013_grey.png)

> 当前版本：v6.0.1

CGAL（计算几何算法库）是一个 C++ 开源库，提供了高效可靠的计算几何算法实现。

版本发布
=============
CGAL 主要通过源码包形式发布，每年发布两个版本，发布信息会在 [CGAL 官方网站](https://www.cgal.org/) 公告。

快速上手
=========================

**重要提示：从 5.0 版本起，CGAL 已改为纯头文件库，使用时无需再编译构建 CGAL 库文件。**

访问 [CGAL 开发文档](https://doc.cgal.org/latest/Manual/general_intro.html) 查看使用说明和入门教程。

开源协议
=======
详见 [LICENSE.md](LICENSE.md) 文件。

代码仓库结构
==========================

CGAL 的 Git 仓库结构与发布版本的源码包不同。仓库根目录包含一个用于项目配置和程序构建的 `CMakeLists.txt` 文件，以及多个功能包（packages）。大部分功能包实现了特定的数据结构或算法（如 `Convex_hull_2`凸包算法、`Triangulation_3`三角剖分等），此外还有一些特殊用途的功能包：

* `Installation` - 配置文件和 CMake 支持
* `Maintenance` - 项目维护工具
* `Core`、`CGALimageIO`、`Qt_widget`、`GraphicsView` - 核心组件库
* `Scripts` - 开发辅助脚本
* `Testsuite` - 测试框架
* `Documentation` - 文档系统
* `STL_Extension` - STL 扩展功能

相关链接
================
* [官方网站](https://www.cgal.org/)
* [最新版本文档](https://doc.cgal.org/)
* [主分支文档（每周更新）](https://cgal.geometryfactory.com/CGAL/doc/master/)
* [每日构建测试结果](https://cgal.geometryfactory.com/CGAL/testsuite/)
* [开发规范](https://github.com/CGAL/cgal/wiki/Guidelines) 和 [新手开发指南](https://github.com/CGAL/cgal/wiki/Information-for-New-Developers)
