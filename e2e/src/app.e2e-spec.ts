import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should have the title', () => {
    let pageTitle = page.getPageTitle()

    expect(pageTitle).toEqual('AngularTestingCucumber')
  })

  it('should display welcome message', () => {
    let titleScreen =  page.getTitleText()
    expect(titleScreen).toEqual('angular-testing-cucumber app is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
