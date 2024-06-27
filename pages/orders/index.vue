<template>
  <div>
    <n-table
      :columns="tableColumn"
      :pagination="pagination"
      :data-source="dataList"
      :table-loading="loading"
      @change-page="changePage"
    />
  </div>
</template>
<script setup lang="ts">
import type { PaginationType } from '@/components/NPagination.vue';
import type { ColumnItemType } from '@/components/NTable.vue';

definePageMeta({
  middleware: 'auth',
  title: '訂單管理'
});

const tableColumn: ColumnItemType[] = [
  {
    title: '訂單編號',
    dataIndex: 'transactionId',
    width: '20%'
  },
  {
    title: '方案名稱',
    dataIndex: 'itemName',
    width: '20%'
  },
  {
    title: '付款狀態',
    dataIndex: 'payStatus',
    width: '20%'
  },
  {
    title: '建立時間',
    dataIndex: 'createdAt',
    width: '20%'
  },
  {
    title: '到期日',
    dataIndex: 'subscribeExpiredAt',
    width: '20%'
  }
];

const pagination = reactive<PaginationType>({
  current: 1,
  totalPages: 0
});

const dataList = ref([]);
const loading = ref<boolean>(false);

const changePage = (page: number) => {
  // pagination.current = page;
  console.log('page :>> ', page);
};

onMounted(() => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});
</script>
