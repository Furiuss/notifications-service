import { SendNotification } from './send-notification';

describe('Send notifications', () => {
  it('should be able to send notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'something about social category',
      category: 'social',
      recipientId: 'faosaeasfa-nosei-assa',
    });

    expect(notification).toBeTruthy();
  });
});
