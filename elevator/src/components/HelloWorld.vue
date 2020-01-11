<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		
		<label><textarea class="textarea" v-model="html"/></label>
		<div class="show-box" v-html="html"></div>
	
	</div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: '修改下左边的代码试试看',
        html: `<style>
    @keyframes rotate {
        0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
    .rotate{
        animation: rotate 3s infinite linear;
    }
    .root{
        color: red;
        text-align: center;
    }
    .root > span{
        display: inline-block;
    }
</style>
<div class="root">
    <span class="rotate">这是一个旋转的小家伙</span>
    <div>换个行</div>
</div>
        `
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h1, h2{
		font-weight: normal;
	}
	ul{
		list-style-type: none;
		padding: 0;
	}
	li{
		display: inline-block;
		margin: 0 10px;
	}
	a{
		color: #42B983;
	}
	.textarea{position: absolute;left: 0;top: 0;bottom: 0; width: 400px; background: #222222; color: #0B96E5;}
	.show-box{border: 1px dashed red;min-height: 100px;}
</style>
