# Desenvolva um código que utilize as seguintes características de um veículo:
# - Quantidade de rodas;
# - Peso bruto em quilogramas;
# - Quantidade de pessoas no veículo.

# Com essas informações, o programa mostrará qual é a melhor categoria de habilitação 
# para o veículo informado a partir das condições:

# A: Veículos com duas ou três rodas;
# B: Veículos com quatro rodas, que acomodam até oito pessoas e seu peso é de até 3500 kg;
# C: Veículos com quatro rodas ou mais e com peso entre 3500 e 6000 kg;
# D: Veículos com quatro rodas ou mais e que acomodam mais de oito pessoas;
# E: Veículos com quatro rodas ou mais e com mais de 6000 kg.

# Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub 
# e compartilhe o link desse projeto no campo ao lado para que outros 
# desenvolvedores possam analisá-lo.

quantidade_de_rodas = int(input("Quantas rodas tem o veículo: "))
peso_bruto = float(input("Peso bruto do veículo em quilogramas: "))
quantidade_de_pessoas = int(input("Quantidade de pessoas no veículo: "))


if quantidade_de_rodas == 1:
    print("Monociclos, condutor não precisa ser habilitado")
elif quantidade_de_rodas == 2 or quantidade_de_rodas == 3:
    print("Melhor categoria de habilitação para o veículo é A")
elif quantidade_de_rodas == 4 and quantidade_de_pessoas <= 8 and peso_bruto <= 3500:
    print("Melhor categoria de habilitação para o veículo é B")
elif quantidade_de_rodas >= 4 and quantidade_de_pessoas > 8:
    print("Melhor categoria de habilitação para o veículo é D")    
elif quantidade_de_rodas >= 4 and peso_bruto > 3500 and peso_bruto <= 6000:
    print("Melhor categoria de habilitação para o veículo é C")
elif quantidade_de_rodas >= 4 and peso_bruto > 6000:
    print("Melhor categoria de habilitação para o veículo é E")


