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
    [ "Whist Congestion Control(WCC)", "md_whist_network_WCC.html", [
      [ "Terminology", "md_whist_network_WCC.html#autotoc_md195", null ],
      [ "Pacer (Network Throttler)", "md_whist_network_WCC.html#autotoc_md196", null ],
      [ "Algorithm", "md_whist_network_WCC.html#autotoc_md197", [
        [ "Checks & Tests", "index.html#autotoc_md23", null ],
        [ "Unit Testing", "index.html#autotoc_md24", null ],
        [ "Option Flags", "md_client_README.html#autotoc_md53", null ],
        [ "Recommended Workflow for Building Server Protocol on Linux", "md_server_README.html#autotoc_md99", null ],
        [ "Arrival time model", "md_whist_network_WCC.html#autotoc_md198", null ],
        [ "Inter-group delay variation filter", "md_whist_network_WCC.html#autotoc_md199", null ],
        [ "Over-use detector", "md_whist_network_WCC.html#autotoc_md200", null ],
        [ "Rate control", "md_whist_network_WCC.html#autotoc_md201", [
          [ "Increase bitrate", "md_whist_network_WCC.html#autotoc_md202", null ],
          [ "Decrease bitrate", "md_whist_network_WCC.html#autotoc_md203", null ],
          [ "Saturate Bandwidth", "md_whist_network_WCC.html#autotoc_md204", null ],
          [ "Increase percentage", "md_whist_network_WCC.html#autotoc_md205", null ],
          [ "Burst Bitrate", "md_whist_network_WCC.html#autotoc_md206", null ]
        ] ],
        [ "RECOMMENDED values and reasons", "md_whist_network_WCC.html#autotoc_md207", null ]
      ] ],
      [ "References", "md_whist_network_WCC.html#autotoc_md208", null ]
    ] ],
    [ "A Glimpse of Debug Console + Protocol Analyzer", "md_whist_tools_README.html", [
      [ "Debug Console", "md_whist_tools_README.html#autotoc_md214", [
        [ "Overview", "md_whist_tools_README.html#autotoc_md215", null ],
        [ "How to enable", "md_whist_tools_README.html#autotoc_md216", null ],
        [ "How to access", "md_whist_tools_README.html#autotoc_md217", null ],
        [ "Support Commands", "md_whist_tools_README.html#autotoc_md218", [
          [ "<tt>report_XXX</tt>", "md_whist_tools_README.html#autotoc_md219", null ],
          [ "<tt>set</tt>", "md_whist_tools_README.html#autotoc_md220", null ],
          [ "<tt>info</tt>", "md_whist_tools_README.html#autotoc_md221", null ],
          [ "<tt>insert_atexit_handler</tt> or <tt>insert</tt>", "md_whist_tools_README.html#autotoc_md222", null ]
        ] ]
      ] ],
      [ "Protocol Analyzer", "md_whist_tools_README.html#autotoc_md223", [
        [ "Overview", "md_whist_tools_README.html#autotoc_md224", null ],
        [ "How to run", "md_whist_tools_README.html#autotoc_md225", null ],
        [ "Report format", "md_whist_tools_README.html#autotoc_md226", [
          [ "high level information/statistic", "md_whist_tools_README.html#autotoc_md227", null ],
          [ "break down of frames", "md_whist_tools_README.html#autotoc_md228", [
            [ "breakdown of segments", "md_whist_tools_README.html#autotoc_md229", null ]
          ] ]
        ] ],
        [ "Implementation", "md_whist_tools_README.html#autotoc_md230", [
          [ "Data structures", "md_whist_tools_README.html#autotoc_md231", null ],
          [ "Hooks", "md_whist_tools_README.html#autotoc_md232", null ],
          [ "Statistics generator", "md_whist_tools_README.html#autotoc_md233", null ],
          [ "Pretty printer for frame breakdown", "md_whist_tools_README.html#autotoc_md234", null ]
        ] ]
      ] ]
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
"client__utils_8h.html#a9680bc0923e6e0149808036e92f33cd4",
"error__monitor_8c.html",
"globals_defs_a.html",
"group__region__allocator.html#ga82c0c0ab6aa54efc85fb5cdc1ea37e1f",
"linux__cursor__capture_8c.html#a9a44d7a1f5d95832e3cbce8676afa768a17ac5c229ee519b80844153cf09248d8",
"lodepng_8h.html#ae50c1ddde2fa8004b46da433f3e20974",
"nvidia__encode_8h.html#a4f0d768789134574390c824762f76180",
"sdl__utils_8h.html#a1081ae59fbf90e16f9d12ef7a97f0555",
"structDebugConsoleOverrideValues.html#a8b256cd1bcc979b4523e067484656a13",
"structLodePNGDecompressSettings.html#a0bdb19d05ae04b4fce7ed8c72463ab57",
"structStunEntry.html#a10839151cc119dbc37f661fb95c781a2",
"structWhistMouseButtonMessage.html#adf48ef5492b6cc207b0bbb2f9a5d39c2",
"udp_8c.html#af026caee3b8fbd9791a41cd1af78046aa5cb78e7d73c46eaae227c5a39c184c5a",
"whist_8h.html#a9461c07e2605c3d72eb6254b9ab1c128a8b596b9bb846fed48ef79eebc93e3667",
"whist__frame_8h.html#a7720723895cf99ac2e4a848c2eda9554"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';