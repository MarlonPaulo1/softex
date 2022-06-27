# Faça uma função calculadora de dois números com três parâmetros: 
# os dois primeiros serão os números da operação 
# e o terceiro será a entrada que definirá a operação a ser executada. 
# Considera a seguinte definição:
# 1. Soma
# 2. Subtração
# 3. Multiplicação
# 4. Divisão

# Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.

# Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe 
# o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.

def calculadora(numero1, numero2, operacao):
    if operacao == "1":
        return (f"{numero1} + {numero2} = {numero1 + numero2}")
    elif operacao == "2":
        return (f"{numero1} - {numero2} = {numero1 - numero2}")
    elif operacao == "3":
        return (f"{numero1} * {numero2} = {numero1 * numero2}")
    elif operacao == "4":
        return (f"{numero1} / {numero2} = {numero1 / numero2}")
    else :
        return print("0")
        
print("Calculadora Simples")
n1 = float(input("Digite o primeiro número: "))
n2 = float(input("Digite o segundo número: "))
op = input("Digite a operação: \n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão")
    
print(calculadora(n1,n2,op))

