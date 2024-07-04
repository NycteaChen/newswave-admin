<template>
  <div>
    <div class="filters">
      <n-input
        v-model:value="filters.orderId"
        inputmode="search"
        placeholder="訂單編號"
      />
      <n-input
        v-model:value="filters.userEmail"
        placeholder="會員信箱"
      />
      <n-button
        text="搜尋"
        :disabled="loading"
        @click="search"
      />
      <n-button
        color="secondary"
        text="清空"
        :disabled="loading"
        @click="clear"
      />
    </div>
    <n-table
      :columns="tableColumn"
      :pagination="pagination"
      :data-source="dataList"
      :table-loading="loading"
      @change-page="changePage"
    >
      <template #userName="{ record }">
        {{ record?.userId?.name || '-' }}
      </template>
      <template #userEmail="{ record }">
        {{ record?.userId?.email || '-' }}
      </template>
    </n-table>
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
    title: '會員信箱',
    dataIndex: 'userEmail',
    width: '20%'
  },
  {
    title: '會員名稱',
    dataIndex: 'userName',
    width: '20%'
  },
  {
    title: '方案名稱',
    dataIndex: 'itemName',
    width: '20%'
  }
];

const pagination = reactive<PaginationType>({
  current: 1,
  totalPages: 0
});

const dataList = ref([]);
const loading = ref<boolean>(false);
const filters = reactive({
  orderId: '',
  userEmail: ''
});

const resetData = () => {
  dataList.value = [];
  pagination.current = 1;
  pagination.totalPages = 1;
};

const fetchData = async (page: number) => {
  loading.value = true;
  const pageSize: number = 10;
  try {
    const { status, data, message } = await useApi(
      `/admin/order-page?pageIndex=${page}&pageSize=${pageSize}&orderId=${filters.orderId}&userEmail=${filters.userEmail}`
    );

    if (status) {
      dataList.value = data.orders;
      pagination.totalPages = data.totalPages;
    } else {
      resetData();

      showToast({
        id: 'search-fail',
        message,
        icon: 'icon/warning.svg'
      });
    }
  } catch (error) {
    resetData();

    showToast({
      id: 'fail',
      message: '不明錯誤',
      icon: 'icon/warning.svg'
    });
  }

  loading.value = false;
};

const search = () => {
  fetchData(1);
};

const clear = () => {
  filters.orderId = '';
  filters.userEmail = '';
};

const changePage = (page: number) => {
  fetchData(page);
};

onMounted(async () => {
  loading.value = true;

  await nextTick(() => {
    search();
  });
});
</script>
<style lang="scss" scoped>
.filters {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
</style>
