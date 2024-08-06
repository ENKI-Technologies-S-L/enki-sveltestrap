import { SvelteComponentTyped } from 'svelte';


export default class EnkiPage extends SvelteComponentTyped<{
  [x: string]: never;
}, {
  [evt: string]: CustomEvent<any>;
}, {
  menu: {};
  content: {};
  default: {};
  footer: {};
}> {}
