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
          [ "Practices for using the Sampling API", "md_whist_debug_README.html#autotoc_md171", [
            [ "MACRO Method", "md_whist_debug_README.html#autotoc_md172", null ],
            [ "dynamic Method", "md_whist_debug_README.html#autotoc_md173", null ]
          ] ],
          [ "Examples of using the <tt>plotter.py</tt>", "md_whist_debug_README.html#autotoc_md174", null ],
          [ "Basic usage", "md_whist_debug_README.html#autotoc_md175", null ],
          [ "Change style", "md_whist_debug_README.html#autotoc_md176", null ],
          [ "Use distribution graph", "md_whist_debug_README.html#autotoc_md177", null ],
          [ "Change Weight", "md_whist_debug_README.html#autotoc_md178", null ],
          [ "User Label filter", "md_whist_debug_README.html#autotoc_md179", null ],
          [ "Plot only specific range", "md_whist_debug_README.html#autotoc_md180", null ],
          [ "Compare two plots", "md_whist_debug_README.html#autotoc_md181", null ]
        ] ]
      ] ]
    ] ],
    [ "GF(256) Math Module", "GF256.html", null ],
    [ "Whist Congestion Control(WCC)", "md_whist_network_WCC.html", [
      [ "Terminology", "md_whist_network_WCC.html#autotoc_md225", null ],
      [ "Pacer (Network Throttler)", "md_whist_network_WCC.html#autotoc_md226", null ],
      [ "Algorithm", "md_whist_network_WCC.html#autotoc_md227", [
        [ "Arrival time model", "md_whist_network_WCC.html#autotoc_md228", null ],
        [ "Inter-group delay variation filter", "md_whist_network_WCC.html#autotoc_md229", null ],
        [ "Over-use detector", "md_whist_network_WCC.html#autotoc_md230", null ],
        [ "Rate control", "md_whist_network_WCC.html#autotoc_md231", [
          [ "Increase bitrate", "md_whist_network_WCC.html#autotoc_md232", null ],
          [ "Decrease bitrate", "md_whist_network_WCC.html#autotoc_md233", null ],
          [ "Saturate Bandwidth, Increase percentage and Maximum Bandwidth Available", "md_whist_network_WCC.html#autotoc_md234", [
            [ "Little tweaks", "md_whist_network_WCC.html#autotoc_md235", null ]
          ] ],
          [ "Burst Bitrate", "md_whist_network_WCC.html#autotoc_md236", null ]
        ] ],
        [ "RECOMMENDED values and reasons", "md_whist_network_WCC.html#autotoc_md237", null ]
      ] ],
      [ "References", "md_whist_network_WCC.html#autotoc_md238", null ]
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
"functions_vars_p.html",
"group__error__codes.html#gga18cc8e20ea58aa56867b56542e89b04daabb75d9872d7af0406af1aeaefc7c04a",
"handle__server__message_8h.html#a7e557b58a07eca06a7da802f55d6e51a",
"lodepng_8c.html#ab1c7709a984d5842ab314cf5d2dc2dcc",
"ltr_8c.html",
"nvidiacapture_8c.html#a92673e33f27532767749b79edb8ef806",
"sdl__utils_8c.html#afaca887ee6415e1788b0c16df49960a1",
"structFECDecoder.html#acd16212d15fcbb06495df6eaa898b036",
"structLodePNGBitWriter.html#a8959e4d16beb2649cadae4e801bd33bf",
"structRingBuffer.html#a6c5a3ab868190bc667d4076c61454247",
"structVirtualInterface.html#add2ff9cb94ba1dc2fcfe40261a6bb471",
"structX11CaptureDevice.html#a7d9462269e090c988795bab178ae1f76",
"whist_2network_2network_8h.html#a19538dc4b7d9fdf4b3a195bb3dd18a41ae1dfec92dc51082074334f644d9b6109",
"whist__frame_8h.html#a66295e639cf3c980d7e5c2605df61d4f"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';