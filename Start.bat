@echo.
@echo 03/07/2018
@echo.
@echo Flask Framework - Tentative de demarrage du serveur
@echo.   
@echo Choisir le fichier Python parmi les suivants : 
@echo.   
dir *.py
@echo.   


@echo off
set namef="Flask"

set /p PythonFile=Saisir le nom du fichier Python :  

if exist %PythonFile% (
	@echo Le fichier %PythonFile% existe
	@echo.   	
	echo Demarrage du serveur %namef%
	@echo.   
	set FLASK_APP=%PythonFile%
	set FLASK_ENV=development
	flask run --host=0.0.0.0 

) else (
	@echo Le fichier %PythonFile% n'existe PAS ! 
)






