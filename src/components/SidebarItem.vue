<template>
  <span class="item">
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
</script>

<style lang="css">
.item {
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  min-width: 250px;
}

.itemSelected {
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  min-width: 250px;
  background: lightskyblue;
}

.item:hover {
  background: #f0f0ff;
}
</style>
