import { LoginView } from '../../src/components/loginView.jsx'

describe('login', () => {
  it('', () => {
    const view = LoginView();
    const loginForm = view.querySelector('.loginForm');
    loginForm.onSubmit();
    expect().toBeCalled();
  });
})