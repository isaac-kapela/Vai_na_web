let nota1 = 6, nota2 = 3, escolares, media = 2;

if((nota1 + nota2) / media >= 5){
    escolares = "aprovado";
    console.log(escolares);
}
else if((nota1 + nota2) / media < 5) {
    escolares = "recuperação";
    console.log(escolares);
}
else{
    console.log("dados invalidos");
}