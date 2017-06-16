import { Testproject1Page } from './app.po';

describe('testproject1 App', () => {
  let page: Testproject1Page;

  beforeEach(() => {
    page = new Testproject1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
