#***********************************************************************#

"""class Juguete:
    _encendido = True
    
    def enciende(self):
        print("Encendió el aparato")
        self._encendido = True
    def apaga(self):
        print("Apagó el aparato")
        #Para modificar una variable local de una clase de forma global que no deberiamos hacerlo ya que tiene el guion bajo
        self._encendido = False
    def isEncendido(self):
        return self._encendido"""

#para utilizar una funcion que esta dentro de una clase se tiene que crear un objeto "d = Juguete()"#
"""d = Juguete()
d.apaga()
print(d.isEncendido())"""

#Como estan en distintos sitios de memoria, aunque sea la misma clase, como estan declarados en distintas variables, "d" no afecta a "d2" y viceversa#

"""d2 = Juguete()
d2.enciende()
print(d2.isEncendido())"""

#***********************************************************************#

#En las clases estatitcas las variables si comparten el mismo espacio en memoria entonces se afectan entre ellas
"""class estatica:
    numero = 1

    def incrementa():
        estatica.numero += 1

print(estatica.numero)
estatica.incrementa()
print(estatica.numero)
estatica.incrementa()
print(estatica.numero)
estatica.incrementa()
print(estatica.numero)
estatica.incrementa()
print(estatica.numero)"""

#***********************************************************************#

#Como heredar metodos a clases que de casualidad son iguales a las de una clase anterior (Jueguete) y aparte añadirle metodos personalizados
"""class Potato(Juguete):
    def quitarOreja(self):
        pass

    def ponerOreja(self):
        pass

class Dino(Juguete):
    def verEscamas(self):
        pass

p = Potato()
p.enciende()
print(p.isEncendido())
p.apaga()
print(p.isEncendido())"""

#***********************************************************************#

#EJERCICIO 1#
"""class Vehiculo:
    _color = False
    _ruedas = False
    _puertas = False
    def colorEnciende(self):
        print("Color enciende:")
        self._color = True
    def ruedasEnciende(self):
        print("Ruedas enciende:")
        self._ruedas = True
    def puertasEnciende(self):
        print("Puertas enciende:")
        self._puertas = True
    def isEncendidoColor(self):
        return self._color
    def isEncendidoRuedas(self):
        return self._ruedas
    def isEncendidoPuertas(self):
        return self._puertas

class Coche(Vehiculo):
    _velocidad = False
    _cilindrada = False
    def velocidadEnciende(self):
        print("Velocidad enciende:")
        self._velocidad = True
    def cilindradaEnciende(self):
        print("Cilindrada enciende:")
        self._cilindrada = True
    def isEncendidoVelocidad(self):
        return self._velocidad
    def isEncendidoCilindrada(self):
        return self._cilindrada
      
v = Coche()
v.colorEnciende()
print(v.isEncendidoColor())
v.ruedasEnciende()
print(v.isEncendidoRuedas())
v.puertasEnciende()
print(v.isEncendidoPuertas())
v.velocidadEnciende()
print(v.isEncendidoVelocidad())
v.cilindradaEnciende()
print(v.isEncendidoCilindrada())"""

#***********************************************************************#

#EJERCICIO 2#

class Alumno:

    def iniciar(self,nombre,nota):
        self.nombre=nombre
        self.nota=nota
 
    def mostrarDatos(self):
               print("Nombre: ", self.nombre)
               print("Nota: ", self.nota)
 
    def resultado(self):
            print("****************")
            print("SISTEMA DE NOTAS")
            if self.nota >= 60:
                print("El alumno ha aprobado la materia")
                print("********************************")
            else:
                print("El alumno ha perdido la materia")
                print("********************************")
 
estudiante=Alumno()

estudiante.iniciar(input("Cual es tu nombre: "), int(input("Cual es tu nota: ")))
 
estudiante.mostrarDatos()
estudiante.resultado()


