export interface IAddSelect {
  type: string;
  text: string;
}

export interface IRemoveSelect {
  type: string;
  text: string;
}

export interface ISelectState {
  text: string;
}

export type seletTypes = IAddSelect | IRemoveSelect;
