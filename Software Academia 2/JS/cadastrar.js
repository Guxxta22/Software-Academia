var alunosArr = [];
if (localStorage.alunosArr) {
    alunosArr = JSON.parse(localStorage.alunosArr);
}

function aluno(id, nome, email, senha, dataNascimento) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.dataNascimento = dataNascimento;
}

document.querySelector('.btn-action').addEventListener('click', function (e) {
    var emailVal = document.querySelector('[name="email"]').value,
        nomeVal = document.querySelector('[name="nome"]').value,
        senhaVal = document.querySelector('[name="senha"]').value,
        nascimentoVal = document.querySelector('[name="dataNascimento"]').value,
        _aluno;

    _aluno = new aluno((alunosArr.length + 1), nomeVal, emailVal, senhaVal, nascimentoVal);

    alunosArr.push(_aluno);
    localStorage.alunosArr = JSON.stringify(alunosArr);
});
