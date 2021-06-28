function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}

function redirecionar() {
    window.open("https:github.com/karinesteves");
    window.location.href = "https://github.com/karinesteves";
}

function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

var validar;

function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));


alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));


var d = new Date();
alert(d);
//alert(d.getMinutes); minutos.
//alert(d.getMonth()+1); mês.
//alert(d.getDay).



var count = 0;
while (count <= 5) {
    console.log(count);
    count = count + 1;
    count++;
    alert(count);
}


var nome = "Karine Esteves";
var idade = prompt("Qual sua idade?");
//var idade = 18;
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
};
//var idade = 31;
//var idade2 = 10;
var n1 = 8;
var n2 = 5;
var lista = ["maça", "pêra", "laranja"];
var fruta = { nome: "maça", cor: "vermelha" };
var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];
lista.push("uva"); //push para acrestar mais um elemento a lista.//
lista.pop(); //pop para retirar o ultimo elemento//
var frase = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);
alert(n1 * n2);
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - ")); //para separar as strings.
console.log(lista[1]);
console.log(lista.length);
console.log(lista.reverse);
console.log(fruta);
console.log(frutas);
console.log(fruta.nome);
alert(frutas[1].nome);
alert(fruta.cor);
alert(lista);
alert(lista[2]);
console.log(nome);
console.log(n1 + n2);
//console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());
alert(frase.replace("Japão", "Brasil"));