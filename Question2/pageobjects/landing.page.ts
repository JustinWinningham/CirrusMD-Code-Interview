/**
 * This class holds selectors and related action methods for the repo page container (static between tabs)
 */
class LandingPage {
    
    get searchBar() {
        return $('#nav-search-input')
    }

    // **************************************************************
    // *** Getter methods above this point, methods and actions below
    // **************************************************************
};
export default new LandingPage()