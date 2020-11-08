<template>
  <label class="select-file">
    <div class="selectFiles">
      <span v-if="value">The File you have Selected is: {{value.name}}</span>
      <span v-else>Select File</span>
    </div>
    <input type="file" @change="handleFileChange"/>
  </label>
</template>

<script>
export default {
  props: {
    value: File
  },

  methods: {
    handleFileChange(e) {
      this.$emit('input', e.target.files[0])
    }
  }
}
</script>

<style scoped>
.select-file > .select-button {
  padding: 1rem;
  color: white;
  background-color: #2EA169;
  border-radius: .3rem;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
}
.select-file > input[type="file"] {
  display: none;
  font-size: 12px;

}
.selectFiles{
  background-color: #f40338;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 12px;
}
.selectFiles:hover {
  background-color: #ed7485;
}

</style>