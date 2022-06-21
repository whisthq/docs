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
      [ "Debug Console", "md_whist_debug_README.html#autotoc_md152", [
        [ "Checks & Tests", "index.html#autotoc_md24", null ],
        [ "Unit Testing", "index.html#autotoc_md25", null ],
        [ "Option Flags", "md_client_README.html#autotoc_md52", null ],
        [ "Recommended Workflow for Building Server Protocol on Linux", "md_server_README.html#autotoc_md92", null ],
        [ "Overview", "md_whist_debug_README.html#autotoc_md153", null ],
        [ "How to enable", "md_whist_debug_README.html#autotoc_md154", null ],
        [ "How to access", "md_whist_debug_README.html#autotoc_md155", null ],
        [ "Support Commands", "md_whist_debug_README.html#autotoc_md156", [
          [ "<tt>report_XXX</tt>", "md_whist_debug_README.html#autotoc_md157", null ],
          [ "<tt>set</tt>", "md_whist_debug_README.html#autotoc_md158", null ],
          [ "<tt>info</tt>", "md_whist_debug_README.html#autotoc_md159", null ],
          [ "<tt>insert_atexit_handler</tt> or <tt>insert</tt>", "md_whist_debug_README.html#autotoc_md160", null ]
        ] ]
      ] ],
      [ "Protocol Analyzer", "md_whist_debug_README.html#autotoc_md161", [
        [ "Overview", "md_whist_debug_README.html#autotoc_md162", null ],
        [ "How to run", "md_whist_debug_README.html#autotoc_md163", null ],
        [ "Report format", "md_whist_debug_README.html#autotoc_md164", [
          [ "High-level information/statistic", "md_whist_debug_README.html#autotoc_md165", null ],
          [ "Breakdown of frames", "md_whist_debug_README.html#autotoc_md166", [
            [ "Breakdown of segments", "md_whist_debug_README.html#autotoc_md167", null ]
          ] ]
        ] ],
        [ "Implementation", "md_whist_debug_README.html#autotoc_md168", [
          [ "Data structures", "md_whist_debug_README.html#autotoc_md169", null ],
          [ "Hooks", "md_whist_debug_README.html#autotoc_md170", null ],
          [ "Statistics generator", "md_whist_debug_README.html#autotoc_md171", null ],
          [ "Pretty printer for frame breakdown", "md_whist_debug_README.html#autotoc_md172", null ]
        ] ]
      ] ]
    ] ],
    [ "GF(256) Math Module", "GF256.html", null ],
    [ "Whist Congestion Control(WCC)", "md_whist_network_WCC.html", [
      [ "Terminology", "md_whist_network_WCC.html#autotoc_md216", null ],
      [ "Pacer (Network Throttler)", "md_whist_network_WCC.html#autotoc_md217", null ],
      [ "Algorithm", "md_whist_network_WCC.html#autotoc_md218", [
        [ "Arrival time model", "md_whist_network_WCC.html#autotoc_md219", null ],
        [ "Inter-group delay variation filter", "md_whist_network_WCC.html#autotoc_md220", null ],
        [ "Over-use detector", "md_whist_network_WCC.html#autotoc_md221", null ],
        [ "Rate control", "md_whist_network_WCC.html#autotoc_md222", [
          [ "Increase bitrate", "md_whist_network_WCC.html#autotoc_md223", null ],
          [ "Decrease bitrate", "md_whist_network_WCC.html#autotoc_md224", null ],
          [ "Saturate Bandwidth, Increase percentage and Maximum Bandwidth Available", "md_whist_network_WCC.html#autotoc_md225", [
            [ "Little tweaks", "md_whist_network_WCC.html#autotoc_md226", null ]
          ] ],
          [ "Burst Bitrate", "md_whist_network_WCC.html#autotoc_md227", null ]
        ] ],
        [ "RECOMMENDED values and reasons", "md_whist_network_WCC.html#autotoc_md228", null ]
      ] ],
      [ "References", "md_whist_network_WCC.html#autotoc_md229", null ]
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
"clipboard__internal_8h.html#ade76749524806bb7873dd724056c4ba9",
"error__monitor_8c.html",
"fec_8h.html#af8d45fea9c101fa77f55eef426979ff9",
"functions_vars_r.html",
"group__error__codes.html#gga18cc8e20ea58aa56867b56542e89b04dabba1b7e67cc837294ba4605b2144d5c3",
"group__timers.html#ga36d3842866523095ef393c383b4fcb5b",
"lodepng_8c.html#a15ea25ced619cf22e6e188cc5e5bdfb1",
"log__statistic_8h.html#a5caad6508eb2c3373d06f221feb364f0ab7bfc273f402328983f2b07c56fb6907",
"network__algorithm_8h.html#a39ef8d2688f24968d0744d9bb7cea4c7",
"sdl_2common_8h_source.html",
"structDebugConsoleOverrideValues.html#a16329417c7f5ff2c6f361e4ceb9bbcca",
"structLTRState.html",
"structRWLock.html#aa2fc41b979e58996c9dbe25e3bfe9ef3",
"structWhistClientMessage.html#a0f5e0baec5bb2d55c15eab4e4d78a372",
"structX11CaptureDevice.html#a7d9462269e090c988795bab178ae1f76",
"whist_2network_2network_8c.html#adfb72e346badf093529404e6d20f8d97",
"whist__client_8c.html#a7ba19228d7ed5ce0f05a6cd6cf19f503"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';