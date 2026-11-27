@echo off
setlocal
pushd "%~dp0"
set "lecturePython=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
echo Open http://127.0.0.1:8153/#calculator in your browser.
echo Press Ctrl+C to stop the local preview.
if exist "%lecturePython%" (
  "%lecturePython%" -m http.server 8153 --bind 127.0.0.1
) else (
  python -m http.server 8153 --bind 127.0.0.1
)
popd
