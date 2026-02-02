<template>
  <div>
    <div class="gsap-split-text-contact mt-40 text-center font-heading leading-normal font-medium text-7xl font-bold text-yellow-300 font-orbitron">
      Contact
    </div>
    <div class="flex justify-center mt-20">
      <div class="list bg-base-100 rounded-box shadow-md text-3xl">
        <li class="list-row gsap-list-item-0">
          <div>
            <Icon
              name="mynaui:brand-github"
              size="32"
            />
          </div>
          <div><a href="https://github.com/mfvstudio">gitbub/mfvstudio </a></div>
        </li>
        <li class="list-row gsap-list-item-1">
          <div>
            <Icon
              name="mynaui:brand-youtube"
              size="32"
            />
          </div>
          <div><a href="https://github.com/mfvstudio">TBD </a></div>
        </li>
        <li class="list-row gsap-list-item-2">
          <div>
            <Icon
              name="mynaui:envelope"
              size="32"
            />
          </div>
          <div>mfvdev@icloud.com</div>
        </li>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { animateCharsRightToLeftAppearing, animateListItemsUpAppearing } from '../../animations/text';

onMounted(() => {
  animateCharsRightToLeftAppearing('.gsap-split-text-contact');
  animateListItemsUpAppearing('.gsap-list-item', 3);
});
</script>

<style>

</style>
