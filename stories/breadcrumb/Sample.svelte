<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from '@enkitek/sveltestrap';
</script>

<Breadcrumb>
  <BreadcrumbItem active>Home</BreadcrumbItem>
</Breadcrumb>

<Breadcrumb>
  <BreadcrumbItem>
    <a href="#home">Home</a>
  </BreadcrumbItem>
  <BreadcrumbItem active>Library</BreadcrumbItem>
</Breadcrumb>

<Breadcrumb>
  <BreadcrumbItem>
    <a href="#home">Home</a>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <a href="#library">Library</a>
  </BreadcrumbItem>
  <BreadcrumbItem active>Data</BreadcrumbItem>
</Breadcrumb>
