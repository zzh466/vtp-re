export default {
  name: 'ConfigAction',
  props: ['index'],
  emits: ['action'],
  template: `<div>
    <el-button type="primary" size="small" @click="action('edit')">编辑</el-button>
    <el-button type="primary" size="small" @click="action('del')">删除</el-button>
  </div>`,
  methods: {
    action(type) {
      this.$emit('action', { type, index: this.index })
    }
  }
}
