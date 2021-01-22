# coding: utf-8

"""
Source : 
Date : 12/01/2019
Auteur : Christian Doriath
Dossier : /Python34/MesDEv/Flask/FlaskBootstrap_BASE
Fichier : app.py
Description : app flask de base pour utiliser Bootstrap 4.0

Mot cles : 
"""

from flask import Flask, render_template, flash, url_for, request
from flask_bootstrap import Bootstrap


app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'

bootstrap = Bootstrap(app)




@app.route('/')
def myindex():
	return render_template('index.html')

@app.route('/home')
def myhome():
	return render_template('home.html')


@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500






