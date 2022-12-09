/**
 * This class holds selectors and related action methods for the search results repo tab
 */
class SearchResultsRepositoriesTab {
    
    getRepoByLink(linkText: string) {
        return $(`href=${linkText}`)
    }
};
export default new SearchResultsRepositoriesTab()