const appearance = {
  backgroundColor: 'color',
  bottomBar: 'color',
  leftBar: 'color',
  rightBar: 'color',
  statusBar: 'color',
} as const;

export const theming = {
  appearance,
  props: {
    initialAppearance: appearance,
  },
} as const;
