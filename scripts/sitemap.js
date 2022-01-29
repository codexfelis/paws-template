import fs from 'fs';
import fg from 'fast-glob';
import { create } from 'xmlbuilder2';
import { variables } from '../src/lib/variables.js';

const getUrl = (url) => {
	const trimmed = url.slice(6).replace('index.html', '');
	return `${variables.siteUrl}/${trimmed}`;
};

const getLastUpdated = (filepath) => {
	const stats = fs.statSync(filepath);
	return stats.mtime.toLocaleDateString('sv-SE');
};

async function createSitemap() {
	const sitemap = create({ version: '1.0' }).ele('urlset', {
		xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9'
	});

	const pages = await fg(['build/**/*.html']);
	pages.forEach((page) => {
		const url = sitemap.ele('url');
		url.ele('loc').txt(getUrl(page));
		url.ele('lastmod').txt(getLastUpdated(page));
	});

	const xml = sitemap.end({ prettyPrint: true });

	fs.writeFileSync('build/sitemap.xml', xml);
}

createSitemap();
