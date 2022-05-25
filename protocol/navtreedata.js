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
      [ "Debug Console", "md_whist_debug_README.html#autotoc_md150", [
        [ "Checks & Tests", "index.html#autotoc_md24", null ],
        [ "Unit Testing", "index.html#autotoc_md25", null ],
        [ "Option Flags", "md_client_README.html#autotoc_md52", null ],
        [ "Recommended Workflow for Building Server Protocol on Linux", "md_server_README.html#autotoc_md92", null ],
        [ "Overview", "md_whist_debug_README.html#autotoc_md151", null ],
        [ "How to enable", "md_whist_debug_README.html#autotoc_md152", null ],
        [ "How to access", "md_whist_debug_README.html#autotoc_md153", null ],
        [ "Support Commands", "md_whist_debug_README.html#autotoc_md154", [
          [ "<tt>report_XXX</tt>", "md_whist_debug_README.html#autotoc_md155", null ],
          [ "<tt>set</tt>", "md_whist_debug_README.html#autotoc_md156", null ],
          [ "<tt>info</tt>", "md_whist_debug_README.html#autotoc_md157", null ],
          [ "<tt>insert_atexit_handler</tt> or <tt>insert</tt>", "md_whist_debug_README.html#autotoc_md158", null ]
        ] ]
      ] ],
      [ "Protocol Analyzer", "md_whist_debug_README.html#autotoc_md159", [
        [ "Overview", "md_whist_debug_README.html#autotoc_md160", null ],
        [ "How to run", "md_whist_debug_README.html#autotoc_md161", null ],
        [ "Report format", "md_whist_debug_README.html#autotoc_md162", [
          [ "High-level information/statistic", "md_whist_debug_README.html#autotoc_md163", null ],
          [ "Breakdown of frames", "md_whist_debug_README.html#autotoc_md164", [
            [ "Breakdown of segments", "md_whist_debug_README.html#autotoc_md165", null ]
          ] ]
        ] ],
        [ "Implementation", "md_whist_debug_README.html#autotoc_md166", [
          [ "Data structures", "md_whist_debug_README.html#autotoc_md167", null ],
          [ "Hooks", "md_whist_debug_README.html#autotoc_md168", null ],
          [ "Statistics generator", "md_whist_debug_README.html#autotoc_md169", null ],
          [ "Pretty printer for frame breakdown", "md_whist_debug_README.html#autotoc_md170", null ]
        ] ]
      ] ]
    ] ],
    [ "GF(256) Math Module", "GF256.html", null ],
    [ "Whist Congestion Control(WCC)", "md_whist_network_WCC.html", [
      [ "Terminology", "md_whist_network_WCC.html#autotoc_md214", null ],
      [ "Pacer (Network Throttler)", "md_whist_network_WCC.html#autotoc_md215", null ],
      [ "Algorithm", "md_whist_network_WCC.html#autotoc_md216", [
        [ "Arrival time model", "md_whist_network_WCC.html#autotoc_md217", null ],
        [ "Inter-group delay variation filter", "md_whist_network_WCC.html#autotoc_md218", null ],
        [ "Over-use detector", "md_whist_network_WCC.html#autotoc_md219", null ],
        [ "Rate control", "md_whist_network_WCC.html#autotoc_md220", [
          [ "Increase bitrate", "md_whist_network_WCC.html#autotoc_md221", null ],
          [ "Decrease bitrate", "md_whist_network_WCC.html#autotoc_md222", null ],
          [ "Saturate Bandwidth, Increase percentage and Maximum Bandwidth Available", "md_whist_network_WCC.html#autotoc_md223", [
            [ "Little tweaks", "md_whist_network_WCC.html#autotoc_md224", null ]
          ] ],
          [ "Burst Bitrate", "md_whist_network_WCC.html#autotoc_md225", null ]
        ] ],
        [ "RECOMMENDED values and reasons", "md_whist_network_WCC.html#autotoc_md226", null ]
      ] ],
      [ "References", "md_whist_network_WCC.html#autotoc_md227", null ]
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
"clipboard__internal_8h.html#abd908a405c1888d1306899a3ad598ea3",
"error__monitor_8c.html#abbb585d16d6634e654e7c80f49759e8d",
"functions_b.html",
"group__command__line.html#gga96a58e29e8dbf2b5bdeb775cba46556eadb9faf9b48b9be915307629365a977f5",
"group__threading.html#gae63da131cb7642624e9db1bab306ec3e",
"linux__cursor__capture_8c.html#a9a44d7a1f5d95832e3cbce8676afa768adfc34344de8211ce9da7927b90200342",
"log__statistic_8h.html#a5caad6508eb2c3373d06f221feb364f0a21fa0c0a10c8063afb6215455922e5a8",
"network__algorithm_8c.html#a85ca41c173686c9a4b799af197448552",
"sdl_8c.html#af0754291e7863cf65ec85fb865764a10",
"structDecodedFrameData.html#a66788ca3580272abce0db59473100b55",
"structLinkedList.html",
"structRingBuffer.html#a222e926e44d53e0f8bec5e58bbccfc64",
"structWhistCommandLineOption.html#a0029453728c7f996c1a37c36e02bc87f",
"structfec__parms.html",
"whist_2network_2network_8h.html#a81f112a09babf58cabed855550dd4d6c",
"whist_8h.html#aad1832f9d718bfd4d4e414729ea4369ba6fa65284a189b9298ead12027adee956",
"x11__window__info_8c.html#adaaaa197e240d0c438c6e79667be2b37"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';