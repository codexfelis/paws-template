import readingTime from 'remark-reading-time';
import slugPlugin from 'rehype-slug';
import rehypeExternalLinks from 'rehype-external-links';

export const mdsvexConfig = {
	extensions: ['.md'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [readingTime()],
	rehypePlugins: [slugPlugin, rehypeExternalLinks],
	layout: {
		blog: './src/lib/BlogLayout.svelte'
	}
};
