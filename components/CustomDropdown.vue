<template>
  <ClientOnly>
    <UPopover v-model:open="open" :ui="configUI" :popper="{ arrow: true }">
      <UButton
        class="rounded-full"
        variant="ghost"
        color="gray"
        size="md"
        :trailing-icon="icon"
        :ui="buttonUI"
      />
      <template #panel>
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="[
            'relative select-none rounded-md py-2.5 px-5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900',
            {
              'bg-gray-100 dark:bg-gray-900':
                isSelected(item.labelClass) && hoveredLabel === keyLabel,
            },
          ]"
          @click.stop="onClick($event, item)"
          @mouseover="hoveredLabel = item.labelClass || ''"
          @mouseleave="hoveredLabel = keyLabel"
        >
          <span
            :class="[
              'block cursor-default truncate text-sm',
              isSelected(item.labelClass) ? 'font-semibold' : 'font-normal',
            ]"
          >
            {{ item.label }}
          </span>
        </div>
      </template>
    </UPopover>
  </ClientOnly>
</template>

<script setup lang="ts">
import type { DropdownItem } from '#ui/types';

defineOptions({
  name: 'CustomDropdown',
});

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  items: {
    type: Array as PropType<DropdownItem[]>,
    default: () => [],
  },
  keyLabel: {
    type: String,
    required: true,
  },
});

const buttonUI = {
  base: 'group',
  color: {
    gray: {
      ghost:
        'dark:hover:text-white hover:bg-transparent dark:hover:bg-transparent hover:opacity-100 opacity-70 dark:opacity-80',
    },
  },
};

const { keyLabel } = toRefs(props);
const open = ref(false);
const hoveredLabel = ref<string>(keyLabel.value);

const configUI = {
  width: 'w-auto',
  rounded: 'rounded-xl',
  base: 'p-1.5',
  background: 'bg-white dark:bg-gray-800',
  transition: {
    enterActiveClass: 'transition duration-100 ease-out',
    enterFromClass: 'transform scale-95 opacity-0',
    enterToClass: 'transform scale-100 opacity-100',
    leaveActiveClass: 'transition duration-75 ease-in',
    leaveFromClass: 'transform scale-100 opacity-100',
    leaveToClass: 'transform scale-95 opacity-0',
  },
  arrow: {
    base: 'invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2',
    ring: 'before:ring-1 before:ring-gray-200 dark:before:ring-gray-700',
    rounded: 'before:rounded-sm',
    background: 'before:bg-white dark:before:bg-gray-700',
    shadow: 'before:shadow',
    placement:
      "group-data-[popper-placement*='right']:-left-1 group-data-[popper-placement*='left']:-right-1 group-data-[popper-placement*='top']:-bottom-1 group-data-[popper-placement*='bottom']:-top-1",
  },
};

function onClick(event: MouseEvent, item: DropdownItem) {
  if (item.click) {
    item.click(event);
  }
  open.value = false;
}

function isSelected(value = '') {
  return keyLabel.value === value;
}
</script>
