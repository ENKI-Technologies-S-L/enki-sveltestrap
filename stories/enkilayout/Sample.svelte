<script lang="ts">
  import { Button, EnkiLayout, Icon, Nav, NavbarBrand, NavItem, NavLink } from '@enkitek/sveltestrap';  
</script>

<EnkiLayout company="Enkitek" >
  <NavbarBrand href="/" slot="brand">sveltestrap</NavbarBrand>
  <div slot="user-menu">
    <div>
      <Button>aasas</Button>
      <a href="">Logout</a>
      asasas
      <span></span>
      <div>
        <div>
          <div class="=asasas">            
              <button>as</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div slot="footer">
    Footer
  </div>
  <div slot="menu" let:open>        
    <Nav vertical>
      <NavItem>
        <NavLink>
          {#if open}
            <span>HOme</span>
          {/if}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          {#if open}
            <span>Container Visualizer</span>
          {/if}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          {#if open}
            <span>Users</span>
          {/if}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          {#if open}
            <span>Recipe</span>
          {/if}
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink>
          {#if open}
            <span>WorkOrder</span>
          {/if}
        </NavLink>
      </NavItem>
    </Nav>
  </div>  
  <div slot="content" class="container-fluid content-slot">
    content
  </div>
</EnkiLayout>
