# BioSites — Advocacia

Template inicial de bio site premium para profissionais da advocacia, feito com Next.js, React, TypeScript e Tailwind CSS.

## Recursos da primeira versão

- Página de apresentação responsiva em português brasileiro.
- Seções de apresentação, áreas de atuação, serviços, perguntas frequentes e contato.
- Navegação adaptada para dispositivos móveis.
- Botões de contato por WhatsApp e links para redes sociais.
- Metadados básicos para mecanismos de busca e compartilhamento.
- Conteúdo demonstrativo fácil de personalizar.

## Requisitos

- Node.js 20.9 ou superior
- npm

## Instalação

```bash
npm install
npm run dev
```

Abra http://localhost:3000 no navegador.

## Personalização antes de publicar

O conteúdo atual usa **dados fictícios de demonstração** (Dra. Marina Alves, OAB/SP e contatos). Atualize os dados em `app/page.tsx` antes de publicar:

- Nome, número de inscrição e seccional da OAB.
- Cidade, endereço, e-mail e telefone.
- Número usado nos links `wa.me`.
- Áreas de atuação, biografia e serviços efetivamente oferecidos.
- URLs de redes sociais.

A ilustração de retrato da primeira versão é construída com CSS como placeholder; substitua-a por uma fotografia profissional autorizada quando os dados reais forem inseridos.

## Observação de conformidade

Este projeto é um modelo técnico e visual, não uma garantia de conformidade jurídica ou publicitária. Antes de publicar, revise textos, imagens, identificação profissional e divulgação à luz das regras vigentes da OAB, evitando promessas de resultado, captação indevida de clientela ou informações que possam induzir o público a erro.

## Próximos passos sugeridos

1. Separar dados do perfil do layout para criar páginas individuais reutilizáveis.
2. Definir roteamento por slug (ex.: `/marina-alves`).
3. Criar formulário ou painel para cadastrar advogados.
4. Adicionar validação dos dados, política de privacidade e consentimentos necessários.
5. Configurar deploy e domínio.
