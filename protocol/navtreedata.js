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
      [ "Terminology", "md_whist_network_WCC.html#autotoc_md191", null ],
      [ "Pacer (Network Throttler)", "md_whist_network_WCC.html#autotoc_md192", null ],
      [ "Algorithm", "md_whist_network_WCC.html#autotoc_md193", [
        [ "Checks & Tests", "index.html#autotoc_md23", null ],
        [ "Unit Testing", "index.html#autotoc_md24", null ],
        [ "Option Flags", "md_client_README.html#autotoc_md53", null ],
        [ "Recommended Workflow for Building Server Protocol on Linux", "md_server_README.html#autotoc_md99", null ],
        [ "Arrival time model", "md_whist_network_WCC.html#autotoc_md194", null ],
        [ "Inter-group delay variation filter", "md_whist_network_WCC.html#autotoc_md195", null ],
        [ "Over-use detector", "md_whist_network_WCC.html#autotoc_md196", null ],
        [ "Rate control", "md_whist_network_WCC.html#autotoc_md197", [
          [ "Increase bitrate", "md_whist_network_WCC.html#autotoc_md198", null ],
          [ "Decrease bitrate", "md_whist_network_WCC.html#autotoc_md199", null ],
          [ "Saturate Bandwidth", "md_whist_network_WCC.html#autotoc_md200", null ],
          [ "Increase percentage", "md_whist_network_WCC.html#autotoc_md201", null ],
          [ "Burst Bitrate", "md_whist_network_WCC.html#autotoc_md202", null ]
        ] ],
        [ "RECOMMENDED values and reasons", "md_whist_network_WCC.html#autotoc_md203", null ]
      ] ],
      [ "References", "md_whist_network_WCC.html#autotoc_md204", null ]
    ] ],
    [ "A Glimpse of Debug Console + Protocol Analyzer", "md_whist_tools_README.html", [
      [ "Debug Console", "md_whist_tools_README.html#autotoc_md210", [
        [ "Overview", "md_whist_tools_README.html#autotoc_md211", null ],
        [ "How to enable", "md_whist_tools_README.html#autotoc_md212", null ],
        [ "How to access", "md_whist_tools_README.html#autotoc_md213", null ],
        [ "Support Commands", "md_whist_tools_README.html#autotoc_md214", [
          [ "<tt>report_XXX</tt>", "md_whist_tools_README.html#autotoc_md215", null ],
          [ "<tt>set</tt>", "md_whist_tools_README.html#autotoc_md216", null ],
          [ "<tt>info</tt>", "md_whist_tools_README.html#autotoc_md217", null ],
          [ "<tt>insert_atexit_handler</tt> or <tt>insert</tt>", "md_whist_tools_README.html#autotoc_md218", null ]
        ] ]
      ] ],
      [ "Protocol Analyzer", "md_whist_tools_README.html#autotoc_md219", [
        [ "Overview", "md_whist_tools_README.html#autotoc_md220", null ],
        [ "How to run", "md_whist_tools_README.html#autotoc_md221", null ],
        [ "Report format", "md_whist_tools_README.html#autotoc_md222", [
          [ "high level information/statistic", "md_whist_tools_README.html#autotoc_md223", null ],
          [ "break down of frames", "md_whist_tools_README.html#autotoc_md224", [
            [ "breakdown of segments", "md_whist_tools_README.html#autotoc_md225", null ]
          ] ]
        ] ],
        [ "Implementation", "md_whist_tools_README.html#autotoc_md226", [
          [ "Data structures", "md_whist_tools_README.html#autotoc_md227", null ],
          [ "Hooks", "md_whist_tools_README.html#autotoc_md228", null ],
          [ "Statistics generator", "md_whist_tools_README.html#autotoc_md229", null ],
          [ "Pretty printer for frame breakdown", "md_whist_tools_README.html#autotoc_md230", null ]
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
"error__monitor_8c.html#a611aea3d89115184e7b59a56c33e5d09",
"globals_eval_h.html",
"group__threading.html#gga1eedf1deef6e272cb639c0bc15a3e68fa8686cf4c818a515a4842e891d88f2f37",
"lodepng_8c.html#aab7a41a03154aa8d9ef65f2d434641b6",
"mac__utils_8h.html",
"ringbuffer_8h.html",
"structAudioDecoder.html#aff3ae75c61f4666b4347763ca6ac9f3d",
"structInputDevice.html#a4fa00d68759f1577b838f2cf7c7107bc",
"structOSXFilenames.html#afb130cc3d8df974472a08125d2ded88d",
"structWhistClientMessage.html#a0f5e0baec5bb2d55c15eab4e4d78a372",
"sysinfo_8c.html#a9283304a24c69f120bdcc1f50aa355d4",
"whist_8h.html#a18de2db2f97ace4d6129993e3d10e7f2",
"whist_8h.html#aae969438a57a86fddf0cf53106c9b6b4"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';