# Desenvolva um código que simule uma eleição com três candidatos.
# - candidato_X => 889
# - candidato_Y => 847
# - candidato_Z => 515
# - branco => 0

# O código deve perguntar se deseja finalizar a votação depois do voto. 
# Caso o número do voto não corresponda a nenhum candidato ou seja branco, 
# ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, 
# o código deve retornar uma mensagem para votar novamente.

# Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele 
# com o maior número de votos e, também, a quantidade de votos de cada 
# candidato, os brancos e nulos 

# Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e 
# compartilhe o link desse projeto no campo ao lado para que outros 
# desenvolvedores possam analisá-lo.  

candidato_X = 0
candidato_Y = 0
candidato_Z = 0
branco = 0
nulos = 0

while True:
    try:
        op = int(input("Você gostaria de votar em qual dessas opções:\n- candidato_X => 889\n- candidato_Y => 847\n- candidato_Z => 515\n- branco => 0:\n"))
    except:
        print("\nValor incorreto por favor votar novamente\n")
        continue

    if op == 889:
        while True:
            candidato_X += 1
            break

    if op == 847:
        while True:
            candidato_Y += 1
            break

    if op == 515:
        while True:
            candidato_Z += 1
            break

    if op == 0:
        while True:
            branco += 1
            break

    if (op >= 0 or op <= 0) and (op != 515) and (op != 847) and (op != 889):
        while True:
            nulos += 1
            break

    while True:
        sair = input("Digite sim para sair ou digite não para votar outra vez: ")
        if sair == "sim":
            if (candidato_X > candidato_Y) and (candidato_X > candidato_Z):
                print("\nO candidato vencedor foi: Candidato_X\n")
            elif (candidato_Y > candidato_X) and (candidato_Y > candidato_Z):
                print("\nO candidato vencedor foi: Candidato_Y\n")
            elif (candidato_Z > candidato_X) and (candidato_Z > candidato_Y):
                print("\nO candidato vencedor foi: Candidato_Z\n")
            else:
                print("\nNem um candidato obteve maioria dos votos\n")

            print(f"Votos candidato_X = {candidato_X}")
            print(f"Votos candidato_Y = {candidato_Y}")
            print(f"Votos candidato_Z = {candidato_Z}")
            print(f"Votos em branco = {branco}")
            print(f"Votos nulos = {nulos}")
            break

        elif sair == "não":
            break

        else:
            print("Valor invalido\n")
            continue

    if sair == "sim":
        break