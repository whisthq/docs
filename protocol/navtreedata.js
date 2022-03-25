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
      [ "Debug Console", "md_whist_debug_README.html#autotoc_md153", [
        [ "Checks & Tests", "index.html#autotoc_md23", null ],
        [ "Unit Testing", "index.html#autotoc_md24", null ],
        [ "Option Flags", "md_client_README.html#autotoc_md53", null ],
        [ "Recommended Workflow for Building Server Protocol on Linux", "md_server_README.html#autotoc_md95", null ],
        [ "Overview", "md_whist_debug_README.html#autotoc_md154", null ],
        [ "How to enable", "md_whist_debug_README.html#autotoc_md155", null ],
        [ "How to access", "md_whist_debug_README.html#autotoc_md156", null ],
        [ "Support Commands", "md_whist_debug_README.html#autotoc_md157", [
          [ "<tt>report_XXX</tt>", "md_whist_debug_README.html#autotoc_md158", null ],
          [ "<tt>set</tt>", "md_whist_debug_README.html#autotoc_md159", null ],
          [ "<tt>info</tt>", "md_whist_debug_README.html#autotoc_md160", null ],
          [ "<tt>insert_atexit_handler</tt> or <tt>insert</tt>", "md_whist_debug_README.html#autotoc_md161", null ]
        ] ]
      ] ],
      [ "Protocol Analyzer", "md_whist_debug_README.html#autotoc_md162", [
        [ "Overview", "md_whist_debug_README.html#autotoc_md163", null ],
        [ "How to run", "md_whist_debug_README.html#autotoc_md164", null ],
        [ "Report format", "md_whist_debug_README.html#autotoc_md165", [
          [ "High-level information/statistic", "md_whist_debug_README.html#autotoc_md166", null ],
          [ "Breakdown of frames", "md_whist_debug_README.html#autotoc_md167", [
            [ "Breakdown of segments", "md_whist_debug_README.html#autotoc_md168", null ]
          ] ]
        ] ],
        [ "Implementation", "md_whist_debug_README.html#autotoc_md169", [
          [ "Data structures", "md_whist_debug_README.html#autotoc_md170", null ],
          [ "Hooks", "md_whist_debug_README.html#autotoc_md171", null ],
          [ "Statistics generator", "md_whist_debug_README.html#autotoc_md172", null ],
          [ "Pretty printer for frame breakdown", "md_whist_debug_README.html#autotoc_md173", null ]
        ] ]
      ] ]
    ] ],
    [ "Whist Congestion Control(WCC)", "md_whist_network_WCC.html", [
      [ "Terminology", "md_whist_network_WCC.html#autotoc_md217", null ],
      [ "Pacer (Network Throttler)", "md_whist_network_WCC.html#autotoc_md218", null ],
      [ "Algorithm", "md_whist_network_WCC.html#autotoc_md219", [
        [ "Arrival time model", "md_whist_network_WCC.html#autotoc_md220", null ],
        [ "Inter-group delay variation filter", "md_whist_network_WCC.html#autotoc_md221", null ],
        [ "Over-use detector", "md_whist_network_WCC.html#autotoc_md222", null ],
        [ "Rate control", "md_whist_network_WCC.html#autotoc_md223", [
          [ "Increase bitrate", "md_whist_network_WCC.html#autotoc_md224", null ],
          [ "Decrease bitrate", "md_whist_network_WCC.html#autotoc_md225", null ],
          [ "Saturate Bandwidth", "md_whist_network_WCC.html#autotoc_md226", null ],
          [ "Increase percentage", "md_whist_network_WCC.html#autotoc_md227", null ],
          [ "Burst Bitrate", "md_whist_network_WCC.html#autotoc_md228", null ]
        ] ],
        [ "RECOMMENDED values and reasons", "md_whist_network_WCC.html#autotoc_md229", null ]
      ] ],
      [ "References", "md_whist_network_WCC.html#autotoc_md230", null ]
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
"clipboard_8h.html#aa743c175c855e2f47a69264ab9e2cf56ac0af1f993f0b2cf208c8e9ac21aec101",
"error__monitor_8h.html#ac0528e6a2362ba2081d8b3fbf11fb7e2",
"functions_vars_q.html",
"group__linked__list.html#ga0d27f277c5c9ef59274ca935d086a9d1",
"index.html#autotoc_md29",
"lodepng_8h.html#a2e09963fb4b4eb4ee7789d40b9080250",
"mac__clipboard_8c.html#a1f4649cb97b683e29d202d4a5d6ffc32",
"renderer_8h.html#a9f7efeecdf0f0eb50993d2054cc51d51",
"structBPMLists.html#a4bd270f4f3d5df206be5a281593f5f76",
"structInputDeviceXTest.html#a93e2b5fa89c4ea6d52251577d77fd9cf",
"structQueueContext.html#aa8ffe30bfaa8039c6fa61151223a4aa1",
"structVideoFrame.html#a7a7f8852074f5c7ccf06f1a27e317bde",
"sync__packets_8c.html#ab052ae0d87ab16898c020aed81f21aa0",
"whist_8c.html#aa005f29266f2ddf76cb57dc510516839",
"whist_8h.html#aad1832f9d718bfd4d4e414729ea4369bad26f33ae99edf1e5d1b437ff9b879e5d"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';