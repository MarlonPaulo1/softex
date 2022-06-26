# Desenvolva um programa que utiliza o nome de um aluno, duas notas e a quantidade de faltas que ele teve. Conclua se o aluno está aprovado ou reprovado de acordo com as especificações:

# - Se a média do aluno for menor que sete, o sistema deve informar o nome do aluno e que ele está reprovado;
# - Se o aluno possuir mais de três faltas, o sistema deve informar o nome do aluno e que ele está reprovado;
# - Se a média do aluno for maior ou igual a sete, o sistema deve informar o nome do aluno e que ele está aprovado.

# No sistema, todos os valores devem estar armazenados em variáveis.

# Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.



nome = input("Digite o nome do Aluno: ")
nota1 = float(input("Digite a primeira nota: "))
nota2 = float(input("Digite a segunda nota: "))
falta = int(input("Digite a quantidade de falta do Aluno: "))

media = (nota1 + nota2) / 2

print("Media: ", media)
print("Faltas: ", falta)

if media < 7:
    print(f"{nome} foi Reprovado(a) por media")
if falta > 3 :
    print(f"{nome} foi Reprovado(a) por falta")
if media >= 7 and falta <= 3:
    print(f"{nome} foi Aprovado(a)")