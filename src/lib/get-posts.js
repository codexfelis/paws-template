export async function getPosts() {
	const posts = Object.entries(import.meta.globEager('/src/routes/*/*.md'))
		// get post metadata
		.map(([, post]) => post.metadata)
		// sort by date
		.sort(sortPosts);
	return posts;
}
function sortPosts(a, b) {
	const aDate = a.publishDate || a.lastUpdated;
	const bDate = b.publishDate || b.lastUpdated;
	return aDate < bDate ? 1 : -1;
}
