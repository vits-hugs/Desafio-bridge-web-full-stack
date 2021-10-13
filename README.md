# Calculadora duodigito
Calcula o menor número real duodigito múltiplo de X diferente de 0,   
onde X é um número real informado pelo usuário. Por exemplo, dado X =  999,  
o menor duodigito múltiplo de X é 999, já que 999x1 é multiplo de 999 e diferente de 0,    
dado X = 125, 0 menor duodigito multiplo é 500, já que os seus outros multiplos(0,125,250,375)   
não são duodigitos   
## Link do projeto no heroku: https://duodigito-calculator.herokuapp.com/ 

## Teconologias utilizadas

### Backend (link https://duodigitobackend.herokuapp.com/duodigito=123)
Para o backend utilizei o microframework web flask,  
fiz essa escolha pois o backend necessário é bem simples,  
e python é uma linguagem facil e que estou acostumado.  
Então consegui rapidamente fazer o código do backend e   
hospedar no heroku.   
>ps: o backend está no github apenas para vizualização do código,  
>o frontend utiliza o backend hospedado no heroku  

### Frontend
Para o frontend utilizei react pois foi recomendado,  
e também descobri que é muito facil transforma-lo num PWA,  
Então aprendi a usar react no meio tempo do desafio.  
ReactJS é uma biblioteca que permite criar uma aplicação  
web com uma unica pagina, alterando apenas componentes dentro  
dela, no caso da minha aplicação ela permite eu alterar entre  
a calculadora e o historico sem ter que requistar a rota para o  
servidor novamente.  



## Como rodar o projeto localmente
Clone o diretório  
```git clone  https://github.com/vits-hugs/Desafio-bridge-web-full-stack.git  ```     
Abra o terminal no diretório do projeto e rode:  
```npm  install  ```  
para instalar as dependencias  
e depois rode  
```npm  run start ```  
pronto!, o projeto provavelmente estara rodando em  
http://localhost:3000/

## Como rodar apenas backend
Para o backend basta rodar o arquivo app.py,  
que ele será iniciado num localhost.

## Numeros legais para botar na calculadora
1888989  
810  
123  
99985  
123123123123123123123  
>ps: alguns podem demorar um pouco para calcular (810 principalmente)

