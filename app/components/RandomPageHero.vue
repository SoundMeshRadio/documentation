<template>
  <div class="relative">
    <div class="flex items-center justify-between px-4 py-2 bg-gray-800 border border-gray-700 rounded-t-lg">
      <div class="flex items-center gap-2">
        <UIcon :name="selectedHero.icon" class="w-4 h-4 text-gray-400" />
        <span class="text-sm text-gray-300">{{ selectedHero.filename }}</span>
      </div>
    </div>
    <div class="bg-gray-900 border border-gray-700 border-t-0 rounded-b-lg p-4">
      <pre class="text-sm"><code class="text-green-400">{{ selectedHero.codeBlock }}</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
interface HeroConfig {
  orientation: 'horizontal' | 'vertical'
  code: string
  filename: string
  icon: string
  codeBlock: string
}

const heroConfigs: HeroConfig[] = [
  {
    orientation: 'horizontal',
    code: 'ensure soundmesh',
    filename: 'Using FiveM? Simply edit your server.cfg',
    icon: 'simple-icons:fivem',
    codeBlock: 'ensure soundmesh'
  },
  {
    orientation: 'horizontal',
    code: 'install bot',
    filename: 'Install Discord Bot',
    icon: 'simple-icons:discord',
    codeBlock: 'https://bot.soundmesh.dev'
  },
  {
    orientation: 'horizontal',
    code: '/soundmesh-key',
    filename: 'Simply add your API key',
    icon: 'simple-icons:discord',
    codeBlock: '/soundmesh-key'
  },
  {
    orientation: 'horizontal',
    code: '/soundmesh',
    filename: 'Select a station to listen to',
    icon: 'simple-icons:discord',
    codeBlock: '/soundmesh'
  },
  {
    orientation: 'horizontal',
    code: 'config',
    filename: 'Confing Your API Key',
    icon: 'simple-icons:fivem',
    codeBlock: 'Config.SoundMeshAPI = "YOUR_SOUNDMESH_API_KEY_HERE"'
  },
  {
    orientation: 'horizontal',
    code: 'configure radio max range',
    filename: 'Configure the max range for radios in game',
    icon: 'simple-icons:fivem',
    codeBlock: 'Config.MaxRange = 50.0'
  },
  {
    orientation: 'horizontal',
    code: 'Config MiniHUD',
    filename: 'Configure use of the radio miniHUD',
    icon: 'simple-icons:fivem',
    codeBlock: 'Config.ShowMiniHUD = true'
  },
  {
    orientation: 'horizontal',
    code: 'streamer mode',
    filename: 'Turn of Streamer Mode',
    icon: 'simple-icons:fivem',
    codeBlock: '/smode'
  }
]

// Initialize with first config, then randomize on mount
const selectedHero = ref<HeroConfig>(heroConfigs[0]!)

onMounted(() => {
  const randomIndex = Math.floor(Math.random() * heroConfigs.length)
  selectedHero.value = heroConfigs[randomIndex]!
})
</script>
