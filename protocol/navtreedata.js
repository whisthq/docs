/*
@licstart  The following is the entire license notice for the
JavaScript code in this file.

Copyright (C) 1997-2019 by Dimitri van Heesch

This program is free software; you can redistribute it and/or modify
it under the terms of version 2 of the GNU General Public License as published by
the Free Software Foundation

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

@licend  The above is the entire license notice
for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Whist Protocol", "index.html", [
    [ "Supported Platforms", "index.html#autotoc_md1", [
      [ "Server", "index.html#autotoc_md2", null ],
      [ "Client", "index.html#autotoc_md3", null ]
    ] ],
    [ "High-Level Overview", "index.html#autotoc_md4", [
      [ "Current Encoding Status", "index.html#autotoc_md5", null ]
    ] ],
    [ "File Structure", "index.html#autotoc_md6", null ],
    [ "Development", "index.html#autotoc_md7", [
      [ "Installation of Dependencies", "index.html#autotoc_md8", [
        [ "Linux", "index.html#autotoc_md9", null ],
        [ "MacOS", "index.html#autotoc_md10", [
          [ "Windows", "index.html#autotoc_md11", null ]
        ] ]
      ] ],
      [ "Building the Protocol", "index.html#autotoc_md14", [
        [ "Ccache", "index.html#autotoc_md15", null ]
      ] ],
      [ "Running the Protocol", "index.html#autotoc_md16", [
        [ "Running in Xcode", "index.html#autotoc_md17", null ],
        [ "Sentry", "index.html#autotoc_md18", null ]
      ] ],
      [ "Tips for Specific Tools", "index.html#autotoc_md19", [
        [ "IDEs", "index.html#autotoc_md20", null ],
        [ "MacOS CLI", "index.html#autotoc_md21", null ],
        [ "Linux CLI", "index.html#autotoc_md22", null ]
      ] ],
      [ "Further documentation", "index.html#autotoc_md23", null ]
    ] ],
    [ "CI & CD", "index.html#autotoc_md24", [
      [ "Continuous Integration", "index.html#autotoc_md27", null ]
    ] ],
    [ "Styling", "index.html#autotoc_md28", [
      [ "clang-format", "index.html#autotoc_md29", null ],
      [ "clang-tidy", "index.html#autotoc_md30", null ],
      [ "Logz.io", "index.html#autotoc_md31", null ]
    ] ],
    [ "Whist Desktop Clients", "md_client_README.html", null ],
    [ "Whist Windows/Linux Ubuntu Servers", "md_server_README.html", null ],
    [ "Debugging Tools", "md_whist_debug_README.html", [
      [ "Debug Console", "md_whist_debug_README.html#autotoc_md141", [
        [ "Checks & Tests", "index.html#autotoc_md25", null ],
        [ "Unit Testing", "index.html#autotoc_md26", null ],
        [ "Option Flags", "md_client_README.html#autotoc_md47", null ],
        [ "Recommended Workflow for Building Server Protocol on Linux", "md_server_README.html#autotoc_md81", null ],
        [ "Overview", "md_whist_debug_README.html#autotoc_md142", null ],
        [ "How to enable", "md_whist_debug_README.html#autotoc_md143", null ],
        [ "How to access", "md_whist_debug_README.html#autotoc_md144", null ],
        [ "Support Commands", "md_whist_debug_README.html#autotoc_md145", [
          [ "<tt>report_XXX</tt>", "md_whist_debug_README.html#autotoc_md146", null ],
          [ "<tt>set</tt>", "md_whist_debug_README.html#autotoc_md147", null ],
          [ "<tt>info</tt>", "md_whist_debug_README.html#autotoc_md148", null ],
          [ "<tt>insert_atexit_handler</tt> or <tt>insert</tt>", "md_whist_debug_README.html#autotoc_md149", null ],
          [ "<tt>plot_xxx</tt>", "md_whist_debug_README.html#autotoc_md150", null ]
        ] ]
      ] ],
      [ "Protocol Analyzer", "md_whist_debug_README.html#autotoc_md151", [
        [ "Overview", "md_whist_debug_README.html#autotoc_md152", null ],
        [ "How to run", "md_whist_debug_README.html#autotoc_md153", null ],
        [ "Report format", "md_whist_debug_README.html#autotoc_md154", [
          [ "High-level information/statistic", "md_whist_debug_README.html#autotoc_md155", null ],
          [ "Breakdown of frames", "md_whist_debug_README.html#autotoc_md156", [
            [ "Breakdown of segments", "md_whist_debug_README.html#autotoc_md157", null ]
          ] ]
        ] ],
        [ "Implementation", "md_whist_debug_README.html#autotoc_md158", [
          [ "Data structures", "md_whist_debug_README.html#autotoc_md159", null ],
          [ "Hooks", "md_whist_debug_README.html#autotoc_md160", null ],
          [ "Statistics generator", "md_whist_debug_README.html#autotoc_md161", null ],
          [ "Pretty printer for frame breakdown", "md_whist_debug_README.html#autotoc_md162", null ]
        ] ]
      ] ],
      [ "Plotter", "md_whist_debug_README.html#autotoc_md163", [
        [ "Overiew", "md_whist_debug_README.html#autotoc_md164", [
          [ "C++ API part", "md_whist_debug_README.html#autotoc_md165", [
            [ "Controlling APIs:", "md_whist_debug_README.html#autotoc_md166", null ],
            [ "Sampling API:", "md_whist_debug_README.html#autotoc_md167", null ]
          ] ],
          [ "Data Exporting API:", "md_whist_debug_README.html#autotoc_md168", null ],
          [ "Python Helper Part", "md_whist_debug_README.html#autotoc_md169", null ]
        ] ],
        [ "Introduce to the use of plotter", "md_whist_debug_README.html#autotoc_md170", [
          [ "Start and Stop sampling", "md_whist_debug_README.html#autotoc_md171", null ],
          [ "Practices for using the Sampling API", "md_whist_debug_README.html#autotoc_md172", [
            [ "MACRO Method", "md_whist_debug_README.html#autotoc_md173", null ],
            [ "dynamic Method", "md_whist_debug_README.html#autotoc_md174", null ]
          ] ],
          [ "Examples of using the <tt>plotter.py</tt>", "md_whist_debug_README.html#autotoc_md175", null ],
          [ "Basic usage", "md_whist_debug_README.html#autotoc_md176", null ],
          [ "Change style", "md_whist_debug_README.html#autotoc_md177", null ],
          [ "Use distribution graph", "md_whist_debug_README.html#autotoc_md178", null ],
          [ "Change Weight", "md_whist_debug_README.html#autotoc_md179", null ],
          [ "User Label filter", "md_whist_debug_README.html#autotoc_md180", null ],
          [ "Plot only specific range", "md_whist_debug_README.html#autotoc_md181", null ],
          [ "Compare two plots", "md_whist_debug_README.html#autotoc_md182", null ]
        ] ]
      ] ]
    ] ],
    [ "GF(256) Math Module", "GF256.html", null ],
    [ "Whist Congestion Control(WCC)", "md_whist_network_WCC.html", [
      [ "Terminology", "md_whist_network_WCC.html#autotoc_md226", null ],
      [ "Pacer (Network Throttler)", "md_whist_network_WCC.html#autotoc_md227", null ],
      [ "Algorithm", "md_whist_network_WCC.html#autotoc_md228", [
        [ "Arrival time model", "md_whist_network_WCC.html#autotoc_md229", null ],
        [ "Inter-group delay variation filter", "md_whist_network_WCC.html#autotoc_md230", null ],
        [ "Over-use detector", "md_whist_network_WCC.html#autotoc_md231", null ],
        [ "Rate control", "md_whist_network_WCC.html#autotoc_md232", [
          [ "Increase bitrate", "md_whist_network_WCC.html#autotoc_md233", null ],
          [ "Decrease bitrate", "md_whist_network_WCC.html#autotoc_md234", null ],
          [ "Saturate Bandwidth, Increase percentage and Maximum Bandwidth Available", "md_whist_network_WCC.html#autotoc_md235", [
            [ "Little tweaks", "md_whist_network_WCC.html#autotoc_md236", null ]
          ] ],
          [ "Burst Bitrate", "md_whist_network_WCC.html#autotoc_md237", null ]
        ] ],
        [ "RECOMMENDED values and reasons", "md_whist_network_WCC.html#autotoc_md238", null ]
      ] ],
      [ "References", "md_whist_network_WCC.html#autotoc_md239", null ]
    ] ],
    [ "Modules", "modules.html", "modules" ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ]
      ] ]
    ] ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Data Structure Index", "classes.html", null ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", null ],
        [ "Variables", "functions_vars.html", "functions_vars" ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "Globals", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", "globals_eval" ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"GF256.html",
"clipboard__synchronizer_8c.html#a7222478cfc809f67bbbe8768b63908ef",
"encode_8h.html#a8d1dbd84e74c7a17de0bc7252aedc211",
"fec_8h.html#a8ee73a7605a15e74c76080a7cacbe234",
"functions_vars_k.html",
"group__error__codes.html#gga18cc8e20ea58aa56867b56542e89b04da7fe2e359a4e6b3458cd53c6ce4b8c8c2",
"handle__frontend__events_8h.html",
"lodepng_8c.html#aab7a41a03154aa8d9ef65f2d434641b6",
"logging_8h.html#ad9df5c6dc713c515884e63a80f499f6b",
"nvidia__encode_8h.html#aaa3ec6c4cf2408824bdb8c7be1cc809e",
"sdl__utils_8c.html#a56933781127068f88e666df61403df95",
"structEncodedAudio.html#a9e4e38efe50a23c4874fae0f0e2bd9d3",
"structLinkedList.html#a340d247771112b5db8a551d82bbaeebb",
"structRingBuffer.html#a11f15372e26b540bdce0a8fe2d6d33d7",
"structVirtualInterface.html#a120fb93cbc63eaf769b1f0526629e08b",
"structWhistWindow.html#a5eeb32d49ab1899ccc47902930d7c436",
"wasapicapture_8h.html",
"whist_8h.html#ae8e4c0175929d141a35aca839fea9693"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';