# Plano — E-commerce LARGO

## Objetivo
Construir uma loja de moda brasileira completa, responsiva e editorial, com navegação natural e todas as interações principais funcionando no navegador.

## Experiência e direção visual
- Criar uma identidade própria para a LARGO com off-white, areia, grafite e verde-oliva profundo.
- Usar títulos em serif editorial e textos em sans-serif limpa, com fotografia de moda real em destaque.
- Manter composição assimétrica, espaços amplos, bordas discretas e microinterações suaves, sem aparência de template.
- Adaptar cabeçalho, filtros, galerias, grids e carrinho para desktop, tablet e celular.

## Páginas e recursos
- **Home:** cabeçalho fixo, grande campanha de abertura, categorias, destaques, novidades, ofertas, benefícios, newsletter e rodapé completo.
- **Catálogo:** busca por nome, categorias navegáveis, filtros de tamanho, cor, preço, marca, disponibilidade e promoção, além de ordenação.
- **Produto:** galeria ampliável, avaliações, promoção, parcelamento, escolha de cor/tamanho, quantidade, descrição, ficha técnica, guia de tamanhos e relacionados.
- **Carrinho:** adicionar, remover e alterar quantidades, mostrar variantes escolhidas, subtotal, cupom `MODA10`, desconto, total e persistência entre páginas.
- **Checkout:** resumo final da compra, dados de entrega e confirmação simulada, sem pagamento real.
- **Conta:** acesso visual simples para manter o ícone funcional sem criar autenticação real fora do escopo.

## Conteúdo
- Criar um catálogo realista cobrindo feminino, masculino, casual, elegante, tênis e acessórios.
- Escrever nomes, preços, promoções, descrições e especificações diferentes entre si.
- Produzir uma coleção coesa de fotografias próprias de moda e produto, sem placeholders.

## Implementação técnica
- Separar dados, estado do carrinho, layout compartilhado e elementos reutilizáveis.
- Usar páginas próprias para catálogo, produto, carrinho, checkout e conta, com metadados exclusivos.
- Manter busca e filtros na URL quando útil para navegação e compartilhamento.
- Guardar o carrinho no armazenamento local somente após o carregamento da página, evitando inconsistências de renderização.
- Validar visualmente os fluxos principais em desktop e celular: menu, busca, filtros, seleção de variantes, carrinho, cupom e checkout.

## Premissas
- O estoque, avaliações e dados dos produtos serão fictícios e locais.
- O checkout será uma confirmação demonstrativa; não haverá cobrança nem cadastro real.
- “Marca” no filtro identificará linhas internas da LARGO, preservando a proposta de marca própria.
