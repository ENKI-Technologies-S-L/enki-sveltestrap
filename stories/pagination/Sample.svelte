<script lang="ts">
  import { Pagination, PaginationItem, PaginationLink } from '@enkitek/sveltestrap';
</script>

<Pagination ariaLabel="Page navigation example">
  <PaginationItem disabled>
    <PaginationLink first href="#" />
  </PaginationItem>
  <PaginationItem disabled>
    <PaginationLink previous href="#" />
  </PaginationItem>
  <PaginationItem active>
    <PaginationLink href="#">1</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">2</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">3</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">4</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">5</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink next href="#" />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink last href="#" />
  </PaginationItem>
</Pagination>
