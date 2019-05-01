function GetRepoInfo() {
    const Http = new XMLHttpRequest();
    const url = 'https://api.github.com/repos/akmadian/NZXTSharp';
    Http.open("GET", url);
    Http.send();
    
    Http.onloadend=(e)=> {
        console.log(JSON.parse(Http.responseText).stargazers_count);
    }
}