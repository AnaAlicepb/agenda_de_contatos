// Função para adicionar um novo contato
function addContact(event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    var tabelaContatos = document.getElementById("tabelaContatos");
    var corpoTabelaContatos = document.getElementById("corpoTabelaContatos");

    var novaLinha = document.createElement("tr");
    var colunaNome = document.createElement("td");
    var colunaTelefone = document.createElement("td");

    colunaNome.textContent = nome;
    colunaTelefone.textContent = telefone;

    novaLinha.appendChild(colunaNome);
    novaLinha.appendChild(colunaTelefone);

    corpoTabelaContatos.appendChild(novaLinha);

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";

    var mensagem = document.getElementById("mensagem");
    if (nome !== "" && telefone !== "") {
        mensagem.textContent = "Contato adicionado com sucesso!";
        mensagem.classList.remove("error");
        mensagem.classList.add("success");
    } else {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.classList.remove("success");
        mensagem.classList.add("error");
    }
}

// Restrição do campo de texto para permitir apenas letras
document.getElementById("nome").addEventListener("input", function (event) {
    var input = event.target;
    var formattedValue = input.value.replace(/[^a-zA-Z\s]/g, "");
    input.value = formattedValue;

    if (formattedValue !== input.value) {
        alert("Por favor, digite apenas caracteres alfabéticos no campo de nome.");
    }
});

// Atribua um ouvinte de evento 'input' ao campo de telefone
document.getElementById("telefone").addEventListener("input", function (event) {
    var input = event.target;
    var value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    var formattedValue = '';

    if (value.length > 0) {
        formattedValue = `(${value.substring(0, 2)}`;
    }
    if (value.length > 2) {
        formattedValue += `) ${value.substring(2, 3)}`;
    }
    if (value.length > 3) {
        formattedValue += ` ${value.substring(3, 7)}`;
    }
    if (value.length > 7) {
        formattedValue += `-${value.substring(7, 11)}`;
    }

    // Limitar o campo a 16 caracteres (incluindo os traços)
    if (formattedValue.length > 16) {
        formattedValue = formattedValue.substring(0, 14);
    }

    input.value = formattedValue;
});

