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
      [ "Debug Console", "md_whist_debug_README.html#autotoc_md140", [
        [ "Checks & Tests", "index.html#autotoc_md24", null ],
        [ "Unit Testing", "index.html#autotoc_md25", null ],
        [ "Option Flags", "md_client_README.html#autotoc_md46", null ],
        [ "Recommended Workflow for Building Server Protocol on Linux", "md_server_README.html#autotoc_md80", null ],
        [ "Overview", "md_whist_debug_README.html#autotoc_md141", null ],
        [ "How to enable", "md_whist_debug_README.html#autotoc_md142", null ],
        [ "How to access", "md_whist_debug_README.html#autotoc_md143", null ],
        [ "Support Commands", "md_whist_debug_README.html#autotoc_md144", [
          [ "<tt>report_XXX</tt>", "md_whist_debug_README.html#autotoc_md145", null ],
          [ "<tt>set</tt>", "md_whist_debug_README.html#autotoc_md146", null ],
          [ "<tt>info</tt>", "md_whist_debug_README.html#autotoc_md147", null ],
          [ "<tt>insert_atexit_handler</tt> or <tt>insert</tt>", "md_whist_debug_README.html#autotoc_md148", null ],
          [ "<tt>plot_xxx</tt>", "md_whist_debug_README.html#autotoc_md149", null ]
        ] ]
      ] ],
      [ "Protocol Analyzer", "md_whist_debug_README.html#autotoc_md150", [
        [ "Overview", "md_whist_debug_README.html#autotoc_md151", null ],
        [ "How to run", "md_whist_debug_README.html#autotoc_md152", null ],
        [ "Report format", "md_whist_debug_README.html#autotoc_md153", [
          [ "High-level information/statistic", "md_whist_debug_README.html#autotoc_md154", null ],
          [ "Breakdown of frames", "md_whist_debug_README.html#autotoc_md155", [
            [ "Breakdown of segments", "md_whist_debug_README.html#autotoc_md156", null ]
          ] ]
        ] ],
        [ "Implementation", "md_whist_debug_README.html#autotoc_md157", [
          [ "Data structures", "md_whist_debug_README.html#autotoc_md158", null ],
          [ "Hooks", "md_whist_debug_README.html#autotoc_md159", null ],
          [ "Statistics generator", "md_whist_debug_README.html#autotoc_md160", null ],
          [ "Pretty printer for frame breakdown", "md_whist_debug_README.html#autotoc_md161", null ]
        ] ]
      ] ],
      [ "Plotter", "md_whist_debug_README.html#autotoc_md162", [
        [ "Overiew", "md_whist_debug_README.html#autotoc_md163", [
          [ "C++ API part", "md_whist_debug_README.html#autotoc_md164", [
            [ "Controlling APIs:", "md_whist_debug_README.html#autotoc_md165", null ],
            [ "Sampling API:", "md_whist_debug_README.html#autotoc_md166", null ]
          ] ],
          [ "Data Exporting API:", "md_whist_debug_README.html#autotoc_md167", null ],
          [ "Python Helper Part", "md_whist_debug_README.html#autotoc_md168", null ]
        ] ],
        [ "Introduce to the use of plotter", "md_whist_debug_README.html#autotoc_md169", [
          [ "Practices for using the Sampling API", "md_whist_debug_README.html#autotoc_md170", [
            [ "MACRO Method", "md_whist_debug_README.html#autotoc_md171", null ],
            [ "dynamic Method", "md_whist_debug_README.html#autotoc_md172", null ]
          ] ],
          [ "Examples of using the <tt>plotter.py</tt>", "md_whist_debug_README.html#autotoc_md173", null ],
          [ "Basic usage", "md_whist_debug_README.html#autotoc_md174", null ],
          [ "Change style", "md_whist_debug_README.html#autotoc_md175", null ],
          [ "Use distribution graph", "md_whist_debug_README.html#autotoc_md176", null ],
          [ "Change Weight", "md_whist_debug_README.html#autotoc_md177", null ],
          [ "User Label filter", "md_whist_debug_README.html#autotoc_md178", null ],
          [ "Plot only specific range", "md_whist_debug_README.html#autotoc_md179", null ],
          [ "Compare two plots", "md_whist_debug_README.html#autotoc_md180", null ]
        ] ]
      ] ]
    ] ],
    [ "GF(256) Math Module", "GF256.html", null ],
    [ "Whist Congestion Control(WCC)", "md_whist_network_WCC.html", [
      [ "Terminology", "md_whist_network_WCC.html#autotoc_md224", null ],
      [ "Pacer (Network Throttler)", "md_whist_network_WCC.html#autotoc_md225", null ],
      [ "Algorithm", "md_whist_network_WCC.html#autotoc_md226", [
        [ "Arrival time model", "md_whist_network_WCC.html#autotoc_md227", null ],
        [ "Inter-group delay variation filter", "md_whist_network_WCC.html#autotoc_md228", null ],
        [ "Over-use detector", "md_whist_network_WCC.html#autotoc_md229", null ],
        [ "Rate control", "md_whist_network_WCC.html#autotoc_md230", [
          [ "Increase bitrate", "md_whist_network_WCC.html#autotoc_md231", null ],
          [ "Decrease bitrate", "md_whist_network_WCC.html#autotoc_md232", null ],
          [ "Saturate Bandwidth, Increase percentage and Maximum Bandwidth Available", "md_whist_network_WCC.html#autotoc_md233", [
            [ "Little tweaks", "md_whist_network_WCC.html#autotoc_md234", null ]
          ] ],
          [ "Burst Bitrate", "md_whist_network_WCC.html#autotoc_md235", null ]
        ] ],
        [ "RECOMMENDED values and reasons", "md_whist_network_WCC.html#autotoc_md236", null ]
      ] ],
      [ "References", "md_whist_network_WCC.html#autotoc_md237", null ]
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
"error__codes_8h.html",
"fec_8h.html#aca05f25f6a922833842317722b908ddc",
"functions_vars_n.html",
"group__error__codes.html#gga18cc8e20ea58aa56867b56542e89b04da971d9875053d47568f0039d33907ee0c",
"handle__frontend__events_8h.html#af8904b364242177c172dab3689c864eb",
"lodepng_8c.html#aadc99e713f6408d391dfa140d8e95b96",
"logging_8h_source.html",
"nvidiacapture_8c.html#a79f7bb932a6b6737bf03994e84e05a19",
"sdl__utils_8c.html#afaca887ee6415e1788b0c16df49960a1",
"structFECDecoder.html#acd16212d15fcbb06495df6eaa898b036",
"structLodePNGBitWriter.html#a8959e4d16beb2649cadae4e801bd33bf",
"structRingBuffer.html#a6c5a3ab868190bc667d4076c61454247",
"structVirtualInterface.html#af8cdd6029542868c73de71bb5886e685",
"structX11CaptureDevice.html#aafb401811bf652b8a4f9e5e365655e46",
"whist_2network_2network_8h.html#a419e4818e56de9f9a6c5c2d9d6e3283b",
"whist__frame_8h.html#acdeb42e88b9e2069dbb195e4a28efa61"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';