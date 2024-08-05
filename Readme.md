
---

## Install

`npm i @enkitek/sveltestrap`

## Usage

_You need to include a link to Bootstrap 5 stylesheet in your page - these components do not include or embed any Bootstrap styles automatically._

Either in your HTML layout:

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  />
</head>
```

Or from your Svelte app, either:

```html
<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</svelte:head>
```

or:

```html
<style>
  @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
</style>
```

or alternately, use the [Styles](https://sveltestrap.js.org/?path=/story/components--styles) component:

```html
<script>
  import { Styles } from '@enkitek/sveltestrap'ltestrap';
</script>

<Styles />
```

Then use sveltestrap components in your svelte component:

```html
<script>
  import { Button, Col, Row } from '@enkitek/sveltestrap';
</script>

<Row>
  <Col>
    <Button color="primary" outline>Hello World!</Button>
  </Col>
</Row>
```

### Note on Icons

If you wish to use the [Icon component](https://sveltestrap.js.org/?path=/story/components--icon),
you also must include a link to Bootstrap Icon CSS, for example:

```html
<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
</svelte:head>
```

or:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
/>
```

or the [Styles](https://sveltestrap.js.org/?path=/story/components--styles) component includes the Bootstrap Icon CSS by default:

```html
<script>
  import { Styles } from '@enkitek/sveltestrap';
</script>
<Styles />
```

### Note on usage with Sapper

If you are using Sveltestrap with Sapper, it's recommended you import the component source directly.
Note that this issue does not affect SvelteKit. For example:

```html
<script>
  import { Button, Col, Row } from '@enkitek/sveltestrap/src';
</script>

<Row>
  <Col>
    <Button color="primary" outline>Hello World!</Button>
  </Col>
</Row>
```

if you prefer the '@enkitek/sveltestrap' import, you can move the package to `devDependencies` block in your `package.json` so that sapper will parse the es bundle

```json
"devDependencies": {
    "sveltestrap": "*.*.*",
    ...
  },
```
