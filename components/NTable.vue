<template>
  <div class="n-table-container">
    <n-loading :loading="tableLoading">
      <table class="n-table table mb-4">
        <thead class="table-head">
          <tr>
            <th
              v-for="(headCol, index) in columns"
              :key="`header-${headCol.dataIndex}`"
              scope="col"
              :style="{ width: headCol.width || 'auto' }"
              :class="{
                'rounded-bottom-0': !index || index === columns.length - 1,
                'rounded-start-2': !index,
                'rounded-end-2': index === columns.length - 1
              }"
              class="rounded-bottom-0 text-body"
            >
              {{ headCol.title }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in dataSource"
            :key="`row-${index}`"
          >
            <td
              v-for="headCol in columns"
              :key="`row-${index}-${headCol.dataIndex}`"
            >
              <slot
                v-if="slots[headCol.dataIndex]"
                :name="headCol.dataIndex"
                :record="item"
              />
              <template v-else> {{ item[headCol.dataIndex] || '-' }} </template>
            </td>
          </tr>
          <tr
            v-if="!dataSource.length && !tableLoading"
            class="empty-table fs-5 positive-relative"
          >
            <td
              class="border-bottom-0 align-middle"
              :colspan="columns.length"
            >
              <n-empty />
            </td>
          </tr>
        </tbody>
      </table>
    </n-loading>
    <n-pagination
      v-if="pagination"
      v-model:current="currentPage"
      :total-pages="pagination.totalPages"
    />
  </div>
</template>
<script setup lang="ts">
import type { PaginationType } from '@/components/NPagination.vue';

export type ColumnItemType = {
  title: string;
  dataIndex: string;
  width?: string;
};

interface NTableProps {
  columns: ColumnItemType[];
  dataSource: any[];
  pagination?: PaginationType | false;
  tableLoading?: boolean;
}

const props = withDefaults(defineProps<NTableProps>(), {
  columns: () => [],
  dataSource: () => [],
  pagination: false,
  tableLoading: false
});

const slots = useSlots();

const currentPage = ref<PaginationType['current']>(1);

const emit = defineEmits<{
  (e: 'changePage', pageIndex: PaginationType['current']): void;
}>();

watch(
  () => props.pagination,
  (val) => {
    if (val) {
      currentPage.value = val.current;
    }
  },
  {
    immediate: true,
    deep: true
  }
);

watch(
  () => currentPage.value,
  (val) => {
    emit('changePage', val);
  }
);
</script>
<style lang="scss" scoped>
.table {
  > :not(caption) > * > * {
    padding: 12px 16px;
    text-align: center;
  }
}

.table-head {
  tr > * {
    background: $blue-100;
  }
}

.empty-table {
  height: 200px;
}

::v-deep(.n-pagination) {
  justify-content: flex-end !important;
}
</style>
