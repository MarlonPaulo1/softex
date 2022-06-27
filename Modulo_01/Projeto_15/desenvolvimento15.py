# Faça um código que execute a contagem regressiva de uma bomba, informando o número
# de segundos para explodir. Ele deverá mostrar a mensagem “iniciando contagem regressiva”, 
# os segundos passados e, no final, a mensagem “BUM!”.

# Não é necessário, mas, caso deseje tornar o sistema mais realista para que o 
# tempo realmente passe em segundos, você pode usar a função time.sleep() que existe 
# na Python (acesse o link em anexo). No entanto, é preciso adicionar uma biblioteca antes de executá-la. 

# Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o 
# link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.


import time

def contagemRegressiva(numeros_de_segundos):
    print("Iniciando contagem regressiva")
    while numeros_de_segundos:
        minutos, segundos = divmod(numeros_de_segundos, 60)
        formato_minutos_segundos = "{:02d}:{:02d}".format(minutos, segundos)
        print(formato_minutos_segundos)
        time.sleep(1)
        numeros_de_segundos -= 1
        
    print("BUM!")

tempo_para_explosao = input("Digite o tempo para a explosão em segundos: ")
contagemRegressiva(int(tempo_para_explosao))

