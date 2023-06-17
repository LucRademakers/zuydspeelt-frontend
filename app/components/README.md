## Searchbar component
Deze zoekbar dient voor het zoeken van games op onze site. Let er op dat deze versie nog niet met de database is verbonden. De lijst van games bevindt zich in de code van de zoekbar zelf. Deze lijst kan gewoon aangepast worden. De zoekbar werkt dan nog steeds als normaal. Voor de spellen zijn mock pagina's aangemaakt. Zie de folder 'games' onder de 'app' redirectory. De zoekbar kan in elke pagina worden gezet. Zet het volgende in je code:

```
{<Searchbar />}
```

Normaliter moet de searchbar dan werken. Als je toch een error krijgt dat de searchbar niet gevonden wordt, zet dan even het volgende stukje code helemaal bovenaan je code binnen je bestand:

```
import Searchbar from "./components/searchbar";
```

## Testing
Voor de searchbar zijn er ook een aantal Jest tests geschreven. Deze kunnen uitgevoerd worden door in de terminal het volgende te typen:

```
npm test searchbar.test.tsx
```

## Styling
Styling is conform Figma: https://www.figma.com/file/qgkSo36YCz5YhnpReO5XLF/Untitled?type=design&node-id=0-1&t=pVq8ScItqKCoWLUA-0

## Feedback
Als er nog steeds problemen ontstaan in de zoekbar, stuur mij (Bruce) even een bericht op Teams of mail even 2103932jagessar@zuyd.nl