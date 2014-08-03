#What is DailyPlanet?

**DailyPlanet.js** is a POC: a little static **CMS** written with:

- **ECMAScript 6** (see [https://github.com/google/traceur-compiler](https://github.com/google/traceur-compiler))
- **Polymer**
- Showdown
- Highlight
- Font Awesome
- Achilles (#ES6 MV*) [https://github.com/k33g/achilles](https://github.com/k33g/achilles)

##The (very simple) operating principle

**DailyPlanet.js** is a set of Polymer WebComponents whose role is to display content:

- `dp-title` (several per site instance)
- `dp-content` (several per site instance)
- `dp-page` (one per site instance)
- `dp-pages-router` (one per site instance), display toc, subscribe to hash changes, send and trigger display of content to `dp-page`

You can use your own html code and own css files, just put DailyPlanet components as you want:

    <div class="wrapper">
      <header>
        <dp-title
          source="data/header.md"
          label="DailyPlanet"
          sublabel="A little static CMS with #ES6">
        </dp-title>
        <dp-pages-router title="Table Of Contents">
        </dp-pages-router>
      </header>
    
      <section>
        <dp-page source="data/intro.md"></dp-page>
        <dp-content location="backlog"></dp-content>
      </section>
    
      <footer>
        <dp-content source="data/footer.md"></dp-content>
      </footer>
    </div>

More about this: [details about DailyPlanet components](#pages/details)

###Contents

Contents is persisted in **markdown** files

##Achilles

If you want to know more about it, read this: [Let's talk about Achilles!](#pages/achilles)



