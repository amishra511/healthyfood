import { HealtyfoodPage } from './app.po';

describe('healtyfood App', () => {
  let page: HealtyfoodPage;

  beforeEach(() => {
    page = new HealtyfoodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
