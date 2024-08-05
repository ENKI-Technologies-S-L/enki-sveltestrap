<script lang="ts">
  import { ListGroup, ListGroupItem } from '@enkitek/sveltestrap';
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

<ListGroup>
  {#each colors as color}
    <ListGroupItem {color}>{color}</ListGroupItem>
  {/each}
</ListGroup>
