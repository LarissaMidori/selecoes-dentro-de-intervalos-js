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
var INTERVALO4 = 18;
var INTERVALO3 = 10;
var INTERVALO2= 5;

if (departamento >= INTERVALO4) 
{
    horario = HORARIO4;
} else if (departamento >= INTERVALO3) 
{
    horario = HORARIO3;
} else if (departamento >= INTERVALO2)
{
     horario = HORARIO2;
} else 
{
    horario = HORARIO1;
}
    
console.log(nome + " do departamento " + departamento + " - Reunião marcada para " + horario);