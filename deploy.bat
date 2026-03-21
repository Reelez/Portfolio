@echo off
cd /d "%~dp0frontend"
echo Construyendo el portafolio...
npm run build
echo Desplegando a GitHub Pages...
npm run deploy
echo Listo! Tu portafolio fue publicado.
pause
