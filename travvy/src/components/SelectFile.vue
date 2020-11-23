<template>
  <label class="select-file">
    <div class="selectFiles">
      <span v-if="value">The File you have Selected is: {{value.name}}</span>
      <span v-else>Select File</span>
    </div>
    <div>
    <input type="file" @change="previewImage" accept="image/*">
    </div>
    <div>
      <h2>Progress: {{uploadValue.toFixed()+"%"}}
        <progress id="progress" :value="uploadValue" max="100"></progress></h2>
    </div>
    <div v-if="imageData!=null">
      <img class="preview" :src="picture">
      <br>
      <button class="selectFiles" @click="onUpload"><span>Upload File</span></button>
    </div>

  </label>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Upload',

  data() {
    return{
      imageData: null,
      picture: null,
      uploadValue: 0
    }
  },

  props: {
    value: File
  },

  methods: {
    handleFileChange(e) {
      this.$emit('input', e.target.files[0])
    },


    previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },

    onUpload() {
      this.picture=null;
      const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue=(snapshot.bytesTransferred/snapshot.totalBytes)*100; 
      }, error=>{console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
        });
      });

    }
  }
}
</script>

<style scoped>
img.preview {
  width: 200px;
}

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
.selectFilesold{
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
.selectFiles{
  display: inline-block;
  border-radius: 4px;
  background-color: #FF5F00;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 20px;
  padding: 12px 22px;
  width: 175px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}
.selectFiles:hover {
  background-color: #fb8a00;
}

.selectFiles span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}
.selectFiles span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.selectFiles:hover span {
  padding-right: 25px;
}

.selectFiles:hover span:after {
  opacity: 1;
  right: 0;
}

</style>