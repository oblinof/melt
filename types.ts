export enum TabId {
  PROPUESTA = 'propuesta',
  PACK1 = 'pack1',
  PACK2 = 'pack2'
}

export interface TabConfig {
  id: TabId;
  label: string;
}