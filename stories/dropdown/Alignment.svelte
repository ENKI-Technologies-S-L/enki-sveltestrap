<script lang="ts">
  import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
  } from '@enkitek/sveltestrap';
</script>

<Dropdown>
  <DropdownToggle caret>Dropdown's menu is right-aligned</DropdownToggle>
  <DropdownMenu end>
    <DropdownItem header>Header</DropdownItem>
    <DropdownItem disabled>Action</DropdownItem>
    <DropdownItem>Another Action</DropdownItem>
  </DropdownMenu>
</Dropdown>
