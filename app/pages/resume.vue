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
        PERSONNEL DATABASE
      </div>

      <h1 class="gsap-split-text-header mt-4 text-6xl text-accent gsap-scan-title">
        EXP / ED
      </h1>

      <div class="mt-6 text-sm text-primary/70 hud-flicker">
        RECORD STATUS:
        <span class="text-success">VERIFIED</span>
      </div>
    </section>

    <!-- Education -->
    <section class="max-w-5xl mx-auto mb-32 scan-wipe appear-0 relative overflow-hidden">
      <div class="text-primary text-sm mb-6">EDUCATION LOG</div>

      <div class="space-y-6">
        <div class="scan-card">
          <div class="scan-meta">
            <span>DEGREE</span>
            <span class="text-primary/60">Jan 2021 – Jun 2023</span>
          </div>
          <div class="scan-title">B.S. Computer Science</div>
          <div class="scan-subtitle">University of Washington</div>
        </div>

        <div class="scan-card">
          <div class="scan-meta">
            <span>DEGREE</span>
            <span class="text-primary/60">Apr 2012 – 2020</span>
          </div>
          <div class="scan-title">A.S. Engineering</div>
          <div class="scan-subtitle">South Seattle College</div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="max-w-5xl mx-auto mb-32 scan-wipe appear-1 relative overflow-hidden">
      <div class="text-primary text-sm mb-6">OPERATIONAL HISTORY</div>

      <div class="space-y-8">
        <div class="scan-card">
          <div class="scan-meta">
            <span>ROLE</span>
            <span class="text-primary/60">Jul 2023 – Apr 2025</span>
          </div>

          <div class="scan-title">Software Development Engineer L4</div>
          <div class="scan-subtitle">Amazon Web Services</div>

          <p class="scan-body gsap-split-text-mask-appear">
            Built backend services using native AWS and CDK. Designed and
            implemented systems using DynamoDB, Lambda, ECS, CloudWatch,
            CloudFormation, and CI/CD pipelines. Participated in full software
            lifecycle including design reviews and on-call rotations.
          </p>
        </div>

        <div class="scan-card">
          <div class="scan-meta">
            <span>ROLE</span>
            <span class="text-primary/60">Jun 2022 – Sep 2022</span>
          </div>

          <div class="scan-title">Software Development Engineer Intern</div>
          <div class="scan-subtitle">Amazon Web Services</div>

          <p class="scan-body gsap-split-text-mask-appear">
            Developed internal developer tooling using AWS services. Designed
            and implemented an indexing plugin for OpenSearch including
            integration tests and performance monitoring.
          </p>
        </div>

        <div class="scan-card">
          <div class="scan-meta">
            <span>ROLE</span>
            <span class="text-primary/60">Nov 2022 – Jan 2023</span>
          </div>

          <div class="scan-title">Web Developer (Contract)</div>
          <div class="scan-subtitle">G&M Contractors</div>

          <p class="scan-body gsap-split-text-mask-appear">
            Designed and deployed a public-facing website that increased
            customer acquisition through improved search visibility.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Skill Matrix -->
<section class="max-w-5xl mx-auto mb-32 scan-wipe relative overflow-hidden">
  <div class="text-primary text-sm mb-6">
    TACTICAL PROFICIENCY MATRIX
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
    <!-- Backend -->
    <div class="skill-module">
      <div class="skill-module-title">BACKEND SYSTEMS</div>

      <div class="skill-row">
        <span>Go</span>
        <div class="threat-bar">
          <div class="threat-fill level-90" />
        </div>
        <span class="threat-label">SEVERE</span>
      </div>

      <div class="skill-row">
        <span>C++</span>
        <div class="threat-bar">
          <div class="threat-fill level-75" />
        </div>
        <span class="threat-label">HIGH</span>
      </div>

      <div class="skill-row">
        <span>C#</span>
        <div class="threat-bar">
          <div class="threat-fill level-80" />
        </div>
        <span class="threat-label">HIGH</span>
      </div>
    </div>

    <!-- Cloud -->
    <div class="skill-module">
      <div class="skill-module-title">CLOUD / INFRA</div>

      <div class="skill-row">
        <span>AWS</span>
        <div class="threat-bar">
          <div class="threat-fill level-90" />
        </div>
        <span class="threat-label">SEVERE</span>
      </div>

      <div class="skill-row">
        <span>Terraform / CDK</span>
        <div class="threat-bar">
          <div class="threat-fill level-85" />
        </div>
        <span class="threat-label">HIGH</span>
      </div>

      <div class="skill-row">
        <span>Docker</span>
        <div class="threat-bar">
          <div class="threat-fill level-80" />
        </div>
        <span class="threat-label">HIGH</span>
      </div>
    </div>

    <!-- Frontend -->
    <div class="skill-module">
      <div class="skill-module-title">FRONTEND / UI</div>

      <div class="skill-row">
        <span>Vue / Nuxt</span>
        <div class="threat-bar">
          <div class="threat-fill level-85" />
        </div>
        <span class="threat-label">HIGH</span>
      </div>

      <div class="skill-row">
        <span>GSAP</span>
        <div class="threat-bar">
          <div class="threat-fill level-90" />
        </div>
        <span class="threat-label">SEVERE</span>
      </div>
    </div>

    <!-- Game / Systems -->
    <div class="skill-module">
      <div class="skill-module-title">ENGINE / SYSTEMS</div>

      <div class="skill-row">
        <span>Game Architecture</span>
        <div class="threat-bar">
          <div class="threat-fill level-75" />
        </div>
        <span class="threat-label">HIGH</span>
      </div>

      <div class="skill-row">
        <span>Networking</span>
        <div class="threat-bar">
          <div class="threat-fill level-70" />
        </div>
        <span class="threat-label">MODERATE</span>
      </div>
    </div>
  </div>
</section>


    <footer class="text-xs text-primary/50 mt-40 text-center">
      SCAN LOG COMPLETE · RECORD ARCHIVED
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { animateCharsRightToLeftAppearing, animateListItemsUpAppearing } from '../../animations/text'
import { gsap } from 'gsap'

onMounted(() => {
  animateCharsRightToLeftAppearing('.gsap-split-text-header')
  animateListItemsUpAppearing('.appear', 2)
  gsap.fromTo(
    '.threat-fill',
    { scaleX: 0 },
    {
      scaleX: 1,
      duration: 1.2,
      stagger: 0.08,
      ease: 'power2.out'
    }
  )
})
</script>

<style>
.scan-card {
  border: 1px solid rgba(0, 255, 180, 0.25);
  padding: 20px 24px;
  position: relative;
  background: rgba(0, 0, 0, 0.25);
  transition: border-color 0.2s, background 0.2s;
}

.scan-card:hover {
  border-color: rgba(0, 255, 180, 0.6);
  background: rgba(0, 255, 180, 0.05);
}

.scan-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  color: rgba(0, 255, 180, 0.6);
  margin-bottom: 6px;
}

.scan-title {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
}

.scan-subtitle {
  font-size: 0.9rem;
  color: rgba(0, 255, 180, 0.7);
  margin-bottom: 10px;
}

.scan-body {
  font-size: 0.85rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}


.skill-module {
  border: 1px solid rgba(0, 255, 180, 0.25);
  padding: 20px 24px;
  background: rgba(0, 0, 0, 0.25);
}

.skill-module-title {
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  color: rgba(0, 255, 180, 0.7);
  margin-bottom: 16px;
}

.skill-row {
  display: grid;
  grid-template-columns: 120px 1fr 80px;
  align-items: center;
  gap: 12px;
  font-size: 0.8rem;
  margin-bottom: 12px;
}

.threat-bar {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 180, 0.3);
  position: relative;
  overflow: hidden;
}

.threat-fill {
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 255, 180, 0.3),
    rgba(0, 255, 180, 0.9)
  );
  box-shadow: 0 0 6px rgba(0, 255, 180, 0.6);
  transform-origin: left;
}

/* Levels */
.level-90 { width: 90%; }
.level-85 { width: 85%; }
.level-80 { width: 80%; }
.level-75 { width: 75%; }
.level-70 { width: 70%; }

.threat-label {
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  color: rgba(0, 255, 180, 0.8);
}

</style>
