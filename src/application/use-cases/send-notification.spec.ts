import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notifications', () => {
  it('should be able to send notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      content: 'something about social category',
      category: 'social',
      recipientId: 'faosaeasfa-nosei-assa',
    });

    console.log(notifications);

    expect(notifications).toHaveLength(1);
  });
});
