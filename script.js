/* =========================================================
   DADOS INICIAIS
========================================================= */
function produtosIniciais() {
  return [
    // SERVIÇOS
    { id: 1, nome: "Troca de Óleo", preco: 80.00, custo: 20.00, emoji: "🛢️", categoria: "Serviços", estoque: 999, estoqueMin: 0, descricao: "Troca de óleo do motor" },
    { id: 2, nome: "Alinhamento", preco: 100.00, custo: 0, emoji: "⚙️", categoria: "Serviços", estoque: 999, estoqueMin: 0, descricao: "Alinhamento de direção" },
    { id: 3, nome: "Balanceamento", preco: 60.00, custo: 0, emoji: "🎯", categoria: "Serviços", estoque: 999, estoqueMin: 0, descricao: "Balanceamento de rodas" },
    { id: 4, nome: "Revisão Geral", preco: 250.00, custo: 0, emoji: "🔧", categoria: "Serviços", estoque: 999, estoqueMin: 0, descricao: "Revisão completa" },
    { id: 5, nome: "Troca de Freios", preco: 180.00, custo: 0, emoji: "🛑", categoria: "Serviços", estoque: 999, estoqueMin: 0, descricao: "Troca de pastilhas/discos" },
    { id: 6, nome: "Diagnóstico Eletrônico", preco: 120.00, custo: 0, emoji: "💻", categoria: "Serviços", estoque: 999, estoqueMin: 0, descricao: "Scanner de injeção" },
    { id: 7, nome: "Higienização do Ar", preco: 90.00, custo: 0, emoji: "❄️", categoria: "Serviços", estoque: 999, estoqueMin: 0, descricao: "Limpeza do ar-condicionado" },

    // MANUTENÇÃO
    { id: 8, nome: "Troca de Pneus", preco: 50.00, custo: 0, emoji: "🚗", categoria: "Manutenção", estoque: 999, estoqueMin: 0, descricao: "Por pneu" },
    { id: 9, nome: "Troca de Bateria", preco: 40.00, custo: 0, emoji: "🔋", categoria: "Manutenção", estoque: 999, estoqueMin: 0, descricao: "Serviço de instalação" },
    { id: 10, nome: "Troca de Correia", preco: 150.00, custo: 0, emoji: "🔗", categoria: "Manutenção", estoque: 999, estoqueMin: 0, descricao: "Correia dentada" },
    { id: 11, nome: "Troca de Velas", preco: 70.00, custo: 0, emoji: "⚡", categoria: "Manutenção", estoque: 999, estoqueMin: 0, descricao: "Substituição de velas" },
    { id: 12, nome: "Troca de Filtros", preco: 60.00, custo: 0, emoji: "🌬️", categoria: "Manutenção", estoque: 999, estoqueMin: 0, descricao: "Óleo, ar e combustível" },

    // ESTÉTICA
    { id: 13, nome: "Lavagem Simples", preco: 30.00, custo: 0, emoji: "🚿", categoria: "Estética", estoque: 999, estoqueMin: 0, descricao: "Lavagem externa" },
    { id: 14, nome: "Lavagem Completa", preco: 70.00, custo: 0, emoji: "✨", categoria: "Estética", estoque: 999, estoqueMin: 0, descricao: "Interna + externa" },
    { id: 15, nome: "Polimento", preco: 200.00, custo: 0, emoji: "💎", categoria: "Estética", estoque: 999, estoqueMin: 0, descricao: "Polimento técnico" },
    { id: 16, nome: "Cristalização", preco: 350.00, custo: 0, emoji: "🌟", categoria: "Estética", estoque: 999, estoqueMin: 0, descricao: "Vidros cristalizados" },
    { id: 17, nome: "Enceramento", preco: 120.00, custo: 0, emoji: "🪞", categoria: "Estética", estoque: 999, estoqueMin: 0, descricao: "Cera de carnaúba" },

    // PEÇAS
    { id: 18, nome: "Óleo 5W30 (L)", preco: 45.00, custo: 30.00, emoji: "🛢️", categoria: "Peças", estoque: 30, estoqueMin: 10, descricao: "Óleo sintético" },
    { id: 19, nome: "Filtro de Óleo", preco: 35.00, custo: 20.00, emoji: "🔘", categoria: "Peças", estoque: 25, estoqueMin: 8, descricao: "Filtro de óleo do motor" },
    { id: 20, nome: "Filtro de Ar", preco: 50.00, custo: 30.00, emoji: "🌀", categoria: "Peças", estoque: 20, estoqueMin: 5, descricao: "Filtro de ar do motor" },
    { id: 21, nome: "Pastilha de Freio", preco: 120.00, custo: 80.00, emoji: "🛑", categoria: "Peças", estoque: 15, estoqueMin: 5, descricao: "Par de pastilhas" },
    { id: 22, nome: "Pneu Aro 15", preco: 380.00, custo: 280.00, emoji: "🛞", categoria: "Peças", estoque: 12, estoqueMin: 4, descricao: "Pneu novo" },
    { id: 23, nome: "Bateria 60Ah", preco: 420.00, custo: 320.00, emoji: "🔋", categoria: "Peças", estoque: 8, estoqueMin: 3, descricao: "Bateria automotiva" },
    { id: 24, nome: "Vela de Ignição", preco: 25.00, custo: 15.00, emoji: "⚡", categoria: "Peças", estoque: 40, estoqueMin: 12, descricao: "Vela de ignição" },
    { id: 25, nome: "Correia Dentada", preco: 150.00, custo: 100.00, emoji: "🔗", categoria: "Peças", estoque: 10, estoqueMin: 3, descricao: "Correia dentada" }
  ];
}

/* =========================================================
   ESTADO GLOBAL
========================================================= */
let produtos = [];
let vendas = [];
let clientes = [];
let carrinho = [];
let categoriaAtual = "Todos";
let formaPagamento = "";
let filtroEstoque = "todos";
let filtroVenda = "hoje";
let vendaAtual = null;

const config = {
  nome: "AutoGaragem Premium",
  cnpj: "00.000.000/0001-00",
  telefone: "(11) 99999-9999",
  endereco: "Rua Exemplo, 123",
  cidade: "São Paulo",
  uf: "SP",
  chavePix: "",
  inscricao: ""
};

/* =========================================================
   PERSISTÊNCIA
========================================================= */
function salvar() {
  localStorage.setItem('garagem_produtos', JSON.stringify(produtos));
  localStorage.setItem('garagem_vendas', JSON.stringify(vendas));
  localStorage.setItem('garagem_clientes', JSON.stringify(clientes));
  localStorage.setItem('garagem_config', JSON.stringify(config));
}

function carregar() {
  const p = localStorage.getItem('garagem_produtos');
  const v = localStorage.getItem('garagem_vendas');
  const c = localStorage.getItem('garagem_clientes');
  const cf = localStorage.getItem('garagem_config');

  produtos = p ? JSON.parse(p) : produtosIniciais();
  vendas = v ? JSON.parse(v) : [];
  clientes = c ? JSON.parse(c) : [];
  if (cf) Object.assign(config, JSON.parse(cf));

  if (!p) salvar();
}

/* =========================================================
   NAVEGAÇÃO
========================================================= */
document.querySelectorAll('.menu-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('ativo'));
    document.querySelectorAll('.view').forEach(v => v.classList.remove('ativo'));
    btn.classList.add('ativo');
    document.getElementById('view-' + btn.dataset.view).classList.add('ativo');

    const v = btn.dataset.view;
    if (v === 'dashboard') renderDashboard();
    if (v === 'estoque') renderEstoque();
    if (v === 'vendas') renderVendas();
    if (v === 'produtos') renderProdutosAdmin();
    if (v === 'clientes') renderClientes();
    if (v === 'config') preencherConfig();
  });
});

/* =========================================================
   PDV — CATEGORIAS E PRODUTOS
========================================================= */
function renderCategorias() {
  const cats = ["Todos", ...new Set(produtos.map(p => p.categoria))];
  document.getElementById("categorias").innerHTML = cats.map(c =>
    `<button class="cat-btn ${c === categoriaAtual ? 'ativa' : ''}" onclick="filtrarCategoria('${c}')">${c}</button>`
  ).join("");
}

function filtrarCategoria(cat) {
  categoriaAtual = cat;
  renderCategorias();
  renderProdutos();
}

function renderProdutos() {
  const filtrados = categoriaAtual === "Todos"
    ? produtos
    : produtos.filter(p => p.categoria === categoriaAtual);

  document.getElementById("gridProdutos").innerHTML = filtrados.map(p => {
    const baixo = p.estoqueMin > 0 && p.estoque <= p.estoqueMin;
    return `
      <div class="produto" onclick="adicionarAoCarrinho(${p.id})">
        ${baixo ? `<span class="badge-estoque">${p.estoque}</span>` : ''}
        <span class="emoji">${p.emoji}</span>
        <div class="nome">${p.nome}</div>
        <div class="preco">R$ ${p.preco.toFixed(2).replace('.', ',')}</div>
        <div class="categoria">${p.categoria}</div>
      </div>
    `;
  }).join("");
}

/* =========================================================
   CARRINHO
========================================================= */
function adicionarAoCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  if (!produto) return;

  // Se for peça e estoque zerado, avisa
  if (produto.categoria === "Peças" && produto.estoque <= 0) {
    alert(`⚠️ "${produto.nome}" está sem estoque!`);
    return;
  }

  const item = carrinho.find(i => i.id === id);
  if (item) item.qtd++;
  else carrinho.push({ ...produto, qtd: 1 });

  renderCarrinho();
}

function alterarQtd(id, delta) {
  const item = carrinho.find(i => i.id === id);
  if (!item) return;
  item.qtd += delta;
  if (item.qtd <= 0) carrinho = carrinho.filter(i => i.id !== id);
  renderCarrinho();
}

function renderCarrinho() {
  const lista = document.getElementById("listaCarrinho");

  if (carrinho.length === 0) {
    lista.innerHTML = `<div class="vazio">Nenhum item adicionado</div>`;
  } else {
    lista.innerHTML = carrinho.map(item => `
      <div class="item-carrinho">
        <div class="info">
          <div class="nome">${item.emoji} ${item.nome}</div>
          <div class="preco-unit">R$ ${item.preco.toFixed(2).replace('.', ',')}</div>
        </div>
        <div class="controles">
          <button onclick="alterarQtd(${item.id}, -1)">−</button>
          <span class="qtd">${item.qtd}</span>
          <button onclick="alterarQtd(${item.id}, 1)">+</button>
        </div>
        <div class="subtotal">R$ ${(item.preco * item.qtd).toFixed(2).replace('.', ',')}</div>
      </div>
    `).join("");
  }

  const total = carrinho.reduce((s, i) => s + i.preco * i.qtd, 0);
  document.getElementById("totalGeral").textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
  document.getElementById("btnFinalizar").disabled = carrinho.length === 0;
}

/* =========================================================
   PAGAMENTO
========================================================= */
document.getElementById("pagamento").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  document.querySelectorAll("#pagamento button").forEach(b => b.classList.remove("selecionado"));
  btn.classList.add("selecionado");
  formaPagamento = btn.dataset.pgto;
});

/* =========================================================
   FINALIZAR VENDA
========================================================= */
document.getElementById("btnFinalizar").addEventListener("click", () => {
  if (carrinho.length === 0) return alert("Carrinho vazio!");
  if (!formaPagamento) return alert("Selecione a forma de pagamento!");

  if (formaPagamento === "Pix") {
    abrirPix();
    return;
  }

  finalizarVenda();
});

function finalizarVenda() {
  const total = carrinho.reduce((s, i) => s + i.preco * i.qtd, 0);
  const dataISO = new Date().toISOString();
  const clienteId = document.getElementById("clienteSelect").value;
  const cliente = clientes.find(c => c.id === parseInt(clienteId));

  const venda = {
    id: Date.now(),
    numero: String(vendas.length + 1).padStart(5, '0'),
    data: dataISO,
    cliente: cliente ? { id: cliente.id, nome: cliente.nome, cpf: cliente.cpf, endereco: cliente.endereco, veiculo: cliente.veiculo, placa: cliente.placa } : null,
    itens: carrinho.map(i => ({ id: i.id, nome: i.nome, emoji: i.emoji, preco: i.preco, qtd: i.qtd, categoria: i.categoria })),
    total,
    formaPagamento,
    nfEmitida: false
  };

  vendas.push(venda);
  vendaAtual = venda;

  // Baixa estoque (só de peças)
  carrinho.forEach(item => {
    const prod = produtos.find(p => p.id === item.id);
    if (prod && prod.categoria === "Peças") {
      prod.estoque = Math.max(0, prod.estoque - item.qtd);
    }
  });

  salvar();
  mostrarRecibo(venda);

  // Reset
  carrinho = [];
  formaPagamento = "";
  document.getElementById("clienteSelect").value = "";
  document.querySelectorAll("#pagamento button").forEach(b => b.classList.remove("selecionado"));
  renderCarrinho();
  renderProdutos();
}

/* =========================================================
   MODAL RECIBO
========================================================= */
function mostrarRecibo(venda) {
  const dataStr = new Date(venda.data).toLocaleString("pt-BR");
  const linhas = venda.itens.map(i => `
    <div class="linha">
      <span>${i.qtd}x ${i.nome}</span>
      <span>R$ ${(i.preco * i.qtd).toFixed(2).replace('.', ',')}</span>
    </div>
  `).join("");

  const clienteInfo = venda.cliente
    ? `<div class="linha"><span>Cliente:</span><span>${venda.cliente.nome}</span></div>
       ${venda.cliente.veiculo ? `<div class="linha"><span>Veículo:</span><span>${venda.cliente.veiculo}</span></div>` : ''}
       ${venda.cliente.placa ? `<div class="linha"><span>Placa:</span><span>${venda.cliente.placa}</span></div>` : ''}`
    : '';

  document.getElementById("recibo").innerHTML = `
    <div style="text-align:center;font-weight:700;margin-bottom:8px;">${config.nome}</div>
    <div style="text-align:center;font-size:0.72rem;color:#999;margin-bottom:8px;">${config.cnpj} • ${config.telefone}</div>
    <hr>
    <div class="linha"><span>OS nº:</span><span>${venda.numero}</span></div>
    <div class="linha"><span>Data:</span><span>${dataStr}</span></div>
    ${clienteInfo}
    <hr>
    ${linhas}
    <hr>
    <div class="linha total"><span>TOTAL:</span><span>R$ ${venda.total.toFixed(2).replace('.', ',')}</span></div>
    <div class="linha"><span>Pagamento:</span><span>${venda.formaPagamento}</span></div>
    <hr>
    <div style="text-align:center;font-size:0.72rem;color:#999;">Obrigado pela preferência!</div>
  `;

  document.getElementById("modalRecibo").classList.add("ativo");
}

function fecharModal() {
  document.getElementById("modalRecibo").classList.remove("ativo");
}

function imprimirRecibo() {
  const conteudo = document.getElementById("recibo").innerHTML;
  const win = window.open('', '', 'width=400,height=600');
  win.document.write(`
    <html><head><title>Recibo</title>
    <style>
      body { font-family:'Courier New',monospace; font-size:12px; padding:12px; background:#fff; color:#000; }
      .linha { display:flex; justify-content:space-between; margin-bottom:4px; }
      hr { border:none; border-top:1px dashed #000; margin:6px 0; }
      .total { font-weight:900; font-size:14px; margin-top:6px; }
    </style></head>
    <body>${conteudo}</body></html>
  `);
  win.document.close();
  win.print();
}

/* =========================================================
   PIX
========================================================= */
function abrirPix() {
  const total = carrinho.reduce((s, i) => s + i.preco * i.qtd, 0);

  if (!config.chavePix) {
    if (!confirm("⚠️ Chave PIX não configurada!\n\nDeseja usar chave de teste?")) return;
    config.chavePix = "00000000000";
  }

  document.getElementById('pixValor').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
  document.getElementById('pixStatus').textContent = "⏳ Aguardando pagamento...";
  document.getElementById('pixStatus').classList.remove('ok');

  const payload = gerarPayloadPix(config.chavePix, config.nome, config.cidade, total);
  const qr = document.getElementById('pixQrCode');
  qr.innerHTML = '';
  new QRCode(qr, {
    text: payload,
    width: 230,
    height: 230,
    colorDark: "#8b4513",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.M
  });

  document.getElementById('pixCopiaCola').value = payload;
  document.getElementById('modalPix').classList.add('ativo');
}

function gerarPayloadPix(chave, nome, cidade, valor) {
  const fmt = (id, v) => id + String(v.length).padStart(2, '0') + v;
  const gui = fmt('00', 'br.gov.bcb.pix');
  const chaveF = fmt('01', chave);
  const merchant = fmt('26', gui + chaveF);

  const nomeL = nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '').substring(0, 25);
  const cidadeL = (cidade || 'SAO PAULO').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase().substring(0, 15);

  let p = '';
  p += fmt('00', '01');
  p += merchant;
  p += fmt('52', '0000');
  p += fmt('53', '986');
  p += fmt('54', valor.toFixed(2));
  p += fmt('58', 'BR');
  p += fmt('59', nomeL);
  p += fmt('60', cidadeL);
  p += fmt('62', fmt('05', '***'));
  p += '6304';
  p += crc16(p);
  return p;
}

function crc16(str) {
  let crc = 0xFFFF;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) : (crc << 1);
      crc &= 0xFFFF;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

function copiarPix() {
  const input = document.getElementById('pixCopiaCola');
  input.select();
  document.execCommand('copy');
  alert("✅ Código PIX copiado!");
}

document.getElementById('btnConfirmarPix').addEventListener('click', () => {
  const status = document.getElementById('pixStatus');
  status.textContent = "✅ Pagamento confirmado!";
  status.classList.add('ok');
  setTimeout(() => {
    fecharPix();
    finalizarVenda();
  }, 700);
});

function fecharPix() {
  document.getElementById('modalPix').classList.remove('ativo');
}

/* =========================================================
   EMITIR NF
========================================================= */
function emitirNF() {
  if (!vendaAtual) return;
  document.getElementById("modalRecibo").classList.remove("ativo");

  document.getElementById('nfDestNome').value = vendaAtual.cliente?.nome || '';
  document.getElementById('nfDestCpf').value = vendaAtual.cliente?.cpf || '';
  document.getElementById('nfDestEnd').value = vendaAtual.cliente?.endereco || '';
  document.getElementById('nfVeiculo').value = vendaAtual.cliente?.veiculo
    ? `${vendaAtual.cliente.veiculo} ${vendaAtual.cliente.placa ? '• ' + vendaAtual.cliente.placa : ''}`
    : '';

  atualizarDanfe();
  document.getElementById('modalNF').classList.add('ativo');
}

['nfDestNome','nfDestCpf','nfDestEnd','nfVeiculo'].forEach(id => {
  document.getElementById(id).addEventListener('input', atualizarDanfe);
});

function atualizarDanfe() {
  if (!vendaAtual) return;
  const v = vendaAtual;
  const dataStr = new Date(v.data).toLocaleString('pt-BR');
  const numeroNF = String(vendas.indexOf(v) + 1).padStart(6, '0');
  const serie = '001';
  const chave = gerarChaveNFe(config.cnpj, numeroNF, serie);

  const destNome = document.getElementById('nfDestNome').value || "CONSUMIDOR NÃO IDENTIFICADO";
  const destCpf = document.getElementById('nfDestCpf').value || "—";
  const destEnd = document.getElementById('nfDestEnd').value || "—";
  const veiculo = document.getElementById('nfVeiculo').value || "—";

  const itensHtml = v.itens.map((i, idx) => `
    <tr>
      <td>${idx + 1}</td>
      <td>${i.nome}</td>
      <td>${i.categoria === 'Peças' ? 'UN' : 'SV'}</td>
      <td>${i.qtd}</td>
      <td>${i.preco.toFixed(2)}</td>
      <td>${(i.preco * i.qtd).toFixed(2)}</td>
    </tr>
  `).join("");

  document.getElementById('danfe').innerHTML = `
    <div class="danfe-header">
      <div class="danfe-titulo">DANFE — DOCUMENTO AUXILIAR</div>
      <div>Nota Fiscal de Serviços / Venda</div>
      <div>Nº ${numeroNF} • Série ${serie}</div>
      <div style="font-size:0.65rem;word-break:break-all;">Chave: ${chave}</div>
    </div>

    <div class="secao">EMITENTE</div>
    <div><strong>${config.nome}</strong></div>
    <div>CNPJ: ${config.cnpj} ${config.inscricao ? '• IE: ' + config.inscricao : ''}</div>
    <div>${config.endereco} - ${config.cidade}/${config.uf}</div>
    <div>Telefone: ${config.telefone}</div>

    <div class="secao">DESTINATÁRIO</div>
    <div><strong>${destNome}</strong></div>
    <div>CPF/CNPJ: ${destCpf}</div>
    <div>Endereço: ${destEnd}</div>
    <div>Veículo/Placa: ${veiculo}</div>

    <div class="secao">DADOS DA OPERAÇÃO</div>
    <div>Data de emissão: ${dataStr}</div>
    <div>Natureza: VENDA DE PEÇAS E PRESTAÇÃO DE SERVIÇOS</div>
    <div>CFOP: 5.102 / 5.933</div>

    <div class="secao">DISCRIMINAÇÃO</div>
    <table>
      <thead>
        <tr><th>#</th><th>Descrição</th><th>Un</th><th>Qtd</th><th>Vl.Unit</th><th>Vl.Total</th></tr>
      </thead>
      <tbody>${itensHtml}</tbody>
    </table>

    <div class="secao">TOTAIS</div>
    <div style="text-align:right;font-weight:800;font-size:0.9rem;">VALOR TOTAL: R$ ${v.total.toFixed(2)}</div>

    <div class="secao">PAGAMENTO</div>
    <div>Forma: ${v.formaPagamento}</div>

    <div class="secao">INFORMAÇÕES COMPLEMENTARES</div>
    <div>OS nº ${v.numero} — Documento emitido por sistema ERP AutoGaragem</div>
  `;
}

function gerarChaveNFe(cnpj, numero, serie) {
  const cnpjL = cnpj.replace(/\D/g, '').padStart(14, '0');
  const uf = '35';
  const d = new Date();
  const ano = String(d.getFullYear()).slice(-2);
  const mes = String(d.getMonth() + 1).padStart(2, '0');
  const base = uf + ano + mes + cnpjL + '55' + serie.padStart(3, '0') + numero.padStart(9, '0') + '1' + String(Math.floor(Math.random() * 1e8)).padStart(8, '0');
  return base.substring(0, 43) + Math.floor(Math.random() * 10);
}

function confirmarNF() {
  if (!vendaAtual) return;
  vendaAtual.nfEmitida = true;
  vendaAtual.nfNumero = String(vendas.indexOf(vendaAtual) + 1).padStart(6, '0');
  salvar();
  alert(`✅ NF nº ${vendaAtual.nfNumero} autorizada!`);
  fecharNF();
}

function fecharNF() {
  document.getElementById('modalNF').classList.remove('ativo');
  vendaAtual = null;
}

/* =========================================================
   LIMPAR CARRINHO
========================================================= */
document.getElementById("btnLimpar").addEventListener("click", () => {
  if (carrinho.length === 0) return;
  if (confirm("Deseja cancelar a OS atual?")) {
    carrinho = [];
    formaPagamento = "";
    document.querySelectorAll("#pagamento button").forEach(b => b.classList.remove("selecionado"));
    renderCarrinho();
  }
});

/* =========================================================
   DASHBOARD
========================================================= */
function renderDashboard() {
  const hoje = new Date().toISOString().slice(0, 10);
  const vendasHoje = vendas.filter(v => v.data.slice(0, 10) === hoje);

  const total = vendasHoje.reduce((s, v) => s + v.total, 0);
  const qtd = vendasHoje.length;
  const ticket = qtd > 0 ? total / qtd : 0;
  const itens = vendasHoje.reduce((s, v) => s + v.itens.reduce((si, i) => si + i.qtd, 0), 0);

  document.getElementById("dashTotalHoje").textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
  document.getElementById("dashQtdVendas").textContent = qtd;
  document.getElementById("dashTicket").textContent = `R$ ${ticket.toFixed(2).replace('.', ',')}`;
  document.getElementById("dashItens").textContent = itens;

  // Por pagamento
  const porPag = {};
  vendasHoje.forEach(v => { porPag[v.formaPagamento] = (porPag[v.formaPagamento] || 0) + v.total; });
  const maxP = Math.max(...Object.values(porPag), 1);
  document.getElementById("dashPagamentos").innerHTML =
    Object.keys(porPag).length === 0 ? `<div class="vazio">Sem vendas hoje</div>` :
    Object.entries(porPag).map(([k, v]) => `
      <div class="barra-item">
        <div class="info"><span>${k}</span><span>R$ ${v.toFixed(2).replace('.', ',')}</span></div>
        <div class="barra-bg"><div class="barra-fill" style="width:${(v/maxP)*100}%"></div></div>
      </div>
    `).join("");

  // Top produtos
  const prodCount = {};
  vendasHoje.forEach(v => v.itens.forEach(i => { prodCount[i.nome] = (prodCount[i.nome] || 0) + i.qtd; }));
  const top5 = Object.entries(prodCount).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const maxT = Math.max(...top5.map(t => t[1]), 1);
  document.getElementById("dashTopProdutos").innerHTML =
    top5.length === 0 ? `<div class="vazio">Sem dados</div>` :
    top5.map(([nome, q]) => `
      <div class="barra-item">
        <div class="info"><span>${nome}</span><span>${q} un.</span></div>
        <div class="barra-bg"><div class="barra-fill" style="width:${(q/maxT)*100}%"></div></div>
      </div>
    `).join("");

  // Últimas 5
  const ultimas = [...vendasHoje].reverse().slice(0, 5);
  document.getElementById("dashUltimasVendas").innerHTML =
    ultimas.length === 0 ? `<div class="vazio">Nenhuma venda hoje</div>` :
    `<table class="tabela">
      <thead><tr><th>Hora</th><th>OS</th><th>Itens</th><th>Pagamento</th><th>Total</th></tr></thead>
      <tbody>${ultimas.map(v => `
        <tr>
          <td>${new Date(v.data).toLocaleTimeString('pt-BR')}</td>
          <td>#${v.numero}</td>
          <td>${v.itens.length}</td>
          <td>${v.formaPagamento}</td>
          <td><strong>R$ ${v.total.toFixed(2).replace('.', ',')}</strong></td>
        </tr>
      `).join("")}</tbody>
    </table>`;
}

/* =========================================================
   ESTOQUE
========================================================= */
document.querySelectorAll('[data-filtro]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filtro]').forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');
    filtroEstoque = btn.dataset.filtro;
    renderEstoque();
  });
});

function renderEstoque() {
  let lista = produtos.filter(p => p.categoria === 'Peças');
  if (filtroEstoque === 'baixo') lista = lista.filter(p => p.estoque > 0 && p.estoque <= p.estoqueMin);
  if (filtroEstoque === 'zerado') lista = lista.filter(p => p.estoque === 0);

  if (lista.length === 0) {
    document.getElementById("tabelaEstoque").innerHTML = `<div class="vazio">Nenhuma peça</div>`;
    return;
  }

  document.getElementById("tabelaEstoque").innerHTML = `
    <table class="tabela">
      <thead>
        <tr><th>Peça</th><th>Categoria</th><th>Estoque</th><th>Mínimo</th><th>Status</th><th>Ações</th></tr>
      </thead>
      <tbody>
        ${lista.map(p => {
          let tag = `<span class="tag ok">OK</span>`;
          if (p.estoque === 0) tag = `<span class="tag zerado">Zerado</span>`;
          else if (p.estoque <= p.estoqueMin) tag = `<span class="tag baixo">Baixo</span>`;
          return `
            <tr>
              <td>${p.emoji} <strong>${p.nome}</strong></td>
              <td>${p.categoria}</td>
              <td><strong>${p.estoque}</strong></td>
              <td>${p.estoqueMin}</td>
              <td>${tag}</td>
              <td>
                <button class="btn-mini verde" onclick="ajustarEstoque(${p.id}, 10)">+10</button>
                <button class="btn-mini verde" onclick="ajustarEstoque(${p.id}, 1)">+1</button>
                <button class="btn-mini laranja" onclick="ajustarEstoque(${p.id}, -1)">−1</button>
                <button class="btn-mini vermelho" onclick="ajustarEstoque(${p.id}, -10)">−10</button>
              </td>
            </tr>
          `;
        }).join("")}
      </tbody>
    </table>
  `;
}

function ajustarEstoque(id, delta) {
  const p = produtos.find(x => x.id === id);
  if (!p) return;
  p.estoque = Math.max(0, p.estoque + delta);
  salvar();
  renderEstoque();
  renderProdutos();
}

/* =========================================================
   VENDAS
========================================================= */
document.querySelectorAll('[data-filtro-venda]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-filtro-venda]').forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');
    filtroVenda = btn.dataset.filtroVenda;
    renderVendas();
  });
});

function filtrarVendasPeriodo() {
  const agora = new Date();
  if (filtroVenda === 'hoje') {
    const hoje = agora.toISOString().slice(0, 10);
    return vendas.filter(v => v.data.slice(0, 10) === hoje);
  }
  if (filtroVenda === '7dias') {
    const lim = new Date(agora.getTime() - 7 * 86400000);
    return vendas.filter(v => new Date(v.data) >= lim);
  }
  if (filtroVenda === 'mes') {
    const m = agora.toISOString().slice(0, 7);
    return vendas.filter(v => v.data.slice(0, 7) === m);
  }
  return vendas;
}

function renderVendas() {
  const lista = filtrarVendasPeriodo().reverse();
  const total = lista.reduce((s, v) => s + v.total, 0);

  document.getElementById("resumoVendas").innerHTML = `
    <div class="cards-resumo">
      <div class="card-resumo"><span class="card-label">Total</span><span class="card-valor">R$ ${total.toFixed(2).replace('.', ',')}</span></div>
      <div class="card-resumo"><span class="card-label">Vendas</span><span class="card-valor">${lista.length}</span></div>
      <div class="card-resumo"><span class="card-label">NF Emitidas</span><span class="card-valor">${lista.filter(v => v.nfEmitida).length}</span></div>
    </div>
  `;

  if (lista.length === 0) {
    document.getElementById("listaVendas").innerHTML = `<div class="vazio">Nenhuma venda</div>`;
    return;
  }

  document.getElementById("listaVendas").innerHTML = `
    <table class="tabela">
      <thead>
        <tr><th>OS</th><th>Data</th><th>Cliente</th><th>Itens</th><th>Pagamento</th><th>Total</th><th>NF</th><th>Ações</th></tr>
      </thead>
      <tbody>
        ${lista.map(v => `
          <tr>
            <td><strong>#${v.numero}</strong></td>
            <td>${new Date(v.data).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })}</td>
            <td>${v.cliente ? v.cliente.nome : '<span style="color:#999">—</span>'}</td>
            <td>${v.itens.length}</td>
            <td>${v.formaPagamento}</td>
            <td><strong>R$ ${v.total.toFixed(2).replace('.', ',')}</strong></td>
            <td>${v.nfEmitida ? `<span class="tag ok">Nº ${v.nfNumero}</span>` : `<span class="tag baixo">—</span>`}</td>
            <td>
              <button class="btn-mini azul" onclick="reimprimir(${v.id})">👁️</button>
              ${!v.nfEmitida ? `<button class="btn-mini laranja" onclick="emitirNFVenda(${v.id})">🧾</button>` : ''}
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function reimprimir(id) {
  const v = vendas.find(x => x.id === id);
  if (!v) return;
  vendaAtual = v;
  mostrarRecibo(v);
}

function emitirNFVenda(id) {
  const v = vendas.find(x => x.id === id);
  if (!v) return;
  vendaAtual = v;
  emitirNF();
}

document.getElementById("btnLimparVendas").addEventListener("click", () => {
  if (!confirm("⚠️ Apagar TODO o histórico de vendas?")) return;
  vendas = [];
  salvar();
  renderVendas();
});

/* =========================================================
   ADMIN PRODUTOS
========================================================= */
document.getElementById("formProduto").addEventListener("submit", (e) => {
  e.preventDefault();

  const id = document.getElementById("produtoId").value;
  const nome = document.getElementById("prodNome").value.trim();
  const emoji = document.getElementById("prodEmoji").value.trim() || "🔧";
  const categoria = document.getElementById("prodCategoria").value.trim();
  const preco = parseFloat(document.getElementById("prodPreco").value);
  const custo = parseFloat(document.getElementById("prodCusto").value) || 0;
  const estoque = parseInt(document.getElementById("prodEstoque").value) || 0;
  const estoqueMin = parseInt(document.getElementById("prodEstoqueMin").value) || 0;
  const descricao = document.getElementById("prodDescricao").value.trim();

  if (id) {
    const p = produtos.find(x => x.id === parseInt(id));
    Object.assign(p, { nome, emoji, categoria, preco, custo, estoque, estoqueMin, descricao });
  } else {
    const novoId = produtos.length ? Math.max(...produtos.map(p => p.id)) + 1 : 1;
    produtos.push({ id: novoId, nome, emoji, categoria, preco, custo, estoque, estoqueMin, descricao });
  }

  salvar();
  limparFormProd();
  renderProdutosAdmin();
  renderCategorias();
  renderProdutos();
});

function limparFormProd() {
  document.getElementById("formProduto").reset();
  document.getElementById("produtoId").value = "";
  document.getElementById("prodEmoji").value = "🔧";
  document.getElementById("prodEstoqueMin").value = 3;
  document.getElementById("btnSalvarProduto").textContent = "➕ Adicionar";
  document.getElementById("btnCancelarEdicao").style.display = "none";
}

document.getElementById("btnCancelarEdicao").addEventListener("click", limparFormProd);

function renderProdutosAdmin() {
  const cats = [...new Set(produtos.map(p => p.categoria))];
  document.getElementById("catList").innerHTML = cats.map(c => `<option value="${c}">`).join("");

  if (produtos.length === 0) {
    document.getElementById("listaProdutosAdmin").innerHTML = `<div class="vazio">Nenhum item cadastrado</div>`;
    return;
  }

  document.getElementById("listaProdutosAdmin").innerHTML = `
    <table class="tabela">
      <thead>
        <tr><th>Emoji</th><th>Nome</th><th>Categoria</th><th>Preço</th><th>Custo</th><th>Estoque</th><th>Ações</th></tr>
      </thead>
      <tbody>
        ${produtos.map(p => `
          <tr>
            <td style="font-size:1.4rem">${p.emoji}</td>
            <td><strong>${p.nome}</strong></td>
            <td>${p.categoria}</td>
            <td>R$ ${p.preco.toFixed(2).replace('.', ',')}</td>
            <td>R$ ${(p.custo || 0).toFixed(2).replace('.', ',')}</td>
            <td>${p.categoria === 'Peças' ? p.estoque + ' (min ' + p.estoqueMin + ')' : '—'}</td>
            <td>
              <button class="btn-mini laranja" onclick="editarProduto(${p.id})">✏️</button>
              <button class="btn-mini vermelho" onclick="excluirProduto(${p.id})">🗑️</button>
            </td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function editarProduto(id) {
  const p = produtos.find(x => x.id === id);
  if (!p) return;
  document.getElementById("produtoId").value = p.id;
  document.getElementById("prodNome").value = p.nome;
  document.getElementById("prodEmoji").value = p.emoji;
  document.getElementById("prodCategoria").value = p.categoria;
  document.getElementById("prodPreco").value = p.preco;
  document.getElementById("prodCusto").value = p.custo || 0;
  document.getElementById("prodEstoque").value = p.estoque;
  document.getElementById("prodEstoqueMin").value = p.estoqueMin;
  document.getElementById("prodDescricao").value = p.descricao || "";
  document.getElementById("btnSalvarProduto").textContent = "💾 Salvar";
  document.getElementById("btnCancelarEdicao").style.display = "inline-block";
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function excluirProduto(id) {
  const p = produtos.find(x => x.id === id);
  if (!confirm(`Excluir "${p.nome}"?`)) return;
  produtos = produtos.filter(x => x.id !== id);
  salvar();
  renderProdutosAdmin();
  renderCategorias();
  renderProdutos();
}

/* =========================================================
   CLIENTES
========================================================= */
document.getElementById("formCliente").addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("cliNome").value.trim();
  const telefone = document.getElementById("cliTelefone").value.trim();
  const cpf = document.getElementById("cliCpf").value.trim();
  const veiculo = document.getElementById("cliVeiculo").value.trim();
  const placa = document.getElementById("cliPlaca").value.trim();
  const endereco = document.getElementById("cliEndereco").value.trim();

  const novoId = clientes.length ? Math.max(...clientes.map(c => c.id)) + 1 : 1;
  clientes.push({ id: novoId, nome, telefone, cpf, veiculo, placa, endereco });

  salvar();
  document.getElementById("formCliente").reset();
  renderClientes();
  atualizarSelectClientes();
});

function renderClientes() {
  if (clientes.length === 0) {
    document.getElementById("listaClientes").innerHTML = `<div class="vazio">Nenhum cliente cadastrado</div>`;
    return;
  }

  document.getElementById("listaClientes").innerHTML = clientes.map(c => `
    <div class="cliente-card">
      <div class="dados">
        <div class="nome">👤 ${c.nome}</div>
        <div class="detalhe">${c.telefone || 'Sem telefone'} • ${c.cpf || 'Sem CPF'}</div>
        <div class="detalhe">${c.veiculo ? '🚗 ' + c.veiculo : ''} ${c.placa ? '• ' + c.placa : ''}</div>
        ${c.endereco ? `<div class="detalhe">📍 ${c.endereco}</div>` : ''}
      </div>
      <button class="btn-mini vermelho" onclick="excluirCliente(${c.id})">🗑️</button>
    </div>
  `).join("");
}

function excluirCliente(id) {
  const c = clientes.find(x => x.id === id);
  if (!confirm(`Excluir "${c.nome}"?`)) return;
  clientes = clientes.filter(x => x.id !== id);
  salvar();
  renderClientes();
  atualizarSelectClientes();
}

function atualizarSelectClientes() {
  const sel = document.getElementById("clienteSelect");
  const valorAtual = sel.value;
  sel.innerHTML = `<option value="">-- Selecione --</option>` +
    clientes.map(c => `<option value="${c.id}">${c.nome}${c.placa ? ' (' + c.placa + ')' : ''}</option>`).join("");
  sel.value = valorAtual;
}

/* =========================================================
   CONFIG
========================================================= */
function preencherConfig() {
  document.getElementById("cfgNome").value = config.nome;
  document.getElementById("cfgCnpj").value = config.cnpj;
  document.getElementById("cfgTelefone").value = config.telefone;
  document.getElementById("cfgEndereco").value = config.endereco;
  document.getElementById("cfgCidade").value = config.cidade;
  document.getElementById("cfgUf").value = config.uf;
  document.getElementById("cfgChavePix").value = config.chavePix;
  document.getElementById("cfgInscricao").value = config.inscricao || "";
}

document.getElementById("formConfig").addEventListener("submit", (e) => {
  e.preventDefault();
  config.nome = document.getElementById("cfgNome").value.trim();
  config.cnpj = document.getElementById("cfgCnpj").value.trim();
  config.telefone = document.getElementById("cfgTelefone").value.trim();
  config.endereco = document.getElementById("cfgEndereco").value.trim();
  config.cidade = document.getElementById("cfgCidade").value.trim();
  config.uf = document.getElementById("cfgUf").value.trim().toUpperCase();
  config.chavePix = document.getElementById("cfgChavePix").value.trim();
  config.inscricao = document.getElementById("cfgInscricao").value.trim();

  salvar();
  document.getElementById("nomeLoja").textContent = "🔧 " + (config.nome || "AutoGaragem Premium");
  alert("✅ Configurações salvas!");
});

/* =========================================================
   RELÓGIO
========================================================= */
function atualizarHora() {
  const a = new Date();
  document.getElementById("dataHora").textContent =
    a.toLocaleDateString("pt-BR", { weekday: 'long', day: '2-digit', month: 'long' }) +
    " • " + a.toLocaleTimeString("pt-BR");
}
setInterval(atualizarHora, 1000);

/* =========================================================
   INICIALIZAÇÃO
========================================================= */
carregar();
document.getElementById("nomeLoja").textContent = "🔧 " + (config.nome || "AutoGaragem Premium");
renderCategorias();
renderProdutos();
renderCarrinho();
atualizarSelectClientes();
atualizarHora();