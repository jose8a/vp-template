[[toc]]

<!-- ============================================================ -->

# Vuepress Template

This is a Quickstart Documentation template based on Vuepress.


### Vuepress features
  * [Vuepress Markdow Extensions](https://v0.vuepress.vuejs.org/guide/markdown.html#front-matter)
  * markdown parsing using Markdown-it
  * ..tbd


### Getting started with this Documentation Starter

```
  git clone https://github.com/jose8a/vp-template.git
  cd vp-template
  yarn install
  yarn docs:dev

```

**Open browser to `http://localhost:3456` (change the localhost PORT if you changed it in config.js)**



### To generate static files for deployment/production

```
  yarn docs:build
```

** Static files will be generated in the `docs/.vuepress/dist` folder


---
### Markdown-It Installed Plugins

Vuepress utilizes [Markdown-it]() as the Markdown parser and includes the following plugins to augment it's capabilities:


##### Table of Contents
  * [Table of Contents NPM page](https://www.npmjs.com/package/markdown-it-table-of-contents)

A simple, customizable table of contents.


##### PlantUML
  * [PlantUML NPM page](https://www.npmjs.com/package/markdown-it-plantuml)
  * [PlantUML Website](http://plantuml.com/)

A powerful extension to add many different types of diagrams using a simple DSL language inside of your markdown.


##### Task Lists
  * [Task Lists](https://www.npmjs.com/package/markdown-it-task-lists)

Adds capability for Github-style task lists.


##### MultiMd Tables
  * [MultiMd Tables](https://www.npmjs.com/package/markdown-it-multimd-table)

A powerful parser for data tables in markdown.


##### Markdown-it Container
  * [Markdown-it Container](https://github.com/markdown-it/markdown-it-container)

This plugin allows for the creation of custom containers/tags around groups of Markdown content.  It utilizes the [`fenced divs` feature similar to Pandoc's `fenced_divs`](https://pandoc.org/MANUAL.html#divs-and-spans). In the default configuration, a `groupme` custom container was added (see the project `config.js`).


---
### Markdown/Documents File Structure

Markdown Documents are located in the 'docs' folder. Linking between documents is described in the Vuepress documentation [here](http://TODO).


---
### Configuration

##### Config.js

Edit this file to change the starter kit defaults, or add extra plugins and functionality

**Configure Markdown-It and all of the markdown-it plugins here**
  * `port` dev defaults to `3456`
  * adds a `groupme` custom container
  * sets up the table of contents to include from level-1 to level-5


::: groupme Markdown-configs
``` js
  const mdiPlantUml = require('markdown-it-plantuml');
  const mdiTaskLists = require('markdown-it-task-lists');
  const mdiMultiMdTable = require('markdown-it-multimd-table');
  const mdiContainer = require('markdown-it-container');

  // setup for the custom 'groupme' markdown container
  const groupmeOptions = {
    validate: function(params) {
      return params.trim().match(/^groupme\s+(.*)$/);
    },

    render: function (tokens, idx) {
      const mdi = require('markdown-it')();
      var m = tokens[idx].info.trim().match(/^groupme\s+(.*)$/);

      if (tokens[idx].nesting === 1) {
        // opening tag
        return `
          <details>
            <summary> ${mdi.utils.escapeHtml(m[1])} </summary>
        `;
      } else {
        // closing tag
        return '</details>\n';
      }
    }
  };


  module.exports = {
    port: 3456,
    markdown: {
      toc: {
        includeLevel: [1, 2, 3, 4, 5]
      },
      config: md => {
        md.use(require('markdown-it-plantuml'));
        md.use(require('markdown-it-task-lists'));
        md.use(require('markdown-it-multimd-table'));
        md.use(mdiContainer, 'groupme', groupmeOptions);
      }
    },

```
:::


**Navbar configuration**
  * Add links to add to navbar on all pages.
  * other customization options can be found in the [Vuepress documentation](https://TODO)

::: groupme Navbar-configs
```js
  module.exports = {
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Vuepress', link: 'https://v0.vuepress.vuejs.org/' },
        { text: 'Markdown-it', link: 'https://markdown-it.github.io/' },
        { text: 'MD Cheatsheet', link: 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet' },
      ],
    }
  };
```
:::


**Sidebar configuration**
  * Add groups of links to add to navbar on all pages.
  * other customization options can be found in the [Vuepress documentation](https://TODO)

::: groupme Sidebar-configs
```js
  module.exports = {
    themeConfig: {
      sidebarDepth: '2',
      sidebar: [
        {
          title: 'Examples',
          children: [
            ['/', 'Home'],
            ['/tasks', 'Example Tasks'],
            ['/examples', 'Misc Examples'],
            ['/diagrams', 'Example Diagrams'],
          ]
        },
      ]
    }
  };
```
:::


**Color tokens Overrides**
  * Add your custom colors into the `docs/.vuepress/override.styl` page
  * for more, look in the [Vuepress documentation](https://TODO)


**Other Style Overrides**
  * Add your custom colors into the `docs/.vuepress/style.styl` page
  * for more, look in the [Vuepress documentation](https://TODO)

Adds modifications to the location of the TOC, in addition to some of it's default styling.

