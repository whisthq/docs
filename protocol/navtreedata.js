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
        [ "Sentry", "index.html#autotoc_md16", null ]
      ] ],
      [ "Tips for Specific Tools", "index.html#autotoc_md17", [
        [ "IDEs", "index.html#autotoc_md18", null ],
        [ "MacOS CLI", "index.html#autotoc_md19", null ],
        [ "Linux CLI", "index.html#autotoc_md20", null ]
      ] ],
      [ "Further documentation", "index.html#autotoc_md21", null ]
    ] ],
    [ "CI & CD", "index.html#autotoc_md22", [
      [ "Continuous Integration", "index.html#autotoc_md25", null ]
    ] ],
    [ "Styling", "index.html#autotoc_md26", [
      [ "clang-format", "index.html#autotoc_md27", null ],
      [ "clang-tidy", "index.html#autotoc_md28", null ],
      [ "Logz.io", "index.html#autotoc_md29", null ]
    ] ],
    [ "Whist Desktop Clients", "md_client_README.html", null ],
    [ "Whist Windows/Linux Ubuntu Servers", "md_server_README.html", null ],
    [ "Debugging Tools", "md_whist_debug_README.html", [
      [ "Debug Console", "md_whist_debug_README.html#autotoc_md157", [
        [ "Checks & Tests", "index.html#autotoc_md23", null ],
        [ "Unit Testing", "index.html#autotoc_md24", null ],
        [ "Option Flags", "md_client_README.html#autotoc_md53", null ],
        [ "Recommended Workflow for Building Server Protocol on Linux", "md_server_README.html#autotoc_md99", null ],
        [ "Overview", "md_whist_debug_README.html#autotoc_md158", null ],
        [ "How to enable", "md_whist_debug_README.html#autotoc_md159", null ],
        [ "How to access", "md_whist_debug_README.html#autotoc_md160", null ],
        [ "Support Commands", "md_whist_debug_README.html#autotoc_md161", [
          [ "<tt>report_XXX</tt>", "md_whist_debug_README.html#autotoc_md162", null ],
          [ "<tt>set</tt>", "md_whist_debug_README.html#autotoc_md163", null ],
          [ "<tt>info</tt>", "md_whist_debug_README.html#autotoc_md164", null ],
          [ "<tt>insert_atexit_handler</tt> or <tt>insert</tt>", "md_whist_debug_README.html#autotoc_md165", null ]
        ] ]
      ] ],
      [ "Protocol Analyzer", "md_whist_debug_README.html#autotoc_md166", [
        [ "Overview", "md_whist_debug_README.html#autotoc_md167", null ],
        [ "How to run", "md_whist_debug_README.html#autotoc_md168", null ],
        [ "Report format", "md_whist_debug_README.html#autotoc_md169", [
          [ "High-level information/statistic", "md_whist_debug_README.html#autotoc_md170", null ],
          [ "Breakdown of frames", "md_whist_debug_README.html#autotoc_md171", [
            [ "Breakdown of segments", "md_whist_debug_README.html#autotoc_md172", null ]
          ] ]
        ] ],
        [ "Implementation", "md_whist_debug_README.html#autotoc_md173", [
          [ "Data structures", "md_whist_debug_README.html#autotoc_md174", null ],
          [ "Hooks", "md_whist_debug_README.html#autotoc_md175", null ],
          [ "Statistics generator", "md_whist_debug_README.html#autotoc_md176", null ],
          [ "Pretty printer for frame breakdown", "md_whist_debug_README.html#autotoc_md177", null ]
        ] ]
      ] ]
    ] ],
    [ "Whist Congestion Control(WCC)", "md_whist_network_WCC.html", [
      [ "Terminology", "md_whist_network_WCC.html#autotoc_md221", null ],
      [ "Pacer (Network Throttler)", "md_whist_network_WCC.html#autotoc_md222", null ],
      [ "Algorithm", "md_whist_network_WCC.html#autotoc_md223", [
        [ "Arrival time model", "md_whist_network_WCC.html#autotoc_md224", null ],
        [ "Inter-group delay variation filter", "md_whist_network_WCC.html#autotoc_md225", null ],
        [ "Over-use detector", "md_whist_network_WCC.html#autotoc_md226", null ],
        [ "Rate control", "md_whist_network_WCC.html#autotoc_md227", [
          [ "Increase bitrate", "md_whist_network_WCC.html#autotoc_md228", null ],
          [ "Decrease bitrate", "md_whist_network_WCC.html#autotoc_md229", null ],
          [ "Saturate Bandwidth", "md_whist_network_WCC.html#autotoc_md230", null ],
          [ "Increase percentage", "md_whist_network_WCC.html#autotoc_md231", null ],
          [ "Burst Bitrate", "md_whist_network_WCC.html#autotoc_md232", null ]
        ] ],
        [ "RECOMMENDED values and reasons", "md_whist_network_WCC.html#autotoc_md233", null ]
      ] ],
      [ "References", "md_whist_network_WCC.html#autotoc_md234", null ]
    ] ],
    [ "Modules", "modules.html", "modules" ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Data Structure Index", "classes.html", null ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
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
"aes_8c.html",
"clipboard_8c.html#a18933b18bea8ba9b256fcaa596d41cbe",
"error__monitor_8c.html#a56d034dfbac71ff360881792781140ad",
"globals_defs_g.html",
"group__linked__list.html#gaa8a75971b2cbe1084b3912917bc87cb1",
"input_8h.html#a669ecfca5e7aaad9db1f33b392a613c7",
"lodepng_8h.html#a83344b5c8c5839ca42858dd3578220ef",
"native__window__utils_8h.html#a74d8fabea8bfc30077f88bad5a81c776",
"sdl__event__handler_8c.html#a5b2d8acba46a3a8d41972491e3e06b01",
"structCaptureDevice.html",
"structLodePNGBitReader.html#a80a148b29e36301da77f3d2432cbd608",
"structRingBuffer.html#a9a530d5ffefea570684d49434bf29675",
"structWhistCursorInfo.html#ab13be0969c797eb4b96d1d0f04137b83",
"throttle_8h.html",
"whist_8h.html#a6e760c662b6b1560542cc151a2ac01b4a888be77ea9a3448aa6f07eb48e78d175",
"whist_8h.html#afa1974cc8beaefae0b0afb0e084ff9eb"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';