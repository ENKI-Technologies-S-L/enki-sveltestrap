<script lang="ts">
  import Example from '../Example.svelte';
  import Sample from './Sample.svelte';
  import SlotSample from './SlotSample.svelte';
  import sampleSource from '!!raw-loader!./Sample.svelte';
  import SlotSampleSource from '!!raw-loader!./SlotSample.svelte';
  
  
</script>

<h1>No Data Found</h1>

<Example source={sampleSource}>
  <Sample />
</Example>

<Example source={SlotSampleSource}>
  <SlotSample />
</Example>
