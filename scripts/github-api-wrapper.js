function GetRepoInfo(repoName) {
    return new Promise(function(resolve, reject){
        const Http = new XMLHttpRequest();
        const url = 'https://api.github.com/repos/akmadian/' + repoName;
        Http.open("GET", url);
        Http.send();
        
        Http.onloadend=(e)=> {
            const json = JSON.parse(Http.responseText).stargazers_count;
            resolve(json);
        }
    });
}