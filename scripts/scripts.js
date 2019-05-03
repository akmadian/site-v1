function LoadDataFromAPIs() {
    SetRepoStarCounts();
    SetRepoDownloadCounts();
}

function SetRepoStarCounts() {
    const repoName1 = document.getElementById("repoId1").innerHTML;
    const repoName2 = document.getElementById("repoId2").innerHTML;
    GetRepoStarCount(repoName1)
        .then(function whenOk(starCount) {
            console.log("Setting Star Count for Repo 1. Count = " + starCount);
            document.getElementById("repo1-details-starcount").innerHTML = starCount;
        }).catch(function notOk(err){
            console.log("Get Repo Star Count Failed - " + err);
        });
    GetRepoStarCount(repoName2)
        .then(function whenOk(starCount) {
            console.log("Setting Star Count for Repo 2. Count = " + starCount);
            document.getElementById("repo2-details-starcount").innerHTML = starCount;
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
        const dlCount = JSON.parse(Http.responseText).data[0].totalDownloads;
        console.log("Total NuGet Downloads - " + dlCount);
        SetNugetDownloadCountTitle(dlCount);
        document.getElementById("repo1-details-downloadcount").innerHTML = kFormatter(dlCount) + " Downloads";
    }
}

function SetNugetDownloadCountTitle(downloadCount) {
    document.getElementById("repo1-details-downloadcount").title = downloadCount + " Total Downloads";
}

function showsecretbutton() {
    document.getElementById('secret-button').style.visibility = "visible";
}

/*
Blatantly stolen from: 
https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
*/
function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}