<script lang="ts">
  import { Navbar, NavbarBrand } from '@enkitek/sveltestrap';

  const colors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'primary-subtle',
    'secondary-subtle',
    'success-subtle',
    'danger-subtle',
    'warning-subtle',
    'info-subtle',
    'light-subtle',
    'dark-subtle'
  ];
</script>

{#each colors as color}
  <Navbar
    {color}
    dark={color === 'dark' || color === 'primary'}
    light={color !== 'dark' && color !== 'primary'}
    class="mb-2"
  >
    <NavbarBrand href="/">{color} Navbar</NavbarBrand>
  </Navbar>
{/each}
