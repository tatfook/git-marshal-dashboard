<template>
  <div class="app-container">
    <div class="action-container">
      <el-button
        v-if="can('create')"
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-plus"
        @click="handleCreate"
      >
        {{ $t('new') }}
      </el-button>
      <el-button
        v-if="can('export')"
        class="filter-item"
        type="primary"
        icon="el-icon-download"
        :loading="downloadLoading"
        @click="handleExport"
      >
        {{ $t('export') }}
      </el-button>
      <el-button
        v-if="can('delete')"
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-plus"
        @click="handleDeleteAll"
      >
        {{ $t('deleteAll') }}
      </el-button>
      <el-dropdown style="float: right" @command="handleAddFilter">
        <el-button type="primary">
          {{ $t('addFilter') }}
          <i class="el-icon-arrow-down el-icon--right" />
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="item in searchableFilters"
            :key="item"
            :command="item"
          >
            {{ i18n(item) }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <crud-filter
      :search-params="searchParams"
      @removeFilter="handleRemoveFilter"
      @handleSearch="handleSearch"
    />

    <crud-table
      :list-loading="listLoading"
      :filter="colFilter"
      @handleAction="handleAction"
      @handleSort="handleSort"
    />

    <crud-paginate
      :list-query="listQuery"
      :total="total"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    />

    <el-dialog
      v-if="can('edit') || can('create')"
      :title="$t(textMap[dialogStatus])"
      :visible.sync="dialogFormVisible"
    >
      <crud-form
        :form-data="activeRow"
        :status="dialogStatus"
        @cancel="dialogFormVisible = false"
        @create="createData"
        @update="updateData"
      />
    </el-dialog>

    <el-dialog v-if="can('show')" :visible.sync="showingFormVisible">
      <crud-show :list="showingData" />
    </el-dialog>
  </div>
</template>

<script>
import crudMixin from './crud.mixin';

export default {
  name: 'BaseCRUD',
  mixins: [crudMixin]
};
</script>
