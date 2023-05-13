# Matriz original
matriz1 = [0,0,0,0,0,0,0,0,0,0, 
                  0,0,0,1,1,1,1,0,0,0, 
                  0,0,0,1,1,2,0,0,0,0, 
                  0,0,0,0,2,2,2,0,0,0, 
                  0,0,0,0,2,3,0,0,0,0, 
                  0,0,0,0,2,3,0,0,0,0, 
                  0,0,0,0,2,3,0,0,0,0, 
                  0,0,0,0,3,3,0,0,0,0, 
                  0,0,0,2,3,3,0,0,0,0, 
                  0,0,0,0,2,2,0,0,0,0]

matriz2 = [0,0,0,0,1,0,1,0,0,0, 
                  0,0,0,1,1,1,0,0,0,0, 
                  0,0,0,1,1,2,0,0,0,0, 
                  0,0,0,0,2,2,2,0,0,0, 
                  0,0,0,0,2,3,0,0,0,0, 
                  0,0,0,2,3,3,0,0,0,0, 
                  0,0,0,2,3,3,0,2,0,0, 
                  0,0,0,0,3,3,0,2,0,0, 
                  0,0,0,3,3,0,2,0,0,0, 
                  0,0,0,2,2,0,0,0,0,0]

matriz3 = [0,0,0,0,0,0,0,0,0,0, 
                  0,0,0,1,0,1,0,0,0,0, 
                  0,0,0,1,1,1,0,0,0,0, 
                  0,0,0,0,1,2,0,0,0,0, 
                  0,0,0,0,2,2,2,0,0,0, 
                  0,0,0,2,2,3,0,0,0,0, 
                  0,0,0,2,3,3,0,0,0,0, 
                  0,0,2,2,3,3,3,0,0,0, 
                  0,0,0,3,3,3,3,0,0,0, 
                  0,0,2,2,0,0,2,2,0,0]

matriz4 = [0,0,0,0,0,0,0,0,0,0, 
                  0,0,0,0,1,1,0,0,0,0, 
                  0,0,0,1,1,2,1,0,0,0, 
                  0,0,0,1,2,2,2,0,0,0, 
                  0,0,0,0,2,3,0,0,0,0, 
                  0,0,0,0,2,3,0,0,0,0, 
                  0,0,0,2,3,3,0,0,0,0, 
                  0,0,0,0,3,3,0,0,0,0, 
                  0,0,2,3,3,3,3,0,0,0, 
                  0,0,2,0,0,2,2,0,0,0]

matriz5 =  [0,0,0,0,0,0,0,0,0,0, 
                  0,0,0,1,1,1,1,0,0,0, 
                  0,0,0,1,1,2,0,0,0,0, 
                  0,0,0,0,2,2,2,0,0,0, 
                  0,0,0,0,2,3,0,0,0,0, 
                  0,0,0,0,3,2,0,0,0,0, 
                  0,0,0,0,2,3,0,0,0,0, 
                  0,0,0,0,3,3,0,0,0,0, 
                  0,0,0,2,3,3,0,0,0,0, 
                  0,0,0,0,2,2,0,0,0,0]

matriz6 =  [0,0,0,0,1,0,1,0,0,0, 
                  0,0,0,1,1,1,0,0,0,0, 
                  0,0,0,1,1,2,0,0,0,0, 
                  0,0,0,0,2,2,2,0,0,0, 
                  0,0,0,0,2,3,0,0,0,0, 
                  0,0,0,0,3,2,0,0,0,0, 
                  0,0,0,0,3,2,0,2,0,0, 
                  0,0,0,0,3,3,0,2,0,0, 
                  0,0,0,3,3,0,2,0,0,0, 
                  0,0,0,2,2,0,0,0,0,0]

matriz7 =  [0,0,0,0,0,0,0,0,0,0, 
                  0,0,0,1,0,1,0,0,0,0, 
                  0,0,0,1,1,1,0,0,0,0, 
                  0,0,0,0,1,2,0,0,0,0, 
                  0,0,0,0,2,2,2,0,0,0, 
                  0,0,0,0,3,2,0,0,0,0, 
                  0,0,0,0,3,2,0,0,0,0, 
                  0,0,0,0,3,3,2,0,0,0, 
                  0,0,0,3,3,3,3,0,0,0, 
                  0,0,2,2,0,0,2,2,0,0]

matriz8 =  [0,0,0,0,0,0,0,0,0,0, 
                  0,0,0,0,1,1,0,0,0,0, 
                  0,0,0,1,1,2,1,0,0,0, 
                  0,0,0,1,2,2,2,0,0,0, 
                  0,0,0,0,2,3,0,0,0,0, 
                  0,0,0,0,2,3,0,0,0,0, 
                  0,0,0,0,3,2,0,0,0,0, 
                  0,0,0,0,3,3,0,0,0,0, 
                  0,0,2,3,3,3,3,0,0,0, 
                  0,0,2,0,0,2,2,0,0,0]


def transform(array):
    matriz10x10 = [[0 for i in range(10)] for j in range(10)] # matriz de 10x10 inicializada con ceros
    idx_matriz = 0 # contador para el índice de la matriz5
    for i in range(10): # recorremos las filas de la matriz de 10x10
        for j in range(10): # recorremos las columnas de la matriz de 10x10
            if idx_matriz < len(array): # si quedan elementos por agregar
                matriz10x10[i][j] = array[idx_matriz] # agregamos el valor a la matriz de 10x10
                idx_matriz += 1 # incrementamos el índice de la matriz5
    return matriz10x10
            
# Imprimir la matriz rotada
def rotate(matriz, text):
    print(text)
    matriz_rotada = list()
    for fila in zip(matriz):
        matriz_rotada.append(list(reversed(tuple(*fila))))
    
    for i in range(len(matriz_rotada)):
        for y in range(len(matriz_rotada[i])):
            print(matriz_rotada[i][y], end=',')
        print()
        
rotate(transform(matriz1), "Matriz 1")
rotate(transform(matriz2), "Matriz 2")
rotate(transform(matriz3), "Matriz 3")
rotate(transform(matriz4), "Matriz 4")
rotate(transform(matriz5), "Matriz 5")
rotate(transform(matriz6), "Matriz 6")
rotate(transform(matriz7), "Matriz 7")
rotate(transform(matriz8), "Matriz 8")