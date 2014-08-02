#How to?

Best way: go to [https://github.com/k33g/dailyplanet](https://github.com/k33g/dailyplanet) and read the code.

##Use web component `dp-content` with path to file

Save your markdown file to `/data` directory and add a component in your html page like that:

    <dp-content source="data/footer.md"></dp-content>

##Use web component `dp-content` with `location` attribute

Save your markdown file to `/data` directory and reference to this file in `contents.json` file:

    [
      {
        "_id":"intro", 
        "source":"data/intro.md", 
        "location":"intro"
      },
      {
        "_id":"details", 
        "source":"data/details.md", 
        "location":"details"
      }
    ]

Then, add a component in your html page like that:

    <dp-content location="intro"></dp-content>

##Use web component `dp-title`

Add a component in your html page like that:

    <dp-title 
        source="data/header.md" 
        label="DailyPlanet" 
        sublabel="A little static CMS with #ES6">
    </dp-title>

*Remark: `source` attribute isn't mandatory. You can use it to add content under the title.*

##Use web component `dp-pages-router`

Add a component in your html page like that:

    <dp-pages-router></dp-pages-router>

Then define pages in `data/pages.json`:

    [
      {
        "_id":"intro", 
        "label":"What is DailyPlanet?", 
        "url":"pages/intro", 
        "source":"data/intro.md"
      },
      {
        "_id":"details", 
        "label":"How To?", 
        "url":"pages/details", 
        "source":"data/details.md"
      }
    ]

`dp-pages-router` component will create a toc:

    <ul>
      <li><a href="#pages/intro">What is DailyPlanet?</a></li>
      <li><a href="#pages/details">How To?</a></li>
    </ul>

and "fire" a `core-signal`:

    this.asyncFire('core-signal', {
        name: "pageclicked", 
        data: pageToDisplay
    });
    /*pageToDisplay is a Page Model*/

and `dp-page` component is notified an then load and display the content page

    pageclickedSignal (e, pageToDisplay, sender) {
        this.loadContent(pageToDisplay.source);
    }

