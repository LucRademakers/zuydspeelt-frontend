## Searchbar component
De zoekbar kan in elke pagina worden gezet. Zet het volgende in je code:

<div style={{ display: 'flex', justifyContent: 'center', position: 'absolute', top:'0', zIndex: 100 }}>
      {<Searchbar />}
</div>

Zorg er wel voor dat bovenstaande BINNEN je return() functie staat!

Normaliter moet de searchbar dan werken. Als je toch een error krijgt dat de searchbar niet gevonden wordt, zet dan even het volgende stukje code helemaal bovenaan je code binnen je page.tsx bestand:

import Searchbar from "./searchbar/page";

##Styling
Styling is conform Figma: https://www.figma.com/file/qgkSo36YCz5YhnpReO5XLF/Untitled?type=design&node-id=0-1&t=pVq8ScItqKCoWLUA-0