/* alert("Hola guapo");
console.log("esto es un mensaje en la consola");
document.getElementById("texto1").innerHTML="Hola Pepe";

    <input type="button" value="boton" onclick="cambiarNombre()">
    
    
    
    <script type="text/javascript">
        function cambiarNombre() {
            console.log("entro en cambiar nombre");
            document.getElementById("texto1").innerHTML="Hola Pepe";
            console.log("salgo de cambiar nombre");
        }; 

        <input type="button" value="subir" onclick="subir()">
    <br>
    <h2 id="numero">0</h2>
    <br>
    <input type="button" value="bajar" onclick="bajar()">
    
    
    <script type="text/javascript">
        function subir() {
            let valor = document.getElementById("numero").innerHTML;
            valor++;
            document.getElementById("numero").innerHTML=valor;
        }
        function bajar() {
            let valor = document.getElementById("numero").innerHTML;
            valor--;
            document.getElementById("numero").innerHTML=valor;
        }
    </script> 
    
    



    
    <h1 id="texto1">Hola guapis</h1>
    <input type="button" value="subir" onclick="ascensor(1)">
    <br>
    <h2 id="numero">0</h2>
    <br>
    <input type="button" value="bajar" onclick="ascensor(-1)">
    
    
    <script type="text/javascript">
        function ascensor(sumaresta) {
            let valor = document.getElementById("numero").innerHTML;
            valor=Number(valor)+sumaresta;
            document.getElementById("numero").innerHTML=valor;
        }
    </script>


*/
