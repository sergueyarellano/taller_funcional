/*
Project an array of videos into an array of {id,title} pairs using forEach(),
and then, using map.
*/

function getFilmPairs() {
	var newReleases = [
			{
				"id": 70111470,
				"title": "Torete",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "ToreteII",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id:432534, time:65876586 }]
			},
			{
				"id": 65432445,
				"title": "Perros callejeros",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Vaquilla is coming",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id:432534, time:65876586 }]
			}
		],
		videoAndTitlePairs = [];

		// code here

	return videoAndTitlePairs;
}

// console.log(getFilmPairs());

/*
Chain filter and map to collect the ids of videos that have a rating of 5.0
*/

function getFilmPairsBis() {
	var newReleases = [
			{
				"id": 70111470,
				"title": "Torete",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "ToreteII",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id:432534, time:65876586 }]
			},
			{
				"id": 65432445,
				"title": "Perros callejeros",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Vaquilla is coming",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id:432534, time:65876586 }]
			}
		],
		videoAndTitlePairs = [];

		// code here

	return videoAndTitlePairs;
}

// console.log(getFilmPairsBis());


/*
Reduce
Retrieve the sum, and then the largest rating
*/

function reduceMe() {
	var ratings = [2,3,1,4,5];

	return;
}

// console.log(reduceMe())

/*
Reduce 

Return an array of {id, total} pairs, where total is the score * ratio in each element
*/
function reduceMeBis () {
	var arr = [
		{
			id: 'foo',
			score: 3,
			ratio: 0.2
		},
		{
			id: 'bar',
			score: 6,
			ratio: 0.3
		},
		{
			id: 'cat',
			score: 2,
			ratio: 0.1
		},
		{
			id: 'chown',
			score: 8,
			ratio: 0.4
		},
		{
			id: 'lsof',
			score: 1,
			ratio: 0.5
		}
	];

	return ;
}

// console.log(reduceMeBis())