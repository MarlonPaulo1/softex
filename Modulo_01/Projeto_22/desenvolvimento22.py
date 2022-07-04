# Crie uma classe de sua preferência com, no mínimo, uma variável, um método e um
#  incremento. Depois, desenvolva três ou mais objetos para testar o código.

# Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe 
# o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.

class Jogador:
    valor = 0

    def __init__(self, nome):
        self.nome = nome
        self.velocidade = 50

    def aumentar_velocidade(self, valor):
        self.velocidade += valor

jogador_1 = Jogador("Marta")
jogador_1.aumentar_velocidade(4)
print(f"{jogador_1.nome} precisa almentar para {jogador_1.velocidade}Km/h sua velocidade")

jogador_2 = Jogador("Pedro")
jogador_2.aumentar_velocidade(3)
print(f"{jogador_2.nome} precisa almentar para {jogador_2.velocidade}Km/h sua velocidade")

jogador_3 = Jogador("Maria")
jogador_3.aumentar_velocidade(5)
print(f"{jogador_3.nome} precisa almentar para {jogador_3.velocidade}Km/h sua velocidade")

