<script>
    import Row from './Row.svelte';
    import Col from './Col.svelte';  
      
</script>
<section class="screen-size-fix">
	<div class="container-fluid mb-2">
		<Row class="pt-3 pb-2">
			<Col>
				<header>
					<div class="d-flex flex-row justify-content-start mt-2">
						<slot name="title" />
					</div>
				</header>
			</Col>
			<Col class="mt-1">
				<slot name="actions" />
			</Col>
		</Row>
	</div>
	<slot name="content" />
</section>
