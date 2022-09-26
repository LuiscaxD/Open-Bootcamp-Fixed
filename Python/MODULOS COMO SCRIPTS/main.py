"""import operaciones as op
import sys
import pprint

if __name__ == "__main__":
    main()"""

#*******************************************************************#

"""def main () :
    res = op.suma (2, 2)
    resResta = op.resta(5, 3)
    print ("Hola en main ()", res, resResta)

if __name__ == "__main__":
    main()"""

#*******************************************************************#

"""def main():
    print(op.como_me_llamo())

if __name__ == "__main__":
    main()"""


#*******************************************************************#

"""def main():
    ope = op.Operador()
    print(ope.multiplicacion(4, 3))

if __name__ == "__main__":
    main()"""

#*******************************************************************#

"""def main():
    pprint.pprint(sys.path)

if __name__ == "__main__":
    main()"""

#*******************************************************************#

#Importando desde un paquete (dentro de carpeta "Operaciones")
import Operaciones.suma

def main():
    mp = Operaciones.suma.Multiplicador()
    print(mp.multiplica(5,5))
    Operaciones.suma.suma(2,2)

if __name__ == "__main__":
    main()