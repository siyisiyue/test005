<template>
  <div class="divSpread">
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
  data() {
    return {
      spread: null,
      tableColumns: [],
      source: null,
      tableData: {
        data: [
          { name: '张三', sex: '男', age: 18, interest: '看书' ,jjj:'hide'},
          { name: '李四', sex: '男', age: 28, interest: '游泳' ,jjj:'hide'},
          { name: '王五', sex: '女', age: 16, interest: '爬山' ,jjj:'hide'},
        ],
      },
      postions: null,
      names: ['name', 'sex', 'age','jjj', 'interest'],
      tableColumns: [],
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
      this.loaded()
      this.BindData()
    },
    loaded() {
       let sheet = this.spread.getActiveSheet()
       sheet.addSpan(0,2,1,2)
       sheet.addSpan(1,2,1,2)
       sheet.addSpan(2,2,1,2)
    },
    BindData() {
      let _this = this
      let sheet = this.spread.getActiveSheet()
      const tableStyle = new GC.Spread.Sheets.Tables.TableTheme()
      _this.source = new GC.Spread.Sheets.Bindings.CellBindingSource(
        _this.tableData
      )
      sheet.suspendPaint()
      let table = sheet.tables.add(
        'table',
        0,
        0,
        3,
        5,
        tableStyle,
        {
          showHeader: false,
        }
      )
     
      this.names.forEach((x) => {
        let tableColumn = new GC.Spread.Sheets.Tables.TableColumn()
        tableColumn.name(x)
        tableColumn.dataField(x)
        this.tableColumns.push(tableColumn)
      })

      console.log(this.tableColumns)
      table.bindColumns(this.tableColumns)
      table.bindingPath("data")
      sheet.setDataSource(_this.source)
      sheet.resumePaint()
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
  height: 850px;
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
