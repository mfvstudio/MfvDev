<template>
  <div>
    <AppNavBar/>
    <AppCanvas/>
    <AppScanNavTarget class="absolute top-24 left-24" label="Project Archive" to="/projects3"/>
    <div class="flex min-h-screen flex-col">
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>
