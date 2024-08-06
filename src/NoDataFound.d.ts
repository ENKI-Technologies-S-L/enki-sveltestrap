
import { SvelteComponentTyped } from 'svelte';

export interface NoDatFoundProps<T>
  // extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['table']>
  {       
  title?: string | undefined;
  subtitle?: string | undefined;  
}

export interface NoDatFoundSlots<T> {
  default: {
    title?: string | undefined;
    subtitle?: string | undefined;    
  };
}

export default class NoDatFound<T> extends SvelteComponentTyped<
NoDatFoundProps<T>,
  {},
  NoDatFoundSlots<T>
> {}
