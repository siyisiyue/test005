<template>
  <div class="divSpread">
    <div class="divTool">
      <el-button type="primary" @click="Save">保存</el-button>
    </div>
    <div style="text-align: left">
      <gc-spread-sheets
        hostClass="spread-host"
        @workbookInitialized="workbookInitialized($event)"
      >
        <gc-worksheet> </gc-worksheet>
      </gc-spread-sheets>
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
  name:'spreadBind',
  data() {
    return {
      spread: null,
      tableColumns: [],
      source: null,
      tableData: null,
      postions: null,
    }
  },
  computed:{
     tableName() {
      return this.$route.query.tableName
    },
    id() {
      return this.$route.query.id
    }
  },
  created() {},
  mounted() {},
  methods: {
    workbookInitialized(spread) {
      this.spread = spread
      spread.refresh()
      this.spreadInit()
    },
    spreadInit() {
      //  this.loaded()
      //  return
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
    loaded() {
      this.GetData()
    },
    BindData() {
      let _this = this
      let sheet = this.spread.getActiveSheet()
      _this.source = new GC.Spread.Sheets.Bindings.CellBindingSource(
        _this.tableData
      )
      sheet.suspendPaint()
      for (let key in this.tableData) {
        let p = this.postions.filter(
          (x) => x.fieldName.toLowerCase() == key.toLowerCase()
        )
        if (p.length <= 0) continue
        if (this.tableData[key] instanceof Array) {
          //表格级别绑定
          const tableStyle = new GC.Spread.Sheets.Tables.TableTheme()
          let table = sheet.tables.add(
            key,
            p[0].row,
            p[0].col,
            p[0].rowCount,
            p[0].colCount,
            tableStyle,
            {
              showHeader: false,
            }
          )

          if (this.tableData[key].length > 0) {
            for (let objname in this.tableData[key][0]) {
              if (objname != 'id' && objname != 'tableHeadId') {
                let tableColumn = new GC.Spread.Sheets.Tables.TableColumn()
                tableColumn.name(objname)
                tableColumn.dataField(objname)
                _this.tableColumns.push(tableColumn)
              }
            }
            table.bindColumns(_this.tableColumns)
          }
          table.bindingPath(key)
        } else {
          //单元格级别绑定
          sheet.setBindingPath(p[0].row, p[0].col, key)
        }
      }

      sheet.setDataSource(_this.source)
      sheet.resumePaint()
    },
    GetData() {
      this.axios({
        method: 'get',
        url: '/api/Table/GetData',
        params: {
            id: this.id,
            TableName: this.tableName,
        },
      })
        .then((res) => {
          if (res.data.code == 0) {
            this.tableData = res.data.data
            this.postions = res.data.postion
            this.BindData()
          } else {
            alert(res.data.msg)
          }
        })
        .catch((error) => {})
    },
    Save() {
      this.axios({
        method: 'post',
        url: '/api/Table/Save',
        data: {
          tableName: this.tableName,
          Data: JSON.stringify(this.tableData),
        },
      })
        .then((res) => {
          if (res.data.code == 0) {
            alert('保存成功')
            this.$router.push('/plugins/SpreadJsList')
          } else {
            alert(res.data.msg)
          }
        })
        .catch((error) => {})
    },
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
</style>
