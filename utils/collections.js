function abcWiki(collectionApi) {
	return collectionApi.getFilteredByTag('wiki').sort((a, b) => {
		const aKey = a.data.eleventyNavigation.key;
		const bKey = b.data.eleventyNavigation.key;
		if (aKey > bKey) return 1;
		if (aKey < bKey) return -1;
		return 0;
	});
}

function abcDm(collectionApi) {
	return collectionApi.getFilteredByTag('dm').sort((a, b) => {
		const aKey = a.data.title;
		const bKey = b.data.title;
		if (aKey > bKey) return 1;
		if (aKey < bKey) return -1;
		return 0;
	});
}


module.exports = {
	abcWiki,
	abcDm,
	//  tagList: function (collection) {
	//    let tagSet = new Set();
	//    collection.getAll().forEach(function (item) {
	//      if ("tags" in item.data) {
	//        let tags = item.data.tags;

	//        tags = tags.filter(function (item) {
	//          switch (item) {
	//            // this list should match the `filter` list in tags.njk
	//            case "all":
	//            case "nav":
	//            case "post":
	//            case "posts":
	//              return false;
	//          }

	//          return true;
	//        });

	//        for (const tag of tags) {
	//          tagSet.add(tag);
	//        }
	//      }
	//    });

	//    // returning an array in addCollection works in Eleventy 0.5.3
	//    return [...tagSet];
	//  }
}
