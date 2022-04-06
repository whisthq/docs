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
      [ "Debug Console", "md_whist_debug_README.html#autotoc_md154", [
        [ "Checks & Tests", "index.html#autotoc_md24", null ],
        [ "Unit Testing", "index.html#autotoc_md25", null ],
        [ "Option Flags", "md_client_README.html#autotoc_md54", null ],
        [ "Recommended Workflow for Building Server Protocol on Linux", "md_server_README.html#autotoc_md96", null ],
        [ "Overview", "md_whist_debug_README.html#autotoc_md155", null ],
        [ "How to enable", "md_whist_debug_README.html#autotoc_md156", null ],
        [ "How to access", "md_whist_debug_README.html#autotoc_md157", null ],
        [ "Support Commands", "md_whist_debug_README.html#autotoc_md158", [
          [ "<tt>report_XXX</tt>", "md_whist_debug_README.html#autotoc_md159", null ],
          [ "<tt>set</tt>", "md_whist_debug_README.html#autotoc_md160", null ],
          [ "<tt>info</tt>", "md_whist_debug_README.html#autotoc_md161", null ],
          [ "<tt>insert_atexit_handler</tt> or <tt>insert</tt>", "md_whist_debug_README.html#autotoc_md162", null ]
        ] ]
      ] ],
      [ "Protocol Analyzer", "md_whist_debug_README.html#autotoc_md163", [
        [ "Overview", "md_whist_debug_README.html#autotoc_md164", null ],
        [ "How to run", "md_whist_debug_README.html#autotoc_md165", null ],
        [ "Report format", "md_whist_debug_README.html#autotoc_md166", [
          [ "High-level information/statistic", "md_whist_debug_README.html#autotoc_md167", null ],
          [ "Breakdown of frames", "md_whist_debug_README.html#autotoc_md168", [
            [ "Breakdown of segments", "md_whist_debug_README.html#autotoc_md169", null ]
          ] ]
        ] ],
        [ "Implementation", "md_whist_debug_README.html#autotoc_md170", [
          [ "Data structures", "md_whist_debug_README.html#autotoc_md171", null ],
          [ "Hooks", "md_whist_debug_README.html#autotoc_md172", null ],
          [ "Statistics generator", "md_whist_debug_README.html#autotoc_md173", null ],
          [ "Pretty printer for frame breakdown", "md_whist_debug_README.html#autotoc_md174", null ]
        ] ]
      ] ]
    ] ],
    [ "GF(256) Math Module", "GF256.html", null ],
    [ "Whist Congestion Control(WCC)", "md_whist_network_WCC.html", [
      [ "Terminology", "md_whist_network_WCC.html#autotoc_md218", null ],
      [ "Pacer (Network Throttler)", "md_whist_network_WCC.html#autotoc_md219", null ],
      [ "Algorithm", "md_whist_network_WCC.html#autotoc_md220", [
        [ "Arrival time model", "md_whist_network_WCC.html#autotoc_md221", null ],
        [ "Inter-group delay variation filter", "md_whist_network_WCC.html#autotoc_md222", null ],
        [ "Over-use detector", "md_whist_network_WCC.html#autotoc_md223", null ],
        [ "Rate control", "md_whist_network_WCC.html#autotoc_md224", [
          [ "Increase bitrate", "md_whist_network_WCC.html#autotoc_md225", null ],
          [ "Decrease bitrate", "md_whist_network_WCC.html#autotoc_md226", null ],
          [ "Saturate Bandwidth", "md_whist_network_WCC.html#autotoc_md227", null ],
          [ "Increase percentage", "md_whist_network_WCC.html#autotoc_md228", null ],
          [ "Burst Bitrate", "md_whist_network_WCC.html#autotoc_md229", null ]
        ] ],
        [ "RECOMMENDED values and reasons", "md_whist_network_WCC.html#autotoc_md230", null ]
      ] ],
      [ "References", "md_whist_network_WCC.html#autotoc_md231", null ]
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
"GF256.html",
"clipboard_8h.html#a9676c44d0c2a676fe59a136a6e71b161a6eb8655d4ec3cb74b7a09de6518393ff",
"error__monitor_8c.html#ac87373a8de9cd85e0d9a318bd826e19d",
"functions.html",
"group__error__codes.html#gga18cc8e20ea58aa56867b56542e89b04da49f20b6761454c2687e962a986c21f09",
"group__threading.html#gga1eedf1deef6e272cb639c0bc15a3e68fa46bca4d319b954f24e633fc697c329ca",
"lodepng_8c.html#a9347ade4708cc43170e18bb1e69491d1",
"logging_8h.html#acf9ba8e25f7240fb3b39383a66540a71",
"os__utils_8c.html#a4b2ec5f6a7938bb9b01502db71e34fe4",
"server_2audio_8h_source.html",
"structFFmpegEncoder.html#ad4d170bef27ad9a721e99f9508cfec09",
"structLodePNGEncoderSettings.html#a4446f87b5283f25664802a1be037e76e",
"structStunRequest.html#aef0c7d317052068582b3ec0d5766ae64",
"structWhistFrontendFunctionTable.html#aab4367c252fc49e88fcaeac77e8bf2f0",
"throttle_8h.html#a719afae66ac2bd9da6f064fe111e8345",
"whist_8h.html#a690e9b7e2e4f08889666b8c98d25ff52",
"whist_8h.html#aef166b266f8d5b853ec64a90756fafb6a1e9b2a03b386a7ed2cdf948c46161579"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';