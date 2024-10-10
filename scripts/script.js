// scripts/script.js

// Inicializa as variáveis globais
let receitas = [];
let despesas = [];

// Função para cadastrar uma receita
function cadastrarReceita() {
    const descricao = document.getElementById('descricaoReceita').value;
    const valor = parseFloat(document.getElementById('valorReceita').value);
    
    if (descricao && !isNaN(valor) && valor > 0) {
        receitas.push({ descricao, valor });
        atualizarSaldo();
        alert('Receita cadastrada com sucesso!');
        document.getElementById('descricaoReceita').value = '';
        document.getElementById('valorReceita').value = '';
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

// Função para cadastrar uma despesa
function cadastrarDespesa() {
    const descricao = document.getElementById('descricaoDespesa').value;
    const valor = parseFloat(document.getElementById('valorDespesa').value);
    
    if (descricao && !isNaN(valor) && valor > 0) {
        despesas.push({ descricao, valor });
        atualizarSaldo();
        alert('Despesa cadastrada com sucesso!');
        document.getElementById('descricaoDespesa').value = '';
        document.getElementById('valorDespesa').value = '';
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

// Função para calcular e exibir o saldo
function atualizarSaldo() {
    const totalReceitas = receitas.reduce((total, receita) => total + receita.valor, 0);
    const totalDespesas = despesas.reduce((total, despesa) => total + despesa.valor, 0);
    const saldo = totalReceitas - totalDespesas;

    // Atualiza a exibição do saldo
    document.getElementById('saldo').innerText = `Saldo: R$ ${saldo.toFixed(2)}`;
}

// Função para gerar relatório de gastos
function gerarRelatorio() {
    const relatorioElement = document.getElementById('relatorio');
    relatorioElement.innerHTML = ''; // Limpa o relatório anterior

    if (despesas.length === 0) {
        relatorioElement.innerHTML = '<p>Nenhuma despesa cadastrada.</p>';
        return;
    }

    let html = '<table class="table"><thead><tr><th>Descrição</th><th>Valor</th></tr></thead><tbody>';
    
    despesas.forEach(despesa => {
        html += `<tr><td>${despesa.descricao}</td><td>R$ ${despesa.valor.toFixed(2)}</td></tr>`;
    });

    html += '</tbody></table>';
    relatorioElement.innerHTML = html; // Atualiza o relatório com as despesas
}

// Atualiza o relatório ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    atualizarSaldo();
    gerarRelatorio();
});
