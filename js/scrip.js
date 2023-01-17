let main = function(){
    captura_boton();
}

let captura_boton = function(){
    document.querySelector(".myButton input").setAttribute("onclick","dataRead()");
}

let dataRead = function(){
    console.log("Intentaremos leer los datos del formulario");
    console.log(
        document.querySelector("#nombre").value,
        document.querySelector("#apellido").value,
        document.querySelector("#email").value,
        document.querySelector("#pass").value,          
    );
    let myObject = {
        //clave : valor
        nombre : document.querySelector("#nombre").value,
        apellido : document.querySelector("#apellido").value,
        email : document.querySelector("#email").value,
        pass : document.querySelector("#pass").value
    };
    console.log(myObject);
    //JSON NECESITA PASAR EL OBJETO A STRING 
    console.log(JSON.stringify(myObject)); 
    //GUARDAMOS LOS DATOS EN LOCAL STORAGE 
    save_localStorage(myObject);
}

let save_localStorage = function(myObj){
    localStorage.setItem("miInfo", JSON.stringify(myObj));
}

let read_localStorage = function(){
    let miInfo = localStorage.getItem("miInfo");
    console.log(miInfo);
    let myObject = JSON.parse(miInfo);
    console.log(myObject);
    document.querySelector("#nombre").value = myObject.nombre;
    document.querySelector("#apellido").value = myObject.apellido;
    document.querySelector("#email").value = myObject.email;
    document.querySelector("#pass").value = myObject.pass;
}

let reset = function(){
    document.querySelector("#nombre").value = "";
    document.querySelector("#apellido").value =  "";
    document.querySelector("#email").value =  "";
    document.querySelector("#pass").value =  "";  
}

main(); //MÉTODO PRINCIPAL