<script lang="ts">
  import { Button } from '@enkitek/sveltestrap';

  const colors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ];
</script>

{#each colors as color}
  <div>
    <Button disabled {color}>{color}</Button>
  </div>
{/each}
