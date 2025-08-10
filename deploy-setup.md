# Como fazer o deploy no Netlify

## Arquivos Principais do Projeto

✅ `netlify.toml` - Configuração de deploy
✅ `build.netlify.js` - Build otimizado para produção  
✅ `client/` - Código fonte da aplicação
✅ `README.md` - Documentação completa
✅ `.gitignore` - Arquivos a ignorar no Git
✅ `package.json` - Dependências do projeto

## Passo 1: Baixar o projeto do Replit

1. Clique nos 3 pontos (...) no explorador de arquivos do Replit
2. Selecione "Download as zip"
3. Extraia a pasta no seu computador

## Passo 2: Criar repositório no GitHub

1. Acesse github.com e faça login
2. Clique "New repository"
3. Nome sugerido: `ivox-scale-website`
4. Marque como público (para Netlify gratuito)
5. NÃO adicione README, .gitignore ou LICENSE
6. Clique "Create repository"

## Passo 3: Comandos no terminal

```bash
# Entre na pasta do projeto
cd caminho/para/a/pasta

# Inicialize git
git init

# Adicione arquivos
git add .

# Primeiro commit
git commit -m "Initial commit: Ivox Scale marketing website"

# Conecte ao GitHub (cole sua URL)
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

# Envie os arquivos
git push -u origin main
```

## Passo 4: Deploy no Netlify

1. Acesse netlify.com
2. Clique "New site from Git"  
3. Conecte GitHub e selecione o repositório
4. As configurações serão detectadas automaticamente:
   - Build command: `npx vite build --config build.netlify.js`
   - Publish directory: `dist`
5. Clique "Deploy site"

## Resultado

Seu site estará online em uma URL como: `https://nome-aleatorio.netlify.app`

Você pode personalizar o domínio nas configurações do Netlify.