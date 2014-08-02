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