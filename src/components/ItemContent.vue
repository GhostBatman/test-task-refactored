<template>
  <div class="content">
    <span class="header"> {{ item.name }}</span>

    <div class="detail" v-for="(attr, i) in item.attributes" :key="`${attr.code}${i}`">
      <div class="field">
        <span class="title">code:</span>
        <input :value="attr.code" />
      </div>

      <div class="field">
        <span class="title">name:</span>
        <input :value="attr.name" />
      </div>

      <div v-if="attr.color" class="field">
        <span class="title">color:</span>
        <input :value="attr.color" />
      </div>

      <div v-if="attr.size" class="field">
        <span class="title">size:</span>
        <span>
          <input :value="attr.size.width" type="number" /> x <input :value="attr.size.height" type="number" />
        </span>

      </div>

      <div v-if="attr.weight" class="field">
        <span class="title">weight:</span>
        <input :value="attr.weight" type="number" />
      </div>

    </div>

    <div class="add">
      <label>
        type
        <select ref="selectRef">
          <option value="color">color</option>
          <option value="size">size</option>
          <option value="weight">weight</option>
        </select>
      </label>

      <button @click="addAttr(selectRef.value)">
        Add
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits, ref} from 'vue';
import {IItem, IItemAttributes} from '@/components/types';

defineProps<{
  item: IItem
}>();

const emit = defineEmits(['addAttr']);
const selectRef = ref<HTMLSelectElement>();

const addAttr = (type: string) => {

  const attr: IItemAttributes = {
    code: 'new code',
    name: 'new field',
  };

  if (type === 'color') {
    attr.color = 'color';
  }

  if (type === 'weight') {
    attr.weight = 0;
  }

  if (type === 'size') {
    attr.size = {
      width: 0,
      height: 0,
    };
  }

  emit('addAttr', attr);
};

</script>

<style scoped lang="css">
.header {
  font-weight: bold;
}

.content {
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
}

.detail {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.field {
  display: flex;
  gap: 5px;
}

.title {
  font-weight: bold;
}

.add {
  display: flex;
  gap: 10px;
}
</style>
