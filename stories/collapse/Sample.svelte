<script lang="ts">
  import { Collapse, Button, Card } from '@enkitek/sveltestrap';
  let isOpen = false;
</script>

<Button color="primary" on:click={() => (isOpen = !isOpen)} class="mb-3">
  Toggle
</Button>
<Collapse {isOpen}>
  <Card body>
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
    richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
    anderson cred nesciunt sapiente ea proident.
  </Card>
</Collapse>
