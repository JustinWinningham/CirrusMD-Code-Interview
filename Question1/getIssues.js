const APICalls = require('./apiCalls');
const STATICS = require('./statics');

(async () => {
    const response = await APICalls.getNumPRsFromRepo(STATICS.reactRepoPath, 'status=open,per_page=100')
    console.log(response)
})();
