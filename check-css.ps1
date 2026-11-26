$ErrorActionPreference = 'Stop'
Push-Location $PSScriptRoot
try {
    $nodeCommand = Get-Command node -ErrorAction SilentlyContinue
    $nodePath = if ($nodeCommand) { $nodeCommand.Source } else {
        Join-Path $env:USERPROFILE '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe'
    }
    if (-not (Test-Path -LiteralPath $nodePath)) { throw 'Install Node.js, then run npm ci.' }
    & $nodePath './node_modules/stylelint/bin/stylelint.mjs' '**/*.css' --formatter verbose
    $lintExit = $LASTEXITCODE
} finally { Pop-Location }
exit $lintExit
