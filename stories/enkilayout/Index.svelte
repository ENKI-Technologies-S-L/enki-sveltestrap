<script lang="ts">
  import Example from '../Example.svelte';
  import Sample from './Sample.svelte';  
  import sampleSource from '!!raw-loader!./Sample.svelte';  
  
  
</script>

<h1>Layout</h1>


<Example source={sampleSource}>
  <Sample />
</Example>

