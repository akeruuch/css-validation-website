@echo off
setlocal
pushd "%~dp0"
set "lectureNode=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if exist "%lectureNode%" (
  "%lectureNode%" "node_modules\stylelint\bin\stylelint.mjs" "**/*.css" --formatter verbose
) else (
  node "node_modules\stylelint\bin\stylelint.mjs" "**/*.css" --formatter verbose
)
set "lectureResult=%errorlevel%"
popd
exit /b %lectureResult%
