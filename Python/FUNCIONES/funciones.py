#Funcion que pide nombre, lo guarda en variable y luego lo muestra en mensaje#
"""def mifuncion():
    nombre1 = (input("¿Cual es tu nombre? "))
    print("Tu nombre es:",nombre1)


print("ENSEGUIDA SE TE PEDIRA TU NOMBRE CON UNA FUNCION")
mifuncion()"""

#**********************************************************************#

#Definiendo una funcion con parametros
"""def mifuncion(nombre):
    print("Hola",nombre)

mifuncion("XD")"""

#**********************************************************************#

#Funcion de suma de 2 numeros
"""def suma(a, b):
    print(a+b)

suma(5, 4)"""

#**********************************************************************#

#Funciones dentro de una funcion (suma y resta)
"""def matematicas(a, b):

    def suma(a, b):
        print(a+b)

    def resta(a, b):
        print(a-b)

    suma(a,b)
    resta(a,b)

matematicas(5, 3)"""

#**********************************************************************#

#Funciones con variables
"""temperatura = 12
print("VARIABLE LOCAL --------------------↓")
def mifuncion(nombre):
    temperatura = 6.0
    print("Hola,", nombre, "la temperatura es de,", temperatura)

mifuncion("Luisca")
print(temperatura)
print("↑ VARIABLE GLOBAL")"""

#**********************************************************************#

#Funcion con parametros opcionales
"""def mifuncion(nombre = "Luisca"):
    print("Hola", nombre)

def suma(a,b,c):
    print(a+b+c)

mifuncion()
mifuncion("LUISCA2")

suma(2,4,3)"""

#**********************************************************************#

#Funcion con parametros variables
"""def suma(*args):
    resultado = 0

    for arg in args:
        resultado += arg
    print(resultado)

suma(1,0,2,3,0,0,4,5,0,0,0)"""

#**********************************************************************#

#Funcion "diccionario"
"""def diccionario(**kwargs):
    print("DICCIONARIO:")
    for key, value in kwargs.items():
        print(key, "=", value)

diccionario(Moto = "Kawasaki", Carro = "Toyota")"""

#**********************************************************************#

#Funcion si tu auto es bonito te dice bonito xd
"""def bonito(**kwargs):
    if kwargs['carro'] == 'bonito':
        print("Tu carro es bonito")
    else:
        print("Parece que tu carro no es bonito")

bonito(carro ="feo")"""

#**********************************************************************#

#Forma correcta de imprimir en pantalla una suma
"""def suma(a,b):
    return a+b

resultado = suma(2,4)
print(resultado)"""

#**********************************************************************#

#Forma correcta de imprimir operaciones matematicas de una tupla
"""def operaciones(a,b):
    return a+b, a-b, a/b, a*b

resultado = operaciones(2,4)
print("El resultado de la suma es:",resultado[0])
print("El resultado de la resta es:",resultado[1])
print("El resultado de la division es:",resultado[2])
print("El resultado de la multiplicacion es:",resultado[3])"""

"""(EJEMPLO 2 XD HACE LO MISMO DE ARRIBA PERO SE TIENEN QUE MOSTRAR TODAS Y ARRIBA PODEMOS ESCOGER SOLO MOSTRAR ALGUNAS)
suma, resta, divi, multi = operaciones(2,4)
print("El resultado de la suma es:",suma)
print("El resultado de la resta es:",resta)
print("El resultado de la division es:",divi)
print("El resultado de la multiplicacion es:",multi)"""

#**********************************************************************#

#Funcion de suma de los numeros del 1 al 5 = 15
"""def sumador (**kwargs):
    inicial = kwargs["inicial"] if "inicial" in kwargs else 0
    final = kwargs["final"] if "final" in kwargs else inicial

    resultado = 0
    for x in range(inicial, final +1):
        resultado += x
    return resultado

print(sumador(final = 5))"""

#**********************************************************************#

#Función anónima/lambda (funcion asignada a una variable)
"""anonima = lambda nombre, nombre2: print("Hola", nombre, "adios", nombre2)

anonima("Pepe", "Luis")

sumatoria = lambda x: x+x
print(sumatoria(2))"""

#**********************************************************************#

def bisiesto():
    año = (int(input("Ingrese el año que desea verificar: ")))
    if año % 400 == 0 or año % 4 == 0 and año % 100 != 0:
        print("Es bisiesto")
    else:
        print("No es bisiesto")

bisiesto()