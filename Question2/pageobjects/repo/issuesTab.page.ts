/**
 * This class holds selectors and related action methods for the repo level issues tab
 */
class IssuesTabPage {
    
    // TODO - make less fragile
    get milestonesButton() {
        return $(`#repo-content-turbo-frame > div > div > div > div > nav > a:nth-child(2)`)
    }
};
export default new IssuesTabPage()