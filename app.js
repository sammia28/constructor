window.addEventListener("load", function(){
    var boton = document.getElementById("Mostrar")
    boton.addEventListener("click", function(){
        var nombre = document.getElementById("nombre").value;
        var edad = parseInt(document.getElementById("edad").value);
        var sexo = document.getElementById("sexo").value;
        var sammia = new Persona(nombre, edad, sexo);
        console.log(sammia.presentacion());
    });
    function Persona(nombre, edad, sexo, mayorDeEdad) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.mayorDeEdad = (this.edad >= 18);
        this.presentacion = function(){
            if (this.mayorDeEdad){
                return "hola, mi nombre es " + this.nombre + ", tengo " + this.edad + " años y soy mayor de edad ";
            }else{
                return "hola, mi nombre es " + this.nombre + ", tengo " + this.edad + " años y soy menor de edad ";
            }
        };
    }; 
});