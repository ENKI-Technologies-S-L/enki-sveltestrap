<script lang="ts">
  import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
  } from '@enkitek/sveltestrap';
</script>

<Dropdown>
  <DropdownToggle caret>Dropdown</DropdownToggle>
  <DropdownMenu>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem>Some Action</DropdownItem>
    <DropdownItem disabled>Action (disabled)</DropdownItem>
    <DropdownItem divider />
    <DropdownItem>Foo Action</DropdownItem>
    <DropdownItem>Bar Action</DropdownItem>
    <DropdownItem>Quo Action</DropdownItem>
  </DropdownMenu>
</Dropdown>
