from flask import Flask, render_template, request, redirect, jsonify
import time
from flask_cors import CORS, cross_origin

app = Flask(__name__)


CORS(app, support_credentials=True)


@cross_origin(supports_credentials=True)
@app.route('/')
def mainPage():
    return 'Api calculadora de duodigitos\n exemplo: \duodigito=123 \n para numeros decimais utilize "." '


@cross_origin(supports_credentials=True)
@app.route('/duodigito=<int:id>')
def calcula_duodigito_int(id):
    try:
        numero, multiplicador, erro, tempo = conta_tempo(id)

        return jsonify(erro=erro, duodigito=numero, multiplicador=multiplicador, tempo=tempo)
    except:
        return 'Não foi possivel calcular'


@cross_origin(supports_credentials=True)
@app.route('/duodigito=<float:id>')
def calcula_duodigito_float(id):
    try:
        numero, multiplicador, erro, tempo = conta_tempo(id)

        return jsonify(erro=erro, duodigito=numero, multiplicador=multiplicador, tempo=tempo)
    except:
        return 'Não foi possivel calcular'


def conta_tempo(num):
    start = time.time()
    numero, multiplicador, erro = menor_duodigito_multiplo(num)
    end = time.time()
    return numero, multiplicador, erro, end - start


def menor_duodigito_multiplo(num):
    x = 1
    while True:
        numero = num*x
        if is_duodigito(numero):
            return numero, x, False
        x += 1
        if x > 13_000_000:
            return 'nao encontrado', '+ de 13.000.000', True


def is_duodigito(numero):
    numero = str(numero)
    numero = numero.replace('.', numero[0])
    numero = set(numero)
    if len(numero) > 2:
        return False
    return True


if __name__ == "__main__":
    app.run()
