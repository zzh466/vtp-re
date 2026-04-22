<template>
  <el-tag :type="content.type" size="small">{{content.msg}}</el-tag>
</template>

<script>
  import {Status} from '@utils/utils.js'

  export default {
    props: ['data'],
    computed: {
      content: function(){
        const status = this.data.OrderStatus;
        const item = Status.find(({key})=> key === status);
        return item;
      }
    }
  }
</script>

