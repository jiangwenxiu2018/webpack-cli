<template>
       <button class="btn" :class="['btn-'+type]">
           <slot></slot>
       </button>  
</template>

<script>
    export default {
       
        props:{
            type:{
                 type:String,
                 default:'defalut',
            }
        }
    }
</script>

<style scoped lang='less'>
    @Primary:#2d8cf0;
    @Info:#2d8cf0;
    @Success:#19be6b;
    @Warning:#ff9900;
    @Error:#ed3f14;
    @Default:#dddee1;
     .render(@color,@radius){
        background: @color;
        border-radius: @radius;
         &:hover{
           background:lawngreen;
         }
     }
     .btn{
        border-style: solid;
        padding: 3px 8px;
        cursor: pointer;
       
         &.btn-success{
            .render(@Success, 3px)
         }
         &.btn-info{
            .render(@Info, 3px)
         }
         &.btn-warning{
            .render(@Warning, 3px)
         }
     }
</style>