## Notas
Aplicación de prueba realizada en Node.JS para realizar solicitudes HTTP a los servicios creados utilizando Spring FrameWork y Netflix OSS. 

# Proyecto
El proyecto se compone de 3 carpetas, las cuales cada una es un proyecto Maven que debe ser importando en Eclipse o STS.
* spring-boot-microservice-currency-conversion
* spring-boot-microservice-eureka-naming-server
* spring-boot-microservice-forex-service

# Instalación
* En Eclipse o STS, se hace clic en **Archivo/Importar** y se selecciona un proyecto de tipo existente de Maven.
* Se busca la ubicación del proyecto y se le selecciona.
* Se hace clic en **Finalizar** y se espera a que se termine de construir el área de trabajo.
* Realizar dichas acciones con todos los proyecto spring-boot-microservice-*

# Despliegue
Para que funcione correctamente se debe seguir el siguiente orden al levantar las aplicaciones:
* spring-boot-microservice-eureka-naming-server
* spring-boot-microservice-forex-service
* spring-boot-microservice-currency-conversion

# Comandos
Finalmente si se quiere hacer uso de la aplicación en Node.JS para probar las peticiones, se debe ir a la carpeta raíz del proyecto y realizar los siguiente pasos:
* npm install
* node app.js <Comandos>
Como comandos tenemos:
* uniforme (Exclusivo): Las peticiones tienen la misma cantidad. Sus argumentos son
    * cantidad (alias 'c'): La cantidad de peticiones a realizar. Por defecto es 10
    * numero (alias 'n'): El monto total a convertir en las peticiones. Por defecto es 1000
* aleatorio (Exclusivo): Las peticiones tienen cantidad distintas y aleatorias. Sus argumentos son
    * cantidad (alias 'c'):la cantidad de peticiones a realizar. Por defecto es 10
    * base (alias 'b'): El monto base para determinar los números aleatorios
    * rango (alias 'r'): El rango maximo para determinar los números aleatorios
* Feign (Opcional) : Esta peticiones determinan si las solicitudes seran hechas al cliente Feign.