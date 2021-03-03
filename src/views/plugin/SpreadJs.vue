<template>
  <div class="divSpread">
    <div class="divTool">

       <el-select v-model="tableName" placeholder="请选择表" @change="changeHandler">
        <el-option
          v-for="item in tableNames"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>

      <el-select v-model="currentSelect" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select v-model="typeSelect" placeholder="请选择">
        <el-option
          v-for="item in typeOption"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button type="primary" @click="BindFiled">设置</el-button>
    </div>

    <div style="text-align: left">
      <gc-spread-sheets
        hostClass="spread-host"
        @workbookInitialized="workbookInitialized($event)"
      >
        <gc-worksheet> </gc-worksheet>
      </gc-spread-sheets>
    </div>

    <div class="topTable">
      <el-table :data="tableData" style="width: 100%" max-height="300">
        <el-table-column prop="fieldName" label="字段"> </el-table-column>
        <el-table-column prop="row" label="Row" width="120"> </el-table-column>
        <el-table-column prop="col" label="Col" width="120"> </el-table-column>
        <el-table-column label="操作" width="50">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css'
import GC from '@grapecity/spread-sheets'
import '@grapecity/spread-sheets-vue'
import '@grapecity/spread-sheets-resources-zh'
import { IO } from '@grapecity/spread-excelio'
import '@grapecity/spread-sheets-print'
GC.Spread.Common.CultureManager.culture('zh-cn')

export default {
  data() {
    return {
      person: {
        name: 'Wang Feng',
        age: 25,
        sex: 'Male',
        address: {
          postcode: '710075',
        },
      },
      spread: null,
      options: null,
      currentSelect: '',
      typeSelect: 'normal',
      tableName: '',
      tableData: null,
      typeOption: [
        { label: '普通', value: 'normal' },
        { label: '区域', value: 'area' },
      ],
      tableNames:[]
    }
  },
  created() {

  },
  mounted() {
    this.getAllTableName()
  },
  methods: {
    workbookInitialized(spread) {
      this.spread = spread
      spread.refresh()
      // this.spreadInit()
    },
    spreadInit() {
      let filePath = '/temp/' + this.tableName + '.xlsx'
      let self = this
      let excelIO = new IO()
      var xhr = new XMLHttpRequest()
      xhr.open('GET', filePath, true)
      xhr.responseType = 'blob'
      xhr.onload = function (e) {
        if (this.status == 200) {
          // get binary data as a response
          var blob = this.response
          // convert Excel to JSON
          excelIO.open(
            blob,
            function (json) {
              var workbookObj = json
              self.spread.fromJSON(workbookObj)
              self.loaded()
            },
            function (e) {
              // process error
              console.log(e.errorMessage)
            },
            {}
          )
        }
      }
      xhr.send()
    },
    BindData() {
      let spreadNS = GC.Spread.Sheets
      let source = new spreadNS.Bindings.CellBindingSource(this.person)
      let sheet = this.spread.getActiveSheet()
      sheet.suspendPaint()
      sheet.setBindingPath(2, 3, 'name')
      sheet.setBindingPath(3, 3, 'age')
      sheet.setBindingPath(2, 14, 'sex')
      sheet.setBindingPath(3, 14, 'address.postcode')
      sheet.setDataSource(source)
      sheet.resumePaint()
    },
    getTableKeys() {
      this.axios({
        method: 'get',
        url: '/api/Table/GetTableKeys',
        params: {
          tableName: this.tableName,
        },
      })
        .then((res) => {
          if (res.data.code != 0) {
            this.$message.error(res.data.msg)
          } else {
            this.options = res.data.data
          }
        })
        .catch((error) => {})
    },
    BindFiled() {
      let sheet = this.spread.getActiveSheet()
      var selections = sheet.getSelections()[0]

      let postions = []
      let obj = {
        row: selections.row,
        col: selections.col,
        TableName: this.tableName,
        FieldName: this.currentSelect,
        type: this.typeSelect,
        rowCount: selections.rowCount,
        colCount: selections.colCount,
      }
      postions.push(obj)
      console.log(postions)
      this.Bind(postions)
    },
    Bind(data) {
      if (this.currentSelect) {
        this.axios({
          method: 'post',
          url: '/api/Table/SavePostion',
          data: data,
        })
          .then((res) => {
            this.GetAllPostion()
            this.spreadInit()
          })
          .catch((error) => {})
      }
    },
    GetAllPostion() {
      this.axios({
        method: 'get',
        url: '/api/Table/GetAllPostion',
        params: {
          TableName: this.tableName,
        },
      })
        .then((res) => {
          this.tableData = res.data
          this.SetBindVal()
        })
        .catch((error) => {})
    },
    deleteRow(index, data) {
      this.axios({
        method: 'post',
        url: '/api/Table/DeletePostion',
        data: {
          id: data[index].id,
        },
      })
        .then((res) => {
          this.GetAllPostion()
          this.spreadInit()
        })
        .catch((error) => {})
    },
    SetBindVal() {
      let sheet = this.spread.getActiveSheet()
      this.tableData.forEach((item) => {
        sheet.setValue(item.row, item.col, item.fieldName)
      })
    },
    loaded() {
      this.getTableKeys()
      this.GetAllPostion()
    },
    getTableLength() {
      this.axios({
        method: 'get',
        url: '/api/Table/GetTableMaxLength',
        params: {
          tableName: this.tableName,
        },
      })
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {})
    },
    getAllTableName() {
       this.axios({
        method: 'get',
        url: '/api/Table/GetAllTableName'
      })
        .then((res) => {
          if (res.data.code != 0) {
            this.$message.error(res.data.msg)
          } else {
            this.tableNames = res.data.data.map(x=>{
              return {value:x, label:x}
            })
          }
        })
        .catch((error) => {})
    },
    changeHandler(v) {
      this.spreadInit()
    }
  },
}
</script>

<style scoped >
.divSpread {
  position: relative;
  width: 100%;
  height: 100%;
}
.spread-host {
  width: 100%;
  height: 750px;
}
.divTool {
  height: 100px;
  line-height: 100px;
}
.topTable {
  position: absolute;
  right: 0;
  top: 0;
  width: 450px;
  height: 300px;
  background: pink;
}
.el-select{margin: 0 4px;}
</style>
