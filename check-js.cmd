@echo off
setlocal
pushd "%~dp0"
set "lectureNode=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if exist "%lectureNode%" (
  "%lectureNode%" "node_modules\eslint\bin\eslint.js" "**/*.js"
) else (
  node "node_modules\eslint\bin\eslint.js" "**/*.js"
)
set "lectureResult=%errorlevel%"
if "%lectureResult%"=="0" echo JavaScript validation passed.
popd
exit /b %lectureResult%
