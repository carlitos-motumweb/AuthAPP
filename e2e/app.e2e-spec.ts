import { LoginAuth0Page } from './app.po';

describe('login-auth0 App', () => {
  let page: LoginAuth0Page;

  beforeEach(() => {
    page = new LoginAuth0Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
