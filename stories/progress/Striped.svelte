<script lang="ts">
  import { Progress } from '@enkitek/sveltestrap';
</script>

<Progress striped value={2 * 5} class="mb-2" />
<Progress striped color="success" value={25} class="mb-2" />
<Progress striped color="info" value={50} class="mb-2" />
<Progress striped color="warning" value={75} class="mb-2" />
<Progress striped color="danger" value={100} class="mb-2" />
<Progress multi class="mb-2">
  <Progress striped bar value={10} />
  <Progress striped bar color="success" value={30} />
  <Progress striped bar color="warning" value={20} />
  <Progress striped bar color="danger" value={20} />
</Progress>
