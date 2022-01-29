import { getPosts } from '$lib/get-posts';
import { variables } from '$lib/variables';

export async function get() {
	const posts = await getPosts();
	const body = xml(posts);

	const headers = {
		'Cache-Control': 'max-age=0, s-maxage=3600',
		'Content-Type': 'application/xml'
	};
	return {
		headers,
		body
	};
}
const siteUrl = variables.siteUrl;
const xml = (
	posts
) => `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>${variables.projectName}</title>
    <link>${siteUrl}</link>
    <description>${variables.siteDescription}</description>
    ${posts
			.map(
				(post) =>
					`
        <item>
          <title>${post.title}</title>
          <description>${post.description}</description>
          <link>${siteUrl}/${post.layout}/${post.slug}/</link> 
          <guid isPermaLink="false">${siteUrl}/${variables.contentPath}/${post.slug}/</guid>
      <pubDate>${new Date(post.publishDate || post.lastUpdated).toLocaleDateString(
				'sv-SE'
			)}</pubDate>

        </item>
      `
			)
			.join('')}
  </channel>
</rss>`;
