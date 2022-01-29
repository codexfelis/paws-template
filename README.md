# Paws

> Lightweight and simple static site template for researchers in the Digital Humanities.

Built and supported by [Codex Felis](https://www.codexfelis.dev)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/D1D35CFF1)

Paws is a static site built on [SvelteKit](https://kit.svelte.dev/), using [Markdown](https://www.markdownguide.org/) for blog content, optionally with [Netlify CMS](https://www.netlifycms.org/). [Developer tooling](/blog/tooling) to help with editing the
template in [VSCode](https://code.visualstudio.com/) is provided.

"Static site" means that the website is made up of pre-built HTML, CSS and a tiny bit of JavaScript. The web pages load the same way every time, unlike dynamic websites, which load differently based on things such as the user's location, the time of day, or user actions. A static website can be served for free or very low cost, and provides a smooth and fast experience for users of the website. There's no content database to make things slow, or pose security issues as in for example a Wordpress site.

## Getting started

[Use this template](https://github.com/codexfelis/paws-template) in GitHub, or read the [deployed documentation](https://paws.codexfelis.dev). This is also a demo site, with source available in the [paws-demo repository](https://github.com/codexfelis/paws-demo).

Get up and running with this site really fast! For an [opinionated
quickstart](https://paws.codexfelis.dev/blog/initial-setup), you need to have

- clicked "use this template" in [GitHub](https://github.com/codexfelis/paws-template), so you have your own copy of
  this repository, and cloned it to your own computer
- set up a free account on Netlify ready for [deployment](https://paws.codexfelis.dev/blog/deployment) (other static site hosting options
  are fine if you know how)
- thought about whether you are happy writing blog content in files in
  GitHub, or prefer to use a [CMS](https://paws.codexfelis.dev/blog/cms) for web-based writing.
- thought about whether this template has the right site sections
  (home/blog/about) for you, or if you need extra pages

Head to the [deployed documentation](https://paws.codexfelis.dev/blog/initial-setup) for the rest of the setup instructions.

While this template is still under development, these docs assume that you:

- are vaguely familiar with basic git commands (clone, add, commit, push) and GitHub
- know how to edit HTML/JavaScript files on your computer (even if you don't fully
  understand what they mean)
- are able to set up a working NodeJS environment on your computer.

More comprehensive beginner documentation is coming soon, and if you get stuck feel free to [contact
us](mailto:hi@codexfelis.dev) for help or [raise an issue in GitHub](https://github.com/codexfelis/paws-template/issues).

## Local development

Paws needs a local NodeJS (>=14.13) environment. Get started with

```sh
# install the required dependencies
npm install

# run the developemnt server to preview changes in your browser
npm run dev
```
