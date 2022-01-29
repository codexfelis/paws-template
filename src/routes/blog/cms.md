---
layout: blog
title: 'CMS'
slug: 'cms'
description: 'What is a CMS and do I need one?'
tags: []
publishDate: '2021-09-14'
lastUpdated: '2021-09-14'
---

## What even is a CMS?

CMS stands for content management system, and in this case refers to a nice web interface for you or collaborators to draft, edit and publish blog posts without needing to check out the website repository, write markdown in a text file then do some git shenanigans.
We use [Netlify CMS](https://www.netlifycms.org/) (distinct from Netlify the hosting platform) because it is self-contained in your site rather than being a separate service, and plays nicely with markdown content in git.
It also has [really great documentation](https://www.netlifycms.org/docs/intro/) and is very configurable and extensible if you need to tweak how it behaves.

Have a play with the [demo site for Netlify CMS](https://cms-demo.netlify.com/) (just click the login button, no credentials required) to see what using the CMS can feel like and what features there are.

It is entirely possible to use Netlify CMS without using Netlify for hosting, but they integrate very well, particularly when you use deploy previews to see what a draft post will look like once live, and their Identity service, so these docs will only cover that combination.

## I don't need that

Great, that makes your deployment story a bit simpler. Delete everything under `/static/admin`, and `/static/CMSLogo.png` and ignore anywhere else in the docs that mentions the CMS.

## Set up Netlify Identity

From your site's page in the netlify admin console, click the "Identity" tab, then "Enable Identity", then go to the new "Settings and Usage".
Scroll to the bottom and click "Enable Git Gateway", this might ask for GitHub permissions again.
Add GitHub as an external provider, selecting "Use default configuration". This allows you to log into the CMS with your GitHub account rather than creating a special user account.

Go to `www.YOURURL.com/admin` and sign up with your GitHub account, and get anyone else who will need access to do the same (up to 5 people total to stay on Netlify's free plan).

Now go back to the Identity settings and usage page, scroll to the Registration section and set Registration preferences to invite only.

If you need to add another person in the future, toggling open signups, getting the new person to add themselves and toggling back to invite-only is the simplest way.
If you need to remove a person, go to the "Identity" tab where you will see a list of users, click on the person you want to remove, scroll down then click "Delete user".

If you are worried about any of these things, Netlify has [extensive documentation](https://docs.netlify.com/visitor-access/identity/) on how it all works.

## Tweak the config

In case you didn't do this when you did the initial site setup, there's a few values in `static/admin/config.yml` that need to be updated to match your site.
Specifically, replace all the instances of `www.example.com` with your site URL (the same that went in `src/lib/variables.js`).

Note that the things defined here in `fields` should match the frontmatter fields of all the markdown blog posts.

There's tons of other configuration options you can change here to suit your needs, see the [Netlify CMS documentation](https://www.netlifycms.org/docs/configuration-options/) for details.

## Use the CMS

Once your site is [deployed](/blog/deployment), you can always access the CMS at `yourURL.com/admin`.
