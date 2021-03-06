# Curso de git 2017 y github 2019

\$ **git init** Empieza en tu carpeta un repositorio (es el que arranca el repositorio).

\$ **git add biografia.txt** Con esto el sistema de control de versiones, ahora sabe que existe biografia.txt.

\$ **git commit -m “mensaje”** Es el que envía los últimos cambios del archivo a la base de datos del sistema de control de
versiones para controlar los cambios que se hallan hecho.

\$ **git add .** Esta es otra opción para agregar archivos, cuando le agregas el punto lo que haces es que agregas
todos los archivos que hallan cambiado en la carpeta donde en ese momento estás.

\$ **git status** Sirve para ver el estatus de tu repositorio

\$ **git rm(remove)** Sirve para remover commits de la stagin area

\$ **git rm --cache 'archivo'** Elimina los archivos del área de Staging y del próximo commit pero los mantiene en nuestro disco
duro.

\$ **git rm --force 'archivo'** Elimina los archivos de Git y del disco duro. Git siempre guarda todo, por lo que podemos acceder
al registro de la existencia de los archivos, de modo que podremos recuperarlos si es necesario
(pero debemos usar comandos más avanzados).

\$ **git show** Muestra todos los cambios históricos que hallas hecho. (muestra todos los cambios que se han
hecho y por quien lo ha hecho)

\$ **git log biografia.txt** El comando log sirve para ver la historia entera de un archivo.

\$ **git push** El comando push sirve para re enviar hacia otro repositorio remoto lo que estás haciendo.

\$ **git pull** Puedes traer cualquier repositorio.

\$ **ls** Muestra una lista de los archivos y carpetas donde me encuentro en este momento.

\$ **cd (change directory)** Es donde me encuentro en este momento

\$ **ls -all** Muestra todos los acrchivos incluso ocultos en tipo lista

                                    (clear === ctrl + l) 	          Limpia la consola

                                    mkdir (make directory)          para crear carpeta se escribe

\$ **touch** Crea un archivo completamente vacio.

\$ **cd .** Es la carpeta actual

\$ **cd ..** Es la carpeta anterior

\$ **cat** Muestra de forma rapida el contenido de un archivo

\$ **history** Muestra el historial completo de comandos que uno esta haciendo

---

---

#### Qué es un branch y como funciona un merge?

> branch se le llama a aquella rama que se sub divide de la rama master en la cual se pueden trabajar fragmentos de codigo aislado

> merge = Es unir un fragmento de codigo o un commit a la versión final alojada en master,

---

---

#### Para configurar de origen un repositorio necesitamos configurar

\$ **git config** Encuentra todas las configuraciones

\$ **git --list** Muestra la listapor defecto de nuestro git

\$ **git config --list** Sirve para mostrar los o las configuraciones de git

$ **git --global**                  Quiere decir que vamos a cambiar todos los usuarios globales 
	$ **git config --global user.email "tu@email.com"** Sirve para cambiar el email de quien usa git
\$ **git config --global user.name "Tu Nombre"** Sirve para cambiar el nombre de quien usa git

\$ **git --list --show-origin** Veremos donde estan las configuraciones guardadas (AVANZADO)

\$ **pwd** Se ve la direccion donde nos encontramos actualmente

>                 esc + shift + z + z             Fuerza el envio del commit y nos saca del editor de linea de comandos
>                 (guardar)                      (por si no equivocamos mandando un commit sin mensaje)
>                                Este editor se llama vim o vi
>
>                                para insertar texto tenemos que presionar
>
>                                ESC + I

\$ **git diff (enrte que hash y que hash)** Muestra las diferencias entre los archivos que se han creado

\$ **git log --stat** Sirve para visualizar los cambios en bits de el ultimo commit

\$ **git reset** Nos permite regresar a una versión anterior una vez revisando las versiones

                                existen 2 tipos de regresion

                                la regrision dura con --hard
                                ( que vuelve todooo al estado anterior)

                                el reset suabe
                                (que regresa todo al estado anterior pero deja el stagin intacto)

\$ **git checkout** Sirve para moverse entre ramas, commits y demas

\$ **git checkout -b** Sirve para crear ramas igual que git branch

---

---

#### Plataforma Github

>     			        Te permite ver el texto de 3 diferentes formas uno es uno llamado BLAME, otro es RAW y otro HISTORY
>     		        	RAW es texto completamente plano
>     		        	BLAME es quien hizo que cosa y los compara
>     		        	HISTORY muestra la historia de este blog es igual a un log

\$ **git remote origin y la direccion del reporsitorio** \_Con ello lo que hacemos es traer nuestro repositorio remoto a nuestro
\_repo local luego aparte tenemos que enviar a nuestro rama master aorigin

\$ **git push origin master** Asi enviamos los cambios a origin

    								IMPORTANTE

    								Si esto llega a fallar lo que tenemos que hacer es traer los cambios del reporsitorio remoto e integrarlos
    								en este	repositorio para ello usamos

    								$ **git pull origin  y la rama que queremos traer en este caso master

\$ **git pull origin master --allow-unrelated-histories** Permite que el repositorio no lea el readme.md

    								IMPORTANTE

    								Una vez hecho esto tenemos que realizar de nuevo el push a la rama origin master

    								$ **git push origin master

    								despues de hacer el push tenemos que confirmar cambios y posteriormente tenemos que hacer un commit

    								$ **git commit -am 'mensaje'

---

---

#### Cómo funcionan las llaves públicas y privadas

> Las llaves públicas y privadas nos ayudan a cifrar y descifrar nuestros archivos de forma que los podamos
> compartir archivos sin correr el riesgo de que sean interceptados por personas con malas intenciones.

    								La forma de hacerlo es la siguiente:

    								Ambas personas deben crear su llave pública y privada.

    								Ambas personas pueden compartir su llave pública a las otras partes (recuerda que esta llave es pública, no hay
    								problema si la “interceptan”).

    								La persona que quiere compartir un mensaje puede usar la llave pública de la otra persona para cifrar los
    								archivos y asegurarse que solo puedan ser descifrados con la llave privada de la persona con la que queremos
    								compartir el mensaje.

    								El mensaje está cifrado y puede ser enviado a la otra persona sin problemas en caso de que los archivos sean
    								interceptados.

    								La persona a la que enviamos el mensaje cifrado puede usar su llave privada para descifrar el mensaje y ver los
    								archivos.

    								Puedes compartir tu llave pública pero nunca tu llave privada.

---

---

#### Configura tus llaves SSH en local

**Primer paso:** Generar tus llaves SSH. Recuerda que es muy buena idea proteger tu llave privada con una contraseña.

    								ssh-keygen -t rsa -b 4096 -C "correo@mail.com"

    								-t			tipo de algoritmo
    								rsa
    								-b 			que tan compleja es la llave
    								4096
    								-C			Correo al que conectaremos el correo

**Segundo paso:** Terminar de configurar nuestro sistema.

    ------	En Windows y Linux:

                    Encender el "servidor" de llaves SSH de tu computadora:

    								eval $(ssh-agent -s)

                    Añadir tu llave SSH a este "servidor":

    								ssh-add ruta-donde-guardaste-tu-llave-privada
    								ssh-add ~/.ssh/id_rsa
								
								sh-copy-id correo@gmail.com
								
								cd ~/.ssh
								
								cat id_rsa.pub

Cambiar la ulr en en caso de que primero se haya realizado con https a SSH y viceversa

\$ **git remote set-url origin url-ssh-del-repositorio-en-github**

    								IMPORTANTE

    								Despues de hacer el cambio de https a ssh o viceversa tenemos que actualizar el repositorio entonces procedemos
    								a realizar un pull.

    								$ **git pull origin master

    								Despues de verificar los datos del servidor procedemos a realizar un commit

    								$ **git commit -am 'mensaje'

    								y volvemos a traer los datos del remoto

    								$ **git pull origin master

    								Finalmente hacemos un push de nuestro ultimo commit en local

    								$ **git push origin master

---

---

#### Alias

comenzamos haciendo uso de cualquier comando dentro de git, posteriormente pasamos a definir algun tipo de alias
ejemplo:

    								alias arbolito = 'git log --oneline --graph --decorate'
    								alias superlog = 'git log --oneline --graph --decorate'

sirve para acortar los tiempos en que se escriben las las sintaxis dificiles entonces es muy util para hacer cambios de manera
más rapida

---

---

#### Tags y versiones en Git y GitHub

Los tags o etiquetas nos permiten asignar versiones a los commits con cambios más importantes o significativos de nuestro
proyecto.

**Comandos para trabajar con etiquetas:**

Para crear un nuevo tag y asignarlo a un commit escribimos:
\$ **git tag -a nombre-del-tag -m 'mensaje de la creación del tag' id-del-hash**

Para borrar un tag escribimos
\$ **git tag -d nombre-del-tag**

Para mostrar todos y cada uno de los tags que hayamos hecho escribimos:
\$ **git tag**

<mejor-forma>
$ **git show-ref --tags**

Para publicar un tag en el repositorio remoto:

\$ **git push origin --tags.**

Borrar un tag del repositorio remoto:
\$ **git tag -d nombre-del-tag y git push origin :refs/tags/nombre-del-tag**

Si solo se quiere eliminar la referencia entonces tenemos que hacer
\$ **git push origin :refs/tags/'nombre de nuestro tag'**

---

---

#### Como enviar ramas secundarias al repositorio

Lo que tenemos que hacer aqui es enviar cada una de las ramas al repositorio
\$ **git push origin 'nombre de la rama'**

## para crear ramas es git branch 'nombre de la rama'

---

#### Como trabajar en flujos de trabajando desde github

para comenzar tenemos que dirigirnos a nuestro settings despues tenemos que agregar el correo que quemos agregar y posteriormente
tenmos que darle permisos dentro del repositorio

posteriomente tenmos las opciones de agregar a usuarios por su correo o por su nick de github entonces podemos escoger la que sea
mejor

---

---

README.md es una excelente práctica en tus proyectos, md significa Markdown es un especie de código que te permite cambiar la
manera en que se ve un archivo de texto.

Lo interesante de Markdown es que funciona en muchas páginas, por ejemplo la edición en Wikipedia; es un lenguaje intermedio que
no es HTML, no es texto plano, es una manera de crear excelentes texto formateados.

---

---

#### Git Stash: Guardar cambios en memoria y recuperarlos después

> Cuando necesitamos regresar en el tiempo porque borramos alguna línea de código pero no queremos pasarnos a otra rama porque nos
> daría un error ya que debemos pasar ese “mal cambio” que hicimos a stage, podemos usar \$ \*\*git stash para regresar el cambio anterior
> que hicimos.

    								IMPORTANTE

    								$ git stash

> git stash es típico cuando estamos cambios que no merecen una rama o no merecen un rebase si no simplemente estamos probando algo
> y luego quieres volver rápidamente a tu versión anterior la cual es la correcta.

---

---

#### Git Clean: Limpiar tu proyecto de archivos no deseados

A veces creamos archivos cuando estamos realizando nuestro proyecto que realmente no forman parte de nuestro directorio de
trabajo, que no se debería agregar y lo sabemos.

Para saber qué archivos vamos a borrar tecleamos git clean --dry-run

    								IMPORTANTE

    								$ git clean --dry-run

                     Para borrar todos los archivos listados (que no son carpetas) tecleamos git clean -f

---

#### Git cherry-pick: Traer commits viejos al head de un branch

Existe un mundo alternativo en el cual vamos avanzando en una rama pero necesitamos en master uno de esos avances de la rama,
para eso utilizamos el comando git cherry-pick IDCommit.

cherry-pick es una mala práctica porque significa que estamos reconstruyendo la historia, usa cherry-pick con sabiduría. Si no
sabes lo que estás haciendo ten mucho cuidado.

---

---

#### Git Reset y Reflog: Úsese en caso de emergencia

¿Qué pasa cuando todo se rompe y no sabemos qué está pasando? Con git reset HashDelHEAD nos devolveremos al estado en que el
proyecto funcionaba.

git reset --soft HashDelHEAD te mantiene lo que tengas en staging ahí.
git reset --hard HashDelHEAD resetea absolutamente todo incluyendo lo que tengas en staging.

> git reset es una mala práctica, no deberías usarlo en ningún momento; debe ser nuestro último recurso.

---

#### Buscar en archivos y commits de Git con Grep y log

A medida que nuestro proyecto se hace grande vamos a querer buscar ciertas cosas.

Por ejemplo: ¿cuántas veces en nuestro proyecto utilizamos la palabra color?

Para buscar utilizamos el comando git grep color y nos buscará en todo el proyecto los archivos en donde está la palabra color.

Con git grep -n color nos saldrá un output el cual nos dirá en qué línea está lo que estamos buscando.
Con git grep -c color nos saldrá un output el cual nos dirá cuántas veces se repite esa palabra y en qué archivo.

Si queremos buscar cuántas veces utilizamos un atributo de HTML lo hacemos con git grep -c "<p>".
