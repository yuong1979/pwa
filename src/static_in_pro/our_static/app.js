




	const api_key = "21333d3cc9404cfa94177941c1a238f2"
	const main = document.querySelector('main')
	const sourceSelector = document.querySelector('#sourceSelector')
	const defaultSource = 'the-washington-post'

	window.addEventListener('load', async function(e){
		updateNews();
		await updateSources();
		sourceSelector.value = defaultSource;

		sourceSelector.addEventListener('change', function(e){
			updateNews(e.target.value)
		})


		if ('serviceWorker' in navigator){
				try {


					navigator.serviceWorker.register("{% static 'sw.js' %}")

					

					console.log('sw registered')
				} catch (error) {
					console.log('sw reg failed')
				}

			}
	})

	console.log(api_key)


	async function updateSources(){
		const res = await fetch('http://newsapi.org/v1/sources')
		const json = await res.json();
		sourceSelector.innerHTML = json.sources.map(src => `<option value="${src.id}">${src.name}</option>`).join('\n')
	}



	async function updateNews(source = defaultSource){
		var res = await fetch('https://newsapi.org/v2/top-headlines?' +
          'sources=' + source + '&apiKey=' + api_key);

		const json = await res.json();
		main.innerHTML = json.articles.map(createArticle).join('\n')
	}



	function createArticle(article){
		return `
		<div class="article">
			<a href="${article.url}"
			<h2>"${article.title}"></h2>
			<img src="${article.urlToImage}">
			<p>${article.urlToImage}</p>
			</a>
		</div>
		`;
	}





