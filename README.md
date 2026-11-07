# Impressão 3D para marketplaces: análise de produtos (Ender 3 S1 Pro + Ender 3 V3 KE)

Análise de peças que dão para imprimir em **2 a 4 horas** na Creality Ender 3 S1 Pro (ou em cerca de metade do tempo na Ender 3 V3 KE), pensadas para vender no Mercado Livre, TikTok Shop, Shopee, Amazon, Magalu e loja própria.

**Arquivos deste repositório:**
- [`planilha-precos-impressao3d.xlsx`](planilha-precos-impressao3d.xlsx): calculadora de preço com as taxas de 2026 por faixa de preço, **100 produtos**, ranking de lucro por hora, comparação entre as duas impressoras, aba para pesquisar concorrentes e aba com os anúncios dos 100 produtos.
- [`ANUNCIOS-TOP10.md`](ANUNCIOS-TOP10.md): títulos (Mercado Livre, Shopee e TikTok Shop), descrições, variações e palavras-chave dos 10 produtos mais lucrativos.
- [`ANUNCIOS-DEMAIS-90.md`](ANUNCIOS-DEMAIS-90.md): anúncios dos outros 90 produtos, organizados por categoria.
- [`MODELOS-UTILIDADES.md`](MODELOS-UTILIDADES.md): modelos 3D de caixas organizadoras e utilidades domésticas, com a licença de cada um (pode vender ou não).
- [`ANALISE-MERCADO.md`](ANALISE-MERCADO.md): análise dos marketplaces, dos perfis de vendedores, dos produtos que mais saem e do calendário de vendas.

> ⚠️ **O Elo7 encerrou as operações em 11/05/2026.** Os produtos personalizados agora vão para TikTok Shop, Shopee e Instagram/WhatsApp.

> Todos os valores (tempo, gramas, preço) são **estimativas** para te ajudar a começar. Confirme o tempo no fatiador (Cura, OrcaSlicer ou Creality Print) e as taxas atuais de cada marketplace antes de definir o preço.

---

## 1. O que as suas impressoras conseguem fazer

| Item | Ender 3 S1 Pro | Ender 3 V3 KE |
|---|---|---|
| Volume de impressão | 220 × 220 × 270 mm | 220 × 220 × 240 mm |
| Extrusora | Direct drive "Sprite" | Direct drive |
| Hotend | até 300 °C | até 300 °C |
| Mesa | PEI magnética com nivelamento automático | PEI magnética com nivelamento automático |
| Firmware | Marlin | Creality OS |
| Velocidade | 50 a 80 mm/s com boa qualidade | até 500 mm/s (na prática, cerca de 2× mais rápida que a S1 Pro) |
| Materiais | PLA, PETG, TPU (ABS/ASA precisam de gabinete) | PLA, PETG, TPU (ABS/ASA precisam de gabinete) |

**Como os tempos foram estimados:** os tempos da planilha são da **S1 Pro** (bico de 0,4 mm, camada de 0,20 a 0,28 mm, preenchimento de 10 a 15 % gyroid, cerca de 60 mm/s). Para a **V3 KE**, a planilha multiplica pelo "fator de tempo" (0,5 por padrão; aba Premissas, linha 37).

### Como dividir o trabalho entre as duas

| Use a **V3 KE** para... | Use a **S1 Pro** para... |
|---|---|
| Peças funcionais e de volume: Gridfinity, organizadores, suportes, prendedores, kits | Litofanias (precisam de impressão lenta e precisa) |
| Pedidos grandes (brindes corporativos e lembrancinhas em lote) | PLA seda e decorativos, onde o acabamento importa mais que a velocidade |
| Estoque dos campeões de venda | Personalizados com letras pequenas e detalhes |
| Peças altas de até 240 mm | Peças entre 240 e 270 mm de altura (só ela tem essa altura) |

- **Na KE, use filamento "high speed" (PLA de alta velocidade).** O PLA comum não derrete rápido o suficiente acima de cerca de 200 mm/s, e a peça sai fraca ou com falhas de extrusão.
- **Meça o fator de tempo real:** fatie a mesma peça para as duas impressoras, divida o tempo da KE pelo tempo da S1 Pro e coloque o resultado na planilha. Peças pequenas ganham menos com a velocidade, porque a impressora quase não chega à velocidade máxima.
- A planilha mostra, para cada produto, o custo e o lucro por hora **nas duas impressoras**, a "impressora sugerida" e o lucro por dia usando as duas.
**Dica para ganhar tempo:** um **bico de 0,6 mm** (cerca de R$ 15) corta de 30 a 40 % do tempo em vasos e peças grandes, que não precisam de detalhe fino.

---

## 2. Quanto custa imprimir uma peça

```
Custo da peça = filamento + máquina + perda por falhas + embalagem

filamento = gramas × (preço do kg ÷ 1000)          → PLA a R$ 100/kg = R$ 0,10/g
máquina   = horas × R$ 0,85                         → energia (~R$ 0,15/h) + desgaste da impressora,
                                                       bico e mesa (~R$ 0,70/h)
falhas    = +10 % sobre (filamento + máquina)
embalagem = R$ 1,50 a R$ 3,00 (saquinho, plástico bolha e caixa)
```

**Exemplo:** um suporte de headset (75 g, 3,5 h)
- Filamento: 75 × 0,10 = R$ 7,50
- Máquina: 3,5 × 0,85 = R$ 2,98
- Falhas (10 %): R$ 1,05
- Embalagem: R$ 2,50
- **Custo total ≈ R$ 14,00**, e o preço de venda sugerido é **R$ 49,90**.

**Como chegar no preço de venda:**

```
Preço mínimo = (custo + frete que você paga + taxa fixa do marketplace) ÷ (1 − comissão − imposto − margem desejada)
```

Taxas de referência em nov/2026 (a planilha já aplica a faixa certa; **confirme sempre no simulador oficial**):
- **Mercado Livre:** comissão de 10 a 14 % no Clássico ou de 15 a 19 % no Premium. Abaixo de R$ 79 há um custo por peso (cerca de R$ 5,65 a R$ 7,75 para pacotes até 0,3 kg). A partir de R$ 79, o frete grátis é pago por você.
- **Shopee (CNPJ):** até R$ 79,99 = 20 % + R$ 4,50; de R$ 80 a R$ 99,99 = 14 % + R$ 16; de R$ 100 a R$ 199,99 = 14 % + R$ 20; a partir de R$ 200 = 14 % + R$ 26.
- **TikTok Shop:** abaixo de R$ 50 = 10 % + R$ 4; a partir de R$ 50 = 6 % + R$ 6.
- **Loja própria, Instagram e WhatsApp:** cerca de 3 % de gateway. É o melhor canal para personalizados e brindes.
- **Imposto:** no MEI você paga um valor fixo por mês (DAS), que é o mais simples para começar.

**Regra prática:** venda por **pelo menos 3 vezes o custo**. Produtos com menos que isso viram prejuízo depois de pagar taxas e frete.

---

## 3. Produtos recomendados (2 a 4 h)

A lista completa com **100 produtos** e o cálculo de lucro em cada canal está na planilha. Abaixo estão os destaques.

Legenda de **concorrência**: 🟢 baixa, 🟡 média, 🔴 alta.
**Margem** = preço sugerido ÷ custo estimado.

### A. Personalizados (a melhor margem e a menor concorrência com produto chinês)

| # | Produto | Tempo | Filamento | Custo est. | Preço sugerido | Margem | Concorrência | Melhor canal |
|---|---|---|---|---|---|---|---|---|
| 1 | **Topo de bolo com nome/idade** | 1–2 h | 15–25 g | R$ 5 | R$ 29–45 | 6–9× | 🟡 | Shopee, Instagram |
| 2 | **Chaveiros com nome (lote de 10–20 por mesa)** | 2–3 h/lote | 4–6 g cada | R$ 1,50 cada | R$ 8–15 cada (kits para festas e empresas) | 5–10× | 🟡 | Shopee, Instagram |
| 3 | **Cortador de biscoito/fondant personalizado** | 1–2 h | 15–25 g | R$ 4 | R$ 25–40 | 6–10× | 🟢 | Shopee |
| 4 | **Placa de porta / plaquinha de pet com nome (2 cores, trocando o filamento na camada)** | 2–3 h | 30–40 g | R$ 7 | R$ 35–55 | 5–7× | 🟢 | Shopee, ML |
| 5 | **Litofania (foto do cliente) 10×10 cm** | 3–4 h | 25–35 g (PLA branco) | R$ 8 | R$ 49–89 (com base/LED, até R$ 129) | 6–10× | 🟢 | Shopee, Instagram |
| 6 | **Brindes corporativos com logo** (porta-celular, chaveiro, porta-caneta) | 2–3 h | 20–40 g | R$ 5–8 | pedido em lote | 4–6× | 🟢 | contato direto, ML |

### B. Gamer e setup de escritório (ticket bom e vende o ano todo)

| # | Produto | Tempo | Filamento | Custo est. | Preço sugerido | Margem | Concorrência | Melhor canal |
|---|---|---|---|---|---|---|---|---|
| 7 | **Suporte anti-sag de placa de vídeo** | 1–2 h | 15–25 g | R$ 4 | R$ 25–39 | 6–9× | 🟡 | ML, Shopee |
| 8 | **Suporte de controle PS5/Xbox (duplo)** | 3–4 h | 60–80 g | R$ 13 | R$ 39–59 | 3–4× | 🟡 | ML, Shopee |
| 9 | **Suporte de headset de mesa** | 3–4 h | 60–80 g | R$ 14 | R$ 45–59 | 3–4× | 🔴 | ML |
| 10 | **Suporte Echo Dot / Alexa (parede ou mesa)** | 2–3 h | 40–60 g | R$ 9 | R$ 35–49 | 4–5× | 🟡 | ML, Amazon |
| 11 | **Suporte de celular/tablet com ângulo** | 1,5–2,5 h | 30–45 g | R$ 7 | R$ 25–39 | 4–5× | 🔴 | Shopee |
| 12 | **Organizador de cabos / clipes de mesa (kit)** | 2 h/kit | 20–30 g | R$ 5 | R$ 19–29 | 4–5× | 🟡 | Shopee |

### C. Casa e decoração

| # | Produto | Tempo | Filamento | Custo est. | Preço sugerido | Margem | Concorrência | Melhor canal |
|---|---|---|---|---|---|---|---|---|
| 13 | **Vaso geométrico ou cachepô (modo vaso, PLA seda/marmorizado)** | 2–3 h | 40–70 g | R$ 9 | R$ 35–59 | 4–6× | 🟡 | Shopee, Instagram |
| 14 | **Organizadores de gaveta no padrão Gridfinity (kit)** | 2–4 h | 50–80 g | R$ 12 | R$ 39–69 | 3–5× | 🟢 | ML |
| 15 | **Porta-copos (kit com 4–6) + suporte** | 2–3 h | 40–60 g | R$ 9 | R$ 29–45 | 3–5× | 🟡 | Shopee |
| 16 | **Porta-incenso / porta-velas decorativo** | 1,5–2,5 h | 25–40 g | R$ 6 | R$ 25–39 | 4–6× | 🟢 | Shopee, Instagram |
| 17 | **Suporte de parede para controle remoto / chaves** | 1,5–2 h | 25–35 g | R$ 6 | R$ 22–35 | 4–5× | 🟡 | ML, Shopee |

### D. Brinquedos e fidgets (vendem por impulso)

| # | Produto | Tempo | Filamento | Custo est. | Preço sugerido | Margem | Concorrência | Melhor canal |
|---|---|---|---|---|---|---|---|---|
| 18 | **Animais articulados ("flexi") de 12–18 cm (impressos já montados)** | 2–4 h | 20–45 g | R$ 6 | R$ 25–45 | 4–6× | 🔴 | TikTok Shop, Shopee |
| 19 | **Fidgets (engrenagens e espirais impressas já montadas)** | 1–2 h | 15–25 g | R$ 4 | R$ 15–25 | 4–6× | 🟡 | Shopee |

---

## 4. Ranking: por onde começar

Escolha **5 a 8 produtos** para testar durante 30 dias. Esta é a ordem que eu recomendo:

1. **Topo de bolo personalizado.** É rápido, a margem é altíssima e a demanda é constante (aniversários).
2. **Suporte anti-sag de GPU.** Leva menos de 2 h e vende bem no Mercado Livre.
3. **Litofania com foto.** O ticket é alto, quase não há concorrência chinesa e é um ótimo presente (Dia das Mães, Natal, Dia dos Namorados).
4. **Kit de chaveiros personalizados.** É fácil de vender em lote para festas, formaturas e empresas.
5. **Vaso geométrico em modo vaso.** A impressora faz sozinha e as fotos ficam bonitas.
6. **Suporte de controle PS5/Xbox.**
7. **Organizadores Gridfinity.** O público é fiel e quem compra volta para comprar mais.
8. **Animais articulados** (somente modelos com licença comercial, veja a seção 5).

**Fuja de produtos genéricos que já existem injetados por R$ 10 na Shopee** (suporte simples de celular, ganchinhos). Seu diferencial é **personalização, nicho e qualidade**.

---

## 5. Cuidados importantes (direitos autorais e marcas)

- **Não venda personagens nem marcas** (Pokémon, Marvel, Disney, logos de time, Stitch etc.). Os marketplaces derrubam o anúncio e podem suspender sua conta, e existe risco de processo.
- Muitos modelos gratuitos no Thingiverse e no Printables têm licença **não comercial (NC)**. Para vender, você precisa de uma destas opções:
  - Modelos com licença que permite uso comercial (CC-BY, CC0 ou MIT; o **Gridfinity** é MIT).
  - Assinar o designer (no **Patreon** ou na "commercial license" no Cults3D, MyMiniFactory ou Printables Club), com preços entre US$ 5 e 15 por mês para muitos modelos.
  - **Criar seus próprios modelos.** O Tinkercad é gratuito e o Fusion 360 tem licença pessoal grátis. Placas, topos de bolo e chaveiros com nome são fáceis de modelar.
- **Cortador de biscoito:** o PLA comum não é certificado para contato com alimentos. Informe no anúncio que o produto é de "uso pontual" ou use PLA/PETG com certificação alimentar.

---

## 6. Dicas de produção para ganhar escala

1. **Encha a mesa.** Imprimir de 4 a 10 peças por vez dilui o tempo de aquecimento e de troca e aproveita a noite.
2. **Deixe perfis prontos no fatiador** para cada produto ("rápido 0,28 mm" e "qualidade 0,16 mm") e salve o projeto (.3mf) de cada um para repetir com um clique.
3. **Use filamentos que vendem:** PLA seda (dourado, prata e cobre), PLA marmorizado e PLA preto/branco fosco. Peças para carro ou para áreas externas pedem PETG.
4. **Calibre uma vez e direito:** primeira camada, retração e fluxo. Peças com falha não vendem e geram avaliação ruim.
5. **Upgrades que se pagam rápido:** bico de 0,6 mm, mesa PEI texturizada (as peças soltam sozinhas e o acabamento é bonito) e, mais para frente, o **Klipper**, que pode dobrar a velocidade.
6. **Capriche nas fotos:** fundo branco, uma foto do produto em uso e uma foto com uma régua ou uma mão para mostrar o tamanho. Essas fotos fazem mais diferença que o preço.
7. **Tenha estoque mínimo** dos produtos que não são personalizados. Assim você despacha em 24 h, o que dá destaque no Mercado Livre e na Shopee.

---

## 7. Formalização (resumo)

- Abra um **MEI** para emitir nota fiscal. A Amazon e o Mercado Livre (incluindo o Full) cobram nota em muitas situações. O teto do MEI é de R$ 81 mil por ano. Confirme com um contador qual atividade (CNAE) do MEI se encaixa na sua produção.
- **Capacidade das duas impressoras:** uma peça que leva 3 h na S1 Pro leva cerca de 1,5 h na V3 KE. Com cerca de 18 h de uso por dia, a S1 Pro faz umas 6 dessas peças e a KE umas 12, ou seja, **cerca de 18 por dia e de 450 a 500 por mês**. Com uma margem média de R$ 20 a R$ 25 por peça, o teto seria de **R$ 9.000 a R$ 12.000 de lucro bruto por mês**, se você vender tudo. Na prática, quem limita é a venda, não a produção. Atenção ao **teto do MEI: R$ 81 mil por ano (cerca de R$ 6.750 por mês de faturamento)**. Com as duas impressoras cheias e preço médio de R$ 40, você faturaria perto de R$ 18 mil por mês e passaria do teto. Quando o faturamento chegar perto de R$ 6.000 por mês, fale com um contador sobre mudar para ME no Simples Nacional.

---

## 8. Plano dos primeiros 30 dias

| Semana | Ação |
|---|---|
| 1 | Calibrar a impressora, imprimir uma amostra dos 8 produtos, fotografar e medir o tempo e as gramas reais |
| 2 | Publicar os 8 anúncios em 2 canais (sugestão: Shopee + Mercado Livre) e abrir o TikTok Shop |
| 3 | Ajustar preço e título pelas visitas e conversões; divulgar no Instagram e no TikTok (vídeo da impressora imprimindo vende muito) |
| 4 | Cortar os 3 produtos piores e criar variações (cores e tamanhos) dos 3 melhores |
