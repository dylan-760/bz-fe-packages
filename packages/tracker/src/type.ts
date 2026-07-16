export type BasicInfo = {
  type: string;
  event_id: string;
  deviceId: string;
  distinct_id: string;
  anonymous_id: string;
  time: number;
  timezone_offset: number;
  user_time: string;
  url: string;
  url_host: string;
  url_path: string;
  title: string;
  user_agent: string;
  theme: string;
  lang: string;
  browser_lang: string;
  os_lang: string;
  platform: 'h5' | 'web';
  device_type: 'mobile' | 'PC';
  device_model: string;
  browser: string;
  browser_version: string;
  os: string;
  os_version: string;
};

export enum EmitEvent {
  INVITE_LINK_JUMP = 'invite_link_jump',
  /** External link / bookmark visit (replaces invite_link_jump gradually) */
  LINK_JUMP_VISIT = 'link_jump_visit',
  CAMPAIGNIMPRESSION = 'CampaignImpression',
  CAMPAIGNCLICK = 'CampaignClick',
  /** Page impression */
  SIDEBAR_COLUMN_NAME = 'sidebar_column_name',
  /** Click register submit */
  REGISTER_SUBMIT_CLICK = 'register_submit_click',
  /** Click register entry */
  REGISTER_ENTRY_CLICK = 'register_entry_click',
  /** Registration success */
  REGISTER_RESULT = 'register_result',
  /** Send verification code */
  VERIFY_CODE_SEND = 'verify_code_send',
  /** Verify verification code */
  VERIFY_CODE_CHECK = 'verify_code_check',
  /** Click login entry */
  LOGIN_ENTRY_CLICK = 'login_entry_click',
  /** Click login submit */
  LOGIN_SUBMIT_CLICK = 'login_submit_click',
  /** Login success */
  LOGIN_RESULT = 'login_result',
  /** Enter registration page */
  BZ_PAGE_VIEW = 'bz_page_view',
  /** Match impression event */
  BZ_MATCH_EXPOSE = 'bz_match_expose',
  /** Match exposed */
  MATCH_EXPOSED = 'match_exposed',
  /** Selection / odds exposed */
  SELECTION_EXPOSED = 'selection_exposed',
  /** Selection / odds clicked (add to betslip) */
  SELECTION_CLICKED = 'selection_clicked',
  /** Ticket template exposed */
  TEMPLATE_EXPOSED = 'template_exposed',
  /** Match click event */
  BZ_MATCH_CLICK = 'bz_match_click',
  /** Match clicked */
  MATCH_CLICKED = 'match_clicked',

  /** Ticket template clicked (add template to betslip / bet) */
  TICKET_TEMPLATE_CLICKED = 'ticket_template_clicked',
  /** Bet slip submit button clicked */
  TICKET_SUBMIT_CLICKED = 'ticket_submit_clicked',
  /** Bet slip submit result */
  TICKET_SUBMIT_RESULT = 'ticket_submit_result',
  /** Deposit: select coin in coin list */
  DEPOSIT_COIN_CLICK = 'deposit_coin_click',
  /** Deposit: select fiat payment method */
  DEPOSIT_FIATPAYMENT_CLICK = 'deposit_fiatpayment_click',
  /** Deposit: confirm fiat payment */
  DEPOSIT_FIATPAYMENT_CONFIRM = 'deposit_fiatpayment_confirm',
  /** Deposit: fiat payment result */
  DEPOSIT_FIATPAYMENT_RESULT = 'deposit_fiat_payment_result',
  /** Withdraw: confirm */
  WITHDRAW_CLICK = 'withdraw_click',
  /** Withdraw: result */
  WITHDRAW_RESULT = 'withdraw_result',
  /** Region block page */
  REGION_BLOCK = 'region_block',
  /** Deposit entry click */
  DEPOSIT_ENTRY_CLICK = 'deposit_entry_click',
  /** Withdraw entry click */
  WITHDRAW_ENTRY_CLICK = 'withdraw_entry_click',
  /** Deposit window exposed */
  DEPOSIT_WINDOW_EXPOSE = 'deposit_window_expose',
  /** Withdraw window exposed */
  WITHDRAW_WINDOW_EXPOSE = 'withdraw_window_expose',
  /** Register window exposed */
  REGISTER_WINDOW_EXPOSE = 'register_window_expose',
  /** Login window exposed */
  LOGIN_WINDOW_EXPOSE = 'login_window_expose',
}

export type EmitData = {
  /** Event name */
  event: string;
  /** Event properties */
  properties: Record<string, any>;
};

/** Tracking data */
export type TrakerData = BasicInfo & EmitData;
