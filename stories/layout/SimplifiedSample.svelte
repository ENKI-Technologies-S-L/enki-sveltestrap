<script lang="ts">
  import { Col, Container, Row } from '@enkitek/sveltestrap';
</script>

<Container>
  <Row>
    <Col>.col</Col>
  </Row>
  <Row>
    <Col>.col</Col>
    <Col>.col</Col>
    <Col>.col</Col>
    <Col>.col</Col>
  </Row>
  <Row>
    <Col xs="3">.col-3</Col>
    <Col xs="auto">.col-auto - variable width content</Col>
    <Col xs="3">.col-3</Col>
  </Row>
  <Row>
    <Col xs="6">.col-6</Col>
    <Col xs="6">.col-6</Col>
  </Row>
  <Row>
    <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
    <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
    <Col sm="4">.col-sm-4</Col>
  </Row>
  <Row>
    <Col sm={{ size: 6, order: 2, offset: 1 }}>
      .col-sm-6 .order-sm-2 .offset-sm-1
    </Col>
  </Row>
  <Row>
    <Col sm="12" md={{ size: 6, offset: 3 }}>
      .col-sm-12 .col-md-6 .offset-md-3
    </Col>
  </Row>
  <Row>
    <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
    <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
  </Row>
  <Row cols={2}>
    <Col>col-1</Col>
    <Col>col-2</Col>
    <Col>col-3</Col>
    <Col>col-4</Col>
    <Col>col-5</Col>
    <Col>col-6</Col>
  </Row>
  <Row cols={{ lg: 3, md: 2, sm: 1 }}>
    <Col>col-1</Col>
    <Col>col-2</Col>
    <Col>col-3</Col>
    <Col>col-4</Col>
    <Col>col-5</Col>
    <Col>col-6</Col>
  </Row>
</Container>
