Simple To Do List: 

1) Lo primero que tenemos que hacer, es inicializar nuestro proyecto con "npx create-react-app (nombre del proyecto)"

2) Luego, vamos a la parte principal (app.js), nos deshacemos de todo lo que no importa y solo dejamos el app con los div. Entonces ahora
nos toca definir los valores que tendra el estado principal de la lista. Para esto utilizamos "React.useState()" y seteamos el estado default
como un texto vacio y un isDone en false.

3) Ahora, como seguimos en la parte del app.js, nos toca  definir todas las funciones que seran utilizadas en nuestra app, queremos agregar tareas,
marcar tareas como hechas y tambien remover las tareas realizadas. 
		----1) Lo primero que tenemos que hacer para agregar una tarea, es ir a la parte de app.js (que es donde declararemos todas nuestras funciones)
			 y crear una funcion que se llame "addTodo". Con el useState en esta funcion, modificaremos el estado del arreglo que definimos y le diremos
			 que agregue en el arreglo el texto que pusimos, y como default siempre estara en false.

		----2) Ahora tenemos que definir una funcion para que cuando hagamos click en una tarea, esta se marque como hecha. Los haremos creando una funcion
			 que se llame: "markTodo". Esta funcion recibira como parametro el index del item del arreglo, y dentro de ese index entramos a la clave 
			 isDone del objeto y lo seteamos como true.

		----3) Ahora... cuando hacemos una tarea, queremos borrarla. Para esto creamos una funcion que se llame "removeTodo" que al igual que la anterior va a recibir 
			 como parametro el index del todo, y usaremos el metodo splice de los arrays para eliminarlo.

4) Una vez que seteamos todas las funciones, comenzaremos a crear los componentes que recibiran dichas funciones como parametro.
		----1) Primero lo que seteamos, es el ToDo en si... Le pasaremos como parametros el index, y las funciones de mark y remove. Crearemos dos botones
			 que serviran para ejecutar dichas acciones

		----2) Luego vamos a definir el form para ingresar los todo: Logicamente, tendremos que manejar un cambio de estados en el estado del input.
			 Usaremos useState con el value del imput. Crearemos una funcion dentro de este componente para menjarlo, que se llame handleSubmit.
			 Lo que hara esta funcion es setear el valor del estado de acuerdo a lo que vayamos tipeando.