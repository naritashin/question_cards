<template>
  <div>
    <Card
      id="first"
      number="test"
      title="title test"
      description="desc"
    >
      <template slot="button-list">
        <Button value="test1" />
        <Button value="test2" />
        <Button value="test3" />
        <Button value="test4" />
      </template>
    </Card>
  </div>
</template>

<script>
import Button from 'components/atoms/Button'
import Card from 'components/organisms/Card'

export default {
  name: 'First',
  components: {
    Button,
    Card
  }
}
</script>

<style scoped>
</style>
