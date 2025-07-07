<template>
  <UDropdownMenu
    v-slot="{ open }"
    :modal="false"
    :items="[{
      label: 'Main Site',
      to: 'https://soundmesh.dev'
    }, {
      label: 'Register',
      to: 'https://soundmesh.dev/auth/register'
    }, {
      label: 'Docs',
      to: 'https://docs.soundmesh.dev',
      color: 'primary',
      checked: true,
      type: 'checkbox'
    }, {
      label: 'Dashboard',
      to: 'https://soundmesh.dev/home'
    }, {
      label: 'Discord',
      to: 'https://chat.soundmesh.dev'
    }]"
    :ui="{ content: 'w-(--reka-dropdown-menu-trigger-width) min-w-0' }"
    size="xs"
  >
    <UButton
      label="Docs"
      variant="subtle"
      trailing-icon="i-lucide-chevron-down"
      size="xs"
      class="-mb-[6px] font-semibold rounded-full truncate"
      :class="[open && 'bg-primary/15']"
      :ui="{
        trailingIcon: ['transition-transform duration-200', open ? 'rotate-180' : undefined].filter(Boolean).join(' ')
      }"
    />
  </UDropdownMenu>
</template>
