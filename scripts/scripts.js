function LoadDataFromAPIs() {
    GetGithubUserData()
    .then(function whenOk(userData) {
        document.getElementById('sidebar-profilepic').src = userData.avatar_url;
    }).catch(function notOk(err) {
        document.getElementById('sidebar-profilepic').hidden = "true";
        console.log('GetGithubUserData Failed - ' + err);
    });

    SetRepoStarCounts();
    SetRepoDownloadCounts();
}

function SetRepoStarCounts() {
    for (var i = 1; i < 3; i++) {
        const repoId = "repoId" + i;
        const repoDetailsForksCount = "repo" + i + "-details-forkscount";
        const repoDetailsForks = "repo" + i + "-details-forks";
        const repoDetailsStarCount = "repo" + i + "-details-starcount";

        const repoName = document.getElementById(repoId).innerHTML;
        GetRepoData(repoName)
        .then(function whenOk(RepoData) {
            document.getElementById(repoDetailsStarCount).innerHTML = RepoData.stargazers_count;

            forksCount = RepoData.forks;
            if (forksCount != 0) {
                document.getElementById(repoDetailsForksCount).innerHTML = forksCount;
            } else {
                document.getElementById(repoDetailsForks).hidden;
            }
        }).catch(function notOk(err) {
            console.log("SetRepoStarCounts Failed-- Name:" + repoName + ", err: " + err);
        })
    }
}

function SetSidebarProfilePicture(url) {
    document.getElementById('sidebar-profilepic').src = url;
}

function SetRepoDownloadCounts() {
    const Http = new XMLHttpRequest();
    const url = "https://api-v2v3search-0.nuget.org/query?q=packageid:nzxtsharp";
    Http.open("GET", url);
    Http.send();

    Http.onloadend=(e)=> {
        const dlCount = JSON.parse(Http.responseText).data[0].totalDownloads;
        SetNugetDownloadCountTitle(dlCount);
        document.getElementById("repo1-details-downloadcount").innerHTML = kFormatter(dlCount) + " Downloads";
    }
}

function SetNugetDownloadCountTitle(downloadCount) {
    document.getElementById("repo1-details-downloadcount").title = downloadCount + " Total Downloads";
}

function SetFavicon() {
    faviconNumber = RandomInt(2);
    document.getElementById('favicon').href = "images/favicon-" + faviconNumber + ".png";
}

function RandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/*
Stolen from: 
https://stackoverflow.com/q/9461621/6091624
*/
function kFormatter(num) {
    return Math.abs(num) > 999 ? 
    Math.sign(num) * ((Math.abs(num)/1000).toFixed(1)) + 'k' : 
    Math.sign(num) * Math.abs(num);
}