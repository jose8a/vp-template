const mdiPlantUml = require('markdown-it-plantuml');
const mdiTaskLists = require('markdown-it-task-lists');
const mdiMultiMdTable = require('markdown-it-multimd-table');
const mdiContainer = require('markdown-it-container');

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
      // includeLevel: [1, 2, 3, 4, 5]
      includeLevel: [1, 2, 3]
    },
    config: md => {
      md.use(require('markdown-it-plantuml'));
      md.use(require('markdown-it-task-lists'));
      md.use(require('markdown-it-multimd-table'));
      md.use(mdiContainer, 'groupme', groupmeOptions);
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Vuepress', link: 'https://v0.vuepress.vuejs.org/' },
      { text: 'Markdown-it', link: 'https://markdown-it.github.io/' },
      { text: 'MD Cheatsheet', link: 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet' },
    ],
    sidebarDepth: '1',
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
