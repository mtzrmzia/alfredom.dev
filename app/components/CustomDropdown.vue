<script setup lang="ts">
import type { DropdownMenuItem } from '#ui/types';

defineOptions({
  name: 'CustomDropdown',
});

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  items: {
    type: Array as PropType<DropdownMenuItem[]>,
    default: () => [],
  },
  keyLabel: {
    type: String,
    required: true,
  },
});

const { keyLabel } = toRefs(props);
const open = ref(false);
const hoveredLabel = ref<string>(keyLabel.value);

const customUI = {
  content: 'p-1.5 dark:bg-(--ui-bg-elevated) bg-(--ui-bg) rounded-xl',
};

function onClick(event: Event, item: DropdownMenuItem) {
  item.onSelect?.(event);
  open.value = false;
}

function isSelected(value = '') {
  return keyLabel.value === value;
}
</script>

<template>
  <ClientOnly>
    <UPopover v-model:open="open" arrow :ui="customUI">
      <UButton
        v-bind="$attrs"
        class="rounded-full"
        variant="ghost"
        color="neutral"
        size="md"
        role="button"
        :trailing-icon="icon"
      />
      <template #content>
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="[
            'relative select-none rounded-md py-2 px-5 text-sm hover:bg-(--ui-bg-elevated) dark:hover:bg-(--ui-bg)',
            {
              'bg-(--ui-bg-elevated) dark:bg-(--ui-bg)':
                isSelected(item.class) && hoveredLabel === keyLabel,
            },
          ]"
          @click.stop="onClick($event, item)"
          @mouseover="hoveredLabel = item.class || ''"
          @mouseleave="hoveredLabel = keyLabel"
        >
          <span
            :class="[
              'block cursor-default truncate text-sm',
              isSelected(item.class) ? 'font-semibold' : 'font-normal',
            ]"
          >
            {{ item.label }}
          </span>
        </div>
      </template>
    </UPopover>
  </ClientOnly>
</template>
