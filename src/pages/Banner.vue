<template>
    <div class="banner">
        <transition-group
        :enter-active-class='enter'
        :leave-active-class='leave'
        @after-enter='after'
        
        >
            <div class="img" v-show="index == bannerIndex" v-for="(img,index) in banners" :key="index">
                 <img :src='img'>
            </div>
            
        </transition-group>
        <div class="btns">
           <Button type="success" @click="prev">上一张</Button>
           <Button type="success" @click="next">下一张</Button>
        </div>
        <div class="smbtns">
             <div class="btn"   @click="smbtn(index)" :class="{active:index == bannerIndex}" v-for="(item,index) in banners" :key="index"></div>
        </div>
    </div>
</template>

<script>
import Button from '../components/Button'

    export default {
        components:{
          Button
        },
        data(){
            return {
                banners:[
                       require('../assets/imgs/1.jpg'),
                       require('../assets/imgs/2.jpg'),
                       require('../assets/imgs/3.jpg'),
                       require('../assets/imgs/4.jpg'),
                       require('../assets/imgs/5.jpg')
                ],
                bannerIndex:0, 
                enter:'animated slideInLeft',
                leave:'animated slideOutRight',
                playState:false,
            }  
        },
         mounted() {
                setInterval(()=>{
                   this.bannerIndex++;
                   // console.log(this.bannerIndex);
                   this.enter='animated slideInRight';
                   this.leave='animated slideOutLeft' 
                   if(this.bannerIndex >= this.banners.length){
                    this.bannerIndex = 0;
                  }
                },2000)
            },
        methods: {
            after(){
                this.playState = false;
            },
             smbtn(index){
                if(this.playState) return;
                this.playState = true;
                // this.bannerIndex = index;
                if(this.bannerIndex < index){
                 this.enter='animated slideInRight';
                 this.leave='animated slideOutLeft';
                }else if(this.bannerIndex > index){
                 this.enter='animated slideInLeft';
                 this.leave='animated slideOutRight';
                }   
                 this.bannerIndex = index;  
            },
           
            prev() {
                if(this.playState) return;
                this.playState = true;
                this.bannerIndex --;
                this.enter='animated slideInLeft';
                 this.leave='animated slideOutRight';
                if(this.bannerIndex < 0){
                    this.bannerIndex = this.banners.length - 1;
                }
            },
             next() {
                if(this.playState) return;
                this.playState = true;
                this.bannerIndex ++;
                this.enter='animated slideInRight';
                 this.leave='animated slideOutLeft' 
                  if(this.bannerIndex >= this.banners.length){
                    this.bannerIndex = 0;
                }
            },
        },
    }
</script>

<style lang='less' scoped>
    .banner{
        position: relative;
        background-color: #ccc;
        height: 460px;
        overflow: hidden;
       img{
           position:absolute;
           top: 0;
           width: 100%;
       }
       .btns{
           position: absolute;
           bottom: 2px;
           left: 2px;
       }
       .smbtns{
           position: absolute;
           bottom: 10px;
           left: 50%;
           display: flex;
           .btn{
           height: 10px;
           width: 10px;
           border-radius: 50%;
           background: white;
           margin: 0 5px;
           cursor: pointer;
           &.active{
               background-color:blue; 
           }
           }
       }
    }
</style>