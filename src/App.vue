<template>
  <div class="main">
    <div class="sidebar">
      <div class="list">
        <sidebar-item
            v-for="item in data"
            :item="item"
            :key="item.id"
            :class="{itemSelected: item?.id === selectedItem?.id}"
            @click="setItem(item)"
        >
          {{ item.name }}
        </sidebar-item>
      </div>
    </div>
    <item-content v-if="selectedItem" :item="selectedItem" @add-attr="addAttr" />
  </div>
</template>

<script setup lang="ts">

import SidebarItem from './components/SidebarItem.vue';
import ItemContent from './components/ItemContent.vue';
import Data from './components/mockData';
import {Ref, ref} from 'vue';
import {IItem, IItemAttributes} from '@/components/types';

const data: Ref<IItem[]> = ref(Data);

let selectedItem: Ref<IItem | undefined> = ref();

const setItem = (item: IItem) => {
  selectedItem.value = item;
};

const addAttr = (attr: IItemAttributes) => {
  selectedItem.value?.attributes?.push(attr);
};

</script>

<style scoped lang="css">
.main {
  display: flex;
  gap: 20px;
}

.list {
  display: flex;
  flex-direction: column;
  border: 1px solid lightblue;
}

.sidebar {
  width: auto;
}
</style>
