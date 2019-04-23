---
title: ""
author: Ryan Hayes
tags:
    - uncategorized
image: ""
draft: true
---

```bash
RyannosaurusRex@Bespin MINGW64 /c/git/personal/ryanhayes.net (master)
$ npm install

> iltorb@2.4.2 install C:\git\ryanhayes.net\node_modules\iltorb
> node ./scripts/install.js || node-gyp rebuild

info looking for cached prebuild @ C:\Users\RyannosaurusRex\AppData\Roaming\npm-cache\_prebuilds\ff68b8-iltorb-v2.4.2-node-v67-win32-x64.tar.gz
http request GET https://github.com/MayhemYDG/iltorb/releases/download/v2.4.2/iltorb-v2.4.2-node-v67-win32-x64.tar.gz
http 404 https://github.com/MayhemYDG/iltorb/releases/download/v2.4.2/iltorb-v2.4.2-node-v67-win32-x64.tar.gz
WARN install No prebuilt binaries found (target=11.11.0 runtime=node arch=x64 libc= platform=win32)

C:\git\ryanhayes.net\node_modules\iltorb>if not defined npm_config_node_gyp (node "C:\Program Files\nodejs\node_modules\npm\node_modules\npm-lifecycle\node-gyp-bin\\..\..\node_modules\node-gyp\bin\node-gyp.js" rebuild )  else (node "C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\bin\node-gyp.js" rebuild )
Warning: unrecognized setting VCCLCompilerTool/MultiProcessorCompilation
Warning: unrecognized setting VCCLCompilerTool/MultiProcessorCompilation
Warning: unrecognized setting VCCLCompilerTool/MultiProcessorCompilation
Warning: unrecognized setting VCCLCompilerTool/MultiProcessorCompilation
Building the projects in this solution one at a time. To enable parallel build, please add the "/m" switch.
MSBUILD : error MSB3428: Could not load the Visual C++ component "VCBuild.exe". To fix this, 1) install the .NET Framework 2.0 SDK, 2) install 
Microsoft Visual Studio 2005 or 3) add the location of the component to the system path if it is installed elsewhere.  [C:\git\ryanhay
es.net\node_modules\iltorb\build\binding.sln]
gyp ERR! build error
gyp ERR! stack Error: `C:\Program Files (x86)\MSBuild\14.0\bin\msbuild.exe` failed with exit code: 1
gyp ERR! stack     at ChildProcess.onExit (C:\Program Files\nodejs\node_modules\npm\node_modules\node-gyp\lib\build.js:262:23)
gyp ERR! stack     at ChildProcess.emit (events.js:197:13)
gyp ERR! stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:254:12)
gyp ERR! System Windows_NT 10.0.17134
gyp ERR! command "C:\\Program Files\\nodejs\\node.exe" "C:\\Program Files\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js"
"rebuild"
gyp ERR! cwd C:\git\ryanhayes.net\node_modules\iltorb
gyp ERR! node -v v11.11.0
gyp ERR! node-gyp -v v3.8.0
gyp ERR! not ok
npm WARN babel-plugin-styled-components@1.10.0 requires a peer of styled-components@>= 2 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.8 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.8: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! iltorb@2.4.2 install: `node ./scripts/install.js || node-gyp rebuild`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the iltorb@2.4.2 install script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\RyannosaurusRex\AppData\Roaming\npm-cache\_logs\2019-04-22T03_31_15_972Z-debug.log
```
######[Install Windows Build Tools](https://www.npmjs.com/package/windows-build-tools)

```bash
npm install --global windows-build-tools
```

```bash
yarn global add windows-build-tools
```

```powershell
PS C:\windows\system32> npm install --global --production windows-build-tools

> windows-build-tools@5.1.0 postinstall C:\Users\RyannosaurusRex\AppData\Roaming\npm\node_modules\windows-build-tools
> node ./dist/index.js



Downloading python-2.7.15.amd64.msi
[>                                            ] 0.0% (0 B/s)
Downloaded python-2.7.15.amd64.msi. Saved to C:\Users\RyannosaurusRex\.windows-build-tools\python-2.7.15.amd64.msi.
Downloading vs_BuildTools.exe
[>                                            ] 0.0% (0 B/s)
Downloaded vs_BuildTools.exe. Saved to C:\Users\RyannosaurusRex\.windows-build-tools\vs_BuildTools.exe.

Starting installation...
Launched installers, now waiting for them to finish.
This will likely take some time - please be patient!

Status from the installers:
---------- Visual Studio Build Tools ----------
2019-04-21T23:32:57 : Verbose : [InstalledProductsProviderImpl]: Stream was closed
2019-04-21T23:32:57 : Verbose : [InstallerImpl]: Rpc connection was closed.
2019-04-21T23:32:57 : Verbose : [InstallerImpl]: Stream was closed
2019-04-21T23:32:57 : Verbose : Completed notifying all clients that the update is starting
2019-04-21T23:32:57 : Verbose : Updating installer [bootstrapperArguments: /finalizeInstall install --in C:\ProgramData\Microsoft\VisualStudio\Packages\_bootstrapper\vs_setup_bootstrapper_201904212332293329.json --norestart --quiet --includeRecommended --add Microsoft.VisualStudio.Workload.VCTools --locale en-US --activityId 56083b59-412f-473c-bdae-1976d5623e0d]
------------------- Python --------------------
Successfully installed Python 2.7
```