<script>
  import classnames from './utils';
  import Row from './Row.svelte';
  import Col from './Col.svelte';
  import Icon from './Icon.svelte';

  let className = '';
  export { className as class };  
  export let title = '';
  export let subtitle = '';  

  $: classes = classnames(
    className,
    'no-data-found',
  );
</script>

<Row class=" not-found-section">
	<Col class="d-flex flex-column justify-content-center align-items-center ">
		<div class="d-flex mb-2">
			<Icon name="folder-x" class="me-2" />
			<slot>
				{#if title}
				<p>{title}</p>
				{:else}
					<slot name="title" />
				{/if}
			</slot>
		</div>
		<div class="d-flex">
			<slot>
				{#if subtitle}
					<p>{subtitle}</p>
				{:else}
					<slot name="subtitle" />
				{/if}
			</slot>
		</div>
	</Col>
</Row>
