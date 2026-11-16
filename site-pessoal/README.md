# Site pessoal: Lissandro Miranda Rocha

Portfólio estático (HTML, CSS e JavaScript puro, sem build) com as páginas **Início**, **Sobre**, **Projetos** e **Contato**.

## Dados do GitHub
- Mostra apenas os repositórios **públicos da conta pessoal** `go-lissandro`. Ficam de fora repositórios de organizações, forks e privados.
- `data.js` guarda um snapshot dos repositórios, usado se a API estiver fora do ar.
- Ao abrir, o site busca os dados atualizados em `api.github.com/users/go-lissandro/repos` e aplica o mesmo filtro.

## Personalizar
- `script.js`: `DESTAQUES` (projetos da página inicial), `DESCRICOES` (texto para repositórios sem descrição) e `SKILLS`.
- `index.html`: textos de apresentação, sobre e contato.
- `style.css`: cores em `:root`.

## Rodar localmente
Abra o `index.html` no navegador.

## Publicar na Vercel
1. Crie um repositório (por exemplo `site-pessoal`) com o conteúdo desta pasta.
2. Na Vercel: **Add New → Project**, importe o repositório e use o preset **Other**, sem comando de build.
