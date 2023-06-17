## Searchbar component
Deze zoekbar dient voor het zoeken van games op onze site. Let er op dat deze versie nog niet met de database is verbonden. De lijst van games bevindt zich in de code van de zoekbar zelf. Deze lijst kan gewoon aangepast worden. De zoekbar werkt dan nog steeds als normaal. Voor de spellen zijn mock pagina's aangemaakt. Zie de folder 'games' onder de 'app' redirectory. De zoekbar kan in elke pagina worden gezet. Zet het volgende in je code:

```
{<Searchbar />}
```

Normaliter moet de searchbar dan werken. Als je toch een error krijgt dat de searchbar niet gevonden wordt, zet dan even het volgende stukje code helemaal bovenaan je code binnen je bestand:

```
import Searchbar from "./components/searchbar";
```

# Testing
Voor de searchbar zijn er ook een aantal Jest tests geschreven. Deze kunnen uitgevoerd worden door in de terminal het volgende te typen:

```
npm test searchbar.test.tsx
```

# Styling
Styling is conform Figma: https://www.figma.com/file/qgkSo36YCz5YhnpReO5XLF/Untitled?type=design&node-id=0-1&t=pVq8ScItqKCoWLUA-0

# Feedback
Als er nog steeds problemen ontstaan in de zoekbar, stuur mij (Bruce) even een bericht op Teams of mail even 2103932jagessar@zuyd.nl

## Downloading Node.js Packages

Use the following line the install the Node.js packages:

```bash
npm i
```

Use the following line to install React:
```bash
npm install react
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Testing with Jest

To run the tests for this project, you can use the following scripts:

```bash
npm test
# or
npm run test:ci
```

The `npm test` command runs the tests in watch mode, allowing you to re-run tests as you make changes. The npm `run test:ci` command runs the tests in continuous integration (CI) mode and generates a coverage report.

The tests are located in the `__tests__` directory at the root of the project.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.






