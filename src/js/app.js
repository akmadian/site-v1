import getRepoInfo from './GitHub-api-wrapper'

var image = document.getElementById('para');
new simpleParallax(image, {
    scale: 1.9
});

getRepoInfo('nzxtsharp').then(function(res){
    document.getElementById('nzxtsharp-stars').text = res.stars + ' Stars'
    document.getElementById('nzxtsharp-forks').text = res.forks + ' Forks'
})