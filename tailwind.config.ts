import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        birru: ['Birru Sans'],
        nunito: ['Nunito Sans']
      }
    }
  }
}