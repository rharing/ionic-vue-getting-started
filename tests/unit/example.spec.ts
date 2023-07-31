import { mount } from '@vue/test-utils'
import MemoriesPage from '@/pages/MemoriesPage.vue'
import { describe, expect, test } from 'vitest'

describe('MemoriesPage.vue', () => {
  test('renders MemoriesPage vue', () => {
    const wrapper = mount(MemoriesPage)
    expect(wrapper.text()).toMatchSnapshot();
  })
})
