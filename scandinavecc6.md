---
---

<link rel="stylesheet" href="lib/style2.css">
<script src="lib/pgnv/pgnv.js"></script>

# Ouverture scandinave Cc6
## Variantes faibles pour les noirs
- 3 ... d6. Dans ce cas, prendre e5 et déroquer le roi Noir en échangeant les Dames (peut pas reprendre du cavalier car e5 reste en prise). Puis Fc4 pour attaquer f7. Pour la suite:
    - Sur Fe6, échanger les Fous pour doubler les pions, puis amener le Cavalier vers la case c4.
    - Sur f6, développer Fe3, Cc3, faire grand roque, et on a un avantage de développement. on voudrait ouvrir au centre en faisant f4 il faut donc mettre le cavalier en h4 puis g3 f4
- 3 ... f6 (coup rare et mauvais pour les Noirs), attaquer f7 en commançant par Fc4.
<div id="board"></div>

<div id="home">ugh</div>


## Variante principale



<script>
  const $ = document.querySelector.bind(document);

  PGNV.pgnView('board',{ pgn: '1. e4 e5 2. Nf3 Nc6 3. d4 d6 (3... f6 4. Bc4) 4. dxe5 dxe5 5. Qxd8+ Kxd8 6. Bc4 f6 (6... Be6 7. Bxe6 fxe6 8. Be3) 7. Be3 Bd6 8. Nc3 a6 9. O-O-O *', pieceStyle: 'merida', locale:'fr', layout:'left', width: '1000px', boardSize: '300px'});
</script>