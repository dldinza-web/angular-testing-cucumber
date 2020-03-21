import { expect } from 'chai'
import { AppPage } from '../app.po'
import { Given, When, Then } from 'cucumber';

let page: AppPage

Given('I have an App', async () => {
  page = new AppPage()
});

When('I navigate to the Landing page', async () => {
  await page.navigateTo()
});

Then('show the title of the page', async () => {
  let title = await page.getPageTitle()

  expect(title).to.equal('AngularTestingCucumber');
});

Then('show a title on the page', async () => {
  let text = await (page.getTitleText() as Promise<string>)

  expect(text).to.equal('angular-testing-cucumber app is running!');
})
