<template>
  <div class="relative min-h-screen px-16 py-24 font-orbitron">
    <AppScanNavTarget class="fixed right-24 top-24 font-orbitron text-3xl"
    label="Back"
    route="/"
    key="key"
    id="scanNavBack"
    katakana="バック"
    />
    <!-- HUD Corners -->
    <div class="pointer-events-none">
      <div class="absolute top-8 left-8 w-8 h-8 border-t border-l border-primary/50" />
      <div class="absolute top-8 right-8 w-8 h-8 border-t border-r border-primary/50" />
      <div class="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-primary/50" />
      <div class="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-primary/50" />
    </div>

    <!-- Header -->
    <section class="max-w-4xl mx-auto mb-24 scan-wipe relative overflow-hidden text-center">
      <div class="text-xs tracking-widest text-primary opacity-70 hud-flicker">
        COMMUNICATION INTERFACE
      </div>

      <h1
        class="gsap-split-text-contact mt-4 text-6xl text-accent scan-title gsap-scan-title"
      >
        CONTACT NODE
      </h1>

      <div class="mt-6 text-sm text-primary/70 hud-flicker">
        SIGNAL STATUS:
        <span class="text-success">STABLE</span>
      </div>
    </section>

    <!-- Contact Terminal -->
    <section class="max-w-3xl mx-auto scan-wipe relative overflow-hidden">
      <div class="absolute -top-3 left-6 bg-base-100 px-3 text-xs text-primary">
        DATA CHANNELS
      </div>

      <ul class="border border-primary/40 scan-terminal divide-y divide-primary/20">
        <li
          class="gsap-list-item-0 contact-row"
        >
          <Icon name="mynaui:brand-github" size="28" />
          <div class="contact-label">GITHUB</div>
          <a
            href="https://github.com/mfvstudio"
            target="_blank"
            class="contact-value"
          >
            github.com/mfvstudio
          </a>
        </li>

        <li
          class="gsap-list-item-1 contact-row"
        >
          <Icon name="mynaui:brand-youtube" size="28" />
          <div class="contact-label">VIDEO FEED</div>
          <div class="contact-value opacity-60">PENDING LINK</div>
        </li>

        <li
          class="gsap-list-item-2 contact-row"
        >
          <Icon name="mynaui:envelope" size="28" />
          <div class="contact-label">EMAIL</div>
          <div class="contact-value">mfvdev@icloud.com</div>
        </li>
      </ul>
    </section>

    <footer class="text-xs text-primary/50 mt-40 text-center">
      COMMUNICATION LOG UPDATED · TERMINAL STANDBY
    </footer>
  </div>
</template>

<script lang="ts" setup>
import {
  animateCharsRightToLeftAppearing,
  animateListItemsUpAppearing
} from '../../animations/text'

onMounted(() => {
  animateCharsRightToLeftAppearing('.gsap-split-text-contact')
  animateListItemsUpAppearing('.gsap-list-item', 3)
})
</script>

<style>
.contact-row {
  display: grid;
  grid-template-columns: 40px 140px 1fr;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  font-size: 0.9rem;
  position: relative;
  transition: background 0.2s, border-color 0.2s;
}

.contact-row:hover {
  background: rgba(0, 255, 180, 0.05);
}

.contact-label {
  color: rgba(0, 255, 180, 0.6);
  letter-spacing: 0.08em;
  font-size: 0.75rem;
}

.contact-value {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-all;
}

.contact-value:hover {
  color: rgb(0, 255, 180);
  text-shadow: 0 0 6px rgba(0, 255, 180, 0.4);
}

.scan-terminal {
  position: relative;
  background: rgba(0, 0, 0, 0.25);
}

.scan-terminal::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    rgba(255,255,255,0.03),
    rgba(255,255,255,0.03) 1px,
    transparent 1px,
    transparent 4px
  );
  pointer-events: none;
  opacity: 0.15;
}

</style>

