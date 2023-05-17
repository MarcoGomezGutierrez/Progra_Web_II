- Iniciar:

    - Trabajo Online:

        - En la raiz del proyecto:

            ```
            npm i
            ```

        - Abrir el servidor en una terminal:

            ```
            cd src
            ```

            ```
            cd server
            ```

            ```
            node index.js
            ```
        - Arrancar la aplicación en otra terminal:

            ```
            ng build
            ```

            ```
            ng serve
            ```
        - Posteriormente puedes instalar la aplicación en Local, debido a que tiene implementado una PWA. Cuando arrancas la aplicación normal te dejara instalarla arriba al lado de la barra de busqueda de Google.

        ![Descripción de la imagen](src\assets\readme\PWA.PNG)

        - Una vez instalado puedes trabajar Offline, esto implica que no necesitas encender el servidor, puesto que la aplicación guardara todo en el Local Storage y una vez vuelva la conexión con el Servidor (API REST) volvera a actualizar la información que quedo desactualizada.

    - Trabajo Offline:

        - Esto implica dos opciones:
            - Primera Opción: tener la PWA instalada, pero antes, tienes que tener conexión a internet (en desarrollo local siempre va a funcionar sin conexión a internet, localhost).
            - Segunda Opción: trabajar sin la PWA.
        - Estas dos opciones siempre van a implicar no tener el servidor arrancado. Puesto que tirara de Local Storage.

- Explicación del código:

    El código queda dibido de tal forma que se pueda trabajar Online o Offline. Primero explicaremos la parte Online. 
    
    La aplicación se conectara a un servidor API REST (Hacer uso de un servicio por si se quisiera modificar el modo de almacenamiento de las tareas -> Hasta  1,5 puntos). Esto se realiza desde el Componente <lista-tareas.component.ts> que se conecta al servicio <servicio-json.service.ts> luego este servicio es el que se conecta al Servidor que actualizara o leera los datos del JSON. También el servicio del cliente cacheara la información en el Local Storage. 

    La aplicación también permite editar, marcar y eliminar las tareas. Estos métodos simplemente utilizan el mismo servicio que es updateDatabase() donde le pasamos dependiendo del método:

    - editTask(i) -> Guarda el valor del índice especificado devuelto por el html y guardar el valor en una varible llamada "editingTask" y que establecera "editingIndex" al índice del elemento para que el programa detecte que estas editando, con esto consigo mostrar los botones Guardar y Cancelar. Cuando termines de editarla en vez de el botón que tenías te aparecera Guardar (saveTask(i)) o Cancelar (cancelEditTask(i)) y Guardar se encargara de mandarle el nuevo array con los datos completos, incluyendo el de todas las tareas, es decir, sobrescribe todos los datos. Cancelar solo establece "editingIndex" a -1 para que la aplicación vuelva al estado de no editar.
    
    - marcarTask(i) -> Marcar cambia el valor de <tasks: { name: string, completed: boolean }[] = [];> El completed del indice especificado lo modifica alternando con el operador contrarío "!". Y posteriormente hace otro updateDatabase() del array completo.

    - deleteTask(i) -> Eliminar se encarga de eliminar con la función splice(index, 1) donde le expecificas el indice a eliminar y 1 elemento a eliminar. Posteriormente actualizo el JSON updateDatabase().

    - La PWA ha sido creada con el comando:

        ```
        ng add @angular/pwa
        ```
        Este comando se encarga de generar el manifest y el service worker necesario para que funcione correctamente la PWA. También actualiza el index.html para que detecte en que ubicación esta el manifest.

    Para conseguir que funcione de manera Offline, tienes que configurar en el archivo "ngsw-config.json" ubicado en el repositorio raiz, con la ubicación de los archivos que necesitas que se cacheen. Después hay que actualizar el componente que renderiza la Página, en mi caso, "lista-tareas.component.ts" importar el módulo SwUpdate y luego en el método ngOnInit(), que se ejecuta cada vez que se inicia la página, verificar que si hay alguna actualización disponible actualizar la página:

        ```
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(() => {
                if (confirm('New version available. Load new version?')) {
                window.location.reload();
                }
            });
        }
        ```

        Luego, en el archivo "main.ts" sustituir:

        ```
        platformBrowserDynamic().bootstrapModule(AppModule);
        ```

        Por:

        ```
        platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/ngsw-worker.js');
            }
        }).catch(err => console.log(err));
        ```

        Con esto conseguiremos que se existe un serviceWorker registrarlo en el navegador. Consiguiendo que al cerrar la aplicación o activar desde Application, Service Worker, activar la opcion Offline para confirmar que cuando recargas la PWA siga funcionando.

        
    ![service-worker](src\assets\readme\service-worker.PNG)
        




    