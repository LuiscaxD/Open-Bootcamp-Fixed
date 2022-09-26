#If si el input es 1 muestra un texto, sino muestra otro#
"""condicion = float(input("Indique el nnumero 1: "))
if (condicion == 1):{
    print("En efecto digito el 1")
}
else:{
    print("Usted digito numero incorrecto")
}"""

#*****************************************************#

#Suma 1 a contador hasta llegar a 10, muestra pares e impares#
contador = 1
while contador <=10:
    if contador % 2 == 0:
        print(contador, " es un número par")
    else:
        print(contador, "es un numero impar")
    contador += 1
print("Fin")

#*****************************************************#

#Suma 1 a contador hasta llegar a 10 pero el break lo frena en 4 muestra pares e impares#
"""contador = 1
while contador <= 10:
    if contador == 5:
        break
    if contador % 2 == 0:
        print(contador, " es un numero par")
    else:
        print(contador, "es un numero impar")
    contador += 1
print("Fin")"""

#*****************************************************#

#Imprimir el valor actual de un rango o una lista#
"""tupla = [1, 2, 3,'a', 'b']

print("VALORES EN EL RANGO:")
for numero in range(0, 11):
    print(numero)
print("VALORES EN LA TUPLA")
for valorActual in tupla:
    print(valorActual)"""

#*****************************************************#

#For que va mostrando la palabra actual hasta encontrar la palabra deseada en la lista#
"""lista = ["hola", "hola1", "hola2", "hola3", "mensaje", "adios"]

for palabra in lista:
    print("La palabra actual es: ", palabra)
    if palabra == "mensaje":
        print("He encontrado la palabra 'mensaje'")
        break"""

#*****************************************************#

#Ordenando una lista#
"""lista = [3, 2, 5, 1, 4]

listaOrdenada = sorted(lista)
print(listaOrdenada)"""

#*****************************************************#

#Ordenando una lista al reves#
"""lista = [3, 2, 5, 1, 4]

listaOrdenada = sorted(lista, reverse=True)
print(listaOrdenada)"""

#*****************************************************#

#Match/switch#
"""valor = 5

match valor:
    case 1:
        print("Valor es igual a 1")
    case 2:
        print("Valor es igual a 2")
    case 3:
        print("Valor es igual a 3")
    case 4:
        print("Valor es igual a 4")
    case 5:
        print("Valor es igual a 5")"""

#*****************************************************#

#Alternativo a lo de abajo#
"""contador = 100
while contador >= 1:
    if contador == 0:
        break
    else:
        print(contador)
    contador -= 1
print("Fin")"""


#*****************************************************#

"""rango = range(1, 101)

for i in reversed(rango):
    print(i)
print("FIN")"""
    