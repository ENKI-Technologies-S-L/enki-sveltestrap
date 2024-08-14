import { SvelteComponentTyped } from 'svelte';


export default class EnkiLayout extends SvelteComponentTyped<{
  company: string
}, {
  [evt: string]: CustomEvent<any>;
},   { default: {} }> {}
