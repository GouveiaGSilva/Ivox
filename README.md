# Ivox Scale - Marketing Agency Website

Uma aplicação web premium para agência de marketing digital com suporte bilíngue (Português/Inglês) e temas claro/escuro.

## 🚀 Deploy no Netlify

### Método 1: Deploy Automático via Git

1. Conecte seu repositório ao Netlify
2. Configure as seguintes configurações de build:
   - **Build Command:** `npx vite build --config build.netlify.js`
   - **Publish Directory:** `dist`
   - **Node Version:** `20`

### Método 2: Deploy Manual

1. Execute o build localmente:
```bash
npm install
npx vite build --config build.netlify.js
```

2. Faça upload da pasta `dist` no Netlify

### Configurações Importantes

O arquivo `netlify.toml` já está configurado com:
- Redirecionamentos para SPA (Single Page Application)
- Configurações de ambiente
- Comando de build otimizado

## 🛠️ Tecnologias

- **Frontend:** React 18, TypeScript, Tailwind CSS
- **UI Components:** Radix UI, shadcn/ui
- **Build:** Vite
- **Routing:** Wouter
- **State Management:** React Context, TanStack Query

## 📱 Funcionalidades

- ✅ Design responsivo moderno
- ✅ Tema claro/escuro
- ✅ Troca de idioma (PT/EN)
- ✅ Animações suaves
- ✅ Formulário de contato com validação
- ✅ Navegação suave
- ✅ SEO otimizado

## 🎨 Seções do Site

- **Header:** Navegação fixa com controles de tema e idioma
- **Hero:** Seção principal com call-to-action
- **Sobre:** Informações da empresa e missão
- **Serviços:** Cards dos serviços oferecidos
- **Diferenciais:** Vantagens competitivas
- **Depoimentos:** Carousel de testemunhos
- **Contato:** Formulário e informações de contato
- **Footer:** Links e informações adicionais

## 📧 Contato

Email: contato@ivoxscale.com