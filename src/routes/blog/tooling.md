---
layout: blog
title: 'Developer Tooling'
slug: 'tooling'
description: 'Little things to help make developing the site a bit easier'
tags: []
publishDate: '2021-09-12'
lastUpdated: '2021-09-17'
---

## Git hooks

There's two [git hooks](https://git-scm.com/docs/githooks) supplied, managed by [Husky](https://typicode.github.io/husky/#/).

One confirms that you really did want to push code to the `main` branch, just in case you forgot, since anything pushed to this branch will automatically deploy.

The other runs linters and formatters (make your code look pretty and check for stupid mistakes) and builds the code every time you commit. This means you keep the code clean and working at all times, and don't accidentally break the build without noticing.

## VSCode tooling

This tooling assumes you use [VSCode](https://code.visualstudio.com/), a common and freely available text editor.

### Recommended extensions

When you first `git clone` the project to your computer and open it in VSCode, there will be a popup offering to install recommended extensions. This will add the code formatters and syntax highlighting that will make touching any of the Svelte code easier. They are optional.

### Snippets

There's a custom snippet defined for quickly inserting the required frontmatter into a new blog post. Invoke it by going to your new file, opening the Command Palette (ctrl/cmd-shift-p), starting to type "insert snippet" and selecting the one called `fm`. Fill in the various gaps in the template by pressing tab.
