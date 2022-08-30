

var nayara = new Cliente("Mirian", "Souza", "-----", "=====")
nayara.cadastraCliente();
var amanda = new Cliente("Larrissa", "Silva", "-----", "====")
amanda.cadastraCliente();
var isadora = new Cliente("Ricardo", "José", "-----", "=====")
isadora.cadastraCliente();
var cristina = new Cliente("Luis", "Henrique", "-----", "=====")
cristina.cadastraCliente();

function Cliente(nome, sobrenome, telefone, email) {
	this.nome = nome;
	this.sobrenome = sobrenome;
	this.telefone = telefone;
	this.email = email;
	this.cadastraCliente = function () {
		imprima("Nome: " + this.nome + " " + this.sobrenome);
		imprima("Telefone: " + this.telefone);
		imprima("E-mail: " + this.email);
		imprima(" ");
	}
}

let clientes = new Array();
clientes.push(new Cliente("Raphaela", "Miranda", "----", "===="));
clientes.push(new Cliente("Fernanda", "Oliveira", "----", "===="));
clientes.push(new Cliente("Nicole", "Faria", "----", "===="));

for (linha of clientes) {
	linha.cadastraCliente();
}


// imprime o texto seguido de 
//  uma quebra de linha
function imprima(texto) {
	document.write(texto + "<br>");
}

// formata números no formato brasileiro
function formataNumero(valor) {
	return new Intl.NumberFormat('pt-BR', { minimumIntegerDigits: 2 }).format(valor);
}

// formata moedas no formato brasileiro
function formataMoeda(valor) {
	let padraoBR = Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
	return padraoBR.format(valor);
}