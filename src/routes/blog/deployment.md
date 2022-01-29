---
layout: blog
title: 'Deployment'
slug: 'deployment'
description: 'How do I make this site live on the Internet?'
tags: []
publishDate: '2021-09-13'
lastUpdated: '2021-09-13'
---

This site is static, and can be deployed basically anywhere (but this can be a bit trickier if using the CMS).
For these docs, we'll walk through setting up on [Netlify](https://www.netlify.com/), because this is fairly straightforward, and [free](https://www.netlify.com/pricing/) unless you suddenly get millions of site visitors.
[GitHub pages](https://pages.github.com/), [Gitlab pages](https://docs.gitlab.com/ee/user/project/pages/), or the Raspberry Pi in your cubpoard running a webserver would also work fine if you know how to set them up, you just need to serve the contents of the `build` directory after you have run `npm run build`.

## Netlify initial setup

- Sign up to Netlify and create a new team, then on the team overview page, click the "New site from Git" button.
- Connect to your git provider - wherever your website repository is hosted (probably GitHub). Netlify will ask for some permissions, so it can see the repository and get the code.
- Choose the repository where the website is, and accept all the site settings (these are set up in the `netlify.toml` file in the root of this repository).
- Click "Deploy site"! YAY! This will think for a little while, then you should see a little preview of your site at the top of the page, which you can click on to go to the live site.

## Add a domain name

Click "Domain settings" for your site, or go to "Site settings > Domain management".
If you own a domain name you want to use for this project, click the "Add custom domain" button and read
[Netlify's docs about custom domains](https://docs.netlify.com/domains-https/custom-domains/) for how this works in your particular case.

If you want to use a free domain name (ending in `.netlify.app`), click the "options" button next to the auto-generated domain name, and choose a more descriptive URL.

## Updating the site

Every time you want to change content outside of the CMS, you just need to `git push` (or make a pull request and merge) to the `main` branch and the site will rebuild and re-deploy itself within a couple of minutes.

## Next steps

Maybe you want to go on to add your [logo and other image assets](/blog/assets), or [change the fonts and colours](/blog/theming) or [configure the CMS](/blog/cms).
