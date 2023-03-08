# Matriz original
matriz = [[0,0,0,0,0,0,0,0,0,0], 
            [0,0,0,1,1,1,1,0,0,0], 
            [0,0,0,1,1,2,0,0,0,0], 
            [0,0,0,0,2,2,2,0,0,0], 
            [0,0,0,0,2,3,0,0,0,0], 
            [0,0,0,0,2,3,0,0,0,0], 
            [0,0,0,0,2,3,0,0,0,0], 
            [0,0,0,0,3,3,0,0,0,0], 
            [0,0,0,2,3,3,0,0,0,0], 
            [0,0,0,0,2,2,0,0,0,0]]

# Transponer la matriz
matriz_transpuesta = [[fila[i] for fila in matriz] for i in range(len(matriz[0]))]

# Invertir el orden de las filas de la matriz transpuesta
matriz_rotada = [fila[::-1] for fila in matriz_transpuesta]


# Imprimir la matriz rotada
for fila in matriz_rotada:
    print(fila)