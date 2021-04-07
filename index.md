<link rel="stylesheet" href="lib/style2.css">
<script src="lib/pgnv/pgnv.js"></script>

## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/prowal/chess/edit/gh-pages/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

## Variantes faibles pour les noirs
- 3. ... d6. Dans ce cas, prendre e5, tout échanger et déroquer le roi Noir en échangeant les Dames. Puis Fc4 pour attaquer f7. Pour la suite:
    - Sur Fe6, échanger les Fous pour doubler les pions, puis amener le Cavalier vers la case c4.
    - Sur f6, développer Fe3, Cc3, faire grand roque, et les Blancs sont bien.
- 3. ... f6 (coup rare et mauvais pour les Noirs), attaquer f7 en commançant par Fc4.
<div id="board"></div>

<div id="home">ugh</div>


## Variante principale

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/prowal/chess/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.


<script>
  const $ = document.querySelector.bind(document);
  console.log("wesh");
  const a = $("#home");
  a.innerHTML = "pouet";

  PGNV.pgnView('board',{ pgn: '1. e4 e5 2. Nf3 Nc6 3. Bb5', pieceStyle: 'merida' });
</script>