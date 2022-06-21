# Crie um tipo abstrato de dado (TAD) para manipular números complexos na linguagem Python.
# O método deve:

# - calcular três números complexos;
# - realizar todas as operações básicas;
# - e imprimir as propriedades real e img do números. 

# Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.

class numerosComplexos:
    def __init__(self, primeiro_numero_complexo, segundo_numero_complexo, terceiro_numero_complexo):
        self.primeiro_numero_complexo = primeiro_numero_complexo
        self.segundo_numero_complexo = segundo_numero_complexo
        self.terceiro_numero_complexo = terceiro_numero_complexo

print(f"----------------Primeiro numero:-------------------")
a = int(input("Digite a parte real do primeiro número complexo: "))
b = int(input("Digite a parte imaginaria do primeiro número complexo: "))
print(f"----------------Segundo numero:-------------------")
c = int(input("Digite a parte real do segundo número complexo: "))
d = int(input("Digite a parte imaginaria do segundo número complexo: "))
print(f"----------------terceiro numero:-------------------")
e = int(input("Digite a parte real do terceiro número complexo: "))
f = int(input("Digite a parte imaginaria do terceiro número complexo: "))

primeiro_numero = complex(a, b)
segundo_numero = complex(c, d)
terceiro_numero = complex(e, f)

operacoesComplexas = numerosComplexos(primeiro_numero, segundo_numero, terceiro_numero)

print(f"Os números digitados fpram {operacoesComplexas.primeiro_numero_complexo} {operacoesComplexas.segundo_numero_complexo} {operacoesComplexas.terceiro_numero_complexo}")

print(f"A soma entre os 3 números é: {operacoesComplexas.primeiro_numero_complexo + operacoesComplexas.segundo_numero_complexo + operacoesComplexas.terceiro_numero_complexo}")
print(f"A subitração entre os 3 números é: {operacoesComplexas.primeiro_numero_complexo - operacoesComplexas.segundo_numero_complexo - operacoesComplexas.terceiro_numero_complexo}")
print(f"A Multiplicação entre os 3 números é: {operacoesComplexas.primeiro_numero_complexo * operacoesComplexas.segundo_numero_complexo * operacoesComplexas.terceiro_numero_complexo}")
print(f"A divisão entre os 3 números é: {(operacoesComplexas.primeiro_numero_complexo / operacoesComplexas.segundo_numero_complexo) / operacoesComplexas.terceiro_numero_complexo}")