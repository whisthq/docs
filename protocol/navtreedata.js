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
"clipboard__internal_8h.html#af1a8e7cc53b2b0d020dcb3cc14a2c294",
"error__monitor_8c.html#ac0528e6a2362ba2081d8b3fbf11fb7e2",
"ffmpeg__encode_8c.html#a37c3ae16b80743dbd8cc6d3c00851df5",
"gf256_8h.html#aadf27fa70da14a3e3cbbbde26664de98",
"group__feature__flags.html#ga6879a2dc3c5ca41b20e87eb0d9d2aebe",
"handle__client__message_8h_source.html",
"lodepng_8c.html#a533d58c161de45096b83c44bbaa95e93",
"log__statistic_8h.html#ab364d742d19a3ff2640b68884b171674",
"nvidia__encode_8c.html#a12a20bac4fd4d9b21cc2bbcd9c559ba4",
"sdl__utils_8c.html#a38188485497cb37637364f5d785ddb5f",
"structEncodedAudio.html#a5955d96098e033891a5bae062868cd05",
"structLodePNGBitReader.html#aaff7de905c69a23d9f58e6f1c8e6b30f",
"structRingBuffer.html#a6a556b9ab1825fe65ce09864185a027d",
"structWhistCommandLineOption.html#a973ab5318ad74c0d2a0597cfe04c255d",
"structgf256__ctx.html#a171f868bc75b09a538c31e77c5978cde",
"whist_2network_2network_8h.html#a8cb8ba7a8693174b27de2a04c77f6cb1",
"whist__memory_8h.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';