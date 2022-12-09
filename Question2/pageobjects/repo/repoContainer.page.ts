/**
 * This class holds selectors and related action methods for the repo container, mainly the left bar which is constant between tabs
 */
class RepositoryContainer {
    
    get issuesTabButton() {
        return $('#issues-tab')
    }
};
export default new RepositoryContainer()