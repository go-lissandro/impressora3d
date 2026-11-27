# Plano de execução das artes

Plano para produzir as **artes 3D** (modelos-base onde você só troca o nome) e as **artes do anúncio** (fotos, vídeos e capa) dos personalizados, começando hoje, **27/11/2026**, com foco no Natal.

Ligação com os outros guias: os produtos vêm de [`PERSONALIZADOS-QUE-VENDEM.md`](PERSONALIZADOS-QUE-VENDEM.md), a impressão de [`CONFIG-PETG-FATIADOR.md`](CONFIG-PETG-FATIADOR.md) e a regra de estoque de [`GIRO-SEM-ESTOQUE-PARADO.md`](GIRO-SEM-ESTOQUE-PARADO.md).

---

## 1. Ideia central: modelo-base + só trocar o texto

Para cada produto personalizado, você faz **uma vez** um modelo-base. A cada pedido, troca só o nome, exporta e imprime. Meta: **menos de 10 minutos de arte por pedido**.

| Ferramenta | Para quê | Custo |
|---|---|---|
| [Tinkercad](https://www.tinkercad.com) | Modelos-base de nome, placa, topo de bolo, luminária. Duplique o projeto e troque o texto | Grátis |
| [OpenSCAD](https://openscad.org) | Gerar muitos nomes de uma vez (kits de chaveiro de festa e empresa) | Grátis |
| [ItsLitho](https://itslitho.com/) · [LithophaneMaker](https://lithophanemaker.com/) | Litofania a partir da foto do cliente | Grátis |
| [printer.tools QRcode2stl](https://printer.tools/tools/qrcode2stl/) | Placa com QR Code | Grátis |
| [Canva](https://www.canva.com) | Capa do anúncio, tabela de cores e fontes, posts | Plano grátis serve |
| Celular + CapCut | Fotos e vídeos | Grátis |

### Fontes que pode usar para vender

Use fontes do [Google Fonts](https://fonts.google.com). Elas têm licença **OFL**, que permite uso comercial em produto físico. Não use fontes baixadas de sites "grátis para uso pessoal".

| Uso | Fontes | Por quê |
|---|---|---|
| Nome em letra cursiva (topo de bolo, luminária, chaveiro de uma peça) | **Pacifico**, **Lobster** | As letras se ligam, então o nome sai numa peça só |
| Nome em letra de forma (placa, troféu, QR) | **Montserrat Black**, **Poppins Bold** | Traço grosso, imprime bem e lê de longe |
| Infantil | **Fredoka**, **Baloo 2** | Arredondada, combina com quarto de criança e festa |

Ofereça no anúncio **só 3 ou 4 fontes**, numa imagem com o nome de exemplo escrito em cada uma. Menos opção, decisão mais rápida e menos erro.

### Medidas mínimas para PETG

| Item | Medida |
|---|---|
| Traço mais fino da letra | **1,2 mm** (3 linhas do bico de 0,4) |
| Altura do texto em relevo | 1 a 1,5 mm |
| Espessura de chaveiro e plaquinha | 3 a 4 mm |
| Furo do chaveiro | 4 a 5 mm, com borda de pelo menos 2 mm |
| Espessura do topo de bolo | 3 a 4 mm, com 2 hastes de 5 mm de largura |
| Letras da luminária | 8 a 10 mm de espessura, PETG translúcido |
| QR Code | Mínimo 6 × 6 cm, quadradinhos de pelo menos 2 mm |
| Litofania | 0,8 mm no mais claro, 3 mm no mais escuro, impressa em pé |

### Organização dos arquivos

```
artes/
  modelos-base/       luminaria-nome.3mf, chaveiro-nome.3mf, topo-bolo.3mf ...
  pedidos/2026-12/    2026-12-03_maria_topo-bolo.stl  (data_cliente_produto)
  fotos/              uma pasta por produto
  videos/
```

Salve no fatiador o projeto **.3mf** de cada modelo-base já com o perfil de PETG e a posição na mesa. No pedido, é só trocar o arquivo e fatiar.

---

## 2. Artes do anúncio (para cada produto)

### Fotos (7 por anúncio)

1. **Capa:** o produto sozinho, fundo branco ou claro, com um nome bonito de exemplo.
2. **Em uso:** luminária acesa no quarto, chaveiro na mochila, topo de bolo num bolo de verdade.
3. **Tamanho:** na mão ou ao lado de um objeto conhecido, com a medida escrita.
4. **Personalização:** imagem do Canva com as fontes e as cores disponíveis.
5. **Detalhe:** close do acabamento.
6. **Variações ou kit:** 3 ou 4 unidades com nomes diferentes.
7. **Como pedir:** "1. Compre. 2. Mande o nome pelo chat. 3. Produzimos em até 2 dias."

**Como fotografar:** perto de uma janela com luz do dia, sem flash, numa cartolina branca curvada (fundo infinito). A luminária e a litofania se fotografam **no escuro, acesas**.

### Vídeos (15 a 30 segundos, vertical)

| Roteiro | Cenas |
|---|---|
| **"Fazendo o seu nome"** | Digitando o nome no Tinkercad → impressora imprimindo (acelerado) → tirando da mesa → produto pronto na mão |
| **"Antes e depois"** (luminária e litofania) | Peça apagada → apaga a luz do quarto → acende |
| **"Pedido do dia"** | Lote de chaveiros com nomes de um pedido real, com a legenda "pedido de 30 chaveiros para a festa da Ana" |

Poste os vídeos no TikTok e no Instagram, e use o mesmo vídeo no anúncio da Shopee e do TikTok Shop.

### Texto do anúncio

O título traz **produto + "personalizado com nome" + ocasião**. Por exemplo: "Luminária Personalizada com Nome LED Presente de Natal". Na descrição, informe como mandar o nome, as fontes, as cores, o prazo de produção e as medidas.

---

## 3. Cronograma

### Semana 1 (27/11 a 03/12): Natal no ar

| Dia | Arte 3D | Arte do anúncio |
|---|---|---|
| Sex 27 e Sáb 28 | Modelos-base: **enfeite de Natal com nomes** e **chaveiro com nome** | Montar o fundo de foto. Imagem de fontes e cores no Canva |
| Dom 29 | Modelo-base: **luminária com nome** (base com furo para LED + letras) | Imprimir as 3 amostras |
| Seg 30 | Ajustar o que deu errado nas amostras | Fotos (7 por produto) e 1 vídeo "fazendo o seu nome" |
| Ter 01/12 | | **Publicar os 3 anúncios** no Mercado Livre e na Shopee, com "pedidos até 15/12 para o Natal" |
| Qua 02 e Qui 03 | Gerador de chaveiros em lote no OpenSCAD | Vídeos no TikTok e no Instagram. Oferecer kits de chaveiro para confraternização de empresas |

### Semana 2 (04 a 10/12): produtos do ano todo

| Arte 3D | Arte do anúncio |
|---|---|
| **Topo de bolo** (cursiva com hastes) | Foto num bolo real (pode ser de mercado) |
| **Plaquinha pet + porta-saquinho com nome** (modelo CC BY do [`LINKS-STL.md`](LINKS-STL.md), #48) | Foto na coleira de um pet |
| **Placa QR Code de Pix/Instagram** | Foto num balcão. Lista de comércios do bairro para oferecer |

### Semana 3 (11 a 17/12): ticket alto e empresas

| Arte 3D | Arte do anúncio |
|---|---|
| **Litofania**: amostra em PETG branco. Se o contraste ficar bom, anuncie | Vídeo "antes e depois" acendendo |
| **Mini troféu e medalha personalizados** | Catálogo simples em PDF (Canva) para escolas, times e empresas |
| **Placa de porta e de quarto infantil** | Foto na porta, com 2 cores |

Em **15/12**, pause os anúncios de Natal (prazo dos Correios). Os pedidos já feitos continuam.

### Semana 4 (18 a 24/12): produzir e preparar janeiro

- Produzir e enviar os pedidos de Natal.
- Medir: visitas e vendas de cada anúncio (regra dos 14 dias do guia de giro).
- Artes de **Volta às Aulas** (janeiro): tag de mochila com nome (#24) e etiqueta de material escolar.

---

## 4. Rotina de cada pedido personalizado

1. **Recebe o pedido.** Mande a mensagem pronta: "Oi! Me envia o nome exatamente como quer (com acento), a fonte (1, 2, 3 ou 4) e a cor."
2. **Abre o modelo-base**, troca o texto e confere a ortografia.
3. **Manda a prévia:** print da tela do Tinkercad para o cliente aprovar. Isso evita nome errado e devolução.
4. **Exporta** como `data_cliente_produto.stl`, abre o .3mf do modelo-base no fatiador, troca a peça e fatia.
5. **Junta os pedidos do dia** na mesma mesa e imprime à noite.
6. **Foto rápida** do pedido pronto (vira conteúdo para o "pedido do dia").
7. **Embala e posta** no dia seguinte.

## 5. Checklist de cada modelo-base

- [ ] Imprimiu sem suporte, em PETG, com o perfil salvo
- [ ] Testado com o nome **mais curto** (Ana) e o **mais longo** que você aceita (por exemplo, 12 letras)
- [ ] Letras com traço de no mínimo 1,2 mm e todas ligadas à base
- [ ] Tempo de impressão e gramas anotados na planilha
- [ ] Projeto .3mf salvo em `artes/modelos-base/`
- [ ] 7 fotos e 1 vídeo prontos
- [ ] Anúncio com fontes, cores, medidas e prazo

Fontes: [Google Fonts, licenças](https://developers.google.com/fonts/faq) · [Tinkercad](https://www.tinkercad.com) · [OpenSCAD](https://openscad.org)
