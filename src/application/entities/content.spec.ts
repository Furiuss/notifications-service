import { Content } from './content';

test('it should be able to create a notification content', () => {
  const content = new Content('voce recebeu uma solicitação de amizade');

  expect(content).toBeTruthy();
});
