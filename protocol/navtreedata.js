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
        [ "Recommended Workflow for Building Server Protocol on Linux", "md_server_README.html#autotoc_md90", null ],
        [ "Overview", "md_whist_debug_README.html#autotoc_md153", null ],
        [ "How to enable", "md_whist_debug_README.html#autotoc_md154", null ],
        [ "How to access", "md_whist_debug_README.html#autotoc_md155", null ],
        [ "Support Commands", "md_whist_debug_README.html#autotoc_md156", [
          [ "<tt>report_XXX</tt>", "md_whist_debug_README.html#autotoc_md157", null ],
          [ "<tt>set</tt>", "md_whist_debug_README.html#autotoc_md158", null ],
          [ "<tt>info</tt>", "md_whist_debug_README.html#autotoc_md159", null ],
          [ "<tt>insert_atexit_handler</tt> or <tt>insert</tt>", "md_whist_debug_README.html#autotoc_md160", null ],
          [ "<tt>plot_xxx</tt>", "md_whist_debug_README.html#autotoc_md161", null ]
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
      ] ],
      [ "Plotter", "md_whist_debug_README.html#autotoc_md174", [
        [ "Overiew", "md_whist_debug_README.html#autotoc_md175", [
          [ "C++ API part", "md_whist_debug_README.html#autotoc_md176", [
            [ "Controlling APIs:", "md_whist_debug_README.html#autotoc_md177", null ],
            [ "Sampling API:", "md_whist_debug_README.html#autotoc_md178", null ]
          ] ],
          [ "Data Exporting API:", "md_whist_debug_README.html#autotoc_md179", null ],
          [ "Python Helper Part", "md_whist_debug_README.html#autotoc_md180", null ]
        ] ],
        [ "Introduce to the use of plotter", "md_whist_debug_README.html#autotoc_md181", [
          [ "Practices for using the Sampling API", "md_whist_debug_README.html#autotoc_md182", [
            [ "MACRO Method", "md_whist_debug_README.html#autotoc_md183", null ],
            [ "dynamic Method", "md_whist_debug_README.html#autotoc_md184", null ]
          ] ],
          [ "Examples of using the <tt>plotter.py</tt>", "md_whist_debug_README.html#autotoc_md185", null ],
          [ "Basic usage", "md_whist_debug_README.html#autotoc_md186", null ],
          [ "Change style", "md_whist_debug_README.html#autotoc_md187", null ],
          [ "Use distribution graph", "md_whist_debug_README.html#autotoc_md188", null ],
          [ "Change Weight", "md_whist_debug_README.html#autotoc_md189", null ],
          [ "User Label filter", "md_whist_debug_README.html#autotoc_md190", null ],
          [ "Plot only specific range", "md_whist_debug_README.html#autotoc_md191", null ],
          [ "Compare two plots", "md_whist_debug_README.html#autotoc_md192", null ]
        ] ]
      ] ]
    ] ],
    [ "GF(256) Math Module", "GF256.html", null ],
    [ "Whist Congestion Control(WCC)", "md_whist_network_WCC.html", [
      [ "Terminology", "md_whist_network_WCC.html#autotoc_md236", null ],
      [ "Pacer (Network Throttler)", "md_whist_network_WCC.html#autotoc_md237", null ],
      [ "Algorithm", "md_whist_network_WCC.html#autotoc_md238", [
        [ "Arrival time model", "md_whist_network_WCC.html#autotoc_md239", null ],
        [ "Inter-group delay variation filter", "md_whist_network_WCC.html#autotoc_md240", null ],
        [ "Over-use detector", "md_whist_network_WCC.html#autotoc_md241", null ],
        [ "Rate control", "md_whist_network_WCC.html#autotoc_md242", [
          [ "Increase bitrate", "md_whist_network_WCC.html#autotoc_md243", null ],
          [ "Decrease bitrate", "md_whist_network_WCC.html#autotoc_md244", null ],
          [ "Saturate Bandwidth, Increase percentage and Maximum Bandwidth Available", "md_whist_network_WCC.html#autotoc_md245", [
            [ "Little tweaks", "md_whist_network_WCC.html#autotoc_md246", null ]
          ] ],
          [ "Burst Bitrate", "md_whist_network_WCC.html#autotoc_md247", null ]
        ] ],
        [ "RECOMMENDED values and reasons", "md_whist_network_WCC.html#autotoc_md248", null ]
      ] ],
      [ "References", "md_whist_network_WCC.html#autotoc_md249", null ]
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
"clipboard__osx_8h.html#a859798c8fe26e2db8b95841aba3c7dfa",
"error__monitor_8c.html#ac0528e6a2362ba2081d8b3fbf11fb7e2",
"ffmpeg__encode_8c.html#a37c3ae16b80743dbd8cc6d3c00851df5",
"functions_y.html",
"group__error__codes.html#gga18cc8e20ea58aa56867b56542e89b04dafa31102004a16b76b6601dfa35b81649",
"group__timers.html#gaac67515d5dd09a5158f3ce7d1f799405",
"lodepng_8c.html#a2aa729ce82079627789a0f8961c82f5e",
"log__statistic_8h.html#a5caad6508eb2c3373d06f221feb364f0ade84c9203e2d34ac95b87121a7b498a4",
"network__algorithm_8c.html#ac5bd73cb56a9bd6311987644acb904b2",
"rwlock_8c.html#a0520037e37c8759dbe3a8ed4b072e911",
"structClipboardActivity.html#aa3562a7e49b1489f8a28b4a4047dd9ba",
"structInputDeviceUInput.html#a7b1f2877ec24b971d71e8f8fe307f2fb",
"structPrivateKeyData.html",
"structVideoEncoder.html#a8737b2047d311ccad803628b61a24ae3",
"structWhistYUVColor.html#a19784573e8a520f0e550040670c9d4ef",
"wasapicapture_8h_source.html",
"whist_8h.html#aef166b266f8d5b853ec64a90756fafb6a1e9b2a03b386a7ed2cdf948c46161579"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';