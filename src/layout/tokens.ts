const color = {
  text: {
    intense: '#1C1C1C',
    quiet: '#595959',
  },
} as const;

const font = {
  base: 'Zilla Slab',
} as const;

const space = [0, 4, 8, 12, 20, 32, 52] as const;

export { color, font, space };
