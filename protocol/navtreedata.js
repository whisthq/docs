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
    [ "GF(256) Math Module", "GF256.html", null ],
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
"GF256.html",
"clipboard_8h.html#aa743c175c855e2f47a69264ab9e2cf56a0f7e017b96b59fff6c22def33a9bb7c6",
"error__monitor_8h.html",
"functions_f.html",
"group__error__codes.html#gga18cc8e20ea58aa56867b56542e89b04da7722bda653a775f18bd25e757ba55b73",
"group__timers.html#ga17cc946c0eba05b7aafbb2c953db93e5",
"lodepng_8c.html#aab7a41a03154aa8d9ef65f2d434641b6",
"ltr_8c.html",
"os__utils_8h.html#ad841d0d3632ae42995ba77ada3a6e13b",
"server_2main_8c.html#a688f608a1c5bc4e4309281cab6670184",
"structFileCaptureDevice.html#af3e60aaddbbc9ef272668ce8a19fb8b8",
"structLodePNGInfo.html#a4d3407acdf79bf87f20a3562f210b393",
"structTCPContext.html#a69b86d5b5ba97f16a584a8c1da5e76ea",
"structWhistKeyboardMessage.html#ac96ce4d0ae4f6f042cfdcaa7c9b9a27a",
"udp_8c.html#a16d54d6aa9e07ea55a20c0cb0a4705d1",
"whist_8h.html#a794e0417bdd7ebdad81c59a929932761",
"whist_8h.html#afa47769b22f4e68bdbf79565f9852032a8993918fc27591183d5a678fda68bbc9"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';