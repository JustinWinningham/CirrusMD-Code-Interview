import LandingPage from '../pageobjects/landing.page'
import ReposTab from '../pageobjects/searchResults/repositoriesTab.page'
import RepoContainer from '../pageobjects/repo/repoContainer.page'
import IssuesTab from '../pageobjects/repo/issuesTab.page'
import Milestones from '../pageobjects/repo/milestones.page'

describe('Demo Spec', () => {
    beforeEach( async () => {
        await browser.url('https://github.com/')
    })

    it('Question2', async () => {
        await LandingPage.searchBar.waitForClickable({timeout:15000})
        await LandingPage.searchBar.click()
        await browser.keys('facebook/react')
        await browser.keys("\uE007")

        await ReposTab.getRepoByLink('facebook/react').click()
        await RepoContainer.issuesTabButton.click()
        
        await IssuesTab.milestonesButton.click()
        expect(await Milestones.mostRecentMilestoneLabel.getText()).toEqual('19.0.0')
    })
});
