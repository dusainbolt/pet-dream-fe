import { PayloadName } from '@redux/reducer';
import { AppDialog, AppDrawer } from '@type/layout';

export type OpenDialogAction = Record<PayloadName, AppDialog>;
export type OpenDrawerAction = Record<PayloadName, AppDrawer>;

// export type ShowChatListAction = Record<PayloadName, boolean>;
