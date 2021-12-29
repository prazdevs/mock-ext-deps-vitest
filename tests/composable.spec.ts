import { useJwt } from '@vueuse/integrations/useJwt'
import { expect, it, vi } from 'vitest'
import { ref } from 'vue'

vi.mock('@vueuse/integrations/useJwt', () => ({
  useJwt: (str: string) => {
    console.log('IM IN THE MOCK', str);
    return { payload: ref({ exp: (Date.now() + 3600).toString() }) };
  },
}));

it('mocked vueuse', () => {
  const { payload } = useJwt('mystring')

  console.log(payload.value)
  
  expect(true).to.be.true
})