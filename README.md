# CGAL 中文文档（持续翻译中）

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

翻译计划
================

### 第一阶段：基础设施
- [ ] Documentation/doc (手册)
- [ ] Installation (安装配置)
- [ ] CMake 系统
- [ ] Stream_support (流支持)
- [ ] Generator (生成器)
- [ ] Miscellany (杂项)
- [ ] STL_Extension (STL扩展)
- [ ] Profiling_tools (性能分析工具)

### 第二阶段：核心组件
- [ ] Kernel_23 (核心23D几何核)
- [ ] Cartesian_kernel (笛卡尔核)
- [ ] Homogeneous_kernel (齐次核)
- [ ] Filtered_kernel (过滤核)
- [ ] Number_types (数字类型)
- [ ] Algebraic_foundations (代数基础)
- [ ] Arithmetic_kernel (算术核)

### 第三阶段：基础数据结构
- [ ] HalfedgeDS (半边数据结构)
- [ ] Circulator (循环器)
- [ ] Handle (句柄)
- [ ] Property_map (属性映射)
- [ ] Hash_map (哈希映射)
- [ ] Modular_arithmetic (模运算)
- [ ] Random_numbers (随机数)
- [ ] Union_find (并查集)

### 第四阶段：2D基础算法
- [ ] Triangulation_2 (2D三角剖分)
- [ ] TDS_2 (2D三角剖分数据结构)
- [ ] Polygon (多边形)
- [ ] Convex_hull_2 (2D凸包)
- [ ] Segment_Delaunay_graph_2 (2D线段Delaunay图)
- [ ] Segment_Delaunay_graph_Linf_2 (L∞度量下的2D线段Delaunay图)
- [ ] Apollonius_graph_2 (2D阿波罗尼斯图)
- [ ] Voronoi_diagram_2 (2D Voronoi图)

### 第五阶段：2D高级算法
- [ ] Arrangement_on_surface_2 (2D曲面排列)
- [ ] Snap_rounding_2 (2D捕捉舍入)
- [ ] Straight_skeleton_2 (2D直骨架)
- [ ] Visibility_2 (2D可见性)
- [ ] Boolean_set_operations_2 (2D布尔运算)
- [ ] Triangulation_on_sphere_2 (球面三角剖分)
- [ ] Stream_lines_2 (2D流线)
- [ ] Straight_skeleton_extrusion_2 (2D直骨架拉伸)

### 第六阶段：3D基础算法
- [ ] Triangulation_3 (3D三角剖分)
- [ ] TDS_3 (3D三角剖分数据结构)
- [ ] Convex_hull_3 (3D凸包)
- [ ] Surface_mesh (表面网格)
- [ ] Polyhedron (多面体)
- [ ] Linear_cell_complex (线性单元复形)
- [ ] Combinatorial_map (组合映射)
- [ ] Generalized_map (广义映射)

### 第七阶段：3D高级算法
- [ ] Mesh_3 (3D网格)
- [ ] Subdivision_method_3 (3D细分方法)
- [ ] Minkowski_sum_3 (3D闵可夫斯基和)
- [ ] Convex_decomposition_3 (3D凸分解)
- [ ] Nef_2 (2D Nef多边形)
- [ ] Nef_3 (3D Nef多面体)
- [ ] Nef_S2 (球面Nef多边形)

### 第八阶段：空间数据结构
- [ ] AABB_tree (AABB树)
- [ ] Spatial_searching (空间搜索)
- [ ] Spatial_sorting (空间排序)
- [ ] Orthtree (八叉树/四叉树)
- [ ] Box_intersection_d (盒子相交)
- [ ] Interval_skip_list (区间跳表)
- [ ] SearchStructures (搜索结构)
- [ ] Kd_tree (KD树)

### 第九阶段：网格处理
- [ ] Polygon_mesh_processing (多边形网格处理)
- [ ] Surface_mesh_simplification (表面网格简化)
- [ ] Surface_mesh_parameterization (表面网格参数化)
- [ ] Surface_mesh_deformation (表面网格变形)
- [ ] Surface_mesh_topology (表面网格拓扑)
- [ ] Surface_mesh_skeletonization (表面网格骨架化)
- [ ] Surface_mesh_approximation (表面网格近似)
- [ ] Polygon_repair (多边形修复)

### 第十阶段：点集处理
- [ ] Point_set_2 (2D点集)
- [ ] Point_set_3 (3D点集)
- [ ] Point_set_processing_3 (3D点集处理)
- [ ] Alpha_shapes_2 (2D Alpha形状)
- [ ] Alpha_shapes_3 (3D Alpha形状)
- [ ] Alpha_wrap_3 (3D Alpha包裹)

### 第十一阶段：重建与拟合
- [ ] Poisson_surface_reconstruction_3 (泊松表面重建)
- [ ] Advancing_front_surface_reconstruction (前进前沿表面重建)
- [ ] Scale_space_reconstruction_3 (尺度空间重建)
- [ ] Optimal_transportation_reconstruction_2 (最优传输重建)
- [ ] Polygonal_surface_reconstruction (多边形表面重建)
- [ ] Jet_fitting_3 (3D曲面拟合)
- [ ] SMDS_3 (表面网格域分割)
- [ ] Heat_method_3 (热方法)

### 第十二阶段：代数与优化
- [ ] Solver_interface (求解器接口)
- [ ] QP_solver (二次规划求解器)
- [ ] Matrix_search (矩阵搜索)
- [ ] Polynomial (多项式)
- [ ] Algebraic_kernel_d (代数核)
- [ ] Algebraic_kernel_for_circles (圆的代数核)
- [ ] Algebraic_kernel_for_spheres (球的代数核)
- [ ] Principal_component_analysis (主成分分析)
- [ ] Optimal_bounding_box (最优包围盒)

### 第十三阶段：特殊功能
- [ ] Kinetic_data_structures (运动数据结构)
- [ ] Periodic_2_triangulation_2 (2D周期性三角剖分)
- [ ] Periodic_3_triangulation_3 (3D周期性三角剖分)
- [ ] Periodic_3_mesh_3 (3D周期性网格)
- [ ] Periodic_4_hyperbolic_triangulation_2 (2D双曲周期性三角剖分)
- [ ] Shape_detection (形状检测)
- [ ] Shape_regularization (形状规范化)
- [ ] Set_movable_separability_2 (2D可移动分离性)
- [ ] Weights (权重)

### 第十四阶段：可视化与接口
- [ ] BGL (Boost图库接口)
- [ ] GraphicsView (图形视图)
- [ ] CGAL_ipelets (Ipe插件)
- [ ] CGAL_ImageIO (图像IO)
- [ ] Three (Three.js接口)
- [ ] Basic_viewer (基础查看器)
