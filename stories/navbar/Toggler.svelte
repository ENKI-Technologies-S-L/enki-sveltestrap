<script lang="ts">
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from '@enkitek/sveltestrap';

  let isOpen = false;
  const toggle = () => (isOpen = !isOpen);
</script>

<Navbar color="light" light>
  <NavbarBrand href="/" class="me-auto">sveltestrap</NavbarBrand>
  <NavbarToggler on:click={toggle} class="me-2" />
  <Collapse {isOpen} navbar>
    <Nav navbar>
      <NavItem>
        <NavLink href="#components/">Components</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/ENKI-Technologies-S-L/enki-sveltestrap">GitHub</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>
