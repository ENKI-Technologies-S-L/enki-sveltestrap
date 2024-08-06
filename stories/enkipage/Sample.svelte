<script lang="ts">
  import { Button, EnkiPage } from '@enkitek/sveltestrap';
</script>

<EnkiPage>
  <h3 class="fs-3" slot="title">Example Page</h3>
  <div class="float-end text-end btn-dev" slot="actions">
    <Button
      color="primary"            
    >    
     Create New
    </Button>
  </div>
  <div slot="content" class="container-fluid content-slot">
    content
  </div>
</EnkiPage>
