# Desenvolva um programa que deve ler um arquivo csv intitulado “notas_alunos.csv”.
# O arquivo deve ter a seguinte estrutura:

# aluno: Nome do aluno;
# nota_1: Primeira nota;
# nota_2: Segunda nota;
# faltas: Número de faltas;

# O programa lerá esse arquivo e criará duas colunas. A primeira coluna 
# será “media”, que terá a média das duas notas do aluno. 
# A segunda será “situacao”, com os valores: APROVADO ou REPROVADO.

# O aluno que tiver mais de 5 faltas ou possuir média menor que sete, será reprovado.
# O programa deverá salvar esse novo dataframe com o nome “alunos_situacao.csv”.

# Por fim, o programa deverá mostrar na tela:
# - o maior número de faltas;
# - a média geral das notas dos alunos;
# - e a maior média.

# Veja em anexo um exemplo do arquivo “notas_alunos.csv”.

# Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe 
# o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.


import pandas as pd
import numpy as np

df = pd.read_csv("notas_alunos.csv", sep=";")

media = (df["nota_1"] + df["nota_2"]) / 2

df["media"] = media

df["situacao"] = np.where(np.logical_or((df['media'] < 7), (df['faltas'] > 5)),'Reprovado', 'Aprovado')

#print(df)
df.to_csv("alunos_situacao.csv", sep=";")

print(f"A maior numero de faltas foi {df['faltas'].max()}")
print(f"A media geral das notas foi {df['media'].median()}")
print(f"A maior media foi {df['media'].max()}")

