<script lang="ts" setup>

</script>

<template>
  <div class="navbar sticky top-0 bg-base-100 shadow-sm font-orbitron ">
    <div class="navbar-start">
      <NuxtLink
        to="/"
        class="btn btn-ghost text-xl gsap-split-text navbar-element-0"
      >MFVDEV</NuxtLink>
    </div>
    <div class="navbar-end hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink
            to="/projects3"
            class="btn btn-ghost text-xl gsap-split-text navbar-element-1"
          >Projects <Icon
            name="mynaui:book-open"
            size="32"
          /></NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/resume"
            class="btn btn-ghost text-xl gsap-split-text navbar-element-2"
          >Resume <Icon
            name="mynaui:academic-hat"
            size="32"
          /></NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact"
            class="btn btn-ghost text-xl gsap-split-text navbar-element-3"
          >Contact <Icon
            name="mynaui:message-minus"
            size="32"
          /></NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
