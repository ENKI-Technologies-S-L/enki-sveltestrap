<script>
	import Button from "./Button.svelte";
	import Icon from "./Icon.svelte";	
	import Navbar from "./Navbar.svelte";
	
	import Popover from "./Popover.svelte";
	

	export let company;

	let open = true;
	let isOpen = false;
	const toggle =() => {
		open  =!open;		
	}


  document.addEventListener("click", function (e) {
		const containerDiv = document.getElementById('user-menu-wrapper-div');
        const clickedElement = e.target;		
	   if(!containerDiv.contains(clickedElement)){
		isOpen = !isOpen;
	   }
    });
</script>

<div class="{`page-wrapper ${open ? `opened` : ``}`}">
	<div class="content-wrapper d-flex justify-content-between" >
		<div class="main-menu">		
			<div>
				<div class="d-flex justify-content-between">
					<h4>{company}</h4>
					<Button on:click={toggle} color="link">
						<Icon name="{open ? 'chevron-double-left' : 'chevron-double-right'}"></Icon>
					</Button>
				</div>
				<div class="menu-wrapper">
					<slot name="menu" {open}/>
				</div>
			</div>
			
		</div>
		<div class="flex-grow-1 main-content-area">
			<Navbar color="light" light expand="md">
				
				<slot name="brand" {open}/>
								  
					
					
						<Button color="ink" class="border border-primary rounded-circle" id="my-account-popover">a</Button>
							<Popover id="user-menu-wrapper-div"
							target={`my-account-popover`}
							placement="bottom"					
							{isOpen}
						>
						<slot name="user-menu" {open}/>
						</Popover>
									  
				
			  </Navbar>
			<div class="content">
				<slot name="content" {open}/>
			</div>
			<div class="d-flex">				
				{#if $$slots.footer}                
					<slot name="footer" {open}/>                				
				{:else}
					<slot {open}/>
				{/if}
			</div>					
		</div>
		
	</div>
	
</div>


<style lang="scss">
.main-content-area{
	height: 100vh;
	overflow-y: scroll;
}
@mixin main-menu {
	width: 300px;
}


	.page-wrapper {
  h4 {
    display: none;
  }
  .main-menu {
	@include main-menu;
    width: 54px;
    transition: width 0.3s ease-in-out; /* Add transition here */
  }
  .menu-wrapper {
    NavLink{
	  display: none;
	}
  }
}

.opened {
  h4 {
    display: block;
    transition: opacity 0.3s ease-in-out; /* Add transition for h4 */
  }
  .main-menu {
	@include main-menu;
  }
}
</style>
