<template>
  <div class="div_gantt">
    <div id="gantt_here" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import 'assets/js/dhtmlxgantt.js'
import 'assets/css/dhtmlxgantt.css'
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          text: 'Project #22',
          start_date: '01-04-2018',
          duration: 18,
          progress: 1,
          open: true,
        },
        {
          id: 2,
          text: 'Task #1',
          start_date: '02-04-2018',
          duration: 8,
          progress: 0.6,
          parent: 1,
        },
        {
          id: 3,
          text: 'Task #2',
          start_date: '11-04-2018',
          duration: 8,
          progress: 0.6,
          parent: 1,
        },
      ],
      link: [
        { id: 1, source: 1, target: 2, type: '1' },
        { id: 2, source: 2, target: 3, type: '0' },
      ],
      gantt: null,
    }
  },
  created() {},
  mounted() {
    this.gantt = gantt
    this.GanttInit()
  },
  methods: {
    GanttInit() {
      this.gantt.i18n.setLocale('cn')
      this.gantt.init('gantt_here')
      this.gantt.parse({
        data: this.data,
        links: this.link,
      })
      console.log(this.gantt)
      this.gantt.createDataProcessor((mode, taskState, data, rowId) => {
        debugger
        switch (taskState) {
          case 'create':
            //   workData.push(data)
            break
          case 'update':
            var itemIndex = workData.findIndex(function (entry, index) {
              return entry.id == rowId
            })
            workData[itemIndex] = data
            break
          case 'delete':
            var itemIndex = workData.findIndex(function (entry, index) {
              return entry.id == rowId
            })
            workData.splice(itemIndex, 1)
            break
        }   
      })
    },
  },
}
</script>

<style scoped >
.div_gantt {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  overflow-x: auto;
}
</style>
