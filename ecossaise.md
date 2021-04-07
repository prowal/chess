---
---

<link rel="stylesheet" href="lib/style2.css">
<script src="lib/pgnv/pgnv.js"></script>

# Ouverture écossaise
Les premiers coups sont donc 1.e4 e5 2.Cf3 Cc6 3.d4. La variante principale continue par 3. ... exd4 4.Cxd4 mais avant cela, on regarde quelques coups moins forts pour les Noirs :
## Variantes faibles pour les noirs
- Si 3. ... d6. Dans ce cas, prendre e5 et déroquer le roi Noir en échangeant les Dames (peut pas reprendre du cavalier car e5 reste en prise). Puis Fc4 pour attaquer f7. Pour la suite:
    - Sur Fe6, échanger les Fous pour doubler les pions, puis amener le Cavalier vers la case c4.
    - Sur f6, développer Fe3, Cc3, faire grand roque, et on a un avantage de développement. on voudrait ouvrir au centre en faisant f4 il faut donc mettre le cavalier en h4 puis g3 f4
- Si 3. ... f6 (coup rare et mauvais pour les Noirs), attaquer f7 en commançant par Fc4.
<div id="board1"></div>


## Variante principale 4. ... Cxd4 5.Dxd4
- Si 5. ... Cf6, pousser 6.e5 et le Cavalier doit retourner en g8 ! En effet, s'il va en h5, il suffit de pousser g4 et il est piégé. Les noirs peuvent aussi menacer la Dame avec c5, dans ce cas reculer en e3 et attaquer f7.
- Si 5. ... c5, reculer la Dame en d3 et attaquer le pion d Noir qui est arriéré.
- Si 5. ... d6 6.Cc3 Cf6 et jouer avec les roques opposés. Jouer ensuite f3, Fe3 (pour ne pas bloquer les pions), puis g4, h4, h5, etc.
- Si 5. ... Df6 6.e5 puis si la Dame part en b6, échanger pour doubler les pions et faire Ff4 pour détruire la structure de pions.

<script>
  const $ = document.querySelector.bind(document);

  PGNV.pgnView('board1',{ pgn: '1. e4 e5 2. Nf3 Nc6 3. d4 d6 (3... f6 4. Bc4) 4. dxe5 dxe5 5. Qxd8+ Kxd8 6. Bc4 f6 (6... Be6 7. Bxe6 fxe6 8. Be3) 7. Be3 Bd6 8. Nc3 a6 9. O-O-O *', pieceStyle: 'merida', locale:'fr', layout:'left', width: '1000px', boardSize: '300px'});
</script>