@echo off


@REM -------------------------------------------------------------------------------------------------------------------
@REM root files
@REM ----------
IF NOT EXIST ".gitignore" (REM. > ".gitignore")
IF NOT EXIST "CHANGELOG.md" (REM. > "CHANGELOG.md")
IF NOT EXIST "gulpfile.js" (REM. > "gulpfile.js")
IF NOT EXIST "init.bat" (REM. > "init.bat")
IF NOT EXIST "LICENSE" (REM. > "LICENSE")
IF NOT EXIST "package.json" (REM. > "package.json")
IF NOT EXIST "README.md" (REM. > "README.md")
IF NOT EXIST "tsconfig.json" (REM. > "tsconfig.json")



@REM -------------------------------------------------------------------------------------------------------------------
IF NOT EXIST ".vscode\" (mkdir ".vscode\")
    IF NOT EXIST ".vscode\LUIF.HTML__v1--draft.code-snippets" (REM. > ".vscode\LUIF.HTML__v1--draft.code-snippets")
    IF NOT EXIST ".vscode\settings.json" (REM. > ".vscode\settings.json")
IF NOT EXIST "dist\" (mkdir "dist\")
IF NOT EXIST "src\" (mkdir "src\")
IF NOT EXIST "src\scss\" (mkdir "src\scss\")
    IF NOT EXIST "src\scss\_variables.scss" (REM. > "src\scss\_variables.scss")
IF NOT EXIST "src\ts\" (mkdir "src\ts\")



@REM -------------------------------------------------------------------------------------------------------------------
