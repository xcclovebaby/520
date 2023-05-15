<template>
    <div class="open-mail">
      <div v-if="open" class="open-content" @click="openAction">
        <h3 class="title">致 孔冬晗 一封信</h3>
        <p class="desc">轻启</p>
        <canvas ref="mail" class="canvas-mail" />
      </div>
      <div v-else class="carousel">
        <div id="text" style="font-size: 15px; margin-bottom: 30px;">
            <div id="code">
              <div color="#FF0000">
                <span class="say">渡的过山河星辰，淌不过你的一笑一颦</span><br>
                <span class="say"> </span><br>
                <span class="say"> 经丘寻壑不及你，尾生抱柱也无悔意！</span><br>
                <span class="say"></span><br>
                <span class="say">无需回首从前，</span><br>
                <span class="say"></span><br>
                <span class="say">接下来我们要一起携手面对生活。</span><br>
                <span class="say"></span><br>
                <span class="say">我会守护你生命里的精彩，并陪伴你一路精彩下去！</span><br>
                <span class="say"></span><br>
                <span class="say">愿意为你去做每一件能让你开心快乐的事！</span><br>
                <span class="say"></span><br>
                <span class="say">我愿意爱你直到老去！</span>
              </div>
            </div>
          </div>
        <el-carousel height="30em" type="card" :interval="4000">
          <el-carousel-item v-for="item in images" :key="item">
            <el-image
              class="medium"
              style="width: 25em; height: 30em"
              :src="item"
              :fit="contain"></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
</template>

<script>
import Card from '@/components/Card'
import { mailCanvas } from '@/utils/canvas'

export default {
  name: 'Home',
  components: {
    Card
  },
  data() {
    return {
      fit: "contain",
      images: [
            "https://gitee.com/CHCCCCCC/520/blob/main/src/assets/images/20221101231256.jpg",
            "https://gitee.com/CHCCCCCC/520/blob/main/src/assets/images/20221101231306.jpg",
            "https://gitee.com/CHCCCCCC/520/blob/main/src/assets/images/20221101231312.jpg",
            "https://gitee.com/CHCCCCCC/520/blob/main/src/assets/images/20221101231317.jpg",
            "https://gitee.com/CHCCCCCC/520/blob/main/src/assets/images/20221101231323.jpg",
            "https://gitee.com/CHCCCCCC/520/blob/main/src/assets/images/20221101231329.jpg",
            "https://gitee.com/CHCCCCCC/520/blob/main/src/assets/images/20221101231335.jpg",
            "https://gitee.com/CHCCCCCC/520/blob/main/src/assets/images/20221101231342.jpg",
          ],
      result: null,
      open: true
    }
  },
  mounted() {
    if (this.$refs.mail) mailCanvas(this.$refs.mail)
  },
  methods: {
    /**
     * 打开信封
     */
    openAction() {
      this.open = false
    }
  }
}
</script>
<style lang="scss">
.open-mail {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  .carousel {
    width: 100%;
    height: 100%;
    align-items: center;
    text-align: center;
  }
  .open-content {
    position: relative;
    text-align: center;
    width: 40rem;
    height: 26rem;
    cursor: pointer;

    .title {
      font-size: 4rem;
      font-weight: bold;
      margin-top: 8rem;
    }

    .desc {
      font-size: 3rem;
    }

    .canvas-mail {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
