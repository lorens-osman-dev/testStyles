<script setup lang="ts">

</script>

<template>
  <div class="sect">
    <div class="button">
      <h1>Primary</h1>
      <div class="under">
        <div class="top-left"></div>
        <div class="top-right"></div>
        <div class="bottom-left"></div> 
        <div class="bottom-right"></div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.sect{
  --fore-color:rgb(244, 240, 255);
  --fore-color-rgb:244 , 240 , 255;
  --bg-color:#02020e;
  --width:13px;
  background-color:var(--bg-color);
  display: flex;
  justify-content: center;
  align-items: center;

  .button{
    position: relative;
    padding: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
      font-family: "Roboto", serif;
      color: var(--fore-color);
      z-index: 10;
      padding: 10px 30px;
      color: var(--fore-color);
      background: var(--bg-color);
      box-shadow: inset 0px 0px 30px 10px rgba(233,234,239,0.1),inset 0px 0px 4px 2px rgba(233,234,239,0.1);
      background-image: url("data:image/png;base64,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");
    }
    .under{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      height: 100%;
      width: 100%;
      z-index: 5;
      background-color: rgba(var(--fore-color-rgb), 0.4);

      .top-left{
        background-color: var(--fore-color);
        position: absolute;
        top: 0;
        left: 0;
        width: var(--width);
        height:var(--width);
      }
      .top-right{
        background-color: var(--fore-color);
        position: absolute;
        top: 0;
        right: 0;
        width: var(--width);
        height:var(--width);
      }
      
      .bottom-left{
        background-color: var(--fore-color);
        position: absolute;
        bottom: 0;
        left: 0;
        width: var(--width);
        height:var(--width);
      }
      .bottom-right{
        background-color: var(--fore-color);
        position: absolute;
        bottom: 0;
        right: 0;
        width: var(--width);
        height:var(--width);
      }
    }
  }
}
</style>
