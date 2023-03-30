export type BreadcrumbsType = {
  href?: string;
  text?: string;
};

export type AppDialog = {
  open?: boolean;
  title?: string;
  description?: string;
  content?: any;
  callbackOk?: any;
  label?: string;
  require?: boolean;
};

export type AppDrawer = {
  open?: boolean;
  title?: string;
  // description?: string;
  width?: number;
  content?: any;
  anchor?: 'left' | 'top' | 'right' | 'bottom';
  // callbackOk?: any;
  // label?: string;
  // require?: boolean;
};

export type LayoutSlice = {
  dialog?: AppDialog;
  drawer?: AppDrawer;
  isShowChatListMobile?: boolean;
};
