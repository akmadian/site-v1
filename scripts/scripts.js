function LoadDataFromAPIs() {
    SetRepoStarCounts();
    SetRepoDownloadCounts();
}

function SetRepoStarCounts() {
    const repoName1 = document.getElementById("repoId1").innerHTML;
    const repoName2 = document.getElementById("repoId2").innerHTML;
    GetRepoInfo(repoName1)
        .then(function whenOk(response) {
            console.log("Setting Star Count for Repo 1. Count = "+response);
            document.getElementById("repo1-details-starcount").innerHTML = response;
        }).catch(function notOk(err){
            console.log("Get Repo Star Count Failed - " + err);
        });
    GetRepoInfo(repoName2)
        .then(function whenOk(response) {
            console.log("Setting Star Count for Repo 2. Count = "+response);
            document.getElementById("repo2-details-starcount").innerHTML = response;
        }).catch(function notOk(err){
            console.log("Get Repo Star Count Failed - " + err);
        });
}

function SetRepoDownloadCounts() {
    const Http = new XMLHttpRequest();
    const url = "https://api-v2v3search-0.nuget.org/query?q=packageid:nzxtsharp";
    Http.open("GET", url);
    Http.send();

    Http.onloadend=(e)=> {
        const json = JSON.parse(Http.responseText).data[0].totalDownloads;
        console.log("Total NuGet Downloads - " + json);
        document.getElementById("repo1-details-downloadcount").innerHTML = kFormatter(json) + ' Downloads';
    }
}

function ExpandAllMenus() {
    document.getElementById('details-education').open = "true";
    document.getElementById('details-projects').open = "true";
    document.getElementById('details-experience').open = "true";
    document.getElementById('details-skills').open = "true";
}

function CollapseAllMenus() {
    document.getElementById('details-education').open = "False";
    document.getElementById('details-projects').open = "False";
    document.getElementById('details-experience').open = "False";
    document.getElementById('details-skills').open = "False";
}

/*
Blatantly stolen from: 
https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
*/
function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}