<template>
  <div class="content">
    <h3 style="text-align: center">购物车案例</h3>
    <br />
    <br />
    <template v-if="tableData.length > 0">
      <el-table
        :data="tableData"
        style="width: 100%"
        :summary-method="getSummaries"
        show-summary
      >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="name" label="书名"> </el-table-column>
        <el-table-column prop="date" label="时间"> </el-table-column>
        <el-table-column prop="price" label="价格">
          <template slot-scope="scope">
            <span>{{ scope.row.price.toFixed(2) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="number" label="数量">
          <template slot-scope="scope">
            <el-button
              @click="handleClickSub(scope.row)"
              type="primary"
              size="small"
              >-</el-button
            >
            <span style="padding: 0 10px">{{ scope.row.number }}</span>
            <el-button
              @click="handleClickAdd(scope.row)"
              type="primary"
              size="small"
              >+</el-button
            >
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>
    <h3 v-else>购物车为空</h3>

    <p>1.过滤器</p>
    <p>{{ totalPrice | ShowPrice }}</p>
    <p>2.数组高阶函数 filter,map,reduce</p>
    <el-button type="primary" @click="btnhandler1">filter</el-button>
    <el-button type="primary" @click="btnhandler2">map</el-button>
    <el-button type="primary" @click="btnhandler3">reduce</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { id: 1, name: '《算法导论》', date: '2006-1', price: 120, number: 1 },
        {
          id: 2,
          name: '《UNIX编程艺术》',
          date: '2016-3',
          price: 98,
          number: 2,
        },
        {
          id: 3,
          name: '《演员的自我修养》',
          date: '2011-7',
          price: 71.5,
          number: 1,
        },
        { id: 4, name: '《代码大全》', date: '2009-2', price: 32, number: 1 },
        {
          id: 5,
          name: '《vue从入门到放弃》',
          date: '2020-9',
          price: 251,
          number: 1,
        },
      ],
      totalPrice: 478,
      nums: [23, 53, 111, 25, 74, 435, 63, 52, 315, 45],
    }
  },
  methods: {
    handleClick(row) {
      const index = this.tableData.indexOf(row)
      this.tableData.splice(index, 1)
    },
    getSummaries() {
      // let price = 0
      // this.tableData.forEach((item) => {
      //   price += item.price * item.number
      // })
      let price1 = this.tableData.reduce((pre, cur) => pre + cur.price * cur.number,0)
      const sums = ['总价', '￥' + price1.toFixed(2)]
      return sums
    },
    handleClickSub(row) {
      const index = this.tableData.indexOf(row)
      row.number--
      if (row.number <= 0) {
        this.tableData.splice(index, 1)
      } else {
        this.tableData.splice(index, 1, row)
      }
    },
    handleClickAdd(row) {
      const index = this.tableData.indexOf(row)
      row.number++
      this.tableData.splice(index, 1, row)
    },
    btnhandler1() {
      let newNumber = this.nums.filter((x) => x < 100)
      console.log(newNumber)
    },
    btnhandler2() {
      let newNumber = this.nums.map((x) => x * 2)
      console.log(newNumber)
    },
    btnhandler3() {
      let newNumber = this.nums.reduce((prev, curent) => prev + curent) 
      console.log(newNumber)
    },
  },
  computed: {},
  filters: {
    ShowPrice(price) {
      return '￥' + price.toFixed(2)
    },
  },
}
</script>

<style scoped>
</style>