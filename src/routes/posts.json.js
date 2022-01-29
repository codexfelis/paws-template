export async function get() {
	//  TODO make sure you have updated ↓ this if you change contentPath
	const imports = import.meta.glob('./blog/*.{md,svx}');
	let body = [];

	for (const path in imports) {
		body.push(
			imports[path]().then(({ metadata }) => {
				return {
					metadata,
					path
				};
			})
		);
	}

	const posts = await Promise.all(body);
	const sorted = posts.sort((a, b) => (a.metadata.publishDate < b.metadata.publishDate ? 1 : -1));
	return {
		body: JSON.stringify(sorted)
	};
}
