var dev_manual =
[
    [ "Introduction", "devman_intro.html", [
      [ "Primary design goals", "devman_intro.html#secdesign_goals", [
        [ "Correctness", "devman_intro.html#Developer_manualCorrectness", null ],
        [ "Robustness", "devman_intro.html#Developer_manualRobustness", null ],
        [ "Flexibility", "devman_intro.html#Developer_manualFlexibility", null ],
        [ "Ease of Use", "devman_intro.html#Developer_manualEaseofUse", null ],
        [ "Efficiency", "devman_intro.html#Developer_manualEfficiency", null ]
      ] ],
      [ "The overall design", "devman_intro.html#secoverall_design", null ]
    ] ],
    [ "Coding Conventions", "devman_code_format.html", [
      [ "Naming scheme", "devman_code_format.html#secnaming_scheme", [
        [ "General rules", "devman_code_format.html#Developer_manualGeneralrules", null ],
        [ "Geometric objects", "devman_code_format.html#Developer_manualGeometricobjects", null ],
        [ "Geometric data structures and algorithms", "devman_code_format.html#Developer_manualGeometricdatastructuresand", null ],
        [ "Kernel traits", "devman_code_format.html#Developer_manualKerneltraits", null ],
        [ "File names", "devman_code_format.html#Developer_manualFilenames", null ]
      ] ],
      [ "Programming conventions", "devman_code_format.html#secprogramming_conventions", null ],
      [ "Code format", "devman_code_format.html#seccode_format", null ],
      [ "File header", "devman_code_format.html#secfile_header", [
        [ "GPL version", "devman_code_format.html#Developer_manualGPLversion", null ],
        [ "LGPL version", "devman_code_format.html#Developer_manualLGPLversion", null ]
      ] ],
      [ "Requirements and recommendations", "devman_code_format.html#seccode_format_doc_req_and_rec", null ]
    ] ],
    [ "Geometry Kernels", "devman_kernels.html", [
      [ "Different kernels", "devman_kernels.html#secdifferent_kernels", [
        [ "Cartesian versus homogeneous   computation", "devman_kernels.html#secCartesianHomogeneousComputation", null ]
      ] ],
      [ "Kernel design and conventions", "devman_kernels.html#Developer_manualKerneldesignandconventions", null ],
      [ "Number-type based predicates", "devman_kernels.html#Developer_manualNumber", null ],
      [ "Missing functionality", "devman_kernels.html#secNewKernelTraits", null ],
      [ "Adding Function Objects to the Kernel", "devman_kernels.html#secAddingFunctionObject", null ]
    ] ],
    [ "Traits Classes", "devman_traits_classes.html", [
      [ "What are traits classes in CGAL?", "devman_traits_classes.html#secwhat_is_a_traits_class", null ],
      [ "Why are traits classes in CGAL?", "devman_traits_classes.html#secwhy_traits_classes", null ],
      [ "An example - planar convex hulls", "devman_traits_classes.html#sectraits_class_example", [
        [ "Traits class requirements", "devman_traits_classes.html#subsectraits_class_requirements", null ],
        [ "CGAL-provided traits classes", "devman_traits_classes.html#subseccgal_traits_classes", null ]
      ] ],
      [ "Kernel as traits", "devman_traits_classes.html#seckernel_traits", null ],
      [ "Requirements and recommendations", "devman_traits_classes.html#sectraits_class_req_and_rec", null ]
    ] ],
    [ "Checks: Pre- and Postconditions, Assertions, and Warnings", "devman_checks.html", [
      [ "Categories of checks", "devman_checks.html#secchecks_categories", null ],
      [ "Using checks", "devman_checks.html#secchecks_using", null ],
      [ "Controlling checks at a finer granularity", "devman_checks.html#secchecks_controlling", null ],
      [ "Suppress warnings using CGAL_assume.", "devman_checks.html#secchecks_cgal_assume", null ],
      [ "Exception handling", "devman_checks.html#secexception_handling", null ],
      [ "Requirements and recommendations", "devman_checks.html#secchecks_req_and_rec", null ]
    ] ],
    [ "Reference Counting and Handle Types", "devman_reference_counting.html", [
      [ "Reference counting", "devman_reference_counting.html#Developer_manualReferencecounting", null ],
      [ "Handle & Rep", "devman_reference_counting.html#Developer_manualHandleRep", null ],
      [ "Using Handle & Rep", "devman_reference_counting.html#Developer_manualUsingHandleRep", null ],
      [ "Templated handles", "devman_reference_counting.html#Developer_manualTemplatedhandles", null ],
      [ "Using templated handles", "devman_reference_counting.html#Developer_manualUsingtemplatedhandles", null ],
      [ "Allocation", "devman_reference_counting.html#Developer_manualAllocation", null ]
    ] ],
    [ "Memory Management", "devman_memory_management.html", [
      [ "The allocator macro", "devman_memory_management.html#secallocator_macro", null ],
      [ "Using the allocator", "devman_memory_management.html#secusing_memory_allocator", null ],
      [ "Requirements and recommendations", "devman_memory_management.html#secmemory_req_and_rec", null ]
    ] ],
    [ "Namespaces", "devman_namespaces.html", [
      [ "Namespace CGAL", "devman_namespaces.html#Developer_manualNamespaceCGAL", null ],
      [ "Namespace internal", "devman_namespaces.html#Developer_manualNamespaceinternal", null ],
      [ "Note on global template functions", "devman_namespaces.html#Developer_manualNoteonglobaltemplatefunctions", null ],
      [ "Requirements and recommendations", "devman_namespaces.html#Developer_manualRequirementsandrecommendations_1", null ]
    ] ],
    [ "Multithreading", "devman_multithreading.html", [
      [ "Thread Local Storage", "devman_multithreading.html#Developer_manualThreadlocal", null ],
      [ "Mutex", "devman_multithreading.html#Developer_manualMutex", null ]
    ] ],
    [ "Polymorphic Return Types", "devman_polyret.html", null ],
    [ "Iterators, Circulators and Handles", "devman_iterators_and_circulators.html", [
      [ "Iterator and circulator traits", "devman_iterators_and_circulators.html#seciterator_traits", null ],
      [ "Input and output iterators", "devman_iterators_and_circulators.html#secinput_and_output_iterators", null ],
      [ "Writing code with and for iterators, circulators, and handles", "devman_iterators_and_circulators.html#Developer_manualWritingcodewithandforiterators", [
        [ "Handle, iterator, or circulator?", "devman_iterators_and_circulators.html#sechandle_vs_it_vs_circ", null ],
        [ "Writing functions for iterators AND circulators", "devman_iterators_and_circulators.html#secit_and_circ_code", null ],
        [ "Writing an iterator for your container", "devman_iterators_and_circulators.html#secclass_iterator", null ],
        [ "Writing a circulator for your container", "devman_iterators_and_circulators.html#secclass_circulator", null ]
      ] ],
      [ "Requirements and recommendations", "devman_iterators_and_circulators.html#it_and_circit_and_circ_req_and_rec", null ]
    ] ],
    [ "Robustness Issues", "devman_robustness.html", [
      [ "The role of predicates and constructions", "devman_robustness.html#Developer_manualTheroleofpredicatesandconstructions", null ],
      [ "Requirements and recommendations", "devman_robustness.html#Developer_manualRequirementsandrecommendations", null ]
    ] ],
    [ "Portability Issues", "devman_portability.html", [
      [ "Checking for LEDA or GMP support", "devman_portability.html#secleda_gmp_support", null ],
      [ "Using Boost", "devman_portability.html#secboost_support", null ],
      [ "Using the version-number and configuration macros and flags", "devman_portability.html#secusing_version_macros", null ],
      [ "Identifying compilers and architectures", "devman_portability.html#secwhich_compiler", null ],
      [ "Known problems and workarounds", "devman_portability.html#secproblems_and_workarounds", [
        [ "Workaround flags", "devman_portability.html#secworkaround_flags", null ],
        [ "Macros connected to workarounds/compilers", "devman_portability.html#secworkaround_macros", null ],
        [ "Various other problems and solutions", "devman_portability.html#secvarious_problems", null ]
      ] ],
      [ "Requirements and recommendations", "devman_portability.html#secportability_req_and_rec", null ]
    ] ],
    [ "Debugging Tips", "devman_debugging.html", [
      [ "Graphical debugging", "devman_debugging.html#secgraphical_debugging", null ],
      [ "Cross-checkers", "devman_debugging.html#secdebugging_cross_checker", [
        [ "An example: Traits class binary cross-checker", "devman_debugging.html#Developer_manualAnexampleTraitsclassbinary", null ]
      ] ],
      [ "Examining the values of variables", "devman_debugging.html#secdebugging_handles_and_it", null ]
    ] ],
    [ "Running a Testsuite Locally", "devman_testing.html", [
      [ "Running the Testsuite Locally of a Single Package", "devman_testing.html#pkgTestsuite", null ],
      [ "Running the Whole Testsuite", "devman_testing.html#fullTestsuite", null ]
    ] ],
    [ "Editorial Board", "devman_submission.html", null ],
    [ "Recommended Reading", "devman_info.html", null ],
    [ "Creating a CMake Script for a Program Using CGAL", "devman_create_cgal_CMakeLists.html", "devman_create_cgal_CMakeLists" ],
    [ "Deprecation Notice", "deprecated.html", null ]
];