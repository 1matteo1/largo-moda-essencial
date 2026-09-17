# Largo: Moda Essencial

Crie um e-commerce de moda completo e funcional chamado "LARGO" (marca fictícia de roupas e tênis), com identidade visual própria, sofisticada e editorial — nem hypebeast, nem luxo extremo. Público: quem busca peças elegantes E quem prefere casual/conforto. Mercado: Brasil (preços em R$, parcelamento "ou 3x sem juros", frete).

[IDENTIDADE DA MARCA]
- Nome: LARGO
- Paleta: tons neutros e terrosos (areia, grafite, off-white, um accent color sóbrio — ex. verde-oliva profundo ou terracota) — nada de neon, nada de gradiente chamativo
- Tipografia: serif editorial refinada para títulos + sans-serif limpa para corpo de texto
- Estilo fotográfico: fotografia real de moda (não ilustração, não 3D render), boa iluminação, still-life e lifestyle
- Tom de voz: direto, sem clichês tipo "bem-vindo ao futuro da moda"

[REGRA MAIS IMPORTANTE]
O site NÃO pode parecer gerado por IA ou template genérico. Evite: gradientes exagerados, sombras pesadas, cards muito arredondados, animações desnecessárias, textos genéricos, layouts simétricos artificiais, ícones aleatórios, visual de dashboard, cores neon. Prefira: tipografia com hierarquia clara, espaçamento generoso, fotografia grande, microinterações discretas (hover sutil, transições suaves), layout editorial como grandes lojas de moda reais (ex. Zara, Uniqlo, Net-a-Porter).

[ESTRUTURA DO SITE]

1) HOME
- Header fixo: logo LARGO, menu (Feminino / Masculino / Casual / Elegante / Tênis / Acessórios), busca, ícone de conta, ícone de carrinho com contador
- Hero: foto de moda grande, frase curta e direta, botão "Comprar agora"
- Categorias em destaque (Feminino, Masculino, Casual, Elegante, Tênis) em cards editoriais com foto grande
- Produtos em destaque (grid de cards: foto, nome, preço, preço riscado + % OFF quando houver promoção)
- Seção "Novidades"
- Seção "Ofertas" com desconto destacado
- Seção de benefícios (frete, compra segura, troca fácil, atendimento)
- Newsletter (campo de e-mail)
- Footer completo (links institucionais, redes sociais, atendimento, políticas, formas de pagamento)

2) CATÁLOGO / BUSCA
- Página de listagem por categoria e busca funcional por nome
- Filtros: categoria, tamanho, cor, faixa de preço, marca, disponibilidade, promoção
- Ordenação: mais recentes, menor preço, maior preço, mais vendidos

3) PÁGINA DE PRODUTO
- Galeria com zoom
- Nome, avaliação (estrelas + nº de avaliações), preço, preço anterior riscado e % OFF quando aplicável, parcelamento
- Seleção de tamanho e cor, quantidade
- Botões "Comprar agora" e "Adicionar ao carrinho"
- Descrição, ficha técnica/informações do produto, guia de tamanhos
- Produtos relacionados

4) CARRINHO (funcional de verdade)
- Adicionar/remover produtos, alterar quantidade, ver tamanho/cor escolhidos
- Subtotal, campo de cupom, total
- Cupom funcional: código "MODA10" aplica 10% OFF; cupom inválido mostra mensagem elegante e clara
- Carrinho persiste entre navegação de páginas (usar local storage do navegador)
- Botões "Continuar comprando" e "Ir para checkout" (checkout pode ser uma tela de resumo/confirmação, sem gateway de pagamento real)

[DADOS]
Popule com produtos fictícios realistas cobrindo todas as categorias pedidas (chique/elegante, casual, camisetas, calças, jaquetas, moletons, shorts, vestidos, tênis, acessórios). Nomes no estilo "Camiseta Essential Premium", "Jaqueta Urban", "Calça Wide Leg", "Moletom Heavy", "Tênis Street Classic", "Camisa Oxford Premium". Descrições devem soar como texto de loja de verdade — evite repetição e frases genéricas. Use fotografia de moda real de alta qualidade (não placeholders, não fotos genéricas óbvias de banco).

[TÉCNICO]
Código limpo, componentizado e reutilizável. Site totalmente responsivo (desktop, tablet, mobile) — no mobile, menu vira menu hambúrguer e o carrinho continua acessível. Implemente as funcionalidades de verdade (carrinho, cupom, filtros, busca), não apenas a interface visual.

Antes de finalizar, revise como se fosse um cliente entrando numa loja de verdade: o site parece uma loja real? as imagens parecem profissionais? a navegação é natural? o carrinho e os cupons funcionam? fica bom no celular? Corrija qualquer elemento que pareça genérico ou "feito por IA".

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a8497db5-a324-42e6-bb83-5a08103e3f5f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
