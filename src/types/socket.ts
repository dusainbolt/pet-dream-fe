import { Message } from './message';
import { Topic } from './pet';

export type SocketSlice = {
  isLoadingSendMessage?: boolean;
};

export type RemindData = {
  fullName: string;
  email: string;
};

export type SocketSendMessageDto = { message: string; topicId: number; remindData?: RemindData };
export type SocketTopicMessagesReceiveDto = { message: Message; topic: Topic };
