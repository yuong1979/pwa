
const staticAssets = [
	'./styles.css',
	// '{% url "test1" %}',
]


self.addEventListener('install', async function(event){
	const cache = await caches.open('news-static'); //getting a handle on the cache
	cache.addAll(staticAssets) //caching all the static assets for later
	console.log('installed')
})


self.addEventListener('fetch', function(event){
	console.log('fetch event also not firing')

})

