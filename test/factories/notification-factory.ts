import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';
import { Content } from '@application/entities/notification-content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'factory',
    content: new Content('Content Factory'),
    recipientId: 'recipient-1',
    ...override,
  });
}
