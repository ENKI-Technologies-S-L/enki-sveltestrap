<script lang="ts">
  import { Progress } from '@enkitek/sveltestrap';
</script>

<div class="text-center">1 of 5</div>
<Progress value={1} max={5} />
<div class="text-center">50 of 135</div>
<Progress value={50} max={135} />
<div class="text-center">75 of 111</div>
<Progress value={75} max={111} />
<div class="text-center">463 of 500</div>
<Progress value={463} max={500} />

<div class="text-center">Various (40) of 55</div>
<Progress multi>
  <Progress bar value={5} max={55}>5</Progress>
  <Progress bar color="success" value={15} max={55}>15</Progress>
  <Progress bar color="warning" value={10} max={55}>10</Progress>
  <Progress bar color="danger" value={10} max={55}>10</Progress>
</Progress>
