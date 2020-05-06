import { StateType, ActionType } from 'typesafe-actions';

declare module 'typesafe-actions' {
  export type Store = StateType<typeof import('./index')>;

  export type RootState = StateType<typeof import('./store/reducers').default>;

  export type RootAction = ActionType<typeof import('./store/actions')>;

  interface Types {
    RootAction: RootAction;
  }
}
