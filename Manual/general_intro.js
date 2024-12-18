var general_intro =
[
    [ "Using CGAL on Unix (Linux, macOS, ...)", "usage.html", [
      [ "Quick Start: Compiling a Program using CGAL", "usage.html#usage_introduction", null ],
      [ "Prerequisites", "usage.html#secprerequisites", null ],
      [ "Downloading CGAL", "usage.html#secgettingcgal", [
        [ "Using a Package Manager", "usage.html#secusingpkgman", null ],
        [ "Using CGAL Source Archive", "usage.html#secusingwebsite", null ]
      ] ],
      [ "Header-only Usage", "usage.html#section_headeronly", null ],
      [ "Configuring your Program", "usage.html#usage_configuring", [
        [ "Specifying Missing Dependencies", "usage.html#usage_configuring_cmake_gui", null ],
        [ "Configuring an External Program", "usage.html#usage_configuring_external", null ],
        [ "Advanced Configuration Options", "usage.html#usage_configuring_advanced_cmake", null ]
      ] ],
      [ "Building your Program", "usage.html#usage_building_program", null ]
    ] ],
    [ "Using CGAL on Windows (with Visual C++)", "windows.html", [
      [ "Installing CGAL with the Vcpkg Library Manager", "windows.html#sec-installing-with-vcpkg", [
        [ "Installing Vcpkg", "windows.html#ssec-vcpk-install-vcpk", null ],
        [ "Installing CGAL with Vcpkg", "windows.html#ssec-vcpk-install-cgal", null ],
        [ "Compiling an Example", "windows.html#ssec-vcpkg-compile-example", [
          [ "Configuring of an Example", "windows.html#sssec-vcpkg-configuration-example", null ],
          [ "Additional Dependencies", "windows.html#sssect-vcpkg-additional-dependencies", null ],
          [ "Compilation of an Example", "windows.html#sssect-vcpkg-compilation", null ]
        ] ],
        [ "Configuring and Compiling Your Code Using CGAL", "windows.html#subsect-vpckg-my-code", null ]
      ] ],
      [ "Installing from the Source Archive", "windows.html#install-from-source", [
        [ "Installing GMP and MPFR", "windows.html#ssect-installer-gmp-mpfr", null ],
        [ "Installing Boost", "windows.html#ssect-installer-boost", null ],
        [ "Compiling an Example", "windows.html#ssect-installer-compile-example", [
          [ "Additional Dependencies", "windows.html#ssect-installer-additional-dependencies", null ],
          [ "Compilation of an Example", "windows.html#sssect-installer-compilation", null ]
        ] ],
        [ "Configuring and Compiling My Code Using CGAL", "windows.html#subsect-installer-my-code", null ]
      ] ],
      [ "Trying CGAL algorithms using a Precompiled Demo", "windows.html#sec-win-demo", null ]
    ] ],
    [ "Compilers and Third Party Dependencies", "thirdparty.html", [
      [ "Supported Compilers", "thirdparty.html#seccompilers", null ],
      [ "CMake", "thirdparty.html#seccmake", null ],
      [ "Essential Third Party Libraries", "thirdparty.html#secessential3rdpartysoftware", [
        [ "Standard Template Library (STL)", "thirdparty.html#thirdpartystl", null ],
        [ "Boost", "thirdparty.html#thirdpartyBoost", null ],
        [ "Multi Precision Number Type Library", "thirdparty.html#thirdpartyMP", null ]
      ] ],
      [ "Optional Third Party Libraries", "thirdparty.html#secoptional3rdpartysoftware", [
        [ "Qt6", "thirdparty.html#thirdpartyQt", null ],
        [ "Eigen", "thirdparty.html#thirdpartyEigen", null ],
        [ "OpenGR", "thirdparty.html#thirdpartyOpenGR", null ],
        [ "PointMatcher", "thirdparty.html#thirdpartylibpointmatcher", null ],
        [ "LEDA", "thirdparty.html#thirdpartyLeda", null ],
        [ "Multiple Precision Floating-point Interval (MPFI)", "thirdparty.html#thirdpartyMPFI", null ],
        [ "RS and RS3", "thirdparty.html#thirdpartyRS3", null ],
        [ "NTL", "thirdparty.html#thirdpartyNTL", null ],
        [ "ESBTL", "thirdparty.html#thirdpartyESBTL", null ],
        [ "Intel TBB", "thirdparty.html#thirdpartyTBB", null ],
        [ "LASlib", "thirdparty.html#thirdpartyLASlib", null ],
        [ "OpenCV", "thirdparty.html#thirdpartyOpenCV", null ],
        [ "METIS", "thirdparty.html#thirdpartyMETIS", null ],
        [ "zlib", "thirdparty.html#thirdpartyzlib", null ],
        [ "Ceres Solver", "thirdparty.html#thirdpartyCeres", null ],
        [ "GLPK", "thirdparty.html#thirdpartyGLPK", null ],
        [ "SCIP", "thirdparty.html#thirdpartySCIP", null ],
        [ "OSQP", "thirdparty.html#thirdpartyOSQP", null ]
      ] ]
    ] ],
    [ "How to use CGAL with CMake", "devman_create_and_use_a_cmakelist.html", "devman_create_and_use_a_cmakelist" ],
    [ "Summary of CGAL's Configuration Variables", "configurationvariables.html", [
      [ "Summary of CGAL's Configuration Variables", "configurationvariables.html#installation_summary", [
        [ "Component Selection", "configurationvariables.html#installation_component_selection", null ],
        [ "Compiler and Linker Flags", "configurationvariables.html#installation_flags", null ],
        [ "Additional Compiler and Linker Flags", "configurationvariables.html#installation_additional_flags", null ],
        [ "Miscellaneous Variables", "configurationvariables.html#installation_misc", null ],
        [ "Variables Used Only When Building Programs (Such as Demos or Examples)", "configurationvariables.html#installation_variables_building", null ],
        [ "Variables Providing Information About 3rd-Party Libraries", "configurationvariables.html#installation_variables_third_party", null ],
        [ "Boost Libraries", "configurationvariables.html#installation_boost", [
          [ "Version 1.72 and Later", "configurationvariables.html#inst_boost_1_72_plus", null ],
          [ "Version 1.69 and Earlier", "configurationvariables.html#inst_boost_up_2_1_69", null ]
        ] ],
        [ "GMP and MPFR Libraries", "configurationvariables.html#installation_gmp", null ],
        [ "Qt6 Library", "configurationvariables.html#installation_qt6", null ],
        [ "LEDA Library", "configurationvariables.html#installation_leda", null ],
        [ "MPFI Library", "configurationvariables.html#installation_mpfi", null ],
        [ "RS and RS3 Library", "configurationvariables.html#installation_rs", null ],
        [ "NTL Library", "configurationvariables.html#installation_ntl", null ],
        [ "Eigen Library", "configurationvariables.html#installation_eigen", null ],
        [ "ESBTL Library", "configurationvariables.html#installation_esbtl", null ],
        [ "METIS Library", "configurationvariables.html#installation_metis", null ],
        [ "TBB Library", "configurationvariables.html#installation_tbb", [
          [ "TBB 2020 or before", "configurationvariables.html#installation_old_tbb", null ],
          [ "OneTBB", "configurationvariables.html#installation_new_tbb", null ]
        ] ],
        [ "LASlib library", "configurationvariables.html#installation_laslib", null ],
        [ "OpenCV library", "configurationvariables.html#installation_OpenCV", null ],
        [ "SCIP library", "configurationvariables.html#installation_SCIP", null ],
        [ "GLPK library", "configurationvariables.html#installation_GLPK", null ]
      ] ],
      [ "Compiler Workarounds", "configurationvariables.html#installation_compiler_workarounds", null ]
    ] ],
    [ "Installing CGAL libraries", "installation.html", [
      [ "Quick Installation", "installation.html#installation_idealworld", null ],
      [ "Configuring CGAL with CMake", "installation.html#installation_configwithcmake", [
        [ "CGAL Libraries", "installation.html#seclibraries", null ],
        [ "CGAL Examples and Demos", "installation.html#installation_examples", null ],
        [ "Debug vs. Release", "installation.html#installation_debugrelease", null ],
        [ "Other CMake Variables", "installation.html#installation_miscvariables", null ],
        [ "Configuring CGAL with the CMake GUI", "installation.html#installation_configuring_gui", null ],
        [ "Configuring CGAL with the cmake Command-Line Tool", "installation.html#installation_configuring_cmd", null ],
        [ "CGALConfig.cmake", "installation.html#installation_cgalconfig", null ]
      ] ],
      [ "Multiple Builds", "installation.html#seccmakeoutofsource", [
        [ "Building Examples and Demos", "installation.html#ssec_installation_build_ex_demos", null ]
      ] ],
      [ "Installing CGAL", "installation.html#secinstalling", null ],
      [ "Building a Program using CGAL", "installation.html#installation_buildprogram", null ]
    ] ],
    [ "Organization of the Manual", "manual.html", [
      [ "Organization of the Manual", "manual.html#secorganization", null ],
      [ "Organization of the Reference Manual", "manual.html#secorganizationref", null ],
      [ "Marking of Special Functionality", "manual.html#markingSpecialFunctionality", [
        [ "Advanced Features", "manual.html#advanced_features", null ],
        [ "Debugging Support Features", "manual.html#debugging_support", null ],
        [ "Deprecated Code", "manual.html#deprecated_code", null ]
      ] ]
    ] ],
    [ "General Information", "preliminaries.html", [
      [ "Namespace CGAL", "preliminaries.html#Preliminaries_namespace", null ],
      [ "Thread Safety", "preliminaries.html#Preliminaries_thread_safety", null ],
      [ "C++17 Support", "preliminaries.html#Preliminaries_cc0x", null ],
      [ "Checks", "preliminaries.html#preliminaries_secchecks", null ],
      [ "Compile-time Flags to Control Inlining", "preliminaries.html#Preliminaries_flags", null ],
      [ "Identifying the Version of CGAL", "preliminaries.html#seccgal_version", null ]
    ] ],
    [ "License", "license.html", [
      [ "GNU GPL", "license.html#licensesGPL", null ],
      [ "GNU LGPL", "license.html#licensesLGPL", null ],
      [ "Rationale of the License Choice", "license.html#licensesRationale", null ],
      [ "Commercial Licenses", "license.html#licensesCommercial", null ],
      [ "License Checking", "license.html#licenseCheck", null ],
      [ "Determining the license of a CGAL file", "license.html#licensesWhere", null ]
    ] ]
];