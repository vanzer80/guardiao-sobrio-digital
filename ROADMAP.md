# Roadmap — O Guardião Sóbrio

## Status geral

![Progresso](https://img.shields.io/badge/progresso-28%2F57%20tarefas-C8922A?style=flat-square&labelColor=111111)

---

## ✅ Fase 0 — Fundação (concluído)

- [x] Identidade visual noir estabelecida (CSS, Cormorant Garamond, âmbar #C8922A, grain texture)
- [x] Sistema de design: tactical-card, tactical-button, section-eyebrow, alert-box, quote-block
- [x] Header.tsx: nome "O Guardião Sóbrio", nav limpa, CTA "Entrar no Bunker"
- [x] Footer.tsx: banner de emergência (192 SAMU), links, disclaimer
- [x] Index.tsx: hero com headline principal, 3 cards de situação, pilares, CTAs pós-pilares, bio atualizada
- [x] ComeceAqui.tsx: 3 opções de entrada com CTAs específicos
- [x] Sobre.tsx: história, "o que não sou", 7 fundamentos, disclaimer
- [x] Produtos.tsx: 6 produtos reais com preços (R$47 a R$997), 3 tiers, funil visual
- [x] Protocolos.tsx: 11 protocolos em 3 seções (principal / complementares / em desenvolvimento)
- [x] Trilhas.tsx: 3 trilhas completas com urgência, context blocks, newsletter por trilha, hub + 404
- [x] NewsletterCapture.tsx: componente com segmentação por tag
- [x] Deploy funcional no Vercel

---

## ✅ Fase 1 — Tipografia e Escala (concluído)

- [x] Hero da Index: heading aumentado para escala cinematográfica (clamp 80px–120px, line-height 0.95)
- [x] Pull quote gigante entre pilares e newsletter: "72 horas. É o que separa a fissura do protocolo." em 80px full-width
- [x] Seção de pilares redesenhada: cada palavra (Espelho / Tática / Escudo) em fonte poster, não grid de 3 colunas
- [x] Números dos protocolos em escala editorial (P-01 em tamanho grande, estilo revista)
- [x] Revisão de espaçamento: alternância intencional de seções densas e seções respiráveis
- [x] Botões com tamanho mínimo aumentado e letra-spacing mais apertado no texto

---

## ✅ Fase 2 — Fotografia e Drama Visual (concluído)

- [x] Foto de Luis Vanzer (P&B) no hero da página Sobre — full-bleed com texto sobreposto
- [x] Hero da Index: imagem de fundo atmosférica (cidade à noite / corredor escuro / fumaça) com heading sobre ela
- [x] Seção "às 2 da manhã" na Index: fundo #0d0d0d, frase única em âmbar, sem mais nada
- [x] Cards de produto: substituir ícones Lucide por números editoriais grandes
- [x] Seção Sobre: segunda foto ou detalhe visual para quebrar o bloco de texto

---

## ✅ Fase 3 — Animações e Micro-interações (concluído)

- [x] Staggered reveal no hero: título entra palavra por palavra (opacity 0→1 + translateY, delay escalonado)
- [x] Novo componente MarqueeStrip.tsx: frase em loop horizontal contínuo — "A fissura não pede licença · O protocolo também não · 72 horas · Estrutura, não motivação ·"
- [x] Hover nos cards de protocolo: linha âmbar à esquerda cresce de baixo para cima
- [x] Contador numérico animado: "72" no Protocolo Escudo conta de 0 a 72 ao entrar na tela
- [x] Fade-in com IntersectionObserver em todas as seções principais
- [x] Cursor âmbar customizado (desktop only)

---

## 🔲 Fase 4 — Seções Premium de Conversão

- [ ] Novo componente TypewriterHero.tsx: parágrafo que aparece como sendo digitado (typewriter + cursor âmbar piscando)
- [ ] Timeline horizontal dos produtos: scroll horizontal com as 3 fases do funil (Entrada → Programas → Continuidade)
- [ ] NewsletterCapture redesenhado: visual de "acesso restrito / terminal" com campo mono e CTA "Solicitar Acesso"
- [ ] Seção mapa de crises no Footer ou antes dele: infográfico editorial dos 3 momentos (72h / vontade hoje / familiar)
- [ ] Página AppLanding.tsx (/app): early access real com formulário e lista de espera

---

## 🔲 Fase 5 — Produto e Backend

- [ ] Integração Supabase: tabela de leads com campo tag para segmentação
- [ ] NewsletterCapture conectado ao Supabase (substituir mock setTimeout)
- [ ] Stripe: página de checkout para Protocolo Escudo 72h (R$47)
- [ ] Stripe: página de checkout para Mapa 13 Fundamentos (R$47)
- [ ] Página de obrigado pós-compra (/obrigado)
- [ ] Proteção de conteúdo pago com Supabase Auth
- [ ] Dashboard básico de leads no Supabase Studio

---

## 🔲 Fase 6 — SEO e Performance

- [ ] index.html: título atualizado para "O Guardião Sóbrio | Protocolo para sobriedade adulta real"
- [ ] Meta description otimizada por página (react-helmet ou equivalente)
- [ ] Open Graph image gerada (1200x630, noir com headline)
- [ ] Sitemap.xml gerado
- [ ] robots.txt configurado
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1
- [ ] Fontes com font-display: swap e preload
- [ ] Lazy loading em imagens

---

## 🔲 Fase 7 — Qualidade e Acessibilidade

- [ ] Hierarquia de headings correta em todas as páginas (h1 único por página)
- [ ] Alt text em todas as imagens
- [ ] Labels em todos os campos de formulário
- [ ] Contraste mínimo WCAG AA em todos os textos
- [ ] Navegação completa por teclado
- [ ] Teste mobile 375px em todas as páginas
- [ ] Disclaimer legal visível em todas as páginas com conteúdo sensível
- [ ] 404 page personalizada

---

## Notas de implementação

- **Stack:** Vite + React + TypeScript + Tailwind CSS + React Router v6 + shadcn/ui
- **Deploy:** Vercel (auto-deploy no push para main)
- **Backend planejado:** Supabase (PostgreSQL + Auth + Storage)
- **Pagamentos planejados:** Stripe
- **Design system:** Noir Realista — Cormorant Garamond (display), Inter (body), âmbar #C8922A, fundo #111111, sem border-radius
