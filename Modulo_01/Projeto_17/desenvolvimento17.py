# Faça uma função calculadora que os números e as operações serão feitas pelo usuário. 
# O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. 
# No início, o programa mostrará a seguinte lista de operações:
# 1: Soma
# 2: Subtração
# 3: Multiplicação
# 4: Divisão
# 0: Sair

# Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, 
# o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

# Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. 
# Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, 
# o sistema irá parar. 

# É necessário que o sistema mostre as opções sempre que finalizar uma operação e mostrar o resultado. 

# Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o 
# link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.  

def calculadora(numero1, numero2, operacao):
    if operacao == 1:
        return (f"{numero1} + {numero2} = {numero1 + numero2}")
    elif operacao == 2:
        return (f"{numero1} - {numero2} = {numero1 - numero2}")
    elif operacao == 3:
        return (f"{numero1} * {numero2} = {numero1 * numero2}")
    elif operacao == 4:
        return (f"{numero1} / {numero2} = {numero1 / numero2}")
        
print("Calculadora Simples")

while True:
    op = int(input("Digite a operação: \n1: Soma\n2: Subtração\n3: Multiplicação\n4: Divisão\n0: Sair"))
    
    if op == 0:
        print("Programa finalizado")
        break
    elif op >= 5:
        print("Essa opção não existe\n")
        continue
    
    n1 = float(input("Digite o primeiro número: "))
    n2 = float(input("Digite o segundo número: "))

    print(f"\n{calculadora(n1,n2,op)}\n")

