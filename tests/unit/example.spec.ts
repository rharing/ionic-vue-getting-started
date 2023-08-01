import {mount} from '@vue/test-utils'
import MemoriesPage from '@/pages/MemoriesPage.vue'
import MemoriesDetailPage from '@/pages/MemoriesPageDetail.vue'
import { describe, expect, test } from 'vitest'

//this test wont run anymore as ionic-vue expects a navManager
_describe('MemoriesPage.vue', () => {
  test('renders MemoriesPage vue', () => {
    const wrapper = mount(MemoriesPage)
    expect(wrapper.text()).toContain("A trip into the mountains");
  })
})
describe('MemoriesDetailPage.vue', () => {
  test('renders MemoriesDetailPage vue', () => {
    const wrapper = mount(MemoriesDetailPage, {propsData:{id:1}})
    expect(wrapper.text()).toContain("pagedetails for: 1");
  })
})
