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
    dataIndex: '_id',
    width: '20%'
  },
  {
    title: '方案名稱',
    dataIndex: 'itemName',
    width: '20%'
  },
  {
    title: '方案類型',
    dataIndex: 'planType',
    width: '20%'
  }
];

const pagination = reactive<PaginationType>({
  current: 1,
  totalPages: 0
});

const dataList = ref([]);
const loading = ref<boolean>(false);

const fetchData = async (page: number) => {
  loading.value = true;
  const pageSize: number = 10;
  try {
    const response = await useApi(`/admin/order-page?pageIndex=${page}&pageSize=${pageSize}`);
    
    if (response.status) {
      dataList.value = response.data.orders;
      pagination.current = response.data.targetPage;
      pagination.totalPages = response.data.totalPages;
    } else {
      console.error('Error fetching order data:', response);
    }
  } catch (error) {
    console.error('Error fetching order data:', error);
  } finally {
    loading.value = false;
  }
};

const changePage = (page: number) => {
  fetchData(page);
};

onMounted(() => {
  fetchData(1);
});
</script>