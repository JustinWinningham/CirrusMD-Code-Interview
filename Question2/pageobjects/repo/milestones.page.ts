/**
 * This class holds selectors and related action methods for the milestones page
 */
class RepoMilestonesPage {
    
    // Will default to first instance (top most) on page
    get mostRecentMilestoneLabel() {
        return $('.milestone-title-link > a')
    }
};
export default new RepoMilestonesPage()