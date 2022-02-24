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
"client__utils_8c.html#ac2c155b9515a1ce8f319a5f18e5207ae",
"encode_8h.html#a70988121b77d11b511a2bd2fe701d665",
"globals_defs_w.html",
"group__threading.html#gaf4922365dbafb9468c981a1a16ceffc7",
"lodepng_8c.html#a90e82b0ccc75cfb27ccc9756c8d96f07",
"mac__clipboard_8c.html",
"ringbuffer_8c.html#aaf55b2f848a5a671949daa34c01d0d71",
"structAudioContext.html#a558707606e44318c3099e736a1f0adae",
"structHuffmanTree.html#a1d38309ac94616a587ed20a583aa1137",
"structNvidiaEncoder.html#a955fc9b03169bd06a8bdc33f366e916b",
"structVideoFrame.html#a5a3d09c14f8bde62ed28b35578e52f87",
"sysinfo_8c.html#a97742e7c6864fa884d35d5c21a4a901a",
"whist_8h.html#a263ebc1eb05493f4752619082632207f",
"whist_8h.html#abc95f4cc09d4297e52acd3113483a47d"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';