/* 
Departamento 1 a 4 - Segunda 9h
Departamento 5 a 9 - Segunda 13h
Departamento 10 a 17 - Terça 13h
Departamento 18 a 20 - Quarta 9h
*/

var nome = prompt("Digite o nome");
var departamento = prompt("Digite o nº do departamento");
var horario = " ";
var HORARIO1 ="Segunda às 9h";
var HORARIO2 ="Segunda às 13h";
var HORARIO3 ="Terça às 9h";
var HORARIO4 ="Quarta às 9h";
var INTERVALO1 = 4;
var INTERVALO2 = 9;
var INTERVALO3 = 17;

if (departamento <= INTERVALO1) 
{
    horario = HORARIO1;
} 
else
{
    if (departamento <= INTERVALO2) 
    {
        horario = HORARIO2;
    } 
    else 
    {
        if (departamento <= INTERVALO3)
        {
            horario = HORARIO3;
        } 
        else 
        {
            horario = HORARIO4;
        }
    }
    
}

console.log(nome + " do departamento " + departamento + " - Reunião marcada para  " + horario);




