构建 CGAL 示例或演示程序
=====================================

从 5.0 版本开始，CGAL 已改为纯头文件库，因此无需预先构建库文件。使用 CGAL 的基本步骤如下：

``` {.bash}
git clone https://github.com/CGAL/cgal.git /path/to/cgal.git
cd /path/to/cgal.git/Triangulation_2/examples/Triangulation_2
mkdir -p build/debug
cd build/debug
cmake -DCMAKE_BUILD_TYPE=Debug -DCGAL_DIR=/path/to/cgal.git ../..
make
```

上述命令演示了如何以调试模式构建 CGAL 自带的示例程序。

注意：虽然 CGAL 是纯头文件库，但其部分功能需要依赖外部库，如 GMP、MPFR 等。

构建使用 CGAL 的自定义程序
=============================

如果您要构建一个不是 CGAL 自带的程序，且该程序还没有 `CMakeLists.txt` 文件，可以使用 CGAL 提供的脚本 [`cgal_create_cmake_script`](Scripts/scripts/cgal_create_cmake_script)（位于 `/path/to/cgal.git/Scripts/scripts/`）在程序根目录下生成基础的 `CMakeLists.txt` 文件。

``` {.bash}
git clone https://github.com/CGAL/cgal.git /path/to/cgal.git
cd /path/to/your/program
/path/to/cgal.git/Scripts/scripts/cgal_create_cmake_script
mkdir -p build/debug
cd build/debug
cmake -DCMAKE_BUILD_TYPE=Debug -DCGAL_DIR:PATH=/path/to/cgal.git ../..
make your_program
```

由于脚本生成的基础 `CMakeLists.txt` 无法预知您使用了 CGAL 的哪些功能，因此不会自动链接 CGAL 的可选第三方依赖库。您需要查看所使用的 CGAL 功能包的文档，了解需要添加哪些依赖。您也可以参考相关功能包自带的示例和演示程序中的 `CMakeLists.txt` 来完善您的配置文件。

仓库结构说明
====================

如果您是下载的源码包而不是克隆的 Git 仓库，文件组织结构会略有不同，详见 [CGAL Git 仓库结构说明](README.md)。

开发文档
=============

更多详细信息请参考 [CGAL 开发手册](https://doc.cgal.org/latest/Manual/general_intro.html)。
