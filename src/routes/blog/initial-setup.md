---
layout: blog
title: 'Initial Setup'
slug: 'initial-setup'
description: 'Things you need to change in the code to get things up and running for the first time'
tags: []
publishDate: '2021-09-17'
lastUpdated: '2021-09-17'
openGraphImage: 'OGExample.png'
---

## TL;DR

- Click "Use this template" in [GitHub](https://github.com/codexfelis/paws-template)
- [clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) that repo you just made
- fill in values in `src/lib/variables.js`
- delete the documentation, write some content of your own
- check for any remaining TODO comments
- [Go deploy the thing](/blog/deployment)!

## Getting started

Once you have clicked "Use this template" on [GitHub](https://github.com/codexfelis/paws-template). There's a few bits and pieces you need to set up to make the site yours. It is probably easiest to clone the repository to your local machine to do this, although it can be done via the GitHub UI (particularly if you go to `https://github.dev/YourName/YourRepo` to use the web editor).

## Running the dev server

This is optional, but useful if you intend to change any of the code rather than just content.

The first thing you need to do is make sure you have [NodeJS](https://nodejs.org/en/download/) and npm installed, with Node at least version 14.13 or 16.anything. Check this:

```sh
$ node --version
v16.9.1
```

Now you need to install the project dependencies by running `npm install` and waiting for a bit. This may look like a lot of dependencies, but they are all only used at development time.

Once this is complete, you can run the development server with `npm run dev`. This means you can look at the running site as you are working on it, at `http://localhost:3000/` in your browser. SvelteKit also provides hot reloading, so you see changes immediately without needing to refresh the page.

Note that if you make changes to some of the configuration files in the root of the repository, you will probably need to restart the dev server, but otherwise it should reload everything.

## Variables

There's a few key properties of your site that you need to fill in the file `src/lib/variables.js`

```js
export const variables = {
	// URL where live site is deployed, used in sitemap, RSS feed
	siteUrl: 'http://www.example.com',
	// Used in page titles, helps with SEO
	projectName: 'My Cool Project!',
	// Brief website description, used in description fields in RSS, HTML head. Helps with SEO
	siteDescription: 'My cool project is a project about stuff that does things.',
	// The twitter username for you/project/department
	twitter: 'codexfelis',
	// Whatever GitHub you want to link to in the footer
	github: 'https://github.com/codexfelis/paws-template',
	// URL segment for the content you update regularly
	// If you change this, you also need to change the file/folder names
	contentPath: 'blog'
};
```

Hopefully this is all self-explanatory - fill in things in the same format as the examples.
If you change `contentPath`, you need to rename `src/routes/blog` folder to whatever you chose, then do a global find-replace for `blog` to make sure all the text in the website (navbar etc), and all the references in the CMS (if you are using it) reflects your new name.

### I don't want to associate a Twitter account with this website

No problem, you can delete the `twitter` line from the above file, then do a global search for `variables.twitter` and delete the bits of HTML where that appears - the Twitter share button in the `BlogLayout` component, a link in the `Footer` component and the `twitter:site` meta tag in the `Seo` component.

There are other mentions of Twitter in the [SEO component](/blog/seo), but this is really [OpenGraph](https://ogp.me/) to make your link previews look good anywhere links to your website are shared.

## Add your pages

Obviously, you will want to replace the words from this template to not just be the documentation!
Don't worry, you can always see the documentation live at [paws-codexfelis-dev.netlify.app](https://paws.codexfelis.dev) and [the demo site repository](https://github.com/codexfelis/paws-demo)

The content (almost) everywhere is written in a [special kind of markdown](https://mdsvex.pngwn.io/) that allows for including Svelte components and snippets of javascript, and remember that HTML is valid markdown if you want to include something special.
The existing `index.md` is a good example of the kinds of things you can do.

If you are using the [CMS](/blog/cms), you can edit blog posts in the web-based editor, but you can also write and edit locally on your own computer.
Other pages (about, the homepage, anything you add) aren't connected to the CMS (yet), so you will need to edit these locally or change your CMS config to include them.

Sveltekit uses "file-based routing", which basically means that the path to a file under the `src/routes` directory is the same as the URL to that file, so for example `src/routes/about.md` maps to `https://www.example.com/about` (without the file extension).
This makes it pretty easy to add a new top-level page, although don't forget to add a link to that page in the Navbar component `src/lib/Navbar.svelte` `navItems` data structure so you can get to it.

## TODO comments

There's a few additional bits of content that you need to update, which you can find with a global search (ctrl-shift-F) for "todo".
This is mostly the stuff that goes into the [Seo component](/blog/seo), which determines the title and description of pages for SEO juice and better link previews on Twitter.
You can see an example in the title (in your browser tab bar) of the homepage of this site.

## Next steps

Maybe you want to go on to add your [logo and other image assets](/blog/assets), or [change the fonts and colours](/blog/theming), [deploy your fancy new site](/blog/deployment) or [configure the CMS](/blog/cms).
