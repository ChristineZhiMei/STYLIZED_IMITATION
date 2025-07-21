<script setup lang="ts">
import gsap from 'gsap'
import { onMounted } from 'vue'
// square动画函数
const startAnimation = () => {
  const tl = gsap.timeline()
  tl.to('.perspectiveBox > .square:nth-of-type(1)', {
    duration: 1,
    opacity: 1,
    ease: 'power2.in',
  })
  for (let i = 1; i <= 10; i++) {
    tl.to(`.perspectiveBox > .square:nth-of-type(n + ${i})`, {
      duration: 0.38,
      opacity: 1,
      transform: `rotateY(-45deg) translateZ(${(5 - i + 1) * 2.66}em)`,
      ease: 'power2.out',
    }, '>-0.3')
  }
  // 上浮动画
  // for(let i = 1; i <= 10; i++){
  //   tl.to(`.perspectiveBox > .square:nth-of-type(${i})`,{
  //     duration:0.1,
  //     y: '-2em',
  //     ease: 'power1.out',
  //   },'>-0.25').to(`.perspectiveBox > .square:nth-of-type(${i})`,{
  //     duration: 0.15,
  //     y: '0.5em',
  //     ease: 'power1.in',
  //   }).to(`.perspectiveBox > .square:nth-of-type(${i})`,{
  //     duration: 0.05,
  //     y: 0,
  //     ease: 'power1.in',
  //   })
  // }
  tl.to('.square-box > p', {
    duration: 0.5,
    opacity: 1,
    ease: 'power2.out',
  })
}
onMounted(() => {
  startAnimation()
})
</script>

<template>
<div id="square-vue">
  <div class="square-box">
    <p>RECTANGLE&emsp;DESIGN</p>
    <div class="square-background"></div>
    <div class="perspectiveBox">
      <div class="square"
           v-for="i in 10"
           :key="`square-${i}`"
           :style="{
             transform: `rotateY(-45deg) translateZ(${5 * 2.66}em)`,
             zIndex: -i + 20,
             opacity: 0,
             backgroundColor: `rgba(${190 + i * 6}, 138, 138, ${0.3 + i * 0.01})`,
           }"
      ></div>
      </div>
    </div>

</div>
</template>

<style lang="scss" scoped>
#square-vue{
  width: 100vw;
  height: 100vh;
  background-color: #120709;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  .square-box{
    position: relative;
    height: 40vh;
    aspect-ratio: 1;
    //background-color: #ffffff;
    p{
      position: absolute;
      z-index: 100;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.8, 1.1);
      letter-spacing: 1.7rem;
      color: white;
      white-space: nowrap;
      user-select: none;
      opacity:0;
    }

    .square-background{
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 0;
      border-radius: 100%;
      background: radial-gradient(at center, #ffffff 10%, #ab0000, transparent 60%);
      transform:translateY(20%) scale(2);
      filter: blur(80px)
    }

    .perspectiveBox{
      width: 100%;
      height: 100%;
      position: absolute;
      transform: perspective(900px);
      font-size: 16px;
      perspective: 900px;

      .square {
        position: absolute;
        width: 25em;
        aspect-ratio: 1;
      }
    }
  }
}
</style>