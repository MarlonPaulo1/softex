/*

Crie um vetor com ponteiros utilizando alocação dinâmica na linguagem C, que:

- use a função realloc;
- use a função sizeof;
- que tenha tamanho 22 de vetor;
- depois libere o bloco utilizando a função free.

Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto 
no campo ao lado para que outros desenvolvedores possam analisá-lo. 

*/

#include <stdio.h>
#include <stdlib.h>

int main() {
	
	int *ptr;
	
	ptr = (int *) malloc(10 * sizeof (int));
	
	ptr = (int *) realloc(ptr, 22 * sizeof (int));
	
	void free (void *ptr);
	
	return 0;
}