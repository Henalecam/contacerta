# ContaCerta - Website

Website moderno e responsivo para escritório contábil com simulador interativo de diagnóstico.

## Características

- Design moderno e responsivo
- Simulador interativo de diagnóstico contábil
- Seções de autoridade com depoimentos e resultados
- Central de conteúdo com artigos otimizados para SEO
- Botão de WhatsApp para contato rápido
- Animações suaves com Framer Motion
- Interface intuitiva e focada em conversão

## Tecnologias Utilizadas

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- React Icons

## Pré-requisitos

- Node.js 18+
- npm 9+

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/contacerta.git
cd contacerta
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse o projeto em [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── HeroSection.tsx
│   ├── Simulator.tsx
│   ├── AuthoritySection.tsx
│   ├── ServicesSection.tsx
│   ├── ContentHub.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
└── public/
    ├── testimonials/
    └── clients/
```

## Personalização

- Cores: Edite o arquivo `tailwind.config.js` para alterar a paleta de cores
- Conteúdo: Atualize os textos e imagens nos respectivos componentes
- WhatsApp: Altere o número no componente `WhatsAppButton.tsx`

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
