export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    }
  },
  uiPro: {
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'SoundMesh Documentation'
  },
  header: {
    title: 'SoundMesh Documentation',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-discord',
      'to': 'https://chat.soundmesh.dev',
      'target': '_blank',
      'aria-label': 'Join our Discord'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/soundmeshradio',
      'target': '_blank',
      'aria-label': 'SoundMesh on X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://chat.soundmesh.dev/',
      'target': '_blank',
      'aria-label': 'SoundMesh on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://chat.soundmesh.dev',
      links: [{
        icon: 'i-lucide-radio',
        label: 'View My Stations',
        to: 'https://soundmesh.dev/stations',
        target: '_blank'
      }, {
        icon: 'i-lucide-server',
        label: 'View My Servers',
        to: 'https://soundmesh.dev/servers',
        target: '_blank'
      }, {
        icon: 'i-simple-icons-nuxtdotjs',
        label: 'Register an Account',
        to: 'https://soundmesh.dev/auth/register',
        target: '_blank'
      }]
    }
  }
})
