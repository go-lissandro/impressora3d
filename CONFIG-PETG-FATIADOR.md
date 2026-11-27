# Configuração do PETG Masterprint no fatiador

Valores iniciais para o **PETG Masterprint 1,75 mm** nas suas duas impressoras: **Ender 3 S1 Pro** e **Ender 3 V3 KE**. Servem para OrcaSlicer, Creality Print e Cura (os nomes dos campos mudam um pouco entre eles).

> A Masterprint não publica ficha técnica no site. Os revendedores informam **bico de 220 a 240 °C** e **mesa de 70 a 90 °C** (alguns chegam a 230–260 °C). Por isso, **faça a torre de temperatura** (passo 1 da seção 4) antes de imprimir para vender. Ela leva cerca de 40 minutos e acerta o valor para o seu rolo.

---

## 1. Perfil de filamento (o mesmo nas duas impressoras)

Crie um filamento novo a partir do "Generic PETG" e chame de **PETG Masterprint**.

| Campo | Valor | Por quê |
|---|---|---|
| Diâmetro | 1,75 mm | |
| Densidade | 1,27 g/cm³ | Informada pelo revendedor; acerta o cálculo de gramas |
| Custo | R$ 90/kg (ajuste) | O fatiador mostra o custo da peça |
| Fluxo (flow ratio) | 0,95 | O PETG costuma sair um pouco "sobrando". Ajuste com o teste de fluxo |
| Bico, primeira camada | **240 °C** | Mais aderência na primeira camada |
| Bico, demais camadas | **235 °C** | Meio da faixa da ficha. A torre diz o valor certo (normalmente entre 230 e 245) |
| Mesa, primeira camada | **80 °C** | |
| Mesa, demais camadas | **75 °C** | |
| Ventoinha da peça | 0 % nas 3 primeiras camadas, depois **30 a 50 %** | Ventoinha alta enfraquece a união das camadas. Suba para 60–80 % só em pontes e peças com detalhe fino |
| Ventoinha em pontes | 100 % | |
| Velocidade volumétrica máxima | **S1 Pro: 8 mm³/s** · **KE: 10 mm³/s** | Limita a velocidade para o bico conseguir derreter o PETG. O perfil padrão da Creality usa 9 mm³/s. Meça com o teste de vazão máxima |

### Retração (no perfil do filamento ou da impressora)

As duas impressoras têm extrusora direta, então a retração é curta.

| Campo | S1 Pro | V3 KE |
|---|---|---|
| Distância | **1,0 mm** (teste de 0,5 a 2,0) | **0,8 mm** (teste de 0,5 a 1,5) |
| Velocidade | **35 mm/s** | **40 mm/s** |
| Z-hop | 0,2 mm, **só em superfícies superiores** | igual |
| Wipe (limpar ao retrair) | Ligado | Ligado |
| Retrair ao trocar de camada | Ligado | Ligado |

**Se aparecerem fiapos, baixe a temperatura em 5 °C antes de aumentar a retração.** No PETG, temperatura alta costuma causar mais fiapo do que retração curta.

### Avanço de pressão (Pressure Advance)

- **V3 KE (Klipper):** comece com **0,04** e calibre (OrcaSlicer: Calibração → Pressure Advance). PETG costuma ficar entre 0,03 e 0,07.
- **S1 Pro (Marlin):** o Linear Advance normalmente vem desligado no firmware de fábrica. Pode deixar assim.

---

## 2. Perfil de processo (velocidades e camadas)

| Campo | Ender 3 S1 Pro | Ender 3 V3 KE |
|---|---|---|
| Altura de camada | 0,20 mm (qualidade) · 0,28 mm (rápido) | igual |
| Primeira camada | 0,24 mm | 0,24 mm |
| Velocidade da primeira camada | **20 mm/s** | **35 mm/s** |
| Parede externa | **35–40 mm/s** | **80–100 mm/s** |
| Parede interna | 50 mm/s | 150 mm/s |
| Preenchimento | 60 mm/s | 150–200 mm/s (o limite volumétrico corta se precisar) |
| Topo e fundo | 40 mm/s | 100 mm/s |
| Deslocamento (travel) | 150 mm/s | 300 mm/s |
| Aceleração | 500–1000 mm/s² | 3000–5000 mm/s² |
| Paredes | 3 | 3 |
| Camadas de topo / fundo | 4 / 4 | 4 / 4 |
| Preenchimento | 15 % giroide (peças de força: 25–30 %) | igual |
| Costura (seam) | Alinhada, atrás da peça | igual |
| Brim | Só em peças altas ou com pouca base | igual |

---

## 3. Mesa e primeira camada (o que mais dá problema com PETG)

- **O PETG gruda forte demais na PEI lisa** e pode arrancar a película quando você tira a peça. Passe uma camada fina de **cola bastão** como separador. Na **PEI texturizada** não precisa.
- **Não esmague a primeira camada como no PLA.** Deixe o bico de 0,02 a 0,05 mm mais alto (Z-offset). Se esmagar, o bico arrasta e junta "melecas".
- Limpe a mesa com álcool isopropílico. Gordura dos dedos faz a peça soltar.
- Espere a mesa esfriar (abaixo de 40 °C) para tirar a peça. Ela solta sozinha.

## 4. Calibração, nesta ordem (OrcaSlicer, menu Calibração)

1. **Torre de temperatura:** de 250 até 220 °C, de 5 em 5. Escolha o andar com menos fiapo e camadas bem unidas.
2. **Fluxo (Flow rate):** dois passos. Escolha o quadrado com o topo mais liso.
3. **Pressure Advance** (só na KE).
4. **Retração:** torre de 0,5 a 2,0 mm.
5. **Velocidade volumétrica máxima:** coloque o resultado menos 10 % no perfil do filamento.

Salve tudo num perfil "PETG Masterprint" para cada impressora e reutilize.

## 5. Secagem e armazenamento

O PETG absorve umidade do ar. Sinais: **estalos no bico, bolhas, superfície áspera e muito fiapo**.
- Seque a **55–60 °C por 4 a 6 horas** (indicação do revendedor), em secador de filamento ou forno elétrico com termômetro.
- Guarde o rolo aberto em saco com fecho e sílica gel.

## 6. Problemas comuns

| Problema | O que fazer |
|---|---|
| Fiapos (stringing) | Baixe 5 °C. Seque o filamento. Depois aumente a retração em 0,2 mm por vez |
| Bico arrasta e junta gotas | Primeira camada menos esmagada (Z-offset mais alto). Z-hop só no topo. Fluxo para 0,93 |
| Peça soltou da mesa | Limpe com álcool. Mesa a 80 °C na primeira camada. Velocidade da primeira camada menor |
| Peça não sai da mesa | Espere esfriar. Use cola bastão como separador na PEI lisa |
| Camadas fracas, peça quebra fácil | Suba 5–10 °C. Baixe a ventoinha para 20–30 %. Seque o filamento |
| Superfície com bolhas e estalos | Filamento úmido: seque |
| Encaixes print-in-place colados | Folga de 0,4 a 0,5 mm no modelo. Ventoinha a 50 % |

Fontes: fichas de revendedores do PETG Masterprint ([Artfull 3D](https://www.artfull3d.com.br/filamentos/masterprint/petg), [Central da Tecnologia](https://www.centraldatecnologia.com.br/produtos/filamento-petg-masterprint-preto-1kg/), [Impressora Jato](https://impressorajato.com.br/products/filamento-3d-masterprint-petg-preto-1-75mm-1kg), [3D Prints](https://loja.3dprints.com.br/produtos/filamento-petg-masterprint-1kg-branco/)) · [Guia de PETG no OrcaSlicer](https://stacksheriff.com/3d-printing/petg-settings-orcaslicer/) · [Fórum Creality, PETG na V3 KE](https://forum.creality.com/t/ender-3-v3-ke-good-pet-g-profile-for-creality-print/24240) · [Review da V3 KE (Tom's Hardware)](https://www.tomshardware.com/uk/3d-printing/creality-ender-3-v3-ke-review) · [Ajustes de PETG (All3DP)](https://all3dp.com/pt/2/impressao-petg-melhores-configuracoes-imprimir-com-petg/) · [PETG (Prusa)](https://help.prusa3d.com/es/article/petg_2059)
