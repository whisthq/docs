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
      [ "Building the Protocol", "index.html#autotoc_md14", null ],
      [ "Running the Protocol", "index.html#autotoc_md15", [
        [ "Running in Xcode", "index.html#autotoc_md16", null ],
        [ "Sentry", "index.html#autotoc_md17", null ]
      ] ],
      [ "Tips for Specific Tools", "index.html#autotoc_md18", [
        [ "IDEs", "index.html#autotoc_md19", null ],
        [ "MacOS CLI", "index.html#autotoc_md20", null ],
        [ "Linux CLI", "index.html#autotoc_md21", null ]
      ] ],
      [ "Further documentation", "index.html#autotoc_md22", null ]
    ] ],
    [ "CI & CD", "index.html#autotoc_md23", [
      [ "Continuous Integration", "index.html#autotoc_md26", null ]
    ] ],
    [ "Styling", "index.html#autotoc_md27", [
      [ "clang-format", "index.html#autotoc_md28", null ],
      [ "clang-tidy", "index.html#autotoc_md29", null ],
      [ "Logz.io", "index.html#autotoc_md30", null ]
    ] ],
    [ "Whist Desktop Clients", "md_client_README.html", null ],
    [ "Whist Windows/Linux Ubuntu Servers", "md_server_README.html", null ],
    [ "Debugging Tools", "md_whist_debug_README.html", [
      [ "Debug Console", "md_whist_debug_README.html#autotoc_md144", [
        [ "Checks & Tests", "index.html#autotoc_md24", null ],
        [ "Unit Testing", "index.html#autotoc_md25", null ],
        [ "Option Flags", "md_client_README.html#autotoc_md50", null ],
        [ "Recommended Workflow for Building Server Protocol on Linux", "md_server_README.html#autotoc_md84", null ],
        [ "Overview", "md_whist_debug_README.html#autotoc_md145", null ],
        [ "How to enable", "md_whist_debug_README.html#autotoc_md146", null ],
        [ "How to access", "md_whist_debug_README.html#autotoc_md147", null ],
        [ "Support Commands", "md_whist_debug_README.html#autotoc_md148", [
          [ "<tt>report_XXX</tt>", "md_whist_debug_README.html#autotoc_md149", null ],
          [ "<tt>set</tt>", "md_whist_debug_README.html#autotoc_md150", null ],
          [ "<tt>info</tt>", "md_whist_debug_README.html#autotoc_md151", null ],
          [ "<tt>insert_atexit_handler</tt> or <tt>insert</tt>", "md_whist_debug_README.html#autotoc_md152", null ],
          [ "<tt>plot_xxx</tt>", "md_whist_debug_README.html#autotoc_md153", null ]
        ] ]
      ] ],
      [ "Protocol Analyzer", "md_whist_debug_README.html#autotoc_md154", [
        [ "Overview", "md_whist_debug_README.html#autotoc_md155", null ],
        [ "How to run", "md_whist_debug_README.html#autotoc_md156", null ],
        [ "Report format", "md_whist_debug_README.html#autotoc_md157", [
          [ "High-level information/statistic", "md_whist_debug_README.html#autotoc_md158", null ],
          [ "Breakdown of frames", "md_whist_debug_README.html#autotoc_md159", [
            [ "Breakdown of segments", "md_whist_debug_README.html#autotoc_md160", null ]
          ] ]
        ] ],
        [ "Implementation", "md_whist_debug_README.html#autotoc_md161", [
          [ "Data structures", "md_whist_debug_README.html#autotoc_md162", null ],
          [ "Hooks", "md_whist_debug_README.html#autotoc_md163", null ],
          [ "Statistics generator", "md_whist_debug_README.html#autotoc_md164", null ],
          [ "Pretty printer for frame breakdown", "md_whist_debug_README.html#autotoc_md165", null ]
        ] ]
      ] ],
      [ "Plotter", "md_whist_debug_README.html#autotoc_md166", [
        [ "Overiew", "md_whist_debug_README.html#autotoc_md167", [
          [ "C++ API part", "md_whist_debug_README.html#autotoc_md168", [
            [ "Controlling APIs:", "md_whist_debug_README.html#autotoc_md169", null ],
            [ "Sampling API:", "md_whist_debug_README.html#autotoc_md170", null ]
          ] ],
          [ "Data Exporting API:", "md_whist_debug_README.html#autotoc_md171", null ],
          [ "Python Helper Part", "md_whist_debug_README.html#autotoc_md172", null ]
        ] ],
        [ "Introduce to the use of plotter", "md_whist_debug_README.html#autotoc_md173", [
          [ "Practices for using the Sampling API", "md_whist_debug_README.html#autotoc_md174", [
            [ "MACRO Method", "md_whist_debug_README.html#autotoc_md175", null ],
            [ "dynamic Method", "md_whist_debug_README.html#autotoc_md176", null ]
          ] ],
          [ "Examples of using the <tt>plotter.py</tt>", "md_whist_debug_README.html#autotoc_md177", null ],
          [ "Basic usage", "md_whist_debug_README.html#autotoc_md178", null ],
          [ "Change style", "md_whist_debug_README.html#autotoc_md179", null ],
          [ "Use distribution graph", "md_whist_debug_README.html#autotoc_md180", null ],
          [ "Change Weight", "md_whist_debug_README.html#autotoc_md181", null ],
          [ "User Label filter", "md_whist_debug_README.html#autotoc_md182", null ],
          [ "Plot only specific range", "md_whist_debug_README.html#autotoc_md183", null ],
          [ "Compare two plots", "md_whist_debug_README.html#autotoc_md184", null ]
        ] ]
      ] ]
    ] ],
    [ "GF(256) Math Module", "GF256.html", null ],
    [ "Whist Congestion Control(WCC)", "md_whist_network_WCC.html", [
      [ "Terminology", "md_whist_network_WCC.html#autotoc_md228", null ],
      [ "Pacer (Network Throttler)", "md_whist_network_WCC.html#autotoc_md229", null ],
      [ "Algorithm", "md_whist_network_WCC.html#autotoc_md230", [
        [ "Arrival time model", "md_whist_network_WCC.html#autotoc_md231", null ],
        [ "Inter-group delay variation filter", "md_whist_network_WCC.html#autotoc_md232", null ],
        [ "Over-use detector", "md_whist_network_WCC.html#autotoc_md233", null ],
        [ "Rate control", "md_whist_network_WCC.html#autotoc_md234", [
          [ "Increase bitrate", "md_whist_network_WCC.html#autotoc_md235", null ],
          [ "Decrease bitrate", "md_whist_network_WCC.html#autotoc_md236", null ],
          [ "Saturate Bandwidth, Increase percentage and Maximum Bandwidth Available", "md_whist_network_WCC.html#autotoc_md237", [
            [ "Little tweaks", "md_whist_network_WCC.html#autotoc_md238", null ]
          ] ],
          [ "Burst Bitrate", "md_whist_network_WCC.html#autotoc_md239", null ]
        ] ],
        [ "RECOMMENDED values and reasons", "md_whist_network_WCC.html#autotoc_md240", null ]
      ] ],
      [ "References", "md_whist_network_WCC.html#autotoc_md241", null ]
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
"clipboard__synchronizer_8c.html#a635a1a73c5a3ba8808eba0dc69178c13",
"error__codes_8h.html",
"fec_8h.html#aca05f25f6a922833842317722b908ddc",
"functions_vars_n.html",
"group__error__codes.html#gga18cc8e20ea58aa56867b56542e89b04daabb75d9872d7af0406af1aeaefc7c04a",
"handle__frontend__events_8c.html#a84228b08cb688dd7b2cb46a6a95a5a48",
"lodepng_8c.html#a8b5b5e358236bf8112bd6e58ae8da1b2",
"logging_8h.html#a54581b1f2ee2b138b99408b358df690b",
"nvidia__encode_8c.html#ad82502cbe7aca39dfde299b071c4e2e4",
"sdl__utils_8c.html#a321c8a7ae1828f3fa641475e964b0ffb",
"structDecodedFrameData.html#a9d101bb9cda6e9feb3a1be64b2827575",
"structLTRState.html#a9e11a5a44c80a41b89206425c4f69442",
"structRegisteredResource.html#a4d549b8fc69a8bce4e28a6f9a16129be",
"structVirtualInterface.html#a4075e1b6e786eb28862e1b67026e9d71",
"structX11CaptureDevice.html#a34f9610206c72826745c4dd6e66f7104",
"whist_2network_2network_8c.html#ac326362f3ab91f34c0271d6585c27373",
"whist__frame_8c.html#a3ab7e2f70fc8e9de982bf5f0f422eb2d"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';