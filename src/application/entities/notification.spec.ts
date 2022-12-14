import { Notification } from './notification';
import { Content } from './notification-content';

describe('Notification:', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Novo pedido de amizade!'),
      category: 'social',
      recipientId: 'exemplo-recipientId',
    });

    expect(notification).toBeTruthy();
  });
});
