nome = input("Digite seu nome completo: ")
while True:
    try:
        idade = int(input("Digite seu ano de nascimento: "))
        if idade >= 1920 and idade <= 2021:
            idade_atual = 2022 - idade
        print(f"{nome}, completou, ou completará, no ano atual (2022): {idade_atual} ano(s).")
        
        break
    except:
        print("idade invalida")
        continue