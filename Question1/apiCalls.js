const STATICS = require('./statics');

class APICalls {

    /**
     * Gets number of PRs filtered by desired parameters from a given github repo. May make multiple requests per call.
     * @param {String} repoPath Repo path, see statics.js for examples
     * @param {String} tagsList List of tags to filter the results
     * @returns {Number} number of open pull request keys found in a given repo
     */
    async getNumPRsFromRepo(repoPath, tagsList) {
        let page = 1
        let cont = true
        // This will hold the number of pull request keys found in our results
        let ourBody = 0
        while(cont) {
            let JSONResp = await this.metaGetGithubIssues(repoPath, tagsList, page)
            page++
            console.log(JSONResp)
            // We want to get the next page if the most recent request returned more than 0 responses
            if(JSONResp.length > 0) {
                console.log(JSONResp.length)
                // Faster than searching 1 by 1, we just filter for all array indicies that are not undefined
                let numOpenPRsThisPage = JSONResp.filter(issu => issu.pull_request !== undefined)
                // add the total to our running total (page independent)
                ourBody += numOpenPRsThisPage
            } else {
                cont = false
            }
        }
        // return the total number of results to the requestor
        return ourBody
    }

    /**
     * Calls the issues endpoint with given query parameters and repo
     * @param {String} repoPath 
     * @param {String} tagsList 
     * @param {Number} page 
     * @returns 
     */
    async metaGetGithubIssues(repoPath, tagsList, page) {
        let hitUrl = `${STATICS.gitHubApiUrl}/repos/${repoPath}/issues?${tagsList},page=${page}`
        console.log(`hitting endpoint:`)
        console.log(hitUrl)
        let resp = await fetch(hitUrl, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept' : `application/vnd.github+json`,
                'Authorization' : `Bearer ${STATICS.gitHubKey}`,
                'X-GitHub-Api-Version' : `${STATICS.gitHubAPIVersion}`
            }
        })
        let JSONResp = await resp.json()
        return JSONResp
    }
};
module.exports = new APICalls()